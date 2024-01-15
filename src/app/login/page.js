'use client';
import { signIn } from 'next-auth/react';

import Image from 'next/image';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginInProgress, setLoginInProgress] = useState(false);

  async function handleFormSubmit(evt) {
    evt.preventDefault();

    setLoginInProgress(true);

    await signIn('credentials', { email, password, callbackUrl: '/' });

    setLoginInProgress(false);
  }

  return (
    <section className="login">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          name={email}
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          disabled={loginInProgress}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
          disabled={loginInProgress}
        />
        <button type="submit" disabled={loginInProgress}>
          Login
        </button>
        <div className="my-4 text-center text-gray-500">
          Or login with Provider
        </div>
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="flex gap-4 justify-center"
        >
          <Image src="/google.png" alt="google" width={24} height={24} />
          Login with Google
        </button>
      </form>
    </section>
  );
}
