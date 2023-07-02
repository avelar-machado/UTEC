import React, { useState } from 'react';
import './css/form.css';

const Form = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [morada, setMorada] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [genero, setGenero] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar os dados do formulário
    };

    return (
        <div className="form-container">
            <h2>Formulário de Registro</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="morada">Morada:</label>
                    <input
                        type="text"
                        id="morada"
                        value={morada}
                        onChange={(e) => setMorada(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dataNascimento">Data de Nascimento:</label>
                    <input
                        type="date"
                        id="dataNascimento"
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="genero">Gênero:</label>
                    <select
                        id="genero"
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                    >
                        <option value="">Selecione</option>
                        <option value="cliente">Cliente</option>
                        <option value="feminino">Motorista</option>
                    </select>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Form;
