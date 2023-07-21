import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [numbers, setNumbers] = useState([]);

  const fetchNumbers = async () => {
    const urls = [
      'http://20.244.56.144/numbers/primes',
      'http://20.244.56.144/numbers/fibo',
      'http://20.244.56.144/numbers/odd',
      'http://20.244.56.144/numbers/rand'
    ];

    try {
      const response = await axios.get('http://localhost:8008/numbers', {
        params: { un: urls },
      });

      const { numbers } = response.data;
      setNumbers(numbers);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchNumbers}>Fetch Numbers</button>
      <div>
        <h2>Merged Unique Integers:</h2>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};




export default App;
