import React, { useState } from "react";
import "./Account.css";

const Account = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  
  const [notif1, setNotif1] = useState(true);
  const [notif2, setNotif2] = useState(false);
  const [notif3, setNotif3] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [currency, setCurrency] = useState("Naira");
  const [timezone, setTimezone] = useState("(GMT +1:00)");

  const [paymentMethods, setPaymentMethods] = useState([]);
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");

  const saveProfile = () => {
    console.log("Saving profile...");
  };

  const savePreferences = () => {
    console.log("Saving preferences...");
  };

  const saveSecurity = () => {
    console.log("Saving security...");
  };

  const addCard = (e) => {
    e.preventDefault();
    if (!cardNumber || !cardholderName || !expMonth || !expYear) return;

    const last4 = cardNumber.slice(-4);
    const brand = cardNumber.startsWith("4")
      ? "Visa"
      : cardNumber.startsWith("5")
      ? "Mastercard"
      : "Card";

    const newCard = {
      cardBrand: brand,
      cardLast4: last4,
      expMonth,
      expYear,
      cardholderName,
    };

    setPaymentMethods((prev) => [...prev, newCard]);
    setCardholderName("");
    setCardNumber("");
    setExpMonth("");
    setExpYear("");
    setCvc("");
  };

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
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="input-block">
                <label>Email</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="input-block">
                <label>Date of Birth</label>
                <input type="text" placeholder="e.g. 25 January 1990" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
              </div>

              <div className="input-block">
                <label>Permanent Address</label>
                <input type="text" placeholder="Permanent Address" value={permanentAddress} onChange={(e) => setPermanentAddress(e.target.value)} />
              </div>

              <div className="input-block">
                <label>Postal Code</label>
                <input type="text" placeholder="Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
              </div>
            </div>

            <div className="column">
              <div className="input-block">
                <label>User Name</label>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>

              <div className="input-block">
                <label>Password</label>
                <input type="password" placeholder="********" disabled />
              </div>

              <div className="input-block">
                <label>Present Address</label>
                <input type="text" placeholder="Present Address" value={presentAddress} onChange={(e) => setPresentAddress(e.target.value)} />
              </div>

              <div className="input-block">
                <label>City</label>
                <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
              </div>

              <div className="input-block">
                <label>Country</label>
                <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="save-btn-wrapper">
            <button className="save-btn" onClick={saveProfile}>Save</button>
          </div>
        </>
      )}

      {activeTab === "Preferences" && (
        <>
          <div className="settings-box">

            <div className="setting-block">
              <label>Currency</label>
              <input type="text" placeholder="Currency" value={currency} onChange={(e) => setCurrency(e.target.value)} />
            </div>

            <div className="setting-block">
              <label>Time Zone</label>
              <input type="text" placeholder="Timezone" value={timezone} onChange={(e) => setTimezone(e.target.value)} />
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
            <button className="save-btn" onClick={savePreferences}>Save</button>
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
            <button className="save-btn" onClick={saveSecurity}>Save</button>
          </div>
        </div>
      )}

      {activeTab === "Payment Details" && (
        <div className="payment-section">
          <div className="saved-cards">
            <h3>Saved Cards</h3>
            {paymentMethods.length === 0 && <p>No cards saved yet.</p>}
            {paymentMethods.map((card) => (
              <div
                key={`${card.cardBrand}-${card.cardLast4}-${card.expMonth}-${card.expYear}`}
                className="card-item"
              >
                <span className="card-item-title">
                  {card.cardBrand} •••• {card.cardLast4}
                </span>
                <span>
                  Expires {card.expMonth}/{card.expYear}
                </span>
                <span>{card.cardholderName}</span>
              </div>
            ))}
          </div>

          <form className="add-card-form" onSubmit={addCard}>
            <h3>Add New Card</h3>

            <div className="input-block">
              <label>Cardholder Name</label>
              <input
                type="text"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                placeholder="Name on card"
              />
            </div>

            <div className="input-block">
              <label>Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 5678 9012 3456"
              />
            </div>

            <div className="add-card-row">
              <div className="input-block">
                <label>Expiry Month</label>
                <input
                  type="text"
                  value={expMonth}
                  onChange={(e) => setExpMonth(e.target.value)}
                  placeholder="MM"
                />
              </div>

              <div className="input-block">
                <label>Expiry Year</label>
                <input
                  type="text"
                  placeholder="YY"
                  className="small-input"
                  maxLength={2}
                  value={expYear}
                  onChange={(e) => setExpYear(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="small-input"
                  maxLength={4}
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
              </div>
            </div>

            <div className="save-btn-wrapper">
              <button className="save-btn" type="submit">
                Save Card
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
};

export default Account;
