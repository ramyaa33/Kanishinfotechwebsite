import React from "react";

const testimonials = [
  {
    message: "The current 50-seater setup is scalable and can be expanded based on operational needs or client requirements.🪑 🪑 ",
  },
  {
    message: "The company implemented a non-voice setup for its customer support operations, relying entirely on email, live chat, and ticketing systems to handle client inquiries without the need for phone-based communication.❤️",
  },
  {
    message: "Internet connectivity is provided via a 100 Mbps unlimited leased line with backup support, powered by both Airtel and ACT.🌐📡",
  },
  {
    message: "The training room is fully equipped with high-performance computers, projector support, high-speed internet, ergonomic seating, and air conditioning—designed for an optimal learning experience.🏫 ",
  },
  {
    message: "Our workforce consists of 70% male and 30% female employees, fostering a diverse and inclusive environment.70% Male 👨 | 30% Female 👩",
  },
  {
    message: "Uninterrupted power supply (UPS) is available to maintain continuous operations during power outages.Equipped with UPS backup to safeguard against power interruptions and protect equipment🔋",
  },
  {
    message: "Our premises are secured with CCTV cameras providing round-the-clock surveillance.24/7 monitoring with high-definition CCTV cameras to ensure safety and security.📹",
  },
];

const TestimonialScroller = () => {
  return (
    <div className="testimonial-wrapper">
      <h2 className="testimonial-title"><mark>INFRASTRUCTURE</mark></h2>
      <div className="testimonial-container">
        <div className="testimonial-scroller">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-message">"{t.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialScroller;
