
import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "http://dummy-photo.com",
            }
        }
        console.log(props.name + " child constructor called");
    }

    async componentDidMount() {
        console.log(this.props.name +  " child componentDidMount called");
        const data = await fetch("https://api.github.com/users/anushabalusu");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        
        
        console.log(this.props.name + " child render called");
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @anusha_balusu</h4>
            </div>
        );
    }
}

export default UserClass;