import { useState } from "react";
import ImcCalc from "./components/ImcCalc";
import './App.css';
import { data } from './data/data';
import ImcTable from './components/ImcTable';

function App() {
  const [imc, setImc] = useState('');
  const [info, setInfo] = useState('');
  const [infoClass, setInfoClass] = useState('');

  function calcImc(e, height, weight) {
    e.preventDefault();

    if (!weight || !height) return;

    const weightFloat = parseFloat(weight.replace(",", "."));
    const heightFloat = parseFloat(height.replace(",", "."));
    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    // Atualiza o estado com o resultado do IMC
    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass); // Aqui deve ser 'classification'
      }
    });
  }

  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} />
      )}
    </div>
  );
}

export default App;
