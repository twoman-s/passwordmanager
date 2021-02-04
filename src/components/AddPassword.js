import "./css/AddPassword.css";
import firebase from "./../config";
import { useState } from "react";
import Particles from "react-particles-js";

function AddPassword() {
  const [appName, setAppName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");

  const ref = firebase.firestore().collection("passwords");
  const savePassword = () => {
    let data = {
      application: appName,
      username: userName,
      email: email,
      password: password,
    };
    ref.add(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      window.alert("Password does not match");
      document.getElementById("pass1").value = "";
      document.getElementById("pass2").value = "";
    } else {
      savePassword();
      window.alert("Password added successfully");
      document.getElementById("pass1").value = "";
      document.getElementById("pass2").value = "";
      document.getElementById("username").value = "";
      document.getElementById("email").value = "";
      document.getElementById("appname").value = "";
    }
  };
  return (
    <div class="containerpassword">
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
      <form id="password" autocomplete="off">
        <h3>Add New Password</h3>
        <fieldset>
          <input
            placeholder="Application name"
            id="appname"
            type="text"
            tabindex="1"
            required
            autofocus
            onChange={(e) => {
              setAppName(e.target.value);
            }}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Email Address"
            id="email"
            type="email"
            tabindex="2"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="User Name"
            id="username"
            type="text"
            tabindex="3"
            required
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Password"
            id="pass1"
            type="password"
            tabindex="4"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Confirm Password"
            id="pass2"
            type="password"
            tabindex="5"
            required
            onChange={(e) => {
              setcPassword(e.target.value);
            }}
          />
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default AddPassword;
