import { useState } from "react";
import {Calc, Table, Inputs, Result, Ul} from "./styled.js"

export default function Calculator() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [total, setTotal] = useState("");
  const [magreza, setMagreza] = useState(false)
  const [normal, setNormal] = useState(false)
  const [obesidade, setObesidade] = useState(false)
  const [sobrepeso, setSobrepeso] = useState(false)
  const [obesidadegrave, setObesidadeGrave] = useState(false)
  return (
    <Calc>
      <h1>Calculadora de IMC</h1>
      <Inputs>
        <div>
          <p>Altura</p>
          <input value={altura} onChange={(e) => dot(e)} />
          <button onClick={() => clean()}>Limpar</button>
        </div>
        <div>
          <p>Peso</p>
          <input
            value={peso}
            onChange={(e) => setPeso(Number(e.target.value))}
          />
          <button onClick={() => exec()}>Calcular</button>
        </div>
      </Inputs>

      <Result>Seu IMC é: {total}</Result>
      <Table>
        <Ul>
          <li>IMC</li>
          <li>CLASSIFICAÇÃO</li>
          <li>GRAU</li>
        </Ul>
        <Ul grau={magreza}>
          <li>MENOR QUE 18,5</li>
          <li>MAGREZA</li>
          <li>0</li>
        </Ul>
        <Ul grau={normal}>
          <li>ENTRE 18,5 E 24,9</li>
          <li>NORMAL</li>
          <li>0</li>
        </Ul>
        <Ul grau={sobrepeso}>
          <li>ENTRE 25 E 29,9</li>
          <li>SOBREPESO</li>
          <li>I</li>
        </Ul>
        <Ul grau={obesidade}>
          <li>ENTRE 30 E 39,9</li>
          <li>OBESIDADE</li>
          <li>II</li>
        </Ul>
        <Ul grau={obesidadegrave}>
          <li>MAIOR QUE 40</li>
          <li>OBESIDADE GRAVE</li>
          <li>III</li>
        </Ul>
      </Table>
    </Calc>
  );
  function dot(e) {
    let valor = e.target.value.replace(",", ".");
    setAltura(valor);
  }
  function clean() {
    setAltura("");
    setPeso("");
    setTotal("");
  }
  function exec() {
    let x = peso / altura ** 2;
    if (x > 0) {
      setTotal(x.toFixed(2));
    }
    if (x<18.5){
        setNormal(false)
        setSobrepeso(false)
        setObesidade(false)
        setObesidadeGrave(false)
        setMagreza(true)
    }
    if (x>=18.5&&x<25){
        setMagreza(false)
        setSobrepeso(false)
        setObesidade(false)
        setObesidadeGrave(false)
        setNormal(true)
    }
    if (x>=25&&x<30){
        setNormal(false)
        setMagreza(false)
        setObesidade(false)
        setObesidadeGrave(false)
        setSobrepeso(true)
    }
    if (x>=30&&x<40){
        setNormal(false)
        setSobrepeso(false)
        setMagreza(false)
        setObesidadeGrave(false)
        setObesidade(true)
    }
    if (x>=40){
        setNormal(false)
        setSobrepeso(false)
        setObesidade(false)
        setMagreza(false)
        setObesidadeGrave(true)
    }
  }
}


