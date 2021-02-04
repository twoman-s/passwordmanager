import "./css/PasswordList.css";
import firebase from "./../config";
import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import Particles from "react-particles-js";

const PasswordList = () => {
  const [allpasswords, setPassword] = useState([]);
  const [passlist, setList] = useState([]);
  const [noresult, setResult] = useState(false);
  const ref = firebase.firestore().collection("passwords");
  function getPasswords() {
    ref.onSnapshot((querySnapShot) => {
      const password = [];
      querySnapShot.forEach((doc) => {
        password.push(doc.data());
      });
      setPassword(password);
      setList(password);
    });
  }
  const showPassword = (e, password) => {
    e.target.textContent = password;
    e.target.nextSibling.style.display = "block";
  };
  const handleCopy = (e) => {
    const pass = e.target.previousSibling;
    copy(pass.textContent);
    window.alert("Password copied");
  };
  const handleSearch = (e) => {
    let prev = allpasswords;
    console.log(allpasswords);
    let result = [];
    prev.map((password) => {
      if (password.application.toLowerCase().includes(e.target.value)) {
        result.push(password);
      }
    });
    if (result.length !== 0) {
      setList(result);
    } else {
      setResult(true);
    }
    if (e.target.value === "") {
      setList(allpasswords);
    }
  };
  useEffect(() => {
    getPasswords();
  }, []);
  return (
    <>
      <div className="main">
        <Particles
          params={{
            particles: {
              number: {
                value: 60,
              },
              size: {
                value: 1,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
          style={{
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,
          }}
        />
        <h1>Password Manager</h1>
        <form action="">
          <input
            id="search"
            placeholder="Search"
            onChange={handleSearch}
            type="text"
          />
        </form>
        {noresult}
        <ul className="cards">
          {passlist.map((password) => (
            <li className="cards_item" key={password.id}>
              <div className="card">
                <div className="card_content">
                  <h2 className="card_title">{password.application}</h2>
                  <p className="card_text">Username : {password.username}</p>
                  <p className="card_text">Email : {password.email}</p>
                  <button
                    id={password.id}
                    onClick={(e) => showPassword(e, password.password)}
                    className="btn card_btn"
                  >
                    Show Password
                  </button>
                  <p
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
