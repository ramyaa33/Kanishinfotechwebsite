import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Service = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);
  

  return (
    <>
      {/* DATA ENTRY SECTION */}
      <section className="services section light-background">
        <div className="container">
          <h1 className="ourservice">OUR SERVICES</h1>
          <h3><mark>DATA ENTRY</mark></h3>
          <div className="row gx-4 gy-4 justify-content-center">
                       <div className="col-lg-4 col-md-6 d-flex">
              <div className="service-item item-cyan position-relative w-100" data-aos="fade-up" data-aos-delay="70">
                <div className="icon"><i className="bi bi-activity"></i></div>
                <h3>Offline Data Entry</h3>
                <p>
                  Offline Data Entry involves manually entering data from physical documents into a computer without using the internet.
                  It requires accuracy and attention to detail, helping businesses convert paper records into digital format for easy storage and access.
                </p>
                <button
                  className="btns"
                  onClick={() => navigate('/Catagoryindex')}
                >
                  Click Me
                </button>
              </div>
            </div>



            <div className="col-lg-4 col-md-6 d-flex">
              <div className="service-item item-orange position-relative w-100" data-aos="fade-up" data-aos-delay="200">
                <div className="icon"><i className="bi bi-broadcast"></i></div>
                <h3>Online Data Entry</h3>
                <p>Online Data Entry is the process of entering data into online systems or databases using an internet connection. It includes tasks like filling web forms, updating records, and managing online content, requiring speed, accuracy, and basic computer skills..</p>              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex">
              <div  className="service-item item-teal position-relative w-100" data-aos="fade-up" data-aos-delay="400">
                <div className="icon"><i className="bi bi-easel"></i></div>
                <h3>Image Entry</h3>
                <p>Image Data Entry involves extracting information from images like scanned documents, photos, or handwritten forms and entering it into digital formats. It requires good attention to detail and accuracy in interpreting visual data..</p>              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex">
              <div className="service-item item-red position-relative w-100" data-aos="fade-up" data-aos-delay="600">
                <div className="icon"><i className="bi bi-bounding-box-circles"></i></div>
                <h3>Document Digitization</h3>
                <p>Document Digitization is the process of converting physical documents into digital format for easy access and storage.
                  It reduces paper clutter and saves physical space.Enhances data security and simplifies document sharing..</p>              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex">
              <div className="service-item item-indigo position-relative w-100" data-aos="fade-up" data-aos-delay="800">
                <div className="icon"><i className="bi bi-calendar4-week icon"></i></div>
                <h3>Form Filling</h3>
                <p>Form Filling is a data entry process where information is accurately entered into predefined fields of digital or physical forms. It is commonly used in applications, surveys, registrations, and official documentation. This task demands precision and attention to detail to ensure that the provided information is correct and complete. Efficient form filling supports smooth processing and helps organizations maintain organized records..</p>              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPESETTING SECTION */}
      <section className="services section light-background">
        <div className="container">
          <h3><mark>TYPESETTING</mark></h3>
          <div className="row gx-4 gy-4 justify-content-center">

            <div className="col-lg-4 col-md-6 d-flex">
              <div className="service-item item-pink position-relative w-100" data-aos="fade-up" data-aos-delay="200">
                <div className="icon"><i className="bi bi-layout-text-window-reverse"></i></div>
                <h3>File preparation</h3>
                <p>File preparation involves organizing and formatting documents or digital files to ensure they are ready for processing or submission. It includes cleaning data, verifying accuracy, and ensuring proper layout for efficient workflow..</p>              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex">
              <div className="service-item item-orange position-relative w-100" data-aos="fade-up" data-aos-delay="400">
                <div className="icon"><i className="bi bi-columns-gap"></i></div>
                <h3>PDF to Word</h3>
                <p>PDF to Word refers to the process of converting a PDF document into an editable Word file (.docx). This allows users to modify the content, format, or extract text from a PDF document that is otherwise non-editable. This conversion helps in easier editing and repurposing of the content for various uses.</p>              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex">
              <div className="service-item item-teal position-relative w-100" data-aos="fade-up" data-aos-delay="600">
                <div className="icon"><i className="bi bi-journals"></i></div>
                <h3>PDF to InDesign</h3>
                <p>PDF to InDesign is the process of converting a PDF file into an editable InDesign format (.indd). This allows designers to modify text, images, and layouts. It is commonly used in publishing when there's a need to update or refine a document's design. The conversion may require adjustments to maintain the original formatting and structure.</p>              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex">
              <div className="service-item item-red position-relative w-100" data-aos="fade-up" data-aos-delay="800">
                <div className="icon"><i className="bi bi-layout-sidebar-inset-reverse"></i></div>
                <h3>PDF to PPT</h3>
                <p>PDF to PPT conversion is the process of transforming a Portable Document Format (PDF) file into a PowerPoint presentation (PPT). This is especially useful when you want to present or edit the content of a PDF in a more visual and interactive format. Converting to PPT allows for easier customization, animation, and organization of information into slides. It can be done using online tools, software like Adobe Acrobat or Microsoft PowerPoint, or through drag-and-drop features in some applications. However, the conversion might not always be perfect—complex layouts, fonts, or graphics may require manual adjustments afterward to ensure proper formatting.
                </p>              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex">
              <div className="service-item item-indigo position-relative w-100" data-aos="fade-up" data-aos-delay="1000">
                <div className="icon"><i className="bi bi-pencil-square"></i></div>
                <h3>Image to Word</h3>
                <p>Image to Word conversion is the process of extracting text and visual content from an image file (like JPG or PNG) and turning it into an editable Microsoft Word document. This is typically done using Optical Character Recognition (OCR) technology, which scans the image for recognizable characters and formats. It's useful for digitizing printed documents, handwritten notes, or screenshots into editable text. While many tools and apps can do this, the accuracy depends on the image quality and clarity of the text.</p>              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP PUBLISHING SECTION */}
      <section className="services section light-background">
        <div className="container">
          <h3><mark>Desktop Publishing</mark></h3>
          <div className="row gx-4 gy-4 justify-content-center">

            <div className="col-lg-4 col-md-6 d-flex">
              <div  className="service-item item-pink position-relative w-100" data-aos="fade-up" data-aos-delay="200">
                <div className="icon"><i className="bi-layout-text-window"></i></div>
                <h3>Word DTP</h3>
                <p>Word  DTP means converting a Word document into a professional layout using desktop publishing software like InDesign. This helps improve design, formatting, and print quality for brochures, books, and other materials.</p>              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex">
              <div  className="service-item item-orange position-relative w-100" data-aos="fade-up" data-aos-delay="400">
                <div className="icon"><i className="bi-layout-wtf"></i></div>
                <h3>InDesign DTP</h3>
                <p>PDF to Word refers to the process of converting a PDF document into an editable Word file (.docx). This allows users to modify the content, format, or extract text from a PDF document that is otherwise non-editable. This conversion helps in easier editing and repurposing of the content for various uses.</p>              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex">
              <div className="service-item item-teal position-relative w-100" data-aos="fade-up" data-aos-delay="600">
                <div className="icon"><i className="bi bi-journals"></i></div>
                <h3>PDF to InDesign</h3>
                <p>InDesign DTP refers to using Adobe InDesign as a key tool in the desktop publishing (DTP) process. It allows for advanced layout design, precise typography, and print-ready output, making it ideal for creating books, magazines, brochures, and other professional documents.
                </p> 
                 </div>
          </div>

            <div className="col-lg-4 col-md-6 d-flex">
              <div  className="service-item item-indigo position-relative w-100" data-aos="fade-up" data-aos-delay="800">
                <div className="icon"><i className="bi bi-pencil-square"></i></div>
                <h3>CorelDraw DTP</h3>
                <p> Is used in the translation and localization industry to edit and adjust visual content like brochures, manuals, and marketing materials. It helps update text, graphics, and layouts in different languages while keeping the original design intact.                    </p>              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATA MINING SECTION */}
      <section className="services section light-background">
        <div className="container">
          <h3><mark>Data Mining</mark></h3>
          <div className="row gx-4 gy-4 justify-content-center">

            <div className="col-lg-4 col-md-6 d-flex">
              <div  className="service-item item-pink position-relative w-100" data-aos="fade-up" data-aos-delay="200">
                <div className="icon"><i className="bi-layout-text-window"></i></div>
                <h3>Data Process</h3>
                <p>Data mining is the process of extracting useful patterns and knowledge from large datasets. It involves steps like data cleaning, selection, transformation, and applying algorithms to find trends and relationships. Common techniques include classification, clustering, and association rules. Data mining helps in decision-making across areas like marketing, fraud detection, and healthcare.</p>              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex">
              <div  className="service-item item-orange position-relative w-100" data-aos="fade-up" data-aos-delay="400">
                <div className="icon"><i className="bi-layout-wtf"></i></div>
                <h3>Data Conversion</h3>
                <p>Data Conversion is the process of transforming data from one format or structure into another. It is essential for ensuring that data can be used across different systems, applications, or platforms. This process typically involves data cleaning, standardization, and reformatting to match the required format. Data conversion is often needed when migrating data between legacy systems and new applications or when integrating data from different sources. Common examples include converting file types (e.g., CSV to Excel) or converting database formats.</p>              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSCRIBING SECTION */}
      <section className="services section light-background">
        <div className="container">
          <h3><mark>Transcribing Handwritten Document</mark></h3>
          <div className="row gx-4 gy-4 justify-content-center">

            <div className="col-lg-4 col-md-6 d-flex">
              <div  className="service-item item-pink position-relative w-100" data-aos="fade-up" data-aos-delay="200">
                <div className="icon"><i className="bi-layout-text-window"></i></div>
                <h3>Transcribing Handwritten Document</h3>
                <p>Businesses are rapidly transitioning to paperless operations in response to evolving customer demands,
                  market dynamics, and competitive pressures. In this context, converting paper documents—especially handwritten
                  ones—into digital formats can be a time-consuming and complex task, particularly for organizations that manage
                  large volumes of documents regularly.Kanish Infotech has been at the forefront of providing high-quality data
                  entry and transcription services for both printed and handwritten documents. Our dedicated team of data processing
                  and document management specialists can accurately convert your handwritten records into popular digital formats,
                  helping you streamline operations, improve accessibility, and enhance overall efficiency..</p>              </div>
            </div>

          </div>
        </div>
       
      </section>
       <Footer></Footer>
    </>
  );
};

export default Service;
