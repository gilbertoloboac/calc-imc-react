import { useState } from 'react';
import Button from './Button';
import './ImcCalc.css';

const ImcCalc = ({ calcImc }) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    // Função que valida e aceita apenas números e vírgula
    const validDigit = (text) => {
        return text.replace(/[^0-9,]/g, "");
    };

    // Função para manipular a mudança de altura
    const handleHeightChange = (e) => {
        const updatedValue = validDigit(e.target.value);
        setHeight(updatedValue);
    };

    // Função para manipular a mudança de peso
    const handleWeightChange = (e) => {
        const updatedValue = validDigit(e.target.value);
        setWeight(updatedValue);
    };

    // Função para limpar o formulário
    const clearForm = (e) => {
        e.preventDefault();
        setHeight('');
        setWeight('');
    };

    return (
        <div id='calc-container'>
            <h2>Calculadora de IMC</h2>
            <form id='imc-form'>
                <div id='form-inputs'>
                    <div id='form-control'>
                        <label htmlFor="height">Altura</label>
                        <input
                            type="text"
                            name="height"
                            id="height"
                            placeholder="Exemplo: 1,75" 
                            onChange={handleHeightChange}
                            value={height}
                        />
                    </div>
                    <div id='form-control'>
                        <label htmlFor="weight">Peso</label>
                        <input
                            type="text"
                            name="weight"
                            id="weight"
                            placeholder="Exemplo: 70" 
                            onChange={handleWeightChange}
                            value={weight}
                        />
                    </div>
                </div>
                <div className='action-control'>
                    <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)} />
                    <Button id="clear-btn" text="Limpar" action={clearForm} />
                </div>
            </form>
        </div>
    );
};

export default ImcCalc;
