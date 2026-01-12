import React, { useState } from "react";
import "./Account.css";

const Account = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  
  const [notif1, setNotif1] = useState(true);
  const [notif2, setNotif2] = useState(false);
  const [notif3, setNotif3] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <div className="account-page">

      <div className="account-tabs">
        {["Profile", "Preferences", "Security", "Payment Details"].map((tab) => (
          <span
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      {activeTab === "Profile" && (
        <>
          <div className="profile-section">

            <div className="column">
              <div className="input-block">
                <label>Your Name</label>
                <input type="text" placeholder="UGO EMEKA" />
              </div>

              <div className="input-block">
                <label>Email</label>
                <input type="email" placeholder="charleenreed@gmail.com" />
              </div>

              <div className="input-block">
                <label>Date of Birth</label>
                <select>
                  <option>25 January 1990</option>
                </select>
              </div>

              <div className="input-block">
                <label>Permanent Address</label>
                <input type="text" placeholder="3 SABO LINE ILORIN" />
              </div>

              <div className="input-block">
                <label>Postal Code</label>
                <input type="text" placeholder="45562" />
              </div>
            </div>

            <div className="column">
              <div className="input-block">
                <label>User Name</label>
                <input type="text" placeholder="SIR MOSH" />
              </div>

              <div className="input-block">
                <label>Password</label>
                <input type="password" placeholder="********" />
              </div>

              <div className="input-block">
                <label>Present Address</label>
                <input type="text" placeholder="3 SABO LINE ILORIN" />
              </div>

              <div className="input-block">
                <label>City</label>
                <input type="text" placeholder="ILORIN" />
              </div>

              <div className="input-block">
                <label>Country</label>
                <input type="text" placeholder="USA" />
              </div>
            </div>
          </div>

          <div className="save-btn-wrapper">
            <button className="save-btn">Save</button>
          </div>
        </>
      )}

      {activeTab === "Preferences" && (
        <>
          <div className="settings-box">

            <div className="setting-block">
              <label>Currency</label>
              <input type="text" placeholder="Naira" />
            </div>

            <div className="setting-block">
              <label>Time Zone</label>
              <input type="text" placeholder="(GMT +1:00)" />
            </div>

            <div className="setting-block">
              <label style={{ marginBottom: "8px" }}>Notifications</label>

              <div className="toggle-row">
                <div
                  className={`toggle ${notif1 ? "on" : ""}`}
                  onClick={() => setNotif1(!notif1)}
                >
                  <div className="circle"></div>
                </div>
                <span>send notification</span>
              </div>

              <div className="toggle-row">
                <div
                  className={`toggle ${notif2 ? "on" : ""}`}
                  onClick={() => setNotif2(!notif2)}
                >
                  <div className="circle"></div>
                </div>
                <span>send promotional email</span>
              </div>

              <div className="toggle-row">
                <div
                  className={`toggle ${notif3 ? "on" : ""}`}
                  onClick={() => setNotif3(!notif3)}
                >
                  <div className="circle"></div>
                </div>
                <span>Recommend product based on interest</span>
              </div>

            </div>
          </div>

          <div className="save-btn-wrapper">
            <button className="save-btn">Save</button>
          </div>
        </>
      )}

      {activeTab === "Security" && (
  <div className="security-section">

    <div className="security-block">
      <h3>Two-factor Authentication</h3>

      <div className="toggle-row">
        <div
          className={`toggle ${twoFactor ? "on" : ""}`}
          onClick={() => setTwoFactor(!twoFactor)}
        >
          <div className="circle"></div>
        </div>

        <span>Enable or disable two factor authentication</span>
      </div>
    </div>

    <div className="security-block">
      <h3>Change Password</h3>

      <div className="input-block">
        <label>Current Password</label>
        <input type="password" placeholder="********" />
      </div>

      <div className="input-block">
        <label>New Password</label>
        <input type="password" placeholder="********" />
      </div>
    </div>

    <div className="save-btn-wrapper">
      <button className="save-btn">Save</button>
    </div>
  </div>
)}



      {activeTab === "Payment Details" && (
        <div className="placeholder-box">
          <h3>Payment Details</h3>
          <p>Provide UI and I will design it 1:1.</p>
        </div>
      )}

    </div>
  );
};

export default Account;