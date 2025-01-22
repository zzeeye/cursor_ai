import * as React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Mail } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              JiYe Kim
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="#skills" className="text-gray-600 hover:text-gray-900">
              Skills
            </Link>
            <Link href="#career" className="text-gray-600 hover:text-gray-900">
              Career
            </Link>
            <Link href="#experience" className="text-gray-600 hover:text-gray-900">
              Experience
            </Link>
            <Link href="#projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <a href="mailto:zzyes95@gmail.com" className="text-gray-600 hover:text-gray-900">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://github.com/Yedam101" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-gray-900">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 