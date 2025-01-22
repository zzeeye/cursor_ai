"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Mail, ExternalLink, ArrowLeft, Code } from "lucide-react";
import Link from "next/link";
import { careers, experiences, projects, skills } from "../data";

export default function MinimalPortfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Link href="/" className="fixed top-6 left-6 text-gray-600 hover:text-gray-900 flex items-center gap-2">
        <ArrowLeft className="h-5 w-5" />
        돌아가기
      </Link>
      
      {/* Site Info Banner */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 text-center text-sm md:text-base">
          <p className="flex items-center justify-center gap-2 text-gray-600">
            <Code className="h-4 w-4" />
            이 사이트는 Cursor AI 도구를 활용하여 제작되었으며, 다음 기술 스택으로 구현되었습니다:
            <span className="font-mono text-gray-700">Next.js 14 / TypeScript / Tailwind CSS / shadcn-ui</span>
          </p>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                김지예
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Web Developer
              </p>
              <div className="flex gap-4">
                <a href="mailto:zzyes95@gmail.com" 
                   className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Mail className="h-5 w-5" />
                  zzyes95@gmail.com
                </a>
                <a href="https://github.com/Yedam101" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-600">
                안녕하세요. 웹 개발자 김지예입니다.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• 새로운 기술을 배우는 노력을 하며, 효율적인 로직을 위해 고민합니다.</li>
                <li>• 건강한 의사소통을 위해 노력합니다.</li>
              </ul>
              <p className="text-gray-600">
                경력: 약 6년 6개월
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4" id="skills">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">SKILLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="relative">
                <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, i) => (
                    <span key={i} 
                          className="px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-20 px-4 bg-gray-50" id="career">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">CAREER</h2>
          <div className="space-y-12">
            {careers.map((career, index) => (
              <div key={index} className="relative">
                <div className="flex gap-8">
                  <div className="w-48 flex-shrink-0">
                    <h3 className="text-xl font-semibold">{career.company}</h3>
                    <p className="text-gray-500">{career.period}</p>
                  </div>
                  <div className="flex-grow space-y-8">
                    {career.projects.map((project, i) => (
                      <div key={i} className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold">{project.name}</h4>
                          <p className="text-sm text-gray-500">{project.period}</p>
                        </div>
                        <ul className="space-y-2 text-gray-600">
                          {project.details.map((detail, j) => (
                            <li key={j}>{detail}</li>
                          ))}
                        </ul>
                        {project.stack && (
                          <p className="text-sm text-gray-500">
                            사용 기술: {project.stack}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4" id="experience">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">EXPERIENCE</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex gap-8">
                  <div className="w-48 flex-shrink-0">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                  <div className="flex-grow">
                    <ul className="space-y-2 text-gray-600">
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-50" id="projects">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">PROJECTS</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.period}</CardDescription>
                    </div>
                    {project.link && (
                      <a href={project.link} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-blue-600 hover:text-blue-800">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">사용 기술</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, i) => (
                          <span key={i} 
                                className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">주요 기능</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 