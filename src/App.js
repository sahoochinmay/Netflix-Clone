import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./views/HomeScreen";
import LoginScreen from "./views/LoginScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./views/ProfileScreen";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        dispatch(login({
          uid: user.uid,
          emial: user.email,
        }))
      } else {
        dispatch(logout())
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/profile" component={ProfileScreen} />
            <Route exact path="/" component={HomeScreen} />
          </Switch>
        )}
      </Router>
    </div>
  );
};

export default App;
