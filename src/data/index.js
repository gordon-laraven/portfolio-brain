import * as React from "react";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { FiBook } from "@react-icons/all-files/fi/FiBook";
import { profile } from "./profile";
import laRavenCV from "../files/la-raven-gordon-resume.docx";

const bioDescription = `I am an AI Brain Development Specialist working on both sides of the same problem: helping large language models reason more reliably, and helping businesses build and train AI systems that last. My work spans confidential generative-AI model training and evaluation, including preference ranking, adversarial red-teaming, refusal and logic auditing, rubric design, and scientific fact-checking. I bring that same foundation-first discipline to enterprise AI implementation, combining technical rigor, business systems, and human judgment.`;

const careerPath = [
  {
    role: "Enterprise AI Brain Specialist",
    details: "Freelance / Independent | Remote | 2023 - Present",
    description: "Trains and evaluates LLMs for scientific and enterprise applications; designs evaluation frameworks, model-validation data pipelines, and practical AI systems.",
  },
  {
    role: "Small Business AI Implementation Specialist",
    details: "Freelance / Independent | Remote | 2021 - Present",
    description: "Helps clients assess AI readiness, establish knowledge systems and SOPs, and integrate AI sustainably rather than as a one-off tool.",
  },
  {
    role: "Field Sales Manager",
    details: "Vector Marketing | Essex County, NJ | 2020 - Present",
    description: "Builds structured systems, analytics, virtual training, and AI-supported customer-service workflows.",
  },
];

const academyPath = [
  { role: "AI & Machine Learning Certificate", details: "Columbia Engineering AI Boot Camp | 2024" },
  { role: "B.S. in Biochemistry", details: "Rutgers University | 2016 - 2022" },
  { role: "Leadership Academy Graduate", details: "Vector Marketing" },
];

const openSourcePath = [
  { role: "GitHub projects", details: "AI, data, and applied machine-learning work", link: profile.github },
];

const volunteeringPath = [
  { role: "Scientific research & education", details: "Research publications and educational materials | 2018 - Present", description: "Work includes catnip oils, environmental impact, indigenous vegetables, and nutritional analysis." },
];

const hackingPath = [
  { role: "Relocation Insights Application", details: "Conversational AI | LangChain + Google Gen AI", description: "A multi-source application built for useful, contextual relocation guidance.", link: profile.github },
  { role: "Olympic Swimming Analysis", details: "Python data science", description: "Forecasting and statistical modeling across more than a century of Olympic data.", link: profile.github },
];

const quickActionList = [
  { text: "Download CV", nick: "d", icon: <FiDownload />, target: laRavenCV },
  { text: "View LinkedIn", nick: "l", icon: <FiLinkedin />, target: profile.linkedin },
  { text: "See my GitHub", nick: "g", icon: <FiGithub />, target: profile.github },
  { text: "Send an email", nick: "e", icon: <FiMail />, target: `mailto:${profile.email}` },
  { text: "See my current readings", nick: "r", icon: <FiBook />, target: profile.goodreads },
];

export { bioDescription, careerPath, academyPath, quickActionList, openSourcePath, volunteeringPath, hackingPath };
