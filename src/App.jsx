import React, {useState} from "react"
import { GlobalStyle, Container, Box1, TituloImc, SubTitulo, InputPA, Btn, Mensagem } from "./Components/Style.jsx";

function App(){

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [efeitos, setEfeitos] = useState("");
  const [imcMessage, setImcMessage] = useState("");


  function calcularIMC() {

    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (altura === "" && peso === "") {
      alert("[ERROR 404] Por Favor, preencha o peso  e a altura corretamente !");
    } else if (!alt) {
      alert("[ERROR 404] Por Favor, preencha o peso  e a altura corretamente !");

    } else if (imc < 16.9) {
      setMensagem(`Você está muito abaixo do peso !`);
      setEfeitos(`Efeitos colaterais: Queda de cabelo, infertilidade, ausência menstrual.`);
      setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);

    } else if (imc >= 17 && imc < 18.4) {
      setMensagem(`Você está Abaixo do peso !`);
      setEfeitos(`Efeitos colaterais:Fadiga, stress, ansiedade.`);
      setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);

    } else if (imc >= 18.5 && imc < 24.9) {
      setMensagem(`Você está com peso normal !`);
      setEfeitos(`Efeitos colaterais: Menor risco de doenças cardíacas e vasculares.`);
      setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);

    } else if (imc >= 25 && imc < 29.9) {
      setMensagem(`Você está acima do peso !`);
      setEfeitos(`Efeitos colaterais: Menor risco de doenças cardíacas e vasculares.`);
      setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);

    } else if (imc >= 30 && imc < 34.9) {
      setMensagem(`Você está com Obesidade Grau I !`);
      setEfeitos(`Efeitos colaterais: Apneia do sono, falta de ar.`);
      setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);

    } else if (imc >= 35 && imc < 40) {
      setMensagem(`Você está com Obesidade Grau II !`);
      setEfeitos(`Efeitos colaterais: Diabetes, angina, infarto, aterosclerose`);
      setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
    } else if (imc >= 40) {
      setMensagem(`Você está com Obesidade Grau III !`);
      setEfeitos(`Efeitos colaterais: Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC.`);
      setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
    }
    setPeso("");
    setAltura("");
  }

  return(
    <Container>
      <GlobalStyle/>
      
        <Box1>
        <TituloImc>Calculadora de IMC</TituloImc>
        <SubTitulo>Vamos calcular seu IMC?</SubTitulo>
        <InputPA 
        type="text" 
        placeholder="Peso em [KG] Ex: 75"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}

        />
        <InputPA
        type="text"
        placeholder="Altura em [CM] Ex: 170"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        />
        <Btn onClick={calcularIMC}>Calcular</Btn>
        <Mensagem>
        {mensagem} 
          {efeitos} 
          {imcMessage}
        </Mensagem>
      </Box1>
    </Container>
  )
}
export default App