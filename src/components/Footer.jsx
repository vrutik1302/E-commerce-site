// Footer.js
import React, { useState } from "react";

const Footer = () => {
  const accordionData = [
    {
      id: 1,
      title: "Establied the fact that a reader  will be distracted",
      content:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
    },
    {
      id: 2,
      title: "Establied the fact that a reader  will be distracted",
      content:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as.",
    },
    {
      id: 3,
      title: "Establied the fact that a reader  will be distracted",
      content:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as.",
    },
    {
      id: 4,
      title: "Establied the fact that a reader  will be distracted",
      content:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(accordionData[0].id);

  const handleAccordionToggle = (accordionId) => {
    setOpenAccordion((prevId) => (prevId === accordionId ? null : accordionId));
  };

  return (
    <footer className="footer">
      <div className="faq-container">
        <h2 className="faq-title">FAQ's</h2>
        <div className="accordion">
          {accordionData.map(({ id, title, content }) => (
            <div key={id} className="accordion-section">
              <div
                className="accordion-header"
                onClick={() => handleAccordionToggle(id)}
              >
                <span>{title}</span>
                <span
                  className={`icon ${openAccordion === id ? "minus" : "plus"}`}
                >
                  {openAccordion === id ? "-" : "+"}
                </span>
              </div>
              {openAccordion === id && (
                <div className="accordion-content">
                  <p>{content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="copyright">
        <p>
          &copy; Copyright © 2023 Concettolabs Pvt. Ltd.. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
