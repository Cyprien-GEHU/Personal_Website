import ProjectCard from "./ProjectCard";
import logoRepaire from "../assets/logo_repaire.png";
import logoDataGenerator from "../assets/DataGenerator.png";


export default function Projects() {
  return (
    <section id="project" className="pt-32 px-4">
      <h2 className="text-4xl text-green-500 mb-2 md:mb-4">Projects</h2>
      <div className="max-w-6xl mx-auto space-y-20">

        <ProjectCard
          title="Projet repaire des vallées."
          description="Projet en collaboration direct avec repaire des 2 valées pour une refonte de leur site"
          image={logoRepaire}
          link="https://github.com/Cyprien-GEHU/repaires_des_2_vallees"
        />

        <ProjectCard
          title="DataGenertor"
          description="Projet perso qui permet des générer une liste ou un tableau puis exporter dans un format"
          image={logoDataGenerator}
          link="https://github.com/Cyprien-GEHU/DataGenerator"
          reverse
        />

      </div>
    </section>
  );
}