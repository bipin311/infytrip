import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCteC_AEVq7UYPJQfDP4YBkajxJQrADrTw",
  authDomain: "infytrip-dev.firebaseapp.com"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();

    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () => {
    this.auth.signInWithRedirect(this.googleProvider);
  };

  doSignInWithFacebook = () => {
    this.auth.signInWithRedirect(this.facebookProvider);
  };

  getRedirectResult = () => {
    return Promise.resolve(this.auth.getRedirectResult());
  };

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
