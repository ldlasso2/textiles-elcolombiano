import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Avatar from "@material-ui/core/Avatar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import '../App.css';


export function Login() {

  const provider = new firebase.auth.GoogleAuthProvider();
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email)
        console.log("estas logueado")

      } else {
        console.log("no logueado")
      }
    })
  }, [])

  const signInWithGoogle = () => {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log("estoy logeado con google")
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = error.credential
        console.log(`error en login errorCode:${errorCode}, msg:${errorMessage}`)
      });
  }

  return (
    <div className="App container">
      <Card className="card">
        <CardContent>
          <div>
            <b>Iniciar sesión</b>
            <p> Bienvenido a nuestra plataforma virtual </p>
          </div>
          <Button
            variant="contained"
            color="inherit"
            startIcon={
              <Avatar
                src={
                  "https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png"
                }
              />
            }
            onClick={signInWithGoogle}
          >
            Iniciar Con Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}