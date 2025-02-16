'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function FetchData() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://host.docker.internal:5000/data')
      .then(response => {
        setData(response.data.message); // Assuming the response has a message property
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Data from Node.js Server</h1>
      {data ? (
        <p className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-lg shadow-md text-left">{data}</p>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
      )}
    </div>
  );
}