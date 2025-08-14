import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFileAlt, FaComments, FaGraduationCap } from 'react-icons/fa';
import { CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import DarkModeToggle from './components/DarkModeToggle';
import GitHubCalendarWrapper from './components/GitHubCalendar';

export default function Home() {
  const projects = [
    {
      name: "ThePrimeTime",
      repo: "https://github.com/saurabhhh777/ThePrimeTime.git",
      site: "#",
      description: "A VS Code screen time analyzer to track your coding habits and productivity patterns.",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      type: "Web 2",
      featured: true,
      category: "Productivity"
    },
    {
      name: "ChatApp",
      repo: "https://github.com/saurabhhh777/ChatApp.git",
      site: "#",
      description: "A real-time chat application with end-to-end encryption and modern UI.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      type: "Web 2",
      featured: true,
      category: "Communication"
    },
    {
      name: "FaceDetection",
      repo: "https://github.com/saurabhhh777/FaceDetection.git",
      site: "https://appface-detect.vercel.app/",
      description: "A face detection app leveraging AI-powered models for real-time recognition.",
      techStack: ["TensorFlow.js", "React"],
      type: "Web 2",
      featured: true,
      category: "AI/ML"
    },
    {
      name: "Image Converter",
      repo: "https://github.com/saurabhhh777/ImgConverter.git",
      site: "#",
      description: "A tool to convert images between different formats effortlessly with batch processing.",
      techStack: ["Express", "React", "Node", "TypeScript"],
      type: "Web 2",
      featured: false,
      category: "Utility"
    },
    {
      name: "Solana Devnet Faucet",
      repo: "https://github.com/saurabhhh777/SolanaDevnetFaucet.git",
      site: "https://solana-devnet-faucet-five.vercel.app/",
      description: "A faucet to distribute Solana Devnet tokens for development and testing.",
      techStack: ["Solana", "React"],
      type: "Web 3",
      featured: true,
      category: "Blockchain"
    },
    {
      name: "SecondBrainApp",
      repo: "https://github.com/saurabhhh777/BrainlyApp.git",
      site: "#",
      description: "A digital second brain to store and organize your thoughts and ideas.",
      techStack: ["MongoDb", "Express.js", "React.js", "Node.js"],
      type: "Web 2",
      featured: false,
      category: "Productivity"
    },
    {
      name: "JobPortalBackend",
      repo: "https://github.com/saurabhhh777/JobPortalBackend.git",
      site: "#",
      description: "Backend services for a job portal, supporting authentication and job listings.",
      techStack: ["Node.js", "Express.js", "MongoDB"],
      type: "Web 2",
      featured: false,
      category: "Backend"
    },
    {
      name: "URL Shortener",
      repo: "https://github.com/saurabhhh777/URLShortner.git",
      site: "https://l2s-xovy.onrender.com/",
      description: "A simple URL shortener service built with MERN stack and analytics.",
      techStack: ["MongoDb", "Express.js", "React.js", "Node.js"],
      type: "Web 2",
      featured: false,
      category: "Utility"
    },
    {
      name: "EasyStayBackend",
      repo: "https://github.com/saurabhhh777/Easy-Stay-edit.git",
      site: "#",
      description: "A rental property management platform with booking and payment integration.",
      techStack: ["Express.js", "MongoDB", "Node.js"],
      type: "Web 2",
      featured: false,
      category: "Business"
    },
    {
      name: "TokenLaunchPad",
      repo: "https://github.com/saurabhhh777/TokenLaunchPad.git",
      site: "https://token-launch-pad.vercel.app/",
      description: "A platform to launch and manage new crypto tokens with smart contracts.",
      techStack: ["Solana", "React"],
      type: "Web 3",
      featured: false,
      category: "Blockchain"
    }
  ];

  const skills = [
    // Programming Languages
    "TypeScript", "JavaScript", "Java", "Solidity",
    // Frameworks/Libraries
    "Next.js", "React.js", "Express.js", "Node.js", "WebSockets", "Prisma", "Web3.js", "Ethers.js",
    // Databases
    "MongoDB", "PostgreSQL", "Redis",
    // Additional Skills
    "Full-Stack Development", "Web3 Development", "Smart Contracts", "RESTful APIs",
    "Authentication", "Database Design", "Docker", "Kubernetes", "Cloud Deployment"
  ];

  const education = [
    {
      institution: "Shri Ram Murti Smarak College of Engineering & Technology",
      location: "Bareilly",
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      duration: "2022 - 2026",
      status: "Currently Pursuing"
    }
  ];

  

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/saurabhhh777", icon: FaGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/saurabh-maurya-92b727245/", icon: FaLinkedin },
    { name: "Twitter", url: "https://x.com/askbunnyyy", icon: FaTwitter },
    { name: "Email", url: "mailto:saurabhhhere@gmail.com", icon: FaEnvelope },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Web 2': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
      'Web 3': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
      'Blockchain': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      'AI/ML': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
      'Productivity': 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200',
      'Communication': 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200',
      'Utility': 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200',
      'Backend': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
      'Business': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Dark Mode Toggle */}
      <DarkModeToggle />
      
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section - Grid Layout */}
        <section className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-3 space-y-8">
              {/* Greeting */}
              <div className="animate-fade-in">
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">Hello ,</p>
                <h1 className="text-6xl font-bold mb-4 animate-slide-up">
                  I&apos;m Saurabh <span className="text-blue-500 animate-pulse">*</span>
                </h1>
              </div>

              {/* About Section */}
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
                  Hi! I&apos;m a Full-Stack Developer based in India. Everyday I learn, read and practice to create the best applications possible. 
                  It&apos;s beautiful to have a passion and a work at the same time, don&apos;t you think?
                </p>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <a 
                  href="/resume.pdf" 
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-all duration-300 hover:scale-105"
                >
                  <FaFileAlt className="w-5 h-5" />
                  <span>If you want my resume <span className="text-blue-500">**</span></span>
                </a>
                <a 
                  href="mailto:saurabh.maurya@example.com" 
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-all duration-300 hover:scale-105"
                >
                  <FaComments className="w-5 h-5" />
                  <span>Or have a chat</span>
                </a>
              </div>

              {/* Footnotes */}
              <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <p><span className="text-blue-500">*</span> A very passionate and competent person open to freelance offers and full-time opportunities.</p>
                <p><span className="text-blue-500">**</span> if you want my portfolio, ask me. I don&apos;t bite.</p>
              </div>
            </div>

            {/* Social Links Sidebar */}
            <div className="lg:col-span-1">
              <div className="flex lg:flex-col gap-6 lg:gap-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-105 font-medium"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="container-custom py-16">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-1 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-400 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                    <FaGraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                          {edu.institution}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.location}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {edu.degree} in {edu.field}
                        </p>
                      </div>
                      <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                        <p>{edu.duration}</p>
                        <p className="text-green-600 dark:text-green-400 font-medium">{edu.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Skills Section */}
        <section className="container-custom py-16">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">Skills</h2>
          <div className="space-y-8">
            {/* Programming Languages */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-700 dark:text-gray-300">Programming Languages</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.slice(0, 4).map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500 hover:scale-105"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks/Libraries */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-700 dark:text-gray-300">Frameworks & Libraries</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.slice(4, 12).map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500 hover:scale-105"
                    style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-700 dark:text-gray-300">Databases</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.slice(12, 15).map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500 hover:scale-105"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Skills */}
            <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-700 dark:text-gray-300">Additional Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.slice(15).map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500 hover:scale-105"
                    style={{ animationDelay: `${0.8 + index * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GitHub Activity Calendar */}
        <section className="container-custom py-16">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">GitHub Activity</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center mb-6">
              <FaGithub className="w-6 h-6 text-gray-600 dark:text-gray-400 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">My Coding Journey</h3>
            </div>
            <div className="flex justify-center">
              <GitHubCalendarWrapper />
            </div>
            <div className="text-center mt-6 text-sm text-gray-600 dark:text-gray-400">
              <p>Contributions in the last year • <a href="https://github.com/saurabhhh777" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors">View Profile</a></p>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="container-custom py-16">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-1 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{project.category}</p>
                  </div>
                  <span className={clsx(
                    "text-xs px-3 py-1 rounded-full font-medium",
                    getCategoryColor(project.type)
                  )}>
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                  >
                    <CodeBracketIcon className="w-4 h-4" />
                    Source
                  </a>
                  {project.site !== "#" && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                    >
                      <RocketLaunchIcon className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Projects Section */}
        <section className="container-custom py-16">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-1 hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{project.category}</p>
                  </div>
                  <span className={clsx(
                    "text-xs px-3 py-1 rounded-full font-medium",
                    getCategoryColor(project.type)
                  )}>
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                  >
                    <CodeBracketIcon className="w-4 h-4" />
                    Source
                  </a>
                  {project.site !== "#" && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                    >
                      <RocketLaunchIcon className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="container-custom py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 animate-fade-in">Let&apos;s Connect</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
              Feel free to reach out!
            </p>
            <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <social.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container-custom py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p>© 2025 Saurabh Maurya. All rights reserved.</p>
            <p className="text-sm mt-2">Open source under MIT License and available on <a href="https://github.com/saurabhhh777" className="text-blue-500 hover:text-blue-600 transition-colors">GitHub</a></p>
          </div>
        </footer>
      </div>
    </div>
  );
}
