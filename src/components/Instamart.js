import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  //   console.log(setIsVisible);
  return (
    <div className="my-2 p-2 border border-solid border-black">
      <div className="font-bold  ">{title} </div>
      {isVisible ? (
        <button
          onClick={() => {
            setIsVisible();
          }}
          className="bg-gray-200 px-1 text-md rounded-lg"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible();
          }}
          className="bg-gray-200 px-1 text-md rounded-lg"
        >
          Show
        </button>
      )}

      {isVisible && <p className="text-sm">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div className="p-2 ">
      <div className="text-xl font-bold">Instamart</div>
      <Section
        name={"about"}
        title={"About Instamart"}
        description={
          "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "about" ? "" : "about")
        }
      />
      <Section
        name={"team"}
        title={"Team Instamart"}
        description={
          "Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "team" ? "" : "team")
        }
      />
      <Section
        name={"career"}
        title={"Careers Instamart"}
        description={
          "Visually-stunning, easy to customize site templates built with React and Next.js. The perfect starting point for your next project and the ultimate resource for learning how experts build real websites with Tailwind CSS."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "career" ? "" : "career")
        }
      />
    </div>
  );
};

export default Instamart;
