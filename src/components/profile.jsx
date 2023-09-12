import React from "react";
import foto from "./images/perfil.jpg";
import iprofile from "./images/icons/user.png";
import imail from "./images/icons/mail.png";
import ifiles from "./images/icons/files.png";
import ilocation from "./images/icons/location.png";
import itelephone from "./images/icons/telephone.png";
import ipadlock from "./images/icons/padlock.png";
import "./styles/profile.css";

class profile extends React.Component {
  state = {};
  render() {
    const { email } = this.props.user;
    const iprofileClick = () => {
      console.log("Click profile");
    };
    const imailClick = () => {
      console.log("Click mail");
    };
    const ifilesClick = () => {
      console.log("Click files");
    };
    const ilocationClick = () => {
      console.log("Click location");
    };
    const itelephoneClick = () => {
      console.log("Click telephone");
    };
    const ipadlockClick = () => {
      console.log("Click padlock");
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
            <strong>My email address is</strong>
          </p>
          <p id="email">{email}</p>
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
              width="30"
              height="30"
              className="selectable"
            />
            <img
              src={ifiles}
              alt="Icon User"
              width="30"
              height="30"
              className="selectable"
            />
            <img
              src={ilocation}
              alt="Icon User"
              width="30"
              height="30"
              className="selectable"
            />
            <img
              src={itelephone}
              alt="Icon User"
              width="30"
              height="30"
              className="selectable"
            />
            <img
              src={ipadlock}
              alt="Icon User"
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
