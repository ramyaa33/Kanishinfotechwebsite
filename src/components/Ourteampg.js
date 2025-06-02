import React, { useEffect, useState } from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi'// Import icon
import TeamCaseStudy from './ourteam';
import Footer from './Footer';
// import TestimonialScroller from './Scrollpg';

const GRID_ROWS = 10;
const GRID_COLS = 10;

const TeamBackgroundWithContent = () => {
  const [filledSquares, setFilledSquares] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newFilled = [];
      const totalSquares = GRID_ROWS * GRID_COLS;

      while (newFilled.length < 5) {
        const randIndex = Math.floor(Math.random() * totalSquares);
        if (!newFilled.includes(randIndex)) newFilled.push(randIndex);
      }

      setFilledSquares(newFilled);
      setTimeout(() => setFilledSquares([]), 1500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section>
    <div className="team-background-container">
      <div className="grid-background">
        {Array.from({ length: GRID_ROWS * GRID_COLS }, (_, index) => (
          <div
            key={index}
            className={`grid-square ${filledSquares.includes(index) ? 'filled' : ''}`}
          ></div>
        ))}
      </div>  

      <div className="team-content">
        <GiMagnifyingGlass  className="team-icon" />
        <h1>✌️ Empowering your business with precise data solutions.</h1>
        <p>🎯 "Our team turns complex challenges into simple, effective solutions—because we believe great results come from collaboration, not complication."</p>
      </div>


<div className="team-content-video">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-element"
      >
        <source src="/img/kanish logo video (1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    </div>
<TeamCaseStudy></TeamCaseStudy>

{/* <TestimonialScroller></TestimonialScroller> */}
  </section>
  <Footer></Footer>
</>
  );
};

export default TeamBackgroundWithContent;
