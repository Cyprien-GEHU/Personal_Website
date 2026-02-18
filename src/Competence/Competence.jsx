import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJsSquare,
} from "react-icons/fa";
import { SiAstro, SiSvelte } from "react-icons/si";

export default function Competence() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-500 w-8 h-8 mx-auto mb-2" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-500 w-8 h-8 mx-auto mb-2" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400 w-8 h-8 mx-auto mb-2" />,
    },
    {
      name: "Astro",
      icon: <SiAstro className="text-white w-8 h-8 mx-auto mb-2" />,
    },
    {
      name: "Svelte",
      icon: <SiSvelte className="text-red-500 w-8 h-8 mx-auto mb-2" />,
    },
    {
      name: "Python",
      icon: <FaPython className="text-blue-400 w-8 h-8 mx-auto mb-2" />,
    },
    {
      name: "Javascript",
      icon: <FaJsSquare className="text-yellow-300 w-8 h-8 mx-auto mb-2" />,
    },
    {
      name: "Nodejs",
      icon: <FaNodeJs className="text-green-400 w-8 h-8 mx-auto mb-2" />,
    },
  ];
  return (
    <section className="pt-28 md:pt-24 p-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl text-green-500 mb-4 md:mb-6 px-4 text-center md:text-left">
          Compétences
        </h2>
      </div>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-center"
          >
            {skill.icon}
            <span className="text-xl font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
