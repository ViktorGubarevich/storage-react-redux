import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    handleChangeUsername = (event) => {
        this.setState({ username: event.target.value });
    }

    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = (event) => {
        // debugger;
        event.preventDefault();
        const { username, password } = this.state;
        this.props.signUp(username, password);
    };

    render() {
        const { isAuthorized } = this.props;

        if (isAuthorized) {
            return <Redirect to="/" />;
        }

        const { error } = this.props;

        return (
            <div id="login">
                <form id="login-form" onSubmit={this.handleSubmit.bind(this)}>
                    <label>First Name</label>
                    <input
                        required
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChangeUsername.bind(this)}
                    />
                    <label>Password</label>
                    <input
                        required
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChangePassword.bind(this)}
                    />
                    <button type="submit">Sign Up</button>
                    <div className="error-message" hidden={!error}>
                        {error}
                    </div>
                    Or <Link to="/login">Log in</Link>
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
    signUp: (username, password) =>
        dispatch({ type: "SIGN_UP", payload: { username, password } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

SignUp.propTypes = {
    isAuthorized: PropTypes.bool,
    signUp: PropTypes.func.isRequired,
    error: PropTypes.string,
};