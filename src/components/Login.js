// Login.js
import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }

  handleLogin = () => {
    const { username, password } = this.state;
    // Retrieve credentials from local storage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Check if entered credentials match stored credentials
    if (username === storedUsername && password === storedPassword) {
      alert("Login successful!");
    } else {
      this.setState({ error: "Invalid username or password" });
    }
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={(e) =>
            this.setState({ username: e.target.value, error: "" })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={(e) =>
            this.setState({ password: e.target.value, error: "" })
          }
        />
        <button onClick={this.handleLogin}>Login</button>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
      </div>
    );
  }
}

export default Login;
