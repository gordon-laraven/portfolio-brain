import * as React from "react";
import classNames from "classnames";
import Header from "../components/Header";
import Note from "../components/Note";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
import Headshot from "../components/Headshot";
import { FiCopy } from "@react-icons/all-files/fi/FiCopy";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";
import laRavenCV from "../files/la-raven-gordon-resume.docx";
import { State } from "../components/Layout";
import { bioDescription, careerPath, academyPath, openSourcePath, volunteeringPath, hackingPath } from "../data";
import { certifications, profile } from "../data/profile";
import headshot from "../images/headshot.png";
import "../styles/global.scss";
import "../styles/about.scss";

const panels = [
  { title: "Experience", entries: careerPath },
  { title: "Education", entries: academyPath },
  { title: "Projects", entries: openSourcePath },
  { title: "Research", entries: volunteeringPath },
  { title: "Experiments", entries: hackingPath },
  { title: "Certifications", entries: certifications },
];

const About = () => {
  const [activePanel, setActivePanel] = React.useState(0);
  const [isOpened, setIsOpened] = React.useState(true);
  const { setCopied } = React.useContext(State);
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 1440 : true;
  const currentPanel = panels[activePanel];

  React.useEffect(() => {
    const timer = setTimeout(() => setIsOpened(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const copyText = () => {
    navigator.clipboard.writeText(bioDescription).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    }, console.log);
  };

  return (
    <>
      <Cursor />
      <div className="about">
        <Loader isOpened={isOpened} duration={0.5} />
        <Header goBackToHome={true} />
        <main>
          <div className="headshot column">
            {isMobile ? <img src={headshot} alt="La Raven Gordon" /> : <Headshot />}
            <a className="button -download -icon" href={headshot} download>
              <FiDownload />
              <p>Download photo</p>
            </a>
          </div>
          <div className="bio column">
            <h3 className="about-title mb-2 font-bold text-[18px]">About Me</h3>
            <p className="paragraph">
              I am an AI Brain Development Specialist working at the intersection of model reasoning and enterprise implementation. I help large language models become more reliable, and I help businesses build the systems, knowledge, and judgment needed to use AI well.
            </p>
            <p className="paragraph">
              My background in biochemistry, AI training, evaluation, and business operations shapes a foundation-first approach: AI should extend human judgment, not replace it.
            </p>
            <ul className="control">
              <li><button className="-icon" onClick={copyText}><FiCopy /><p>Copy bio</p></button></li>
              <li><a className="button -icon" href={laRavenCV} download><FiDownload /><p>Download CV</p></a></li>
            </ul>
            <div className="toggle">
              {panels.map(({ title }, index) => (
                <button
                  key={title}
                  className={classNames("-toggle", { "--active font-bold": activePanel === index })}
                  onClick={() => setActivePanel(index)}
                >
                  {title}
                </button>
              ))}
            </div>
            {activePanel === 0 && (
              <div className="border-l-2 border-[var(--border-secondary)] pl-4 mb-6">
                More details on my <a className="underline text-[var(--tw-text-gray-primary)] font-bold" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn profile</a>.
              </div>
            )}
            <ol className="career-path -academic">
              {currentPanel.entries.map((entry) => (
                <li key={entry.title || entry.role} className="about-career-experience">
                  <h4 className="role">{entry.title || entry.role}</h4>
                  <br />
                  <h5 className="infos">{entry.issuer ? [entry.issuer, entry.date].filter(Boolean).join(" | ") : entry.details}</h5>
                  {(entry.note || entry.description) && <p className="description">{entry.note || entry.description}</p>}
                  {entry.link && <a href={entry.link} target="_blank" rel="noreferrer" className="link">View on GitHub</a>}
                  {entry.credentialUrl && <a href={entry.credentialUrl} target="_blank" rel="noreferrer" className="link">View credential</a>}
                </li>
              ))}
            </ol>
          </div>
        </main>
        <Note />
      </div>
    </>
  );
};

export default About;
export const Head = () => <title>About Me | La Raven Gordon</title>;
