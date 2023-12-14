// SignUp.js
import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleSignUp = () => {
    const { username, password } = this.state;
    // Basic validation
    if (username && password) {
      // Store credentials in local storage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Signup successful!");
    } else {
      alert("Please enter both username and password.");
    }
  };

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={(e) => this.setState({ username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <button onClick={this.handleSignUp}>Sign Up</button>
      </div>
    );
  }
}

export default SignUp;
