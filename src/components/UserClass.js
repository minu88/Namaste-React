import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // state variables
    this.state = {};

    // console.log(this.props.name + " constructor");
  }

  componentDidMount() {
    // console.log(this.props.name + " componentDidMount()");
  }

  render() {
    const { name, learn } = this.props;

    // console.log(name + " render");
    return (
      <div className="user-class">
        <h2>{name}</h2>
        <h3>{learn}</h3>

        <h3></h3>
      </div>
    );
  }
}

export default UserClass;
