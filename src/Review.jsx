import React from "react";

// 1. Define the data structure for the reviews
const reviews = [
  {
    id: 1,
    name: "Rahul S.",
    quote:
      "“BinaryDatas makes even the most complex tech topics easy to understand. The articles are well-researched and practical.”",
    imgSrc: "https://picsum.photos/id/21/300/300",
    imgAlt: "Rahul",
    angle: "4deg",
  },
  {
    id: 2,
    name: "Sneha K.",
    quote:
      "“As a computer science student, I love how BinaryDatas explains AI and coding concepts in simple terms.”",
    imgSrc: "https://picsum.photos/id/30/300/300",
    imgAlt: "Sneha",
    angle: "-8deg",
  },
  {
    id: 3,
    name: "Arjun M.",
    quote:
      "“Finally, a blog that combines clarity with technical depth. The articles on data analytics and automation are spot-on.”",
    imgSrc: "https://picsum.photos/id/39/300/300",
    imgAlt: "Arjun",
    angle: "6deg",
  },
  {
    id: 4,
    name: "Priya D.",
    quote:
      "“BinaryDatas stands out with its clean design and valuable content. It’s a must-read for any serious tech enthusiast.”",
    imgSrc: "https://picsum.photos/id/103/300/300",
    imgAlt: "Priya",
    angle: "11deg",
  },
  {
    id: 5,
    name: "Kiran L.",
    quote:
      "“I follow BinaryDatas regularly for updates on AI and digital transformation tools for startups.”",
    imgSrc: "https://picsum.photos/id/175/300/300",
    imgAlt: "Kiran",
    angle: "-13deg",
  },
  {
    id: 6,
    name: "Meera J.",
    quote:
      "“The UI/UX explanations are exceptional. Every article feels like a mini-course in design and innovation.”",
    imgSrc: "https://picsum.photos/id/349/300/300",
    imgAlt: "Meera",
    angle: "-17deg",
  },
  {
    id: 7,
    name: "Aditya P.",
    quote:
      "“Their AI insights are crisp, current, and extremely useful for anyone interested in emerging tech.”",
    imgSrc: "https://picsum.photos/id/401/300/300",
    imgAlt: "Aditya",
    angle: "15deg",
  },
];

const totalReviews = reviews.length;

function ReviewCarousel() {
  return (
    <section className="review-carousel-section">
      <h1 className="carousel-title">
        Trusted by <span>+{totalReviews} Founders</span>
      </h1>

      <div className="cards">
        {/* 2. Map over the array to generate all the radio buttons and cards */}
        {reviews.map((review, index) => {
          const radioId = `radio-${review.id}`;
          const nextId = (review.id % totalReviews) + 1; // Loops back to 1
          const prevId = review.id === 1 ? totalReviews : review.id - 1;

          return (
            <React.Fragment key={review.id}>
              {/* Radio Button */}
              <input
                type="radio"
                id={radioId}
                name="radio-card"
                // Set the first card as checked by default
                defaultChecked={index === 0}
              />

              {/* Card Article */}
              <article className="card" style={{ "--angle": review.angle }}>
                <img
                  className="card-img"
                  src={review.imgSrc}
                  alt={review.imgAlt}
                />
                <div className="card-data">
                  {/* Display current/total count */}
                  <span className="card-num">
                    {review.id}/{totalReviews}
                  </span>
                  <h2>{review.name}</h2>
                  <p>{review.quote}</p>
                  <footer>
                    {/* Previous Button */}
                    <label htmlFor={`radio-${prevId}`}>&#10094;</label>
                    {/* Next Button */}
                    <label htmlFor={`radio-${nextId}`}>&#10095;</label>
                  </footer>
                </div>
              </article>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default ReviewCarousel;