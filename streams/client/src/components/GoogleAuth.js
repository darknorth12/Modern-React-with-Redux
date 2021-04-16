import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import { CLIENT_ID } from "./credentials.js";

const GoogleAuth = ({ isSignedIn, signOut, signIn }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          setAuth(window.gapi.auth2.getAuthInstance());
        });
    });
  }, []);

  useEffect(() => {
    const onAuthChange = (isSignedIn) => {
      if (isSignedIn) {
        signIn(auth.currentUser.get().getId());
      } else {
        signOut();
      }
    };
    if (auth) {
      onAuthChange(auth.isSignedIn.get());
      auth.isSignedIn.listen(() => onAuthChange(auth.isSignedIn.get()));
    }
  }, [auth, signIn, signOut]);

  const onSignOutClick = () => {
    auth.signOut();
  };

  const onSignInClick = () => {
    auth.signIn();
  };

  const renderAuthButton = () => {
    if (isSignedIn) {
      return (
        <button className="ui red google button" onClick={onSignOutClick}>
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui blue google button" onClick={onSignInClick}>
          <i className="google icon"></i>
          Sign In with Google
        </button>
      );
    }
  };

  return <div className="item">{renderAuthButton()}</div>;
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
