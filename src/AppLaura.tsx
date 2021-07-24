import logo from "./logo.svg";
import './App.css';
import React, { useEffect, useState } from "react";

export const printSomethingElse = () => {
  console.log('hola me llamo carolta');
}

const arrayNames = ["steven", "lulu", "zorra"];
const arrayNumeros = [909090, 7677667, 323232];

// let edad = 10;

function AppLaura() {
  // const [numero, setNumero] = useState(10);
  const [numero, setNumero] = useState<string | number>(10);
  const [numeroCambiado, setNumeroCambiado] = useState<boolean>(false);


  useEffect(() => {
    if (numero != 10) {
      setNumeroCambiado(true);
    }
    else {
      setNumeroCambiado(false);
    }
  }, [numero])


  const cambiarEdad = (nuevoNumero: string) => {
    setNumero(nuevoNumero);
  }

  console.log(numero);

  return (
    <div className="App">
      <br />
      <input type="text" value={numero} onChange={e => cambiarEdad(e.target.value)} />
      <button>
        cambia edades algo
      </button>
      <strong>ha cambiado:{JSON.stringify(numeroCambiado)}</strong>
      <br />
      <br />
      <br />
      {numeroCambiado &&
        <>
          <span>{numero}</span> <br />
          <span>{numero}</span><br />
          <span>{numero}</span><br />
        </>
      }

    </div>
  );
}

export default AppLaura;
