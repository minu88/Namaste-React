import { Component } from "react";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div className="about">
//       <h1>About</h1>
//       <h4>This is about page</h4>

//       <UserClass name={"Minu John (Class)"} learn={"ReactJS(Class)"} />
//     </div>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent(About.js) componentDidMount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div className="about">
        <h1>About</h1>
        <h4>This is about page</h4>

        <UserClass name={"Child1"} learn={"ReactJS(Class)"} />
        {/* <UserClass name={"Child2"} learn={"ReactJS(Class)"} /> */}
      </div>
    );
  }
}

export default About;
