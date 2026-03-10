'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function HomeLogin() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const UserDetails = async () => {
    await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    });

    setEmail('');
    setPassword('');
    setUserName('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="bg-gray-950 p-8 rounded-xl shadow-lg w-80 space-y-4 border-[0.5] border-gray-600">

        <h1 className="text-2xl font-bold text-center">Login</h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={UserDetails}
          className="w-full bg-blue-600 hover:bg-blue-700 transition p-2 rounded-md"
        >
          Submit
        </button>

        <Link href="/api">
          <button className="w-full bg-gray-700 hover:bg-gray-600 transition p-2 rounded-md">
            View Users Data
          </button>
        </Link>

      </div>
    </div>
  );
}