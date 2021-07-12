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

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { user } = this.state;
        this.props.signUp(user);
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
                    <label>Sign Up</label>
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