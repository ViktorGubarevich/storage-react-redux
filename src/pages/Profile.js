import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { LOGOUT } from "../_constants/user.constants";

function Profile(props) {
  const logOut = () => {
    props.logOut();
  };

  return (
    <div>
      <div className="header profile">
        <h2>Profile</h2>
      </div>
      <div className="profile-info">
        <div className="group">
          <label>Username:</label>
          <span>{props.username}</span>
        </div>
        <button onClick={logOut}>Log out</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  username: state.username,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch({ type: LOGOUT }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

Profile.propTypes = {
  logOut: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};
