import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFolderOpen } from "react-icons/fa"; // example icon

const categories = [
  "Birth, Marriage, Death",
  "Cemeteries & Funeral Homes",
  "Census",
  "Directories",
  "General Resources",
  "Government: City, County, Province, and State",
  "Immigration, Emigration & Migration",
  "Land",
  "Libraries, Archives & Museums",
  "Maps & Geography",
  "Military",
  "Miscellaneous Records",
  "Newspapers",
  "Obituaries",
  "Occupations",
  "Religion & Churches",
  "Schools",
  "Wills & Probate",
];

const CategoryIndex = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="category-section">
      <button className="back-button" onClick={() => window.history.back()}>
        ← Back
      </button>

      <h2 className="section-title">Explore Categories</h2>

      <ul className="category-list">
        {categories.map((item, index) => (
          <li
            key={index}
            className="category-item"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <FaFolderOpen className="category-icon" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryIndex;
