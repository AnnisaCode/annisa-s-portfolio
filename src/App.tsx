import React, { useEffect } from 'react';
// import { Github, Linkedin, Code2, Cpu, Layout, Globe } from 'lucide-react';
import { Linkedin, Cpu, Layout, Globe } from 'lucide-react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Annisa's Portfolio
            </span>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              {/* <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="hidden-element space-y-6 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Annisa
              <span className="block text-blue-600">Front-End Web Developer</span>
            </h1>
            <p className="text-xl text-gray-600">
              Passionate about creating intuitive user experiences through clean, responsive design and efficient frontend logic. Skilled in modern web development and report design, with experience using advanced tools and workflows to enhance development speed and code quality.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/annisa1202/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
              {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="hidden-element max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Detail-oriented IT graduate with practical experience in frontend web development and report design. Skilled in HTML, CSS, JavaScript, and experienced with tools like Crystal Reports and Pentaho. Currently focusing on modern frontend frameworks such as React, Next.js, and Tailwind CSS, while continuously adopting efficient tools and workflows to boost productivity and maintain high code quality. Passionate about crafting clean, responsive interfaces and solving problems through collaborative, efficient development. Eager to contribute to innovative web projects and grow as a frontend developer.            </p>
            <div className="flex justify-center space-x-6">
              {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a> */}
              <a href="https://www.linkedin.com/in/annisa1202/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layout className="w-8 h-8" />,
                title: 'Frontend Development',
                desc: 'Experienced with HTML, CSS, JavaScript, and currently focusing on React, Next.js, and Tailwind CSS to build clean, responsive interfaces.'
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: 'Report Design',
                desc: 'Skilled in creating structured and data-driven reports using Crystal Reports and Pentaho Report Designer for clear business insights.'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Modern Workflow & Tools',
                desc: 'Continuously adopting tools and workflows to improve productivity, maintain high code quality, and support collaborative development.'
              }
            ].map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Preventive Maintenance FBMS 2 BP Batam",
                type: "Professional Project",
                period: "Jan 2024 - Dec 2024",
                company: "PT Inti Digital Madani",
                description: "Website maintenance project ensuring functionality, responsiveness, and visual appeal. Implemented updates, optimized performance, and resolved technical issues while collaborating with cross-functional teams.",
                image: '/annisa-s-portfolio/images/FBMS.jpg',
                skills: ["Maintenance", "Team Collaboration", "Web Development", "Performance Optimization"]
              },
              {
                title: "Sistem Informasi LSP Polibatam",
                type: "Academic Project",
                period: "Aug 2020 - May 2021",
                company: "Polibatam Software Team",
                description: "Web-based Information System for the Certification Institute (LSP Polibatam). Developed using PHP, HTML, CSS, JavaScript, and SQL Server. Implemented features for certification management, user accounts, and reporting.",
                image: '/annisa-s-portfolio/images/LSP.png',
                skills: ["Responsive Web Design", "Full-stack Programming", "Database Design", "User Interface"]
              }
            ].map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm">{project.description}</p>
                      <p className="text-xs mt-2">{project.type}</p>
                      <p className="text-xs mt-1">{project.period}</p>
                      <p className="text-xs mt-1">{project.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Annisa is a hard-working individual who learns quickly. Her ability to adapt and deliver results in a short amount of time is impressive. She's a valuable asset to any team.",
                author: "Senior Programmer",
                role: "Polibatam Software Team"
              },
              {
                quote: "Annisa is quick to adapt to new environments and works exceptionally well within teams. She is a hard worker and highly skilled at handling and processing documents efficiently.",
                author: "Gilang Bagus",
                role: "Web Developer, Polibatam Software Team"
              },
              {
                quote: "Annisa has been an incredible assistant, providing valuable support across various areas. Her diverse skill set and willingness to help make her an invaluable member of the team.",
                author: "Senior Web Developer",
                role: "Growing Tech Company"
              }
            ].map((testimonial, index) => (
              <div key={index} className="hidden-element bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a> */}
            <a href="https://www.linkedin.com/in/annisa1202/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-gray-600 mb-2">Made with ❤️ by Annisa</p>
          <p className="text-gray-500">© 2025 AnnisaCode. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;