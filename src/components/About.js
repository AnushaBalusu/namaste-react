import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {

    constructor(props) {
        super(props);
        console.log("Parent constructor called");
    }

    componentDidMount() {
        console.log("Parent componentDidMount called");
    }

    render() {
        console.log("Parent render called");
        return (
            <div>
                <h1>About</h1>
                <h2>This is food ordering app</h2>
                <UserClass name={"First"} loc={"Toronto"}/>
                <UserClass name={"Second"} loc={"US"}/>
                <UserClass name={"Third"} loc={"India"}/>
            </div>
        )
    }
    
};

export default About;