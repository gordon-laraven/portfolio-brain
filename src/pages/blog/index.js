import * as React from "react";
import Header from "../../components/Header";
import Note from "../../components/Note";
import Loader from "../../components/Loader";
import Cursor from "../../components/Cursor";
import { profile } from "../../data/profile";
import "../../styles/global.scss";

const Blog = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setIsOpened(false), 800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <><Cursor /><div className="blog"><Loader isOpened={isOpened} duration={0.5} /><Header disableScramble />
      <main className="flex flex-col mb-10 max-w-full px-[5%]">
        <h3 className="about-title text-[50px] mb-6 font-black w-full mt-10 md:mt-0">Ideas. Systems. AI.</h3>
        <p className="paragraph md:w-[880px] text-[18px] w-full">
          This is La Raven's future writing home for practical notes on AI brains, model refinement, business readiness, and human judgment.
        </p>
        <p className="paragraph md:w-[880px] text-[18px] w-full">
          The publishing platform is being prepared on Hostinger WordPress. New posts will appear here or link directly to the WordPress site when it launches.
        </p>
        {profile.blogUrl && <a className="underline font-bold" href={profile.blogUrl}>Visit the blog</a>}
      </main><Note />
    </div></>
  );
};

export default Blog;
export const Head = () => <title>Blog | La Raven Gordon</title>;
