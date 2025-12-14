"use client"

import { Github, Linkedin, Instagram, Send, Mail, MapPin, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Background3D } from "@/components/background-3d"
import { MobileNav } from "@/components/mobile-nav"

export default function Portfolio() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#1a1f2e] text-white">
      <Background3D />
      <MobileNav />

      <div className="relative" style={{ zIndex: 1 }}>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 mb-6 flex items-center justify-center text-5xl font-bold">
                  BT
                </div>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-balance">Be'emnet Tatek Tesfaye</h1>
              <p className="text-2xl text-blue-400 mb-6">Aspiring Software Engineer | AI Enthusiast | Student Leader</p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Grade 12 graduate from Addis Ababa, Ethiopia with a strong academic foundation and passion for
                technology. Seeking admission and funding for Bachelor's in Software Engineering/Computer Science abroad
                by September 2026.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={scrollToContact}>
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-950 bg-transparent"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>
            </div>
            <div className="lg:pl-12">
              <div className="space-y-4">
                <Card className="p-6 bg-[#252b3d] border-blue-900">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Location</h3>
                      <p className="text-gray-400">Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-[#252b3d] border-blue-900">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Education</h3>
                      <p className="text-gray-400">High School Graduate 2025</p>
                      <p className="text-blue-400 font-semibold">Score: 85/100</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-blue-900 bg-[#151922] py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12">About Me</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm a passionate and driven individual with a strong foundation in academics and leadership.
                  Throughout my educational journey, I've developed a keen interest in software engineering, artificial
                  intelligence, and technology innovation.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Beyond academics, I've demonstrated leadership as Basketball Team Captain and Batch Committee Senior,
                  while actively contributing to my community through volunteer work. My diverse interests span from AI
                  workflow design to Word of Faith doctrinal studies, reflecting my commitment to both technical
                  excellence and personal growth.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm currently seeking opportunities to pursue a Bachelor's degree in Software Engineering or Computer
                  Science at a prestigious international institution, where I can further develop my skills and
                  contribute to innovative technological solutions.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-600 hover:bg-blue-700">Software Engineering</Badge>
                    <Badge className="bg-blue-600 hover:bg-blue-700">Computer Science</Badge>
                    <Badge className="bg-blue-600 hover:bg-blue-700">Leadership</Badge>
                    <Badge className="bg-blue-600 hover:bg-blue-700">Athletics</Badge>
                    <Badge className="bg-blue-600 hover:bg-blue-700">Volunteering</Badge>
                    <Badge className="bg-blue-600 hover:bg-blue-700">AI & Technology</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="border-t border-blue-900 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 bg-[#252b3d] border-blue-900">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Technical Skills</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-300">AI workflow design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-300">Programming fundamentals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-300">Structured problem-solving</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6 bg-[#252b3d] border-blue-900">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Tools & Platforms</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-300">GitHub</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-300">Productivity apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-300">Project planning frameworks</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6 bg-[#252b3d] border-blue-900">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Soft Skills</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-300">Leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-300">Teamwork & Communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-300">Discipline & Dedication</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="border-t border-blue-900 bg-[#151922] py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12">Featured Project</h2>
            <Card className="p-8 bg-[#252b3d] border-blue-900">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">AI Workflow Project</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Designed and executed a structured AI workflow showcasing technical and problem-solving ability.
                    This project demonstrates my understanding of artificial intelligence principles and my ability to
                    apply them to real-world scenarios.
                  </p>
                  <div className="flex gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                      <a href="https://github.com/Bemiie" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-blue-500 text-blue-400 hover:bg-blue-950 bg-transparent"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="bg-[#1a1f2e] rounded-lg p-8 border border-blue-900 flex items-center justify-center h-64">
                  <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Monitor */}
                    <rect
                      x="20"
                      y="20"
                      width="160"
                      height="100"
                      rx="4"
                      stroke="#60a5fa"
                      strokeWidth="3"
                      fill="#0f172a"
                    />

                    {/* Screen content - code lines */}
                    <line x1="35" y1="40" x2="80" y2="40" stroke="#3b82f6" strokeWidth="2" />
                    <line x1="45" y1="52" x2="100" y2="52" stroke="#60a5fa" strokeWidth="2" />
                    <line x1="45" y1="64" x2="85" y2="64" stroke="#60a5fa" strokeWidth="2" />
                    <line x1="35" y1="76" x2="75" y2="76" stroke="#3b82f6" strokeWidth="2" />
                    <line x1="45" y1="88" x2="110" y2="88" stroke="#60a5fa" strokeWidth="2" />
                    <line x1="45" y1="100" x2="90" y2="100" stroke="#60a5fa" strokeWidth="2" />

                    {/* Brackets/symbols */}
                    <text x="130" y="55" fill="#3b82f6" fontSize="24" fontFamily="monospace">
                      {"{"}
                    </text>
                    <text x="145" y="75" fill="#60a5fa" fontSize="20" fontFamily="monospace">
                      {"<>"}
                    </text>
                    <text x="130" y="95" fill="#3b82f6" fontSize="24" fontFamily="monospace">
                      {"}"}
                    </text>

                    {/* Monitor stand */}
                    <rect x="85" y="120" width="30" height="15" fill="#60a5fa" />

                    {/* Monitor base */}
                    <rect x="65" y="135" width="70" height="5" rx="2" fill="#60a5fa" />
                  </svg>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section className="border-t border-blue-900 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12">Experience & Leadership</h2>
            <div className="space-y-6">
              <Card className="p-6 bg-[#252b3d] border-blue-900">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 text-xl">
                    🏀
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Basketball Team Captain</h3>
                    <p className="text-gray-400 mb-3">
                      Led team strategy, coordinated practices, and fostered team spirit
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-blue-600 text-blue-400">
                        Leadership
                      </Badge>
                      <Badge variant="outline" className="border-blue-600 text-blue-400">
                        Teamwork
                      </Badge>
                      <Badge variant="outline" className="border-blue-600 text-blue-400">
                        Athletics
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-[#252b3d] border-blue-900">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 text-xl">
                    👥
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Batch Committee Senior</h3>
                    <p className="text-gray-400 mb-3">Coordinated class activities and represented student interests</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-blue-600 text-blue-400">
                        Leadership
                      </Badge>
                      <Badge variant="outline" className="border-blue-600 text-blue-400">
                        Communication
                      </Badge>
                      <Badge variant="outline" className="border-blue-600 text-blue-400">
                        Organization
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-[#252b3d] border-blue-900">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 text-xl">
                    📚
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Librarian Volunteer</h3>
                    <p className="text-gray-400 mb-3">Assisted in library management and promoted reading culture</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-blue-600 text-blue-400">
                        Volunteering
                      </Badge>
                      <Badge variant="outline" className="border-blue-600 text-blue-400">
                        Service
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-[#252b3d] border-blue-900">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 text-xl">
                    🤝
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">HHOJ Volunteer</h3>
                    <p className="text-gray-400 mb-3">Contributed to community service initiatives</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-blue-600 text-blue-400">
                        Volunteering
                      </Badge>
                      <Badge variant="outline" className="border-blue-600 text-blue-400">
                        Community Service
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Education & Achievements */}
        <section className="border-t border-blue-900 bg-[#151922] py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12">Education & Achievements</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Academic Excellence</h3>
                <Card className="p-6 bg-[#252b3d] border-blue-900 mb-6">
                  <h4 className="text-xl font-semibold mb-3">High School Education</h4>
                  <p className="text-gray-400 mb-2">Graduation Year: 2025</p>
                  <p className="text-2xl font-bold text-blue-400">Overall Score: 85/100</p>
                </Card>
                <Card className="p-6 bg-[#252b3d] border-blue-900">
                  <h4 className="text-xl font-semibold mb-3">Future Goals</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Pursuing Bachelor's degree in Software Engineering or Computer Science at an international
                    institution by September 2026, with a focus on securing funding and scholarships.
                  </p>
                </Card>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Certifications & Awards</h3>
                <div className="space-y-4">
                  <Card className="p-4 bg-[#252b3d] border-blue-900">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🏆</span>
                      <div>
                        <p className="font-semibold">AAU e-she Certificate</p>
                        <p className="text-sm text-gray-400">Addis Ababa University Program</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 bg-[#252b3d] border-blue-900">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📜</span>
                      <div>
                        <p className="font-semibold">School Academic Awards</p>
                        <p className="text-sm text-gray-400">Recognition for academic excellence</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 bg-[#252b3d] border-blue-900">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🌟</span>
                      <div>
                        <p className="font-semibold">Volunteer Certificates</p>
                        <p className="text-sm text-gray-400">Community service recognition</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 bg-[#252b3d] border-blue-900">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🗣️</span>
                      <div>
                        <p className="font-semibold">Duolingo English Test</p>
                        <p className="text-sm text-gray-400">Planned for scholarship applications</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t border-blue-900 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or simply connecting with fellow
                technology enthusiasts. Feel free to reach out!
              </p>
              <div className="flex justify-center gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="https://github.com/Bemiie" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-950 bg-transparent"
                  asChild
                >
                  <a href="https://linkedin.com/in/bemnet-tatek" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-950 bg-transparent"
                  asChild
                >
                  <a href="https://www.instagram.com/be.en_tt" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" />
                    Instagram
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-950 bg-transparent"
                  asChild
                >
                  <a href="https://t.me/Bemnet_tt" target="_blank" rel="noopener noreferrer">
                    <Send className="mr-2 h-5 w-5" />
                    Telegram
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <a
                  href="mailto:beemnet02@gmail.com"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  beemnet02@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/bemnet-tatek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  linkedin.com/in/bemnet-tatek
                </a>
                <a
                  href="https://github.com/Bemiie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  github.com/Bemiie
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-blue-900 bg-[#151922] py-8">
          <div className="container mx-auto px-6 text-center text-gray-400">
            <p>© 2025 Be'emnet Tatek Tesfaye. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with passion for technology and innovation</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
