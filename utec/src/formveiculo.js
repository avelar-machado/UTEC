import React, { useState } from 'react';
import './css/veiculo.css';

const FormVeiculo = () => {
    const [tipoVeiculo, setTipoVeiculo] = useState('');
    const [velocidade, setVelocidade] = useState('');
    const [precoBase, setPrecoBase] = useState('');
    const [fatorFiabilidade, setFatorFiabilidade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para lidar com o envio do formulário
    };

    return (
        <div className="form-container">
            <h2>Formulário Veículo</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="tipoVeiculo">Tipo de Veículo:</label>
                    <input
                        type="text"
                        id="tipoVeiculo"
                        value={tipoVeiculo}
                        onChange={(e) => setTipoVeiculo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="velocidade">Velocidade:</label>
                    <input
                        type="number"
                        id="velocidade"
                        value={velocidade}
                        onChange={(e) => setVelocidade(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="precoBase">Preço Base:</label>
                    <input
                        type="number"
                        id="precoBase"
                        value={precoBase}
                        onChange={(e) => setPrecoBase(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fatorFiabilidade">Fator de Fiabilidade:</label>
                    <input
                        type="number"
                        id="fatorFiabilidade"
                        value={fatorFiabilidade}
                        onChange={(e) => setFatorFiabilidade(e.target.value)}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default FormVeiculo;
