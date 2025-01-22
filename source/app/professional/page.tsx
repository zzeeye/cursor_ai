"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Mail, ExternalLink, ArrowLeft, Briefcase, GraduationCap, Code, Rocket, Menu } from "lucide-react";
import Link from "next/link";
import { careers, experiences, projects, skills } from "../data";

export default function ProfessionalPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // 네비게이션 링크
  const navLinks = [
    { href: "#skills", label: "전문 기술" },
    { href: "#career", label: "경력 사항" },
    { href: "#experience", label: "교육 및 자격" },
    { href: "#projects", label: "개인 프로젝트" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 네비게이션 바 */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden sm:inline">돌아가기</span>
            </Link>
            
            {/* 데스크톱 메뉴 */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.href} 
                   href={link.href}
                   className="text-gray-600 hover:text-blue-600 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>

            {/* 모바일 메뉴 버튼 */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-2 space-y-2">
              {navLinks.map((link) => (
                <a key={link.href}
                   href={link.href}
                   className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                   onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      {/* Site Info Banner */}
      <div className="fixed top-16 left-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 text-center text-sm md:text-base">
          <p className="flex items-center justify-center gap-2">
            <Code className="h-4 w-4" />
            이 사이트는 Cursor AI 도구를 활용하여 제작되었으며, 다음 기술 스택으로 구현되었습니다:
            <span className="font-mono">Next.js 14 / TypeScript / Tailwind CSS / shadcn-ui</span>
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="pt-32"> {/* 네비게이션 바(h-16)와 배너의 높이를 고려한 패딩 */}
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
          <div className="max-w-5xl w-full py-12 md:py-20">
            <div className="text-center space-y-6 md:space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                김지예
              </h1>
              <p className="text-xl md:text-2xl text-gray-700">
                Web Developer
              </p>
              <div className="max-w-2xl mx-auto px-4">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  6년 이상의 웹 개발 경험을 바탕으로 효율적이고 확장 가능한 솔루션을 제공합니다.
                  새로운 기술 습득과 팀 협업을 통해 지속적인 성장을 추구합니다.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
                <a href="mailto:zzyes95@gmail.com" 
                   className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>이메일 보내기</span>
                </a>
                <a href="https://github.com/Yedam101" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors">
                  <Github className="h-5 w-5" />
                  <span>GitHub 방문하기</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 md:py-20 px-4" id="skills">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">전문 기술</h2>
              <p className="text-gray-600">다양한 프로젝트 경험을 통해 습득한 기술 스택</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {skills.map((skill, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl text-blue-600">{skill.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span key={i} 
                              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Career Section */}
        <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50" id="career">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">경력 사항</h2>
              <p className="text-gray-600">주요 프로젝트 및 업무 경험</p>
            </div>
            <div className="space-y-8 md:space-y-12">
              {careers.map((career, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow border-l-4 border-l-blue-600">
                  <CardHeader className="md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <Briefcase className="h-6 w-6 text-blue-600" />
                      <div>
                        <CardTitle className="text-xl md:text-2xl">{career.company}</CardTitle>
                        <CardDescription className="text-base md:text-lg">{career.period}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="md:p-6">
                    <div className="space-y-6 md:space-y-8">
                      {career.projects.map((project, i) => (
                        <div key={i} className="pl-4 sm:pl-6 border-l-2 border-gray-200">
                          <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{project.name}</h4>
                          <p className="text-gray-600 mb-4">{project.period}</p>
                          <ul className="space-y-2 text-gray-700">
                            {project.details.map((detail, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>{detail.replace('• ', '')}</span>
                              </li>
                            ))}
                          </ul>
                          {project.stack && (
                            <div className="mt-4 flex items-start gap-2">
                              <Code className="h-5 w-5 text-blue-600 mt-1" />
                              <p className="text-gray-600">
                                <span className="font-medium">기술 스택:</span> {project.stack}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 md:py-20 px-4" id="experience">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">교육 및 자격</h2>
              <p className="text-gray-600">전문성 향상을 위한 교육 이수 내역</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="md:p-6">
                    <div className="flex items-center gap-4">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                      <div>
                        <CardTitle className="text-lg md:text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-sm md:text-base">{exp.period}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="md:p-6">
                    <ul className="space-y-2 text-gray-700">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50" id="projects">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">개인 프로젝트</h2>
              <p className="text-gray-600">자기 개발을 위한 프로젝트 수행 이력</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader className="md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <Rocket className="h-6 w-6 text-blue-600" />
                        <div>
                          <CardTitle className="text-lg md:text-xl">{project.title}</CardTitle>
                          <CardDescription className="text-sm md:text-base">{project.period}</CardDescription>
                        </div>
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
                  <CardContent className="md:p-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">사용 기술</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, i) => (
                            <span key={i} 
                                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">주요 기능</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                              <span className="text-blue-600 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
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
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600 text-sm">
        © 2024 김지예. All rights reserved.
      </footer>
    </div>
  );
} 