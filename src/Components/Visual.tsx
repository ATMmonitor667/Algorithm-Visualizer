import React, { useState, useEffect } from 'react';
import './Visual.css';
import Bar from './Bar';
import SelectionSort from '../utils/SelectionSort'
import BubbleSort from '../utils/BubbleSort';

interface VisualProps {
  numbers: number[];
  sortFunction: (arr: number[]) => number[];
}

const Visual: React.FC<VisualProps> = ({ numbers, sortFunction }) => {
  const [array, setArray] = useState<number[]>(numbers);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    setArray(numbers);
  }, [numbers]);

  const handleSort = async () => {
    setIsSorting(true);
    const sortedArray = await sortFunction([...array]);
    setArray(sortedArray);
    setIsSorting(false);
  };

  return (
    <div>
      <div className="bar-container">
        {array.map((value, index) => (
          <Bar
            key={index}
            className="bar"
            style={{
              height: `${value}%`,
              width: '10px',
              backgroundColor: isSorting ? 'red' : 'blue',
              margin: '0 2px',
            }}
          />
        ))}
      </div>
      <button onClick={handleSort} disabled={isSorting}>Sort</button>
    </div>
  );
};

export default Visual;