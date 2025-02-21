import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Github, Globe } from "lucide-react";
import GitHubCalendar from "react-github-calendar";
import Leetcodecalendar from "../Leetcodecalendar";


export default function Home() {
  const projects = [
    {
      name: "ThePrimeTime",
      repo: "https://github.com/saurabhhh777/ThePrimeTime.git",
      site: "#",
      description:
        "A VS Code screen time analyzer to track your coding habits.",
      techStack: "React, Node.js, MongoDB, Express",
      type: "Web 2",
    },
    {
      name: "ChatApp",
      repo: "https://github.com/saurabhhh777/ChatApp.git",
      site: "#",
      description: "A real-time chat application with end-to-end encryption.",
      techStack: "MongoDB, Express.js, React.js, Node.js ",
      type: "Web 2",
    },
    {
      name: "FaceDetection",
      repo: "https://github.com/saurabhhh777/FaceDetection.git",
      site: "https://appface-detect.vercel.app/",
      description: "A face detection app leveraging AI-powered models.",
      techStack: "TensorFlow.js, React",
      type: "Web 2",
    },
    {
      name: "Image Converter",
      repo: "https://github.com/saurabhhh777/ImgConverter.git",
      site: "#",
      description:
        "A tool to convert images between different formats effortlessly.",
      techStack: "Express, React, Node, TypeScript",
      type: "Web 2",
    },
    {
      name: "Solana Devnet Faucet",
      repo: "https://github.com/saurabhhh777/SolanaDevnetFaucet.git",
      site: "https://solana-devnet-faucet-five.vercel.app/",
      description: "A faucet to distribute Solana Devnet tokens.",
      techStack: "Solana, React",
      type: "Web 3",
    },
    {
      name: "SecondBrainApp",
      repo: "https://github.com/saurabhhh777/BrainlyApp.git",
      site: "#",
      description:
        "A digital second brain to store and organize your thoughts.",
      techStack: "MongoDb, Express.js, React.js, Node.js",
      type: "Web 2",
    },
    {
      name: "JobPortalBackend",
      repo: "https://github.com/saurabhhh777/JobPortalBackend.git",
      site: "#",
      description:
        "Backend services for a job portal, supporting authentication and job listings.",
      techStack: "Node.js, Express.js, MongoDB",
      type: "Web 2",
    },
    {
      name: "URL Shortener",
      repo: "https://github.com/saurabhhh777/URLShortner.git",
      site: "https://l2s-xovy.onrender.com/",
      description: "A simple URL shortener service built with MERN stack.",
      techStack: "MongoDb, Express.js, React.js, Node.js",
      type: "Web 2",
    },
    {
      name: "EasyStayBackend",
      repo: "https://github.com/saurabhhh777/Easy-Stay-edit.git",
      site: "#",
      description: "A rental property management platform.",
      techStack: "Express.js, MongoDB, Node.js",
      type: "Web 2",
    },
    {
      name: "TokenLaunchPad",
      repo: "https://github.com/saurabhhh777/TokenLaunchPad.git",
      site: "https://token-launch-pad.vercel.app/",
      description: "A platform to launch and manage new crypto tokens.",
      techStack: "Solana, React",
      type: "Web 3",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Hero Section */}
      <section className="text-center py-20">
        <img
          src="https://res.cloudinary.com/dongxnnnp/image/upload/v1739618129/urlShortner/ztuaifdzyc2uwk6iory1.webp"
          alt="Saurabh"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold font-poppin">
          Hi, I&apos;m Saurabh 👀
        </h1>
        <p className="text-lg mt-4 font-jost">
          MERN Developer | Blockchain Enthusiast | DevOps Learner
        </p>
      </section>

      {/* Skills Section */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-semibold font-poppin">
          Skills & Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4 font-jost">
          <span className="bg-gray-800 px-4 py-2 rounded-lg">MERN Stack</span>
          {/* <span className="bg-gray-800 px-4 py-2 rounded-lg">Blockchain</span> */}
          {/* <span className="bg-gray-800 px-4 py-2 rounded-lg">Solana</span> */}
          <span className="bg-gray-800 px-4 py-2 rounded-lg">DevOps</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">GitHub</span>
        </div>
      </section>

      <div className="justify-center justify-items-center">
        <GitHubCalendar username="saurabhhh777"/>
      </div>

      <div>
        <Leetcodecalendar username={"saurabhhh777"} graph="yearly"/>
      </div>

      {/* Projects Section */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold text-center font-poppin">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg h-56 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold font-poppin">
                  {project.name}
                </h3>
                <p className="text-md text-gray-400 mb-2 font-jost">
                  {project.description}
                </p>
                <p className="text-xs text-[#a4a7ac]">
                  <span className="font-md font-semibold font-poppin text-[#a4a7ac]">
                    Tech Stack:
                  </span>{" "}
                  {project.techStack}
                </p>
                <p className="text-xs text-[#a4a7ac]">
                  <span className="font-md font-semibold font-poppin text-[#a4a7ac]">
                    Type:
                  </span>{" "}
                  {project.type}
                </p>
              </div>
              <div className="flex flex-row justify-between mt-2 pl-10 pr-10">
                <a
                  href={project.repo}
                  className="text-blue-400 hover:text-blue-900"
                >
                  <Github size={"35"}/>
                </a>
                <a
                  href={project.site}
                  className="text-green-400 hover:text-green-700"
                >
                  <Globe size={"35"} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Socials */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-semibold">Connect with Me</h2>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/saurabhhh777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl cursor-pointer hover:text-gray-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/saurabh-maurya-92b727245/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl cursor-pointer hover:text-blue-400" />
          </a>
          <a
            href="https://x.com/saurabhhh777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-3xl cursor-pointer hover:text-blue-300" />
          </a>
        </div>
      </section>
    </div>
  );
}
