import {
  CalendarToday,
  Mail,
  PermIdentity,
  PhoneAndroid,
  PinDrop,
  Publish
} from "@mui/icons-material";
import { UserSC } from "./UserSC";
import { newMembersData } from "../../dummyData";
import { useParams } from "react-router-dom";


export default function User() {

  const tempImage = "data:image/jpeg;base64,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"
  const currentUserId = Number(useParams().userId);
  const currentUser = newMembersData.find((user) => user.id === currentUserId);
  const userDetails = [
    { 
      fieldName: "Username",
      username: currentUser.username
    },
    { 
      fieldName: "Title",
      title: currentUser.jobTitle
    },
  ];
  const accountDetails = [
    {
      fieldName: "name",
      name: currentUser.name,
      icon: <PermIdentity className="user-show-icon" />
    },
    {
      fieldName: "Date of Birth",
      email: currentUser.email,
      icon: <CalendarToday className="user-show-icon" />
    }
  ];
  const contactDetails = [
  {
    fieldName: "Phone Number",
    icon: <PhoneAndroid className="user-show-icon" />
  },
  {
    fieldName: "Email",
    icon: <Mail className="user-show-icon" />
  },
  {
    fieldName: "Location",
    icon: <PinDrop className="user-show-icon" />
  }
  ];
  const userFields = [
    ...userDetails, 
    ...accountDetails, 
    ...contactDetails
  ]
  console.log(userFields)

return (
  <UserSC>
    <div className="user-title-container">
      <h1 className="user-title">Edit User</h1>
      <button className="user-add-button">Create</button>
    </div>
    <div className="user-container">
      <div className="user-show">
        <div className="user-show-top">
          <img
            src={tempImage}
            alt="user"
            className="user-show-img"
          />
          <div className="user-show-top-title">
            <span className="user-show-username">{currentUser.username}</span>
            <span className="user-show-user-title">{currentUser.jobTitle}</span>
          </div>
        </div>
        <div className="user-show-bottom">
          <span className="user-show-title">Account Details</span>
          {accountDetails.map((field, index) => (
            <div className="user-show-info" key={index}>
              {field.icon}
              <span className="user-show-info-title">{}</span>
            </div>
          ))}
          <span className="user-show-title">Contact Details</span>
          {contactDetails.map((field, index) => (
            <div className="user-show-info" key={index}>
              {field.icon}
              <span className="user-show-info-title"></span>
            </div>
          ))}
        </div>
      </div>
      <div className="user-update">
        <span className="user-update-title">Edit</span>
        <form className="user-update-form">
          <div className="user-update-left">
            {userFields.map((field, index) => (
              <div className="user-update-item" key={index}>
                <label>{field.fieldName}</label>
                <input
                  type="text"
                  placeholder={`${field.fieldName}`}
                  className="user-update-input"
                />
              </div>
            ))}
          </div>
          <div className="user-update-right">
            <div className="user-update-upload">
              <img
                className="user-update-img"
                src={tempImage}
                alt="user"
              />
              <label htmlFor="file">
                <Publish className="user-update-icon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="user-update-button">Update</button>
          </div>
        </form>
      </div>
    </div>
  </UserSC >
)
};