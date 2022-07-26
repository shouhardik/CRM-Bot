import React from "react";

const AuthContext = React.createContext();

export function useAuth()
{
  return React.useContext(AuthContext);
}
export function GithubAuthProvider(props)
{
  const auth = React.useContext(AuthContext);
  const signInWithGithub = () => {
    const provider = new auth.GithubAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>;
}
export function GoogleAuthProvider(props)
{
  const auth = React.useContext(AuthContext);
  const signInWithGoogle = () => {
    const provider = new auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>;
}