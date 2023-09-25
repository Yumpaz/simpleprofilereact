import React from "react";
import foto from "./images/perfil.jpg";
import iprofile from "./images/icons/user.png";
import imail from "./images/icons/mail.png";
import ifiles from "./images/icons/files.png";
import ilocation from "./images/icons/location.png";
import itelephone from "./images/icons/telephone.png";
import ipadlock from "./images/icons/padlock.png";
import "./styles/profile.css";

export class profile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text: "Hi, my name is",
      info: this.props.user.name
    }
  }
  render() {
    const { name, email, files, location, telephone, padlock } = this.props.user;
    const iprofileClick = () => {
      this.setState({
        text: "Hi, my name is",
        info: name
      });
    };
    const imailClick = () => {
      this.setState({
        text: "My email address is",
        info: email
      })
    };
    const ifilesClick = () => {
      this.setState({
        text: "This is the",
        info: files
      })
    };
    const ilocationClick = () => {
      this.setState({
        text: "This is the",
        info: location
      })
    };
    const itelephoneClick = () => {
      this.setState({
        text: "My phone number is",
        info: telephone,
      })
    };
    const ipadlockClick = () => {
      this.setState({
        text: "This is the",
        info: padlock
      })
    };
    return (
      <div className="details">
        <div className="container">
          <p>
            <img
              src={foto}
              alt="Foto"
              width="150"
              height="150"
              className="bordered"
            />
          </p>
        </div>
        <div className="profilebottom">
          <p id="texto">
            <strong>{this.state.text}</strong>
          </p>
          <p id="info">{this.state.info}</p>
          <div className="iconContainer">
            <img
              src={iprofile}
              alt="Icon User"
              onClick={iprofileClick}
              width="30"
              height="30"
              className="selectable"
            />
            <img
              src={imail}
              alt="Icon User"
              onClick={imailClick}
              width="30"
              height="30"
              className="selectable"
            />
            <img
              src={ifiles}
              alt="Icon User"
              onClick={ifilesClick}
              width="30"
              height="30"
              className="selectable"
            />
            <img
              src={ilocation}
              alt="Icon User"
              onClick={ilocationClick}
              width="30"
              height="30"
              className="selectable"
            />
            <img
              src={itelephone}
              alt="Icon User"
              onClick={itelephoneClick}
              width="30"
              height="30"
              className="selectable"
            />
            <img
              src={ipadlock}
              alt="Icon User"
              onClick={ipadlockClick}
              width="30"
              height="30"
              className="selectable"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default profile;
