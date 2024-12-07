"use client";

import { useState } from 'react';

const SizeCalculator = () => {
  const [gender, setGender] = useState('female');
  const [height, setHeight] = useState('');
  const [chest, setChest] = useState('');
  const [waist, setWaist] = useState('');
  const [hips, setHips] = useState('');
  const [sizeTop, setSizeTop] = useState('');
  const [sizeBottom, setSizeBottom] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');

  const calculateSize = () => {
    if (!height && !chest && !waist && !hips) {
      setMessage("Please enter your measurements.");
      setShowPopup(false);
      return;
    }

    let sizeTop;
    let sizeBottom;

    if (gender === 'female') {
      if (chest && chest < 84) sizeTop = 'XS (Japan: S, US: 2, EU: 32)';
      else if (chest && chest < 92) sizeTop = 'S (Japan: M, US: 4, EU: 34)';
      else if (chest && chest < 100) sizeTop = 'M (Japan: L, US: 6, EU: 36)';
      else if (chest && chest < 108) sizeTop = 'L (Japan: XL, US: 8, EU: 38)';
      else if (chest) sizeTop = 'XL (Japan: XXL, US: 10, EU: 40)';
    } else {
      if (chest && chest < 92) sizeTop = 'S (Japan: S, US: 34, EU: 44)';
      else if (chest && chest < 100) sizeTop = 'M (Japan: M, US: 36, EU: 46)';
      else if (chest && chest < 108) sizeTop = 'L (Japan: L, US: 38, EU: 48)';
      else if (chest) sizeTop = 'XL (Japan: XL, US: 40, EU: 50)';
    }

    if (waist && waist < 70) sizeBottom = 'S (Japan: M, US: 28, EU: 36)';
    else if (waist && waist < 78) sizeBottom = 'M (Japan: L, US: 30, EU: 38)';
    else if (waist && waist < 86) sizeBottom = 'L (Japan: XL, US: 32, EU: 40)';
    else if (waist) sizeBottom = 'XL (Japan: XXL, US: 34, EU: 42)';

    if (sizeTop || sizeBottom) {
      setMessage("");
      setSizeTop(sizeTop || "Not calculated");
      setSizeBottom(sizeBottom || "Not calculated");
      setShowPopup(true);
    } else {
      setMessage("Please enter more measurements to calculate size.");
      setShowPopup(false);
    }
  };

  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) > 0 && Number(value) <= 250)) {
      setter(value);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="text-black max-w-lg mx-auto p-6 border border-gray-300 rounded bg-white shadow-lg mt-10 relative">
      <h2 className="text-2xl font-bold text-center mb-4">Size Calculator</h2>

      <p className="text-gray-600 mb-4 text-center">
        Enter your measurements below, and we’ll calculate your size for tops and pants. Data based on international sizing standards.
      </p>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${gender === 'female' ? 'bg-black text-white' : 'bg-gray-200 text-black'} hover:bg-zinc-700`}
          onClick={() => setGender('female')}
        >
          Female
        </button>
        <button
          className={`px-4 py-2 rounded ${gender === 'male' ? 'bg-black text-white' : 'bg-gray-200 text-black'} hover:bg-zinc-700`}
          onClick={() => setGender('male')}
        >
          Male
        </button>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span>Height (cm)</span>
          <input
            type="number"
            value={height}
            onChange={handleInputChange(setHeight)}
            className="mt-2 px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:border-black"
            min="1"
            max="250"
          />
        </label>
        <label className="block">
          <span>Chest (cm)</span>
          <input
            type="number"
            value={chest}
            onChange={handleInputChange(setChest)}
            className="mt-2 px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:border-black"
            min="1"
            max="250"
          />
        </label>
        <label className="block">
          <span>Waist (cm)</span>
          <input
            type="number"
            value={waist}
            onChange={handleInputChange(setWaist)}
            className="mt-2 px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:border-black"
            min="1"
            max="250"
          />
        </label>
        <label className="block">
          <span>Hips (cm)</span>
          <input
            type="number"
            value={hips}
            onChange={handleInputChange(setHips)}
            className="mt-2 px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:border-black"
            min="1"
            max="250"
          />
        </label>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={calculateSize}
          className="px-4 py-2 bg-black text-white rounded hover:bg-zinc-700"
        >
          Calculate Size
        </button>
      </div>

      {message && (
        <div className="mt-4 text-center text-red-500">
          {message}
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-700 ease-in-out scale-75 rotate-3"
            style={{ animation: 'popupAnimation 0.7s forwards' }}
          >
            <h3 className="text-lg font-semibold text-center">Your Size</h3>
            <p className="mt-2 text-center">Top Size: {sizeTop}</p>
            <p className="text-center">Bottom Size: {sizeBottom}</p>
            <button
              onClick={closePopup}
              className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-zinc-700 block mx-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes popupAnimation {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-15deg);
          }
          60% {
            opacity: 1;
            transform: scale(1.05) rotate(3deg);
          }
          100% {
            transform: scale(1) rotate(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SizeCalculator;
