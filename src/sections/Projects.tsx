import Certificate1 from "@/assets/images/Certificate1.jpg";
import Certificate0 from "@/assets/images/Certificate0.jpg";
import Certificate2 from "@/assets/images/Certificate2.png";
import Certificate3 from "@/assets/images/Certificate3.jpg";
import Certificate4 from "@/assets/images/Certificate4.png";
import Certificate5 from "@/assets/images/Certificate5.jpg";
import Certificate6 from "@/assets/images/Certificate6.jpg";
import Certificate7 from "@/assets/images/Certificate7.jpg";

import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Bosch Security Academy",
    year: "2007",
    title: "Fire Training Course FPA-5000",
    results: [
      { title: "Fire Panel Hardware" },
      { title: "Fire Panel Software" },
      { title: "Bosch Security Systems" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: Certificate7,
  },
  {
    company: "Siemon Company Ltd",
    year: "2004",
    title: "Simon Kyalahansi",
    results: [
      { title: "Completed the required training" },
      { title: "Satisfactorily met all requirements" },
      { title: "Became a Siemon Cabling System Certified Installer" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: Certificate4,
  },
  {
    company: "Siemon Company",
    year: "2006",
    title: "Issac Omondi Owyango",
    results: [
      { title: "Completed the required training" },
      { title: "Satisfactorily met all requirements" },
      { title: "Became a Siemon Distribution Listed Installer" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: Certificate3,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div id="Projects" className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title=" Featured Projects"
          description="See how I transform concepts into engaging digital experiences."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span> View Project</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    // width={600}
                    // height={400}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div>
          <a href="/docs/unicon.docx" download="unicon.docx">
            Download Certificates
          </a>
        </div>
      </div>
    </section>
  );
};
