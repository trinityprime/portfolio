// Import statements
import DefaultLayout from "@/layouts/default";
import osuBanner from "../../public/osu banner.jpeg";
import profileIcon from "../../public/profile-icon.jpeg";
import flagIcon from "../../public/sg flag.svg";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Progress } from "@heroui/progress";
import { Divider } from "@heroui/divider";
import { Tabs, Tab } from "@heroui/tabs";
import { title } from "../components/primitives";

// Type Definitions
type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
};

type Skill = {
  name: string;
  level: number;
};

type Skills = {
  frontend: Skill[];
  backend: Skill[];
  devOps: Skill[];
};

type Experience = {
  company: string;
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
        "A full-stack e-commerce solution with cart functionality and payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/project1.jpg",
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://myproject.com",
    },
    {
      title: "52 Blue",
      description:
        "Solo passion project about a individual whale of unidentified species that calls at the unusual frequency of 52 hertz",
      tech: ["React.js", "Tailwind CSS"],
      image: "/52 blue.png",
      github: "https://github.com/trinityprime/52hz-",
      demo: "https://52hz-github-io-rxdz.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with Next.js and HeroUI",
      tech: ["Next.js", "HeroUI", "Tailwind CSS"],
      image: "/project3.jpg",
      github: "https://github.com/yourusername/portfolio",
      demo: "https://myportfolio.com",
    },
  ];

  const skills: Skills = {
    frontend: [
      { name: "React", level: 90 },
      { name: "Vue.js", level: 75 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 85 },
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 70 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 75 },
    ],
    devOps: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 65 },
      { name: "AWS", level: 60 },
      { name: "CI/CD", level: 70 },
    ],
  };

  const experience: Experience[] = [
    {
      company: "Tech Solutions Inc.",
      role: "Frontend Developer",
      period: "2022 - Present",
      description:
        "Developed responsive web applications using React and Vue.js. Implemented user authentication and dashboard analytics.",
      achievements: [
        "Reduced page load time by 40%",
        "Implemented CI/CD pipeline",
        "Led team of 3 junior developers",
      ],
    },
    {
      company: "Digital Innovators",
      role: "Web Development Intern",
      period: "2021 - 2022",
      description:
        "Assisted in developing e-commerce solutions and content management systems.",
      achievements: [
        "Built custom WordPress themes",
        "Implemented payment gateway integrations",
        "Optimized database queries",
      ],
    },
  ];

  const education: Education[] = [
    {
      institution: "Singapore University of Technology",
      degree: "BSc in Computer Science",
      year: "2018 - 2022",
      details: "Specialization in Web Technologies and Database Management",
    },
    {
      institution: "Coursera",
      degree: "Full Stack Web Development Certification",
      year: "2021",
      details: "MERN Stack specialization with honors",
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
              <Button
                size="sm"
                as="a"
                href={project.demo}
                target="_blank"
                color="primary"
              >
                Live Demo
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Skills Section Component
function SkillsSection({ skills }: { skills: Skills }) {
  return (
    <div className="my-1">
      <h2 className={`${title({ size: "sm", color: "blue" })} mb-5 ml-2`}>
        Skills
      </h2>
      <br></br>
      <Tabs aria-label="Skills Categories" className="mt-5">
        <Tab key="frontend" title="Frontend">
          <div className="space-y-4 mt-4">
            {skills.frontend.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <Progress
                  value={skill.level}
                  color="primary"
                  aria-label={`${skill.name} proficiency`}
                  className="h-2"
                />
              </div>
            ))}
          </div>
        </Tab>
        <Tab key="backend" title="Backend">
          <div className="space-y-4 mt-4">
            {skills.backend.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <Progress
                  value={skill.level}
                  color="primary"
                  aria-label={`${skill.name} proficiency`}
                  className="h-2"
                />
              </div>
            ))}
          </div>
        </Tab>
        <Tab key="devops" title="DevOps">
          <div className="space-y-4 mt-4">
            {skills.devOps.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <Progress
                  value={skill.level}
                  color="primary"
                  aria-label={`${skill.name} proficiency`}
                  className="h-2"
                />
              </div>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

// Experience and Education Section Component
function ExperienceSection({
  experience,
  education,
}: {
  experience: Experience[];
  education: Education[];
}) {
  return (
    <div className="my-1">
      <h2 className={`${title({ size: "sm", color: "blue" })} mb-5 ml-2`}>
        Experience
      </h2>
      <div className="space-y-6 mt-5">
        {experience.map((job, index) => (
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
        ))}
      </div>

      <Divider className="my-4" />

      <h2 className={`${title({ size: "sm", color: "blue" })} mb-5 ml-2`}>
        Experience
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
          <div className="flex flex-col space-y-4">
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
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
