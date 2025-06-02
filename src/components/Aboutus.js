import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';

const Aboutus = () => {
  useEffect(() => {
    // Initialize AOS with options for smooth animations on scroll
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false,    // Keep triggering the animations on scroll
      offset: 100,    // Delay animations a little bit (optional)
    });

    // Scroll event listener to animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const onScroll = () => {
      progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          // Get the percentage value from the `aria-valuenow` attribute
          const targetWidth = bar.getAttribute('aria-valuenow');

          if (parseInt(bar.style.width) < targetWidth) {
            // Slowly fill the progress bar from 0 to targetWidth
            let width = parseInt(bar.style.width);
            const interval = setInterval(() => {
              if (width < targetWidth) {
                width++;
                bar.style.width = `${width}%`;
              } else {
                clearInterval(interval); // Stop the interval once the target is reached
              }
            }, 10); // Adjust speed here by changing the interval
          }
        }
      });
    };
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* About Section */}
      <section id="about" className="about section py-5" data-aos="fade-up" data-aos-offset="200">
  <div className="container">
    <div className="row position-relative align-items-center">
      {/* Content column */}
      <div className="col-lg-6 col-12" data-aos="fade-right" data-aos-delay="100">
        <h2 className="inner-title">Our Journey</h2>
        <div className="our-story">
          <h3 data-aos="zoom-in" data-aos-delay="200">Our Story</h3>
          <p className="fs-5 fs-md-4 fs-lg-3 text-black">
           Kanish Infotech is a leading Data Entry Service Provider in Madurai, Tamilnadu, India with 5 years 
           of experience in providing best quality data entry services. offers a wide range of offshore services 
           all under one roof and a one-stop basis including Data Entry, Specializes in digitizing data from handwritten
           documents and manuscripts, Data Mining Services, Scanning / OCR Services, Form Processing Services, Form Filling, 
           Conversion, Transcribing handwritten document & Document Management Services at affordable rates.
          </p>

          <ul className="list-unstyled fw-bold">
            <li data-aos="fade-left" data-aos-delay="300"><i className="bi bi-check-circle text-success me-2"></i> Looking for reliable data entry solutions?</li>
            <li data-aos="fade-left" data-aos-delay="400"><i className="bi bi-check-circle text-success me-2"></i> We make handling data simple and stress-free.</li>
            <li data-aos="fade-left" data-aos-delay="500"><i className="bi bi-check-circle text-success me-2"></i> Let us take the complexity out of your data.</li>
          </ul>

          <p className=" text-black" data-aos="fade-up" data-aos-delay="600">
            At Kanish Infotech, client data confidentiality and security are our top priorities...
          </p>

          {/* <div className="watch-video d-flex align-items-center gap-2 mt-3" data-aos="fade-left" data-aos-delay="700">
            <i className="bi bi-play-circle fs-3 text-primary"></i>
            <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="text-decoration-none stretched-link" target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          </div> */}
        </div>
      </div>

      {/* Image column */}
      <div className="col-lg-6 col-12 mb-4 mb-lg-0" data-aos="zoom-out" data-aos-delay="300">
        <img src="img/about.jpg" alt="About" className="img-fluid rounded" />
      </div>
    </div>
  </div>
</section>

      {/* Our Experience Section */}
      <section className="experience py-5 bg-light" data-aos="fade-up" data-aos-offset="200">
        <div className="container">
          <div className="text-center mb-4" data-aos="zoom-in">
            <h2 className="fw-bold">OUR EXPERIENCE</h2>
            <div className="border-bottom border-success mx-auto mb-3" style={{ width: '60px', height: '3px' }}></div>
            <p className="text-muted">
              We are committed to maintaining the highest standards of client data security and confidentiality.
            </p>
          </div>

          <div className="row">
            <div className="col-md-6" data-aos="fade-right" data-aos-once="true">
              <h6>DATA PROCESSING <span className="float-end">100%</span></h6>
              <div className="progress mb-3" data-aos="progress-bar" data-aos-duration="1000">
                <div className="progress-bar bg-success" style={{ width: '0%' }} aria-valuenow="100"></div>
              </div>

              <h6>TYPESSETTING <span className="float-end">98%</span></h6>
              <div className="progress mb-3" data-aos="progress-bar" data-aos-duration="1000">
                <div className="progress-bar bg-success" style={{ width: '0%' }} aria-valuenow="98"></div>
              </div>

              <h6>DESKTOP PUBLISHING <span className="float-end">97%</span></h6>
              <div className="progress mb-3" data-aos="progress-bar" data-aos-duration="1000">
                <div className="progress-bar bg-success" style={{ width: '0%' }} aria-valuenow="97"></div>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-left" data-aos-once="true">
              <h6>IMAGE EDITING <span className="float-end">90%</span></h6>
              <div className="progress mb-3" data-aos="progress-bar" data-aos-duration="1000">
                <div className="progress-bar bg-success" style={{ width: '0%' }} aria-valuenow="90"></div>
              </div>

              <h6>TRANSCRIBING HANDWRITTEN DOCUMENT <span className="float-end">95%</span></h6>
              <div className="progress mb-3" data-aos="progress-bar" data-aos-duration="1000">
                <div className="progress-bar bg-success" style={{ width: '0%' }} aria-valuenow="95"></div>
              </div>

              <h6>PHOTOSHOP <span className="float-end">95%</span></h6>
              <div className="progress mb-3" data-aos="progress-bar" data-aos-duration="1000">
                <div className="progress-bar bg-success" style={{ width: '0%' }} aria-valuenow="95"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Aboutus;

