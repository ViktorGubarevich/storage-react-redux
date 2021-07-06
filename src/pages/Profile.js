import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { SIGN_OUT } from "../actions/storageApi";

function Profile(props) {

  const signOut = () => {
    props.signOut();
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
        <button onClick={signOut}>Sign out</button>
      </div>
    </div>
  );

}

const mapStateToProps = (state) => ({
  username: state.username,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch({ type: SIGN_OUT }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

Profile.propTypes = {
  signOut: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};