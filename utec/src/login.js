import React, { useState } from 'react';
import './css/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de autenticação do usuário
    };

    return (
        <div className="login-container">
            <h2>Tela de Login</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default Login;
