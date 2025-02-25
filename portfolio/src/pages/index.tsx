// Import statements
import DefaultLayout from "@/layouts/default";
import osuBanner from "../../public/osu banner.jpeg";
import profileIcon from "../../public/profile-icon.jpeg";
import flagIcon from "../../public/sg flag.svg";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Tabs, Tab } from "@heroui/tabs";
import { title } from "../components/primitives";
import "devicon/devicon.min.css";

// Type Definitions
type Project = {
  title: string;
  description: string | JSX.Element;
  tech: string[];
  image: string;
  github: string;
  demo: string;
};

type Skill = {
  name: string;
};

type Skills = {
  frontend: Skill[];
  backend: Skill[];
};

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
};

type Volunteering = {
  organisation: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
};

type Education = {
  institution: string;
  degree: string;
  year: string;
  details: string;
};

// Main Component
export default function IndexPage() {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "Team project, in which I managed login, registration + user and admin related CRUD functions alongside 2FA and reset password functionalities",
      tech: ["React", "C#", "MSSQL"],
      image: "/project1.jpg",
      github: "https://github.com/trinityprime/EDP-GreenThread-Apparel",
      demo: "https://myproject.com",
    },
    {
      title: "52 Blue",
      description:
        "Individual passion project about a individual whale of unidentified species that calls at the unusual frequency of 52 hertz",
      tech: ["React.js", "Tailwind CSS"],
      image: "/52 blue.png",
      github: "https://github.com/trinityprime/52hz-",
      demo: "https://52hz-github-io-rxdz.vercel.app/",
    },
    {
      title: "Movie Viewer App",
      description: (
        <>
          Solo project as part of my Mobile Application Development module. The
          app fetches movies using the&nbsp;
          <a
            href="https://developer.themoviedb.org/docs/getting-started"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            TMDB API
          </a>
        </>
      ),
      tech: ["Jetpack Compose", "Kotlin"],
      image: "/project3.jpg",
      github: "https://github.com/trinityprime/Movie-Viewer-App",
      demo: "https://myportfolio.com",
    },
  ];

  const skills: Skills = {
    frontend: [{ name: "React" }, { name: "HTML/CSS" }],
    backend: [{ name: "Python" }, { name: "Javascript" }, { name: "C#" }],
  };

  const experience: Experience[] = [];

  const volunteering: Volunteering[] = [
    {
      organisation: "The Boys' Brigade in Singapore",
      role: "Head Primer",
      period: "Apr 2023 - Present",
      description:
        "Responsible for developing training programmes, and mentorship of members of the 64th Boys' Brigade",
      achievements: [
        "Planned and led multiple events, in the presence of ~40 students (Boys)",
        "Led a group of 10-20 boys for 4 days to ensure the packing of hampers in a warehouse for the needy.",
        "Carried out the role of Contingent Commander during the TGCC National Day Observance Ceremony, raising the National Flag.",
      ],
    },
    {
      organisation: "Nee Soon East Playground Volunteers",
      role: "Volunteeer",
      period: "Nov 2024 - Present",
      description:
        "Helped to onboard newer volunteers, familiarising them with the organisation environment and showing them the ropes on what is usually done during weekly sessions. Also involved in woodwork and construction of various structures for children to enjoy in the playground.",
      achievements: [
        "Involved in construction and painting of mini wooden Christmas trees for Christmas celebrations",
        "Involved in landscaping, woodwork, as well as the movement and organisation of logistics",
      ],
    },
  ];

  const education: Education[] = [
    {
      institution: "Nanyang Polytechnic",
      degree: "Diploma in Information Technology",
      year: "Apr 2023 - Feb 2026",
      details: "",
    },
  ];

  return (
    <DefaultLayout>
      <div className="max-w-5xl mx-auto relative">
        <div className="relative z-10 ax-w-5xl mx-auto"></div>
        <img src={osuBanner} alt="OSU Banner" className="w-full rounded-t-lg" />
        <section className="flex flex-col items-center justify-center bg-gray-100 pt-8 relative">
          <div className="absolute top-0 left-8 transform -translate-y-1/3 flex items-center">
            <img
              src={profileIcon}
              alt="Profile Icon"
              className="w-32 h-32 rounded-3xl"
            />
            <div className="ml-4 mt-8 text-left">
              <p className="text-3xl font-bold">Ryan Lim</p>
              <div className="flex items-center">
                <p className="text-xl text-black">Singapore</p>
                <img
                  src={flagIcon}
                  alt="Singapore Flag"
                  className="w-6 h-6 ml-2 mt-1"
                />
              </div>
            </div>
          </div>

          <div className="w-full mt-10 px-4">
            <Tabs variant="underlined" className="w-full mt-6">
              <Tab key="about" title="About Me">
                <AboutSection />
              </Tab>
              <Tab key="projects" title="Projects">
                <ProjectsSection projects={projects} />
              </Tab>
              <Tab key="skills" title="Skills">
                <SkillsSection skills={skills} />
              </Tab>
              <Tab key="experience" title="Experience">
                <ExperienceSection
                  experience={experience}
                  volunteering={volunteering}
                  education={education}
                />
              </Tab>
              <Tab key="contact" title="Contact">
                <ContactSection />
              </Tab>
            </Tabs>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}

// About Section Component
function AboutSection() {
  return (
    <Card className="w-full">
      <CardBody>
        <h2 className={`${title({ size: "sm", color: "blue" })} mb-3`}>
          About Me
        </h2>
        <div className="space-y-4">
          <p>
            Hi, I'm Ryan! With a strong interest in software dev and all things
            IoT, I enjoy staying up to date with the latest tech trends and
            innovations. Outside the realm of tech, I am passionate in enriching
            the lives of youths, through mentorship, community service
            initiatives, or just volunteering in general.
          </p>
        </div>
        <div className="mt-4">
          <Button
            color="primary"
            as="a"
            href="../../public/Lim_Kien_Loong_Ryan_Resume.pdf"
            target="_blank"
          >
            View Resume
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

// Projects Section Component
function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <div className="my-1">
      <h2 className={`${title({ size: "sm", color: "blue" })} mb-5 ml-2`}>
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {projects.map((project, index) => (
          <Card key={index} className="w-full">
            <CardBody className="p-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <Chip key={i} size="sm" color="primary" variant="flat">
                      {tech}
                    </Chip>
                  ))}
                </div>
              </div>
            </CardBody>
            <CardFooter className="flex justify-between">
              <Button
                size="sm"
                as="a"
                href={project.github}
                target="_blank"
                variant="bordered"
              >
                GitHub
              </Button>
              {index !== 0 && index !== 2 && (
                <Button
                  size="sm"
                  as="a"
                  href={project.demo}
                  target="_blank"
                  color="primary"
                >
                  Live Demo
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

function SkillsSection({ skills }: { skills: Skills }) {
  const categories = [
    { title: "App Dev", skills: ["Jetpack Compose", "Kotlin"] },
    { title: "Web Dev", skills: skills.frontend.map((skill) => skill.name) },
    { title: "Languages", skills: skills.backend.map((skill) => skill.name) },
    { title: "VCS", skills: ["Git(Hub)"] },
    { title: "Design", skills: ["Figma"] },
  ];

  const getIcon = (skill: string) => {
    switch (skill) {
      case "Kotlin":
        return "devicon-kotlin-plain";
      case "Jetpack Compose":
        return "devicon-jetpackcompose-plain";
      case "React":
        return "devicon-react-original";
      case "HTML/CSS":
        return "devicon-html5-plain";
      case "Python":
        return "devicon-python-plain";
      case "Javascript":
        return "devicon-javascript-plain";
      case "C#":
        return "devicon-csharp-plain-wordmark";
      case "Git(Hub)":
        return "devicon-git-plain";
      case "Figma":
        return "devicon-figma-plain";
      default:
        return "";
    }
  };

  return (
    <div className="my-1">
      <h2 className={`${title({ size: "sm", color: "blue" })} mb-5 ml-2`}>
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {categories.map((category, index) => (
          <Card key={index} className="w-full">
            <CardBody>
              <div className="flex items-center">
                <h3 className="text-2xl font-bold">{category.title}</h3>
                {category.skills.map((skill, i) => (
                  <i
                    key={i}
                    className={`${getIcon(skill)} devicon-icon text-3xl ml-3`}
                    title={skill}
                  ></i>
                ))}
              </div>
              <ul className="mt-3 space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-lg text-gray-700">
                    • {skill}
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Experience and Education Section Component
function ExperienceSection({
  experience,
  volunteering,
  education,
}: {
  experience: Experience[];
  volunteering: Volunteering[];
  education: Education[];
}) {
  return (
    <div className="my-1">
      <h2 className={`${title({ size: "sm", color: "blue" })} mb-5 ml-2`}>
        Experience
      </h2>
      <div className="space-y-6 mt-5">
        {experience.length > 0 ? (
          experience.map((job, index) => (
            <Card key={index} className="w-full">
              <CardBody>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <p className="text-md text-primary">{job.company}</p>
                  </div>
                  <Chip variant="flat">{job.period}</Chip>
                </div>
                <p className="mt-3">{job.description}</p>
                <div className="mt-4">
                  <p className="font-medium">Key Achievements:</p>
                  <ul className="list-disc pl-5 mt-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardBody>
            </Card>
          ))
        ) : (
          <p className="text-black-600 ml-3">
            No work experience yet, but eager to learn and grow!
          </p>
        )}
      </div>

      <Divider className="my-4" />

      <h2 className={`${title({ size: "sm", color: "blue" })} mb-5 ml-2`}>
        Volunteering Experience
      </h2>
      <div className="space-y-6 mt-5">
        {volunteering.map((job, index) => (
          <Card key={index} className="w-full">
            <CardBody>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <p className="text-md text-primary">{job.organisation}</p>
                </div>
                <Chip variant="flat">{job.period}</Chip>
              </div>
              <p className="mt-3">{job.description}</p>
              <div className="mt-4">
                <p className="font-medium">Contributions:</p>
                <ul className="list-disc pl-5 mt-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <Divider className="my-4" />

      <h2 className={`${title({ size: "sm", color: "blue" })} mb-5 ml-2`}>
        Education
      </h2>
      <div className="space-y-6 mt-5">
        {education.map((edu, index) => (
          <Card key={index} className="w-full">
            <CardBody>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-md text-primary">{edu.institution}</p>
                </div>
                <Chip variant="flat">{edu.year}</Chip>
              </div>
              <p className="mt-3">{edu.details}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Contact Section Component
function ContactSection() {
  return (
    <Card className="w-full my-1">
      <CardBody>
        <h2 className={`${title({ size: "sm", color: "blue" })} mb-5 ml-1`}>
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="mb-4">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>

            {/*Add Icons for below links*/}
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="font-medium w-24">Email:</span>
                <a href="mailto:limkl.ryan@gmail.com" className="text-primary">
                  limkl.ryan@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-medium w-24">LinkedIn:</span>
                <a
                  href="https://linkedin.com/in/ryan--lim"
                  target="_blank"
                  className="text-primary"
                >
                  linkedin.com/in/ryan--lim/
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-medium w-24">GitHub:</span>
                <a
                  href="https://github.com/trinityprime"
                  target="_blank"
                  className="text-primary"
                >
                  github.com/trinityprime
                </a>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col space-y-4">
            <p className="mb-2">Or send me a message directly:</p>
            <input
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Your Name"
            />
            <input
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Your Email"
              type="email"
            />
            <textarea
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Your Message"
              rows={4}
            />
            <Button color="primary">Send Message</Button>
          </div> */}
        </div>
      </CardBody>
    </Card>
  );
}
