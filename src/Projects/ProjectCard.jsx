import React, { useEffect, useRef, useState } from "react";

function ProjectCard({ title, description, image, link, reverse }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 transition-all duration-700 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="md:w-1/2">
        <img
          src={image}
          alt={title}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl font-bold text-green-500 mb-4">
          {title}
        </h3>
        <p className="mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 px-6 py-2 rounded hover:bg-green-500 transition"
        >
          Voir sur GitHub
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;