import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.logIn(username, password);
  };

  render() {
    const { isAuthorized } = this.props;

    if (isAuthorized) {
      return <Redirect to="/" />;
    }

    const { username, password } = this.state;
    const { error } = this.props;

    return (
      <div id="login">
        <form id="login-form" onSubmit={this.handleSubmit}>
          <label>Login</label>
          <input
            required
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">Sign In</button>
          <div className="error-message" hidden={!error}>
            {error}
          </div>
          Or <Link to="/signup">register now!</Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthorized: Boolean(state.username),
  error: state.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (username, password) =>
    dispatch({ type: "LOG_IN", payload: { username, password } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  isAuthorized: PropTypes.bool,
  logIn: PropTypes.func.isRequired,
  error: PropTypes.string,
};