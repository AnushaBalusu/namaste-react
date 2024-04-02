import React from "react";
import ReactDOM from "react-dom/client";


const jsxHeading = <h1>This is a JSX heading</h1>

const element = <span>React Element</span>;

const title = (
    <h1 className="head" tabIndex="5">
        {element}
        This is title component
    </h1>
);

const Title = () => (
    <h1 className="head" tabIndex="5">
        This is title component
    </h1>
);

const number = 1000;

const HeadingComponent = () => {
    return <h1>This is a React Functional Component</h1>;
}

const HeadingComponent2 = () => <h1>This is a React Functional Component</h1>;

const HeadingComponent3 = () => ( 
    <div id="container">
        <Title />
        {title}
        {100 + 200}
        <h1 className="heading">This is a React Functional Component</h1> 
    </div>
);

const headingElement = ( 
    <h1>This is a React Element</h1> 
);

console.log(HeadingComponent);
console.log(headingElement);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(headingElement);
root.render(<HeadingComponent3/>);
 