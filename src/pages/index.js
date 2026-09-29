import * as React from "react";

import "../styles/global.scss";
import "../styles/index.scss";

const experience = ["OpenAI", "Meta", "Microsoft", "Mistral AI"];
const services = [
  ["01", "Model evaluation", "Clear rubrics, careful review, and useful feedback for language and multimodal systems that need to be more accurate, consistent, and dependable."],
  ["02", "AI workflow design", "Practical AI workflows for small teams—grounded in the real work your people do, not a generic automation playbook."],
  ["03", "Failure-mode review", "A close look at where an AI experience breaks: weak reasoning, unsafe edge cases, unclear instructions, and inconsistent outputs."],
];
const projects = [
  ["Multimodal evaluation", "Visual grounding & spatial reasoning", "Evaluated image-and-text responses against a rubric for spatial accuracy, grounding, and explanation quality."],
  ["Safety & alignment", "Adversarial red teaming", "Designed difficult prompts to expose safety and refusal failures, then documented patterns that needed stronger guardrails."],
  ["Quality systems", "Rubric architecture", "Created criteria and calibrated example responses so distributed evaluators could make consistent, defensible judgments."],
  ["Privacy & trust", "PII anonymization", "Reviewed and rewrote conversational data to protect sensitive identifiers while preserving meaning and natural flow."],
];

const IndexPage = () => (
  <div className="portfolio">
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="La Raven Gordon home">La Raven Gordon</a>
      <nav aria-label="Primary navigation"><a href="#services">Services</a><a href="#work">Selected work</a><a href="#about">About</a></nav>
      <a className="header-cta" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
    </header>
    <main id="top">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">AI evaluation · quality · implementation</p>
          <h1>Build AI people can <em>trust.</em></h1>
          <p className="hero-intro">I’m La Raven Gordon, an AI evaluation specialist and implementation consultant. I help teams find what is not working, define what good looks like, and build more reliable AI experiences.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Start a conversation <span aria-hidden="true">↗</span></a><a className="text-link" href="#work">See selected work <span aria-hidden="true">↓</span></a></div>
        </div>
        <aside className="hero-note"><span>Independent specialist</span><p>Based in Brooklyn, working with ambitious teams wherever they are.</p></aside>
      </section>
      <section className="experience" aria-labelledby="experience-title">
        <p id="experience-title">Contract project experience across leading AI organizations</p>
        <div className="experience-list">{experience.map((company) => <span key={company}>{company}</span>)}</div>
        <small>Work completed as an independent contract specialist. Company names describe project experience, not employment or endorsement.</small>
      </section>
      <section className="services section" id="services">
        <div className="section-heading"><p className="eyebrow">How I help</p><h2>Less AI theater.<br />More useful systems.</h2></div>
        <div className="service-list">{services.map(([number, title, text]) => <article className="service" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>
      <section className="work section" id="work">
        <div className="section-heading work-heading"><p className="eyebrow">Selected experience</p><h2>Hands-on work<br />inside the model lifecycle.</h2><p className="section-intro">NDA-safe examples from 26 AI training and evaluation projects. I can discuss methods and relevant experience; client-specific details remain confidential.</p></div>
        <div className="project-grid">{projects.map(([type, title, text], index) => <article className="project" key={title}><span className="project-number">0{index + 1}</span><p className="project-type">{type}</p><h3>{title}</h3><p>{text}</p></article>)}</div>
        <p className="work-footnote">Areas include RLHF, supervised fine-tuning, reasoning evaluation, multimodal evaluation, privacy, fact-checking, rubric design, and adversarial testing.</p>
      </section>
      <section className="about section" id="about">
        <div className="about-title"><p className="eyebrow">About</p><h2>Precision is the throughline.</h2></div>
        <div className="about-copy"><p>I started in science: validated protocols, nutritional and mineral analysis, and work where the details had to hold up. That foundation carried naturally into AI training and evaluation.</p><p>I combine that rigor with machine-learning training from Columbia Engineering and practical experience across language, vision, and safety-focused AI work. My job is not to make AI sound impressive. It is to help make it work better.</p><a className="text-link" href="https://laraven-gordon-resume.streamlit.app/" target="_blank" rel="noreferrer">View résumé <span aria-hidden="true">↗</span></a></div>
      </section>
      <section className="contact" id="contact"><p className="eyebrow">Have a system worth improving?</p><h2>Let’s make it<br /><em>more reliable.</em></h2><p>Tell me what your AI system needs to do better, and I’ll tell you whether I’m the right person to help.</p><a className="button button-primary" href="mailto:laraven.gordon@gmail.com?subject=AI%20project%20inquiry">Email La Raven <span aria-hidden="true">↗</span></a></section>
    </main>
    <footer><span>© {new Date().getFullYear()} La Raven Gordon</span><div><a href="https://www.linkedin.com/in/laraven-gordon/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/gordon-laraven" target="_blank" rel="noreferrer">GitHub</a></div></footer>
  </div>
);

export default IndexPage;
export const Head = () => <title>La Raven Gordon | AI Evaluation Specialist</title>;
