import React, { useEffect } from 'react';
import About from './About'; // same folder
import Footer from './Footer';
import AchievementsSection from './Achive';
import Servicess from './servicess';

const Firstpg = () => {
  useEffect(() => {
    const businessWords = ['Business', 'Enterprise', 'Organization', 'Software Development'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 50;
    const delay = 1800;
    const typingElement = document.querySelector('.typing-container');

    function typeEffect() {
      const currentWord = businessWords[wordIndex];

      if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, delay);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % businessWords.length;
        setTimeout(typeEffect, 300);
      } else {
        setTimeout(typeEffect, isDeleting ? 50 : speed);
      }
    }

    typeEffect();
  }, []);

  return (
    <div>
      <section
  id="hero"
  className="hero section"
  style={{
  backgroundImage: `url("/img/hero-carousel/generative-ai-business-board-meeting-director-employees-office-businesspeople-around-table-planing-start-up-project-279982755.webp")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: "0",
    height: '100vh',
    color: 'white',
  }}
>
  <div className="container h-100 d-flex flex-column justify-content-center align-items-start">
    <h1 className="animated text-black mb-4">
      Quality is our path to produce and expand the{' '}
      <span className="typing-container mark text-warning">Business.</span>
    </h1>
    <h6 className="d-none d-sm-block mb-4">
      Kanish Infotech located at the South India's Temple City Madurai, Started its Operations From March 2017.
      We specialize in
    </h6>
    <a href="/about" className="btn-get-started">
      Read More
    </a>
  </div>
</section>

      <About />
      <AchievementsSection></AchievementsSection>
      <Servicess></Servicess>
      <Footer></Footer>
    </div>
  );
};

export default Firstpg;
