import React, { Component } from 'react';
import reactMixin from "react-mixin";
import Firebase from "firebase";
import ReactFire from "reactfire";

import World from "./World";

class Game extends Component {
  constructor(props) {
    super(props);

    this.handleResize = this.handleResize.bind(this);
    this.startVR      = this.startVR.bind(this);
    this.stopVR       = this.stopVR.bind(this);

    Firebase.initializeApp({
      authDomain: "vuoro-c652e.firebaseapp.com",
      apiKey: "AIzaSyDqCGyag9AHG9FqPM1pXZf1LomcTopM9Bc",
      databaseURL: "https://vuoro-c652e.firebaseio.com",
    });

    this.state = {
      inVR: false,
      width: window.innerWidth,
      height: window.innerHeight,
      server: null,
    };
  }

  componentWillMount() {
    this.bindAsObject(
      Firebase.database().ref("server"),
      "server",
      function(error) {
        console.log("Firebase subscription cancelled:")
        console.log(error);
      }
    );
  }

  componentDidMount() {
    window.addEventListener("enter-vr", this.startVR);
    window.addEventListener("exit-vr", this.stopVR);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener("enter-vr", this.startVR);
    window.removeEventListener("exit-vr", this.stopVR);
  }

  handleResize() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  startVR() {
    this.setState({
      inVR: true,
    });

    console.log("Setting inVR to " + this.state.inVR);
  }

  stopVR() {
    this.setState({
      inVR: false,
    });

    console.log("Setting inVR to " + this.state.inVR);
  }

  render() {
    return (
      <World
        {...this.state}
      />
    );
  }
}

reactMixin(Game.prototype, ReactFire);
export default Game;
