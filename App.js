// const heading_react = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React!");
// const root_react = ReactDOM.createRoot(document.getElementById("root"));
// root_react.render(heading_react);

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ])
]);
const root_react = ReactDOM.createRoot(document.getElementById("root"));
root_react.render(parent);
