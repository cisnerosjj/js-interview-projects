import React, { useState } from 'react';
import { login } from './../components/auth/Login'

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="email"
            value={username}
            name="username"
            placeholder="Username"
            required
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            value={password}
            type="password"
            name="password"
            placeholder="Contraseña"
            required
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label />
          <button type="submit">
            Entrar
          </button>
        </div>
        {/* TODO: Register */}
        {/* <div>
          <label />
          <div>
            Aún sin cuenta?{' '}
            <Link to={`auth/register`}>Regístrate</Link>
          </div>
        </div> */}
      </form>
    </>
  );
}
