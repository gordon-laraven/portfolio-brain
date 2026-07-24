import * as React from "react";
import "./index.scss";
import Copied from "../Copied";
import Modal from "../Modal";
import { toggleTheme, getTheme, setupTheme } from "../../utils/theme";

export const State = React.createContext(false);

const Layout = ({ children }) => {
  const [modalIsOpened, setModalIsOpened] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [theme, setTheme] = React.useState(getTheme());
  React.useEffect(() => { setupTheme(); }, []);
  const onThemeChange = () => {
    const newTheme = getTheme() === "light" ? "dark" : "light";
    setTheme(newTheme);
    toggleTheme();
  };
  return (
    <State.Provider value={{ modalIsOpened, copied, setModalIsOpened, setCopied, theme, onThemeChange }}>
      <div className="layout">{children}<Modal modalIsOpened={modalIsOpened} setModalIsOpened={setModalIsOpened} copied={copied} />{copied && <Copied />}</div>
    </State.Provider>
  );
};

export default Layout;
