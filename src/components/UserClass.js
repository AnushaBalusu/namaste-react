
import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        console.log(props.name + " child constructor called");
    }

    componentDidMount() {
        console.log(this.props.name +  " child componentDidMount called");
    }

    render() {
        const {name, loc} = this.props;
        const {count} = this.state;

        console.log(this.props.name + " child render called");
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={()=> {
                    //this.state.count = this.state.count + 1; // NEVER update state var directly.
                    this.setState({
                        count: count + 1,
                    });
                }}>Increase count</button>
                <h2>Name: {name}</h2>
                <h3>Location: {loc}</h3>
                <h4>Contact: @anusha_balusu</h4>
            </div>
        );
    }
}

export default UserClass;