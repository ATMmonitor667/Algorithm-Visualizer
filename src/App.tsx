import React, { useState, useEffect } from 'react';
import Visual from './Components/Visual';
import './App.css';
import BubbleSort from './utils/BubbleSort';

function App() {
  const [numbers, setNumbers] = useState([50, 30, 70, 10, 90, 40, 60, 20, 80, 100]);
  const [sortFunction, setSortFunction] = useState(BubbleSort);

  useEffect(() => {
    const generateRandomNumbers = () => {
      const randomNumbers = Array(10).fill(0).map(() => Math.floor(Math.random() * 100));
      setNumbers(randomNumbers);
    };
    generateRandomNumbers();
  }, []);

  const handleSortChange = (newSortFunction) => {
    setSortFunction(newSortFunction);
  };

  return (
    <>

      <div>
        <h1>Sorting Visualizer</h1>
        <Visual numbers={numbers} sortFunction={sortFunction} />
        <button onClick={() => handleSortChange(BubbleSort)}>Bubble Sort</button>
        {/* Add more sort functions here */}
      </div>
    </>
  );
};

export default App
