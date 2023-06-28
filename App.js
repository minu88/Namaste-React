{
  /* <div id="parent">
  <div id="child1">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
  </div>
  <div id="child1">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
  </div>
</div>; */
}

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "childw" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

console.log(heading); // it s an object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // converts to browser know h1 tag and puts it to DOM
