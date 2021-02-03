import "./css/AddPassword.css";

function AddPassword() {
  return (
    <div class="containerpassword">
      <form id="password" autocomplete="off">
        <h3>Add New Password</h3>
        <fieldset>
          <input
            placeholder="Application name"
            type="text"
            tabindex="1"
            required
            autofocus
            className="in"
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Email Address"
            type="email"
            tabindex="2"
            required
          />
        </fieldset>
        <fieldset>
          <input placeholder="User Name" type="text" tabindex="3" required />
        </fieldset>
        <fieldset>
          <input placeholder="Password" type="password" tabindex="4" required />
        </fieldset>
        <fieldset>
          <input
            placeholder="Confirm Password"
            type="password"
            tabindex="5"
            required
          />
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default AddPassword;
