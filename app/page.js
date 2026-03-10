'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomeLogin() {

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addUser = async () => {
    await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    });

    setUserName('');
    setEmail('');
    setPassword('');
  };

  const deleteUsers = async () => {
    await fetch('/api', {
      method: 'DELETE'
    });

    alert("All users deleted");
    location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="bg-gray-950 p-8 rounded-xl shadow-lg w-80 space-y-4 border border-gray-600">

        <h1 className="text-2xl font-bold text-center">User Form</h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-800 border border-gray-700"
        />

        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-800 border border-gray-700"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-800 border border-gray-700"
        />

        <button
          onClick={addUser}
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded-md"
        >
          Add User
        </button>

        <button
          onClick={deleteUsers}
          className="w-full bg-red-600 hover:bg-red-700 p-2 rounded-md"
        >
          Delete All Users
        </button>

        <Link href="/api">
          <button className="w-full bg-gray-700 hover:bg-gray-600 p-2 rounded-md">
            View Users Data
          </button>
        </Link>

      </div>
    </div>
  );
}