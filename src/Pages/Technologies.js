import React from "react";
import { techStackDetails } from "../Details";

// Reusable TechIcon component for consistent styling
const TechIcon = ({ src, title, alt }) => (
  <img 
  src={src} 
  title={title} 
  alt={alt} 
  className="w-12 h-12 rounded-lg transition-all duration-300 hover:scale-105 object-cover"
/>

);

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    vscode,
    git,
    github,
    postman,
    figma,
    flutter,
    salesforce,
    jira,
    EC2,
  } = techStackDetails;
  
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      {/* Tech Stack Section */}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <TechIcon src={html} title="HTML" alt="HTML5 logo" />
        <TechIcon src={css} title="CSS" alt="CSS3 logo" />
        <TechIcon src={js} title="JavaScript" alt="JavaScript logo" />
        <TechIcon src={react} title="React" alt="React logo" />
        <TechIcon src={flutter} title="Flutter" alt="Flutter logo" />
        <TechIcon src={salesforce} title="Salesforce" alt="Salesforce logo" />
        <TechIcon src={jira} title="Jira" alt="Jira logo" className="w-12 h-12" />
        <TechIcon src={EC2} title="EC2" alt="AWS EC2 logo" className="w-12 h-12" />
      </section>

      {/* Tools Section */}
      <section className="pt-14">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <TechIcon src={vscode} title="Visual Studio Code" alt="VS Code logo" />
        <TechIcon src={git} title="Git" alt="Git logo" />
        <TechIcon src={github} title="GitHub" alt="GitHub logo" />
        <TechIcon src={figma} title="Figma" alt="Figma logo" />
        <TechIcon src={postman} title="Postman" alt="Postman logo" />
      </section>
    </main>
  );
}

export default Technologies;