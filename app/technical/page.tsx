"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Mail, ExternalLink, ArrowLeft, Terminal, GitBranch, GitCommit } from "lucide-react";
import Link from "next/link";
import { careers, experiences, projects, skills } from "../data";

export default function TechnicalPortfolio() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300">
      <Link href="/" className="fixed top-6 left-6 text-gray-400 hover:text-gray-200 flex items-center gap-2">
        <ArrowLeft className="h-5 w-5" />
        돌아가기
      </Link>
      
      {/* Site Info Banner */}
      <div className="bg-[#161b22] border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 text-center text-sm md:text-base">
          <p className="flex items-center justify-center gap-2 text-gray-300">
            <Terminal className="h-4 w-4 text-green-400" />
            <span className="font-mono text-green-400">$</span>
            이 사이트는 Cursor AI 도구를 활용하여 제작되었으며, 다음 기술 스택으로 구현되었습니다:
            <span className="font-mono text-blue-400">Next.js 14 / TypeScript / Tailwind CSS / shadcn-ui</span>
          </p>
        </div>
      </div>
      
      {/* Hero Section - Terminal Style */}
      <section className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="bg-[#161b22] rounded-lg border border-gray-700 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#21262d] border-b border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-sm text-gray-400">terminal</span>
            </div>
            <div className="p-6 font-mono">
              <div className="flex items-center gap-2 text-green-400">
                <Terminal className="h-4 w-4" />
                <span>~ whoami</span>
              </div>
              <div className="mt-4 space-y-2">
                <p>김지예</p>
                <p>Web Developer</p>
                <p>경력: 약 6년 6개월</p>
                <p className="text-gray-500">새로운 기술을 배우는 노력을 하며, 효율적인 로직을 위해 고민합니다.</p>
                <p className="text-gray-500">건강한 의사소통을 위해 노력합니다.</p>
              </div>
              <div className="mt-6 flex gap-4">
                <a href="mailto:zzyes95@gmail.com" 
                   className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300">
                  <Mail className="h-4 w-4" />
                  zzyes95@gmail.com
                </a>
                <a href="https://github.com/Yedam101" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Tag Cloud */}
      <section className="py-20 px-4" id="skills">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-mono mb-12 flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            SKILLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-[#161b22] rounded-lg border border-gray-700 p-6">
                <h3 className="text-lg font-mono mb-4 text-blue-400">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} 
                          className="px-3 py-1 bg-[#21262d] rounded text-sm text-green-400 border border-gray-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Section - GitHub Style */}
      <section className="py-20 px-4 bg-[#161b22]" id="career">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-mono mb-12 flex items-center gap-2">
            <GitBranch className="h-5 w-5" />
            CAREER
          </h2>
          <div className="space-y-8">
            {careers.map((career, index) => (
              <div key={index} className="bg-[#0d1117] rounded-lg border border-gray-700 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <GitCommit className="h-5 w-5 text-blue-400" />
                  <h3 className="text-xl font-mono text-blue-400">{career.company}</h3>
                  <span className="text-sm text-gray-500">{career.period}</span>
                </div>
                <div className="space-y-6 pl-6 border-l-2 border-gray-700">
                  {career.projects.map((project, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[29px] top-2 w-4 h-4 rounded-full bg-[#0d1117] border-2 border-gray-700" />
                      <div>
                        <h4 className="text-lg font-mono text-green-400">{project.name}</h4>
                        <p className="text-sm text-gray-500 mb-4">{project.period}</p>
                        <ul className="space-y-2 text-gray-400">
                          {project.details.map((detail, j) => (
                            <li key={j}>{detail}</li>
                          ))}
                        </ul>
                        {project.stack && (
                          <p className="mt-4 text-sm text-gray-500">
                            Tech Stack: {project.stack}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4" id="experience">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-mono mb-12 flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            EXPERIENCE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-[#161b22] rounded-lg border border-gray-700 p-6">
                <h3 className="text-lg font-mono text-blue-400 mb-2">{exp.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                <ul className="space-y-2 text-gray-400">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-[#161b22]" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-mono mb-12 flex items-center gap-2">
            <Github className="h-5 w-5" />
            PROJECTS
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#0d1117] rounded-lg border border-gray-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-mono text-blue-400">{project.title}</h3>
                  {project.link && (
                    <a href={project.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-gray-400 hover:text-gray-300">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-6">{project.period}</p>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-mono text-gray-400 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, i) => (
                        <span key={i} 
                              className="px-3 py-1 bg-[#21262d] rounded text-sm text-green-400 border border-gray-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-gray-400 mb-3">Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 