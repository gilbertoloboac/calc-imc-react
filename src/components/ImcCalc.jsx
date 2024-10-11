import Button from './Button';
import './ImcCalc.css';

const ImcCalc = () => {
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
                        placeholder="Exemplo 70,5" />

                    </div> 
                        <div id='form-control'>
                        <label htmlFor="weight">Peso</label>
                        <input 
                        type="text"
                        name="weight"
                        id="height"
                        placeholder="Exemplo 1,75" />
                </div>  
                </div>
               
                <div className='action-control'>
                    <Button id="calc-bth" text="Calcular"/>
                    <Button id="clear-btn" text="Limpar"/>
                </div>
            </form>
        </div>
    )
}

export default ImcCalc;