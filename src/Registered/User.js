import { useLocation } from "react-router";
import "./User.css";
import userimg from "../img/user.jpg";
import upload from "../img/upload.jpg";

function User() {
  const location = useLocation();
  
  const userData = location.state && location.state.userData;

  return (
    <div className="user-section">
      <div className="heading">
        <h3>Account Settings</h3>
      </div>

          
          <div className="profile-info">
            <div className="image">
              <img className="userimg" src={userimg} alt="" />
              <img className="upload-image" src={upload} alt="upload image" />
            </div>
            <div className="data">
              <p className="username">Marry Doe</p>   
              <p>Marry@Gamail.com</p>
            </div>
          </div>
          <hr />
          <div className="description">
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              Lorem ipsum is a typefaceLorem ipsum is a without relying on
              meaningful content.{" "}
            </p>
          </div>
       
      
    </div>
  );
}

export default User;
