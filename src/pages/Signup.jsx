import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import { firebaseAuth } from "../utils/firebase-config";
import Header from "../components/Header";
import {useNavigate } from "react-router-dom";
export default function Signup() {
  // Crear un estado
  // Mostrar  el boton de contraseña o el boton de inicio
  const [showPassword, setShowPassword] = useState(false);
  // Constante navegate
  const navigate = useNavigate();
  // Valores de Formulario
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  // Verificar en consola si funciona
  // // Controlador para manejar el inicio de sesion
  // const handleSignIn=async ()=>{
  //   console.log(formValues);
  // }
  // Mandar a firebase y crear usuario
  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
    } catch (err) {
      console.log(
        err
      ); /*Ayudara a detectar el error y no rompera la aplicacion*/
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    // Si hay un usuario actual navegaremos al componente / que es el componente netflix
    if (currentUser) navigate("/")
  })
  return (
    <Container showPassword={showPassword}>
      {/* Imagen de fondo */}
      <BackgroundImage />
      <div className="content">
        {/* Encabezado */}
        <Header login />
        {/* Cuerpo */}
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimikted movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}

            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          <button onClick={handleSignIn}>Sign Up</button>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
  }
  .body {
    gap: 1rem;
    .text {
      gap: 1rem;
      text-align: center;
      font-size: 1.7rem;
      h1 {
        padding: 0 25rem;
      }
    }
    .form {
      display: grid;
      grid-template-columns: ${({ showPassword }) =>
    showPassword ? "1fr 1fr" : "2fr 1fr"};
      width: 60%;
      input {
        color: #000;
        border: none;
        padding: 1.5rem;
        font-size: 1.2rem;
        border: 1px solid #000;
        &:focus {
          /*sistema de contorno*/
          outline: none;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: #fff;
        font-weight: bolder;
        font-size: 1.05em;
      }
    }
    button {
      padding: 0.5rem 1rem;
      background-color: #e50914;
      border: none;
      cursor: pointer;
      color: #fff;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1.05em;
    }
  }
`;
