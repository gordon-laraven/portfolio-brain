import * as React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Note from "../components/Note";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
import laRavenCV from "../files/la-raven-gordon-resume.docx";
import ScrambleText from "../components/ScrambleText";
import { profile } from "../data/profile";
import "../styles/global.scss";
import "../styles/actions.scss";

const Utilities = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setIsOpened(false), 800);
    return () => clearTimeout(timer);
  }, []);
  const items = [
    ["Download CV", laRavenCV, true],
    ["Go to my LinkedIn", profile.linkedin],
    ["See my GitHub", profile.github],
    ["Send me an email", `mailto:${profile.email}`],
    ["Follow me on X", profile.x],
    ["My current readings", profile.goodreads],
  ];

  return (
    <><Cursor /><div className="actions"><Loader isOpened={isOpened} duration={0.5} /><Header />
      <main><Container><ul className="actions-list md:pl-5">
        {items.map(([label, href, download], index) => (
          <li key={label}><a href={href} download={download} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="hover:text-[var(--tw-text-gray-primary)]">
            <ScrambleText text={label} className="scramble-text" duration={1 + index * 0.2} placeholder=".:" />
          </a></li>
        ))}
        <li><a href="https://github.com/cesarolvr/cesarolvr-www" target="_blank" rel="noreferrer" className="hover:text-[var(--tw-text-gray-primary)]">
          <ScrambleText text="View source code of this website" className="scramble-text inline-block" duration={2.4} placeholder=".:" />
          <span className="inline-block ml-5"><ScrambleText text="(template attribution)" className="scramble-text" duration={2.4} placeholder="__" /></span>
        </a></li>
      </ul></Container></main><br /><br /><br /><br /><Note />
    </div></>
  );
};

export default Utilities;
export const Head = () => <title>Utilities | La Raven Gordon</title>;
