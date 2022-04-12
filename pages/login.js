import React from 'react'
import Head from 'next/head'
import { getRedirectResult, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from '../lib/firebase'

const LoginPage = () => {

  const user = null;

  const userSignIn = () => {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        user = result.user;
        console.log(result.user);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      user = user.uid;
      console.log(user);
      // ...
    } else {
      user = null;
      console.log("User is not signed in.");
    }
  });

  return (
    <div>
        <Head>
        <title>Login | Daelius</title>
        <meta name="description" content="Dungeons & Dragons campaign management system." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user ?
        <>
          <h1>Signed in as USERNAME</h1>
          <button>Sign Out</button>
        </>
        :
        <>
          <h1>Sign In</h1>
          <button onClick={() => userSignIn()}>Sign in with Google</button>
        </>
      }
    </div>
  )
}

export default LoginPage