import "./css/PasswordList.css";
import firebase from "./../config";
import { useState, useEffect } from "react";

const PasswordList = () => {
  const [allpasswords, setPassword] = useState([]);
  const ref = firebase.firestore().collection("passwords");
  function getPasswords() {
    ref.onSnapshot((querySnapShot) => {
      const password = [];
      querySnapShot.forEach((doc) => {
        password.push(doc.data());
      });
      setPassword(password);
    });
  }
  const showPassword = (e, password) => {
    e.target.textContent = password;
    e.target.nextSibling.style.display = "block";
  };
  const handleCopy = (e) => {
    const pass = e.target.previousSibling;

    pass.setSelectionRange(0, 99999);
    document.execCommand("copy");
  };
  useEffect(() => {
    getPasswords();
  }, []);
  return (
    <>
      <div className="main">
        <h1>Password Manager</h1>

        <ul className="cards">
          {allpasswords.map((password) => (
            <li className="cards_item" key={password.id}>
              <div className="card">
                <div className="card_content">
                  <h2 className="card_title">{password.application}</h2>
                  <p className="card_text">Username : {password.username}</p>
                  <p className="card_text">Email : {password.email}</p>
                  <button
                    onClick={(e) => showPassword(e, password.password)}
                    className="btn card_btn"
                  >
                    Show Password
                  </button>
                  <p
                    id="copy"
                    style={{
                      display: "none",
                      fontSize: "10px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                    onClick={handleCopy}
                  >
                    Copy to Clipbord
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PasswordList;
