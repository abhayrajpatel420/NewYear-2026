import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './index.css';

// Aap yahan koi bhi cute GIF ka link daal sakte ho
const cuteGifs = {
  asking: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmM2Z202aHJrMzQ0YjJ3Y3ZtNnd4Y2J4Y2Z6Y2Z6Y2Z6Y2Z6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif", // Cute Bear Asking
  celebration: "https://media.giphy.com/media/T86i6yDyOYz7J6AkTG/giphy.gif" // Kiss/Happy Bear
};

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);

  // Jab "No" button par mouse aayega, ye function chalega
  const runAway = () => {
    const x = Math.random() * 200 - 100; // -100 se 100 px left/right
    const y = Math.random() * 200 - 100; // -100 se 100 px up/down
    setNoBtnPosition({ x, y });
    setHasMoved(true);
  };

  // Agar wo mobile pe hain aur touch karein
  const handleNoClick = (e) => {
    e.preventDefault(); // Click hone hi nahi denge
    runAway();
  };

  return (
    <>
      {/* Background Hearts */}
      <div className="bg-hearts">
        {[...Array(20)].map((_, i) => (
          <span 
            key={i} 
            className="heart" 
            style={{ 
              left: `${Math.random() * 100}%`, 
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`
            }} 
          />
        ))}
      </div>

      <div className="container">
        {!accepted ? (
          // Asking Phase
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="gif-container">
              <img src={cuteGifs.asking} alt="Cute asking bear" />
            </div>
            
            {/* Aap yahan apna text change kar sakte hain */}
            <h1>Will you contain my world in 2026? 🥺</h1>
            <p>I promise to debug all your problems.</p>

            <div className="buttons" style={{ position: 'relative', height: '100px' }}>
              
              <button className="yes-btn" onClick={() => setAccepted(true)}>
                YES! ❤️
              </button>

              <motion.button
                className="no-btn"
                onMouseEnter={runAway} // Mouse aate hi bhagega
                onTouchStart={handleNoClick} // Phone pe touch karte hi bhagega
                animate={hasMoved ? { x: noBtnPosition.x, y: noBtnPosition.y } : {}}
                transition={{ type: "spring", stiffness: 300 }}
                style={ hasMoved ? { position: 'relative' } : { position: 'relative' }} 
              >
                No 😤
              </motion.button>

            </div>
          </motion.div>
        ) : (
          // Accepted Phase
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="gif-container">
              <img src={cuteGifs.celebration} alt="Celebration" />
            </div>
            <h1>YAYYY! I Knew It! 🎉❤️</h1>
            <p>Best New Year Gift Ever!</p>
            <p style={{fontSize: '0.8rem', marginTop: '20px'}}>See you in 2026 (Logic: You can't say no) 😉</p>
          </motion.div>
        )}
      </div>
    </>
  );
}