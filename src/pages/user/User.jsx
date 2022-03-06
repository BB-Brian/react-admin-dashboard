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

  const currentUserId = Number(useParams().userId);
  const currentUser = newMembersData.find((user) => user.id === currentUserId);
  console.log(currentUser)

  const userDetails = [
    { 
      fieldName: "Username",
      data: currentUser.username
    },
    { 
      fieldName: "Title",
      data: currentUser.jobTitle
    },
  ];
  const accountDetails = [
    {
      fieldName: "Name",
      data: currentUser.name,
      icon: <PermIdentity className="user-show-icon" />
    },
    {
      fieldName: "Date of Birth",
      data: currentUser.dob,
      icon: <CalendarToday className="user-show-icon" />
    }
  ];
  const contactDetails = [
  {
    fieldName: "Phone Number",
    data: currentUser.phoneNumber,    
    icon: <PhoneAndroid className="user-show-icon" />
  },
  {
    fieldName: "Email",
    data: currentUser.email,
    icon: <Mail className="user-show-icon" />
  },
  {
    fieldName: "Location",
    data: currentUser.location,
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
            src={currentUser.image}
            alt="user"
            className="user-show-img"
          />
          <div className="user-show-top-title">
            <span className="user-show-username">{currentUser.name}</span>
            <span className="user-show-user-title">{currentUser.jobTitle}</span>
          </div>
        </div>
        <div className="user-show-bottom">
          <span className="user-show-title">Account Details</span>
          {accountDetails.map((field, index) => (
              <div className="user-show-info" key={index}>
                {field.icon}
                <span className="user-show-info-title">{field.data}</span>
              </div>
          ))}
          <span className="user-show-title">Contact Details</span>
          {contactDetails.map((field, index) => (
            <div className="user-show-info" key={index}>
              {field.icon}
              <span className="user-show-info-title">{field.data}</span>
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
                  value={`${field.data|| "" }`}
                />
              </div>
            ))}
          </div>
          <div className="user-update-right">
            <div className="user-update-upload">
              <img
                className="user-update-img"
                src={currentUser.image}
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