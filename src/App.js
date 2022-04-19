import React,{useState} from 'react'

/*  //*CAMBIAR NOMBRE
const App = () => {
  const [nombre, setNombre] = useState('Juan');
  const cambiar = () => {
    setNombre('Pedro');
  }
  return (
    <div>
      <h1>Me llamo {nombre}</h1>
      <button onClick={cambiar}>Cambiar Nombre</button>
    </div>
  )
} */

/* //*CONTADOR
  const App = () => {
  const [contador, setContador] = useState(0);
  const aumentar = () => {
    setContador(contador + 1);
  }
  const disminuir = () => {
    setContador(contador - 1);
  }
  const reestablecer = () => {
    setContador(0);
  }
  return (
    <div>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
      <button onClick={reestablecer}>Reestablecer</button>
      <h1>{contador}</h1>
    </div>
  ) 
}*/

const App = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const sumar = () => {
    setResultado(Number(numero1) + Number(numero2));
  }

  const modificar1 = (e) => {
    setNumero1(e.target.value);
  }

  const modificar2 = (i) => {
    setNumero2(i.target.value);
  }

  return (
    <div>
      <input type="number" value={numero1} onChange={modificar1}/> +
      <input type="number" value={numero2} onChange={modificar2}/> =
      <input type="number" value={resultado} readOnly/>
      <button onClick={sumar}>Sumar</button>
    </div>
  ) 
}


export default App