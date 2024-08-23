import React, { useState } from "react";
import { useAuth } from "../store/auth";

export const Courses = () => {
  const { services } = useAuth();
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  // Function to handle card click
  const handleCardClick = (index) => {
    // Toggle card expansion
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Courses</h1>
      </div>

      <div className="container grid grid-three-cols">
        {services.map((curElem, index) => {
          const { price, description, provider, service, topics } = curElem;
          const isExpanded = expandedCardIndex === index;

          return (
            <div
              className="card"
              key={index}
              onClick={() => handleCardClick(index)} // Handle card click
              style={{ cursor: "pointer" }}
            >
              <div className="card-img">
                <img
                  src="/images/design.png"
                  alt="our services info"
                  width="200"
                />
              </div>

              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>

                {/* Display Topics only if card is expanded */}
                {isExpanded && topics && topics.length > 0 && (
                  <div className="topics">
                    <h3>Topics Covered:</h3>
                    <ul>
                      {topics.map((topic, topicIndex) => (
                        <li key={topicIndex}>
                          <strong>{topic.name}:</strong> {topic.description}
                          {/* Add clickable link */}
                          {topic.link && (
                            <a
                              href={topic.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ marginLeft: "10px", color: "blue" }}
                            >
                              (Learn More)
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
