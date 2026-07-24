import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./styles.scss";

const clusterCenters = [
  new THREE.Vector3(-3.4, 1.1, 0),
  new THREE.Vector3(3.4, 1.1, 0),
  new THREE.Vector3(0, -2.8, 0),
];

const Avatar = ({ theme }) => {
  const mountRef = useRef(null);
  const materialsRef = useRef([]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0, 15);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);
    const nodeGeometry = new THREE.SphereGeometry(0.16, 20, 20);
    const nodes = [];
    const linePositions = [];

    clusterCenters.forEach((center, clusterIndex) => {
      const cluster = [];
      for (let index = 0; index < 7; index += 1) {
        const angle = (index / 7) * Math.PI * 2;
        const radius = 0.8 + (index % 2) * 0.28;
        const position = center.clone().add(
          new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, (index % 3 - 1) * 0.35)
        );
        const material = new THREE.MeshBasicMaterial({ color: clusterIndex === 1 ? 0xffd43b : 0x3776ab });
        materialsRef.current.push(material);
        const node = new THREE.Mesh(nodeGeometry, material);
        node.position.copy(position);
        node.userData.basePosition = position.clone();
        group.add(node);
        nodes.push(node);
        cluster.push(position);
      }
      cluster.forEach((point, index) => {
        const next = cluster[(index + 1) % cluster.length];
        linePositions.push(point.x, point.y, point.z, next.x, next.y, next.z);
      });
    });

    // Connections between the three "brains" make the concept readable at a glance.
    [[0, 7], [7, 14], [14, 0]].forEach(([from, to]) => {
      const a = nodes[from].userData.basePosition;
      const b = nodes[to].userData.basePosition;
      linePositions.push(a.x, a.y, a.z, b.x, b.y, b.z);
    });

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x3776ab, transparent: true, opacity: 0.58 });
    materialsRef.current.push(lineMaterial);
    group.add(new THREE.LineSegments(lineGeometry, lineMaterial));

    const portraitMaterial = new THREE.MeshBasicMaterial({ transparent: true });
    materialsRef.current.push(portraitMaterial);
    new THREE.TextureLoader().load("/images/la-raven-gordon-headshot.png", (texture) => {
      portraitMaterial.map = texture;
      portraitMaterial.needsUpdate = true;
    });
    const portrait = new THREE.Mesh(new THREE.CircleGeometry(1.2, 64), portraitMaterial);
    portrait.position.set(0, 0.5, 0.55);
    group.add(portrait);

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    resize();
    window.addEventListener("resize", resize);

    let frame;
    const startedAt = performance.now();
    const animate = (now) => {
      const elapsed = (now - startedAt) / 1000;
      group.rotation.y = Math.sin(elapsed * 0.32) * 0.12;
      nodes.forEach((node, index) => {
        node.position.y = node.userData.basePosition.y + Math.sin(elapsed * 1.2 + index) * 0.08;
      });
      frame = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      nodeGeometry.dispose();
      lineGeometry.dispose();
      portrait.geometry.dispose();
      materialsRef.current.forEach((material) => material.dispose());
      materialsRef.current = [];
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    const isLight = theme === "light";
    materialsRef.current.forEach((material) => {
      if (material.isLineBasicMaterial) material.color.set(isLight ? 0x1f5a8a : 0x74b9ff);
    });
  }, [theme]);

  return (
    <div
      className="avatar-container"
      ref={mountRef}
      role="img"
      aria-label="Three connected AI brain node clusters surrounding a portrait of La Raven Gordon"
    />
  );
};

export default Avatar;
