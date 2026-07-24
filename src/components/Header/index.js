import * as React from "react";
import { Link } from "gatsby";
import ScrambleText from "../ScrambleText";
import { profile } from "../../data/profile";

import "./index.scss";

const Header = ({ onThemeChange, theme, disableScramble = false }) => {
  const pathname =
    typeof window !== "undefined" ? window?.location?.pathname : "";
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 730 : true;

  const animated = (text, duration = 3) =>
    disableScramble ? text : (
      <ScrambleText text={text} className="scramble-text" duration={duration} />
    );

  return (
    <header className="header">
      {pathname === "/" ? (
        <div className="header-holder w-[100px] sm:w-[33%]">
          <p className="text-[var(--tw-text-gray-secondary)] sm:text-[18px] text-[14px]">
            <ScrambleText text="Based in" className="scramble-text" delay={1.5} />{" "}
            <strong className="underline">
              <small className="sm:text-[18px] text-[14px]">
                <ScrambleText
                  text={isMobile ? "Brooklyn" : profile.location}
                  className="scramble-text"
                  duration={3}
                />
              </small>
            </strong>
          </p>
          <br />
          <p className="text-[var(--tw-text-gray-secondary)] sm:text-[18px] text-[14px]">
            <ScrambleText text="Switch to" className="scramble-text" duration={3.5} />
            <span onClick={onThemeChange} className="underline cursor-pointer">
              <strong>
                <ScrambleText
                  text={`${theme === "dark" ? "Light" : "Dark"} mode`}
                  className="scramble-text"
                  duration={3.9}
                />
              </strong>
            </span>
          </p>
        </div>
      ) : (
        <p className="w-[100px] sm:w-[33%]">
          <Link to="/" className="sm:text-[18px] text-[14px]">
            {animated(isMobile ? "<- back" : "<- back to home", 2)}
          </Link>
        </p>
      )}

      <div className="header-logo text-[var(--color-total)] w-[100px] sm:w-[33%] flex justify-center">
        <Link to="/">{animated(profile.shortName, 2.5)}</Link>
      </div>

      <ul className="header-list w-[100px] sm:w-[33%]">
        <li>
          <Link to="/about/" className={pathname?.startsWith("/about") ? "-active" : ""}>
            {animated("About Me")}
          </Link>
        </li>
        <li>
          {profile.blogUrl ? (
            <a href={profile.blogUrl} target="_blank" rel="noreferrer">{animated("Blog")}</a>
          ) : (
            <Link to="/blog" className={pathname?.startsWith("/blog") ? "-active" : ""}>
              {animated("Blog")}
            </Link>
          )}
        </li>
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer">
            {animated("Experiments")}
          </a>
        </li>
        <li>
          <Link to="/utilities/" className={pathname?.startsWith("/utilities") ? "-active" : ""}>
            {animated("Utilities")}
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
