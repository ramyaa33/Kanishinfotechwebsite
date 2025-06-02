import React from "react";

const TeamCaseStudy = () => {
    return (
        <div className="team-case-study">
            {/* Section 1 */}
            <h1 className="mark1"><mark>OUR TEAM</mark></h1>

            <div className="section-wrapper">
                <div className="background-number">01</div>
                <div className="content-box">
                    <div className="icon">🧑🧑</div>
                    <div>
                        <h2>Our Team specialty!</h2>
                        <p> "We are proud to have a team of highly qualified professional trainers and dedicated employees committed to excellence and results."</p>      
                </div>
            </div>
            <div className="connector">
                <div className="dot" />
                <div className="dashed-line" />
            </div>
        </div>

      {/* Section 2 */ }
    <div className="section-wrapper">
        <div className="background-number">02</div>
        <div className="content-box">
            <div className="icon">🔄 </div>
            <div>
                 <p>"We specialize in delivering exceptional data transformation solutions that drive accuracy, efficiency, and actionable insights."</p>
            </div>
        </div>
          <div className="connector">
                <div className="dot" />
                <div className="dashed-line" />
            </div>
    </div>

     {/* Section 3 */ }
    <div className="section-wrapper">
        <div className="background-number">03</div>
        <div className="content-box">
            <div className="icon">🔒</div>
            <div>
                 <p>"All training materials are expertly designed in-house to ensure relevance, quality, and alignment with our standards."</p>
            </div>
        </div>
          <div className="connector">
                <div className="dot" />
                <div className="dashed-line" />
            </div>
    </div>

      {/* Section 4*/ }
    <div className="section-wrapper">
        <div className="background-number">04</div>
        <div className="content-box">
            <div className="icon">🤝 </div>
            <div>
                 <p>"We actively promote knowledge sharing across both internal teams and external stakeholders to foster collaboration and continuous learning."</p>
            </div>
        </div>
          <div className="connector">
                <div className="dot" />
                <div className="dashed-line" />
            </div>
    </div>

      {/* Section 5 */ }
    <div className="section-wrapper">
        <div className="background-number">05</div>
        <div className="content-box">
            <div className="icon">🎓💻</div>
            <div>
                 <p>"Our team comprises highly qualified degree holders with strong typing skills and attention to detail."</p>
            </div>
        </div>
    </div>
      <div className="connector">
                <div className="dot" />
                <div className="dashed-line l" />
            </div>
    </div >
  );
};

export default TeamCaseStudy;
