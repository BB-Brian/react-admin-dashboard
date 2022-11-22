import { NewUserSC } from "./NewUserSC";

export default function NewUser() {
  return (
    <NewUserSC>
      <h1 className="new-user-form">New User</h1>
        <form action="" className="new-user-item">
          <div className="new-user-item">
            <label>Username</label>
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="new-user-item">
            <label>Full Name</label>
            <input type="text" placeholder="John Smith" />
          </div>
          <div className="new-user-item">
            <label>Email</label>
            <input type="email" placeholder="johnsmith@gmail.com" />
          </div>
          <div className="new-user-item">
            <label>Password</label>
            <input type="password" placeholder="password" />
          </div>
          <div className="new-user-item">
            <label>Phone Number</label>
            <input type="text" placeholder="+1 206 123 4567" />
          </div>
          <div className="new-user-item">
            <label>Address</label>
            <input type="text" placeholder="Seattle, WA | USA" />
          </div>
          <div className="new-user-item">
            <label>Gender</label>
            <div className="new-user-gender">
              <input type="text" name="gender" id="male" value="male" />
              <label for="male">Male</label>
              <input type="text" name="gender" id="female" value="female" />
              <label for="male">Female</label>
              <input type="text" name="gender" id="other" value="other" />
              <label for="male">Other</label>
            </div>
          </div>
          <div className="new-user-item">
            <label>Active</label>
            <select className="new-user-select" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </form>
    </NewUserSC>
  )
}