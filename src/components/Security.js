import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

const sectionsData = [
  {
    title: "Client Data Protection",
    img: "/img/security/OIP.jpg",
    text: "At Kanish Infotech, we prioritize the security and confidentiality of our clients’ data. We implement robust security measures to protect client information from unauthorized access, breaches, and misuse. Our team follows the highest standards of data protection to ensure that client data remains safe from collection to processing.."
  },
  {
    title: "Data Encryption",
    img: "/img/security/OIP (1).jpg",
    text:
      "We use strong encryption protocols to safeguard all client data. Data in transit is protected using TLS/SSL encryption, ensuring that information exchanged between our systems and client endpoints is secure. Additionally, data stored on our servers is encrypted using AES-256 encryption, making it unreadable to unauthorized parties.",
  },
  {
    title: "Secure Data Entry & Storage",
    img: "/img/security/Data-Storage-Security-Standards1.jpg",
    text:
      "We ensure that all client data entered into our platform is securely processed and stored. Real-time monitoring and input validation are employed to detect and mitigate any potential threats. Additionally, data sanitization methods are applied to ensure the integrity and security of the information.",
  },
  {
    title: "Access Controls & Authentication",
    img: "/img/security/authentication_authorization-1.jpg",
    text:
      "To protect client data, we enforce strict access control mechanisms. This includes multi-factor authentication (MFA) for all users, complex password policies, and role-based access control (RBAC) to limit data access to authorized personnel only. Session timeouts and expiration settings further enhance security by limiting unauthorized access.",
  },
  {
    title: "Regular Security Audits",
    img: "img/security/OIP (9).jpeg",
    text:
      "We regularly conduct internal and external security audits to identify and resolve any vulnerabilities in our systems. These audits include vulnerability scans, penetration testing, and code reviews. Any findings are promptly addressed through a structured remediation plan, ensuring that our systems stay secure against emerging threats.",
  },
  {
    title: "Compliance with Data Protection Laws",
    img: "/img/security/OIP (2).jpg",
    text:
      "Kanish Infotech is fully committed to compliance with data protection regulations, including the General Data Protection Regulation (GDPR) and local data privacy laws. We process client data in accordance with legal and contractual obligations to ensure data privacy, integrity, and security.",
  },
  {
    title: "Employee Training & Awareness",
    img: "/img/security/R (1).png",
    text:
      "We ensure that all employees are trained in security best practices and data protection policies. Regular training sessions and awareness programs focus on topics such as phishing, secure data handling, and responding to security threats. This training helps our employees maintain a high level of vigilance when handling sensitive information.",
  },
  {
    title: "Backup & Disaster Recovery",
    img: "/img/security/OIP (3).jpg",
    text:
      "To safeguard against data loss, we perform daily backups and store data in secure, offsite locations. We also maintain a disaster recovery plan to ensure business continuity. In case of an incident, our recovery protocols are designed to minimize downtime and restore normal operations as quickly as possible.",
  },
];

const SecurityPage = () => {
  useEffect(() => {
    AOS.init({
  duration: 1000,
  once: false, // 🔁 animate every time the element scrolls into view
  mirror: true, // optional: animate out when scrolling past
});

  }, []);

  return (
    <>
    <div className="security-page">
      <div className="header-section">
        <img
          src="/img/security/2061093.jpg"
          alt="Security Banner"
          className="header-image"
        />
        <div className="overlay">
          <h1>Our Security Policy</h1>
        </div>
      </div>

      {sectionsData.map((section, index) => (
        <div
          className={`section ${index % 2 !== 0 ? "reverse" : ""}`}
          key={index}
          data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
        >
          <div className="text-container">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
          <div
            className={`image-container ${
              index % 2 === 0 ? "image-left" : "image-right"
            }`}
          >
            <img src={section.img} alt={section.title} />
          </div>
        </div>
      ))}
    </div>
    <Footer></Footer>
    </>
  );
};

export default SecurityPage;
