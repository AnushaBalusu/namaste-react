import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

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
                <div>
                    LoggedIn User: 
                    <UserContext.Consumer>
                        { ({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is food ordering app</h2>
                <UserClass name={"First"} loc={"Toronto"}/>
            </div>
        )
    }
    
};

export default About;