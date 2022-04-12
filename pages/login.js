import React, { useState } from 'react'
import Head from 'next/head'
import { getRedirectResult, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from '../lib/firebase'

const LoginPage = () => {

  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);

  const userSignIn = () => {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        user = result.user;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  // Authentication Observer
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserId(user.uid);
      setUsername(user.displayName);
    } else {
      setUserId(null);
    }
  });

  return (
    <div>
        <Head>
        <title>Login | Daelius</title>
        <meta name="description" content="Dungeons & Dragons campaign management system." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {userId ?
        <>
          <h1>Signed in as {username}</h1>
          <button onClick={() => signOut(auth)}>Sign Out</button>
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