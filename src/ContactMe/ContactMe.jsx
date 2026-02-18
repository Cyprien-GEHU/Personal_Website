import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactMe() {
  return (
    <section
      id="contactme"
      className="pt-32 px-4 bg-gray-900 text-green-500"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-6">
          Retrouve-moi sur GitHub, LinkedIn ou envoie-moi un mail :
        </p>

        <div className="flex justify-center space-x-8 text-3xl">
          {/* GitHub */}
          <a
            href="https://github.com/Cyprien-GEHU"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition-colors duration-200"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/cyprien-gehu-19b1a9349/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition-colors duration-200"
          >
            <FaLinkedin />
          </a>

          {/* Email */}
          <a
            href="mailto:cypriengehu@gmail.com"
            className="hover:text-green-300 transition-colors duration-200"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}