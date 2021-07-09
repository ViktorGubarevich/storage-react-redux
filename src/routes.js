import Profile from './pages/Profile';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

export const routes = [{
    isNavBar: true,
    isExact: true,
    path: '/',
    name: 'Home',
    component: Home
},
{
    isNavBar: true,
    path: '/profile',
    name: 'Profile',
    component: Profile,
    isPrivate: true
},
{
    path: '/login',
    name: 'Login',
    component: Login
},
{
    path: '/signup',
    name: 'SignUp',
    component: SignUp
}];




















// import React from "react";
// import { Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

// class Login extends React.Component {
//   static propTypes = {
//     isAuthorized: PropTypes.bool,
//     logIn: PropTypes.func.isRequired,
//     error: PropTypes.string,
//   };


//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       password: "",
//     };
//   }

//   onChangeUsername = (event) => {
//     const {
//       target: { value },
//     } = event;

//     this.setState({ username: value });
//   };

//   onChangePassword = (event) => {
//     const {
//       target: { value },
//     } = event;

//     this.setState({ password: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { username, password } = this.state;

//     this.props.logIn(username, password);
//   };

//   render() {
//     const { isAuthorized } = this.props;

//     if (isAuthorized) {
//       return <Redirect to="/" />;
//     }

//     const { username, password } = this.state;
//     const { error } = this.props;

//     return (
//       <div id="login">
//         <form id="login-form" onSubmit={this.handleSubmit}>
//           <label>Login</label>
//           <input
//             required
//             type="text"
//             name="username"
//             value={username}
//             onChange={this.onChangeUsername}
//           />
//           <label>Password</label>
//           <input
//             required
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.onChangePassword}
//           />
//           <button type="submit">Sign In</button>
//           <div className="error-message" hidden={!error}>
//             {error}
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   isAuthorized: Boolean(state.username),
//   error: state.errorMessage,
// });

// const mapDispatchToProps = (dispatch) => ({
//   logIn: (username, password) =>
//     dispatch({ type: "LOG_IN", payload: { username, password } }),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Login);

// import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

// const Login = (props, { isAuthorized, error }) => {
//   let [state, setState] = useState({
//     username: "",
//     password: "",
//   })

//   function onChangeUsername(event) {
//     const {
//       target: { value },
//     } = event;

//     setState({ username: value });
//   };

//   function onChangePassword(event) {
//     const {
//       target: { value },
//     } = event;

//     setState({ password: value });
//   };

//   function handleSubmit(e) {
//     e.preventDefault();
//     const { username, password } = state;

//     props.logIn(username, password);
//   };

//   if (isAuthorized) {
//     return <Redirect to="/" />;
//   }

//   const { username, password } = state;

//   return (
//     <div id="login">
//       <form id="login-form" onSubmit={handleSubmit}>
//         <label>Login</label>
//         <input
//           required
//           type="text"
//           name="username"
//           value={username}
//           onChange={onChangeUsername}
//         />
//         <label>Password</label>
//         <input
//           required
//           type="password"
//           name="password"
//           value={password}
//           onChange={onChangePassword}
//         />
//         <button type="submit">Sign In</button>
//         <div className="error-message" hidden={!error}>
//           {error}
//         </div>
//       </form>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   isAuthorized: Boolean(state.username),
//   error: state.errorMessage,
// });

// const mapDispatchToProps = (dispatch) => ({
//   logIn: (username, password) =>
//     dispatch({ type: "LOG_IN", payload: { username, password } }),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Login);

// Login.propTypes = {
//   isAuthorized: PropTypes.bool,
//   logIn: PropTypes.func.isRequired,
//   error: PropTypes.string,
// };


// import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { Redirect } from "react-router-dom";

// const Athorization = (WrappedComponent) => {
//   const WithAuthorization = (props, { isAuthorized }) => {

//     if (!isAuthorized) {
//       return <Redirect to="/login" />;
//     }

//     return <WrappedComponent {...props} />;
//   }

//   const mapStateToProps = (state) => ({
//     isAuthorized: Boolean(state.username),
//   });

//   return connect(mapStateToProps)(WithAuthorization);
// };

// export default Athorization;

// Athorization.propTypes = {
//   isAuthorized: PropTypes.bool,
// };