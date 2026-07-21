"use client";

import { useState } from "react";
import resume from "@/data/resume";
import posts from "@/data/posts";
import Sidebar from "@/components/Sidebar";
import AboutTab from "@/components/AboutTab";
import ResumeTab from "@/components/ResumeTab";
import ProjectsTab from "@/components/ProjectsTab";
import BlogTab from "@/components/BlogTab";
import Contact from "@/components/Contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <main className="lg:flex min-h-screen bg-canvas">
      <Sidebar resume={resume} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 p-6 sm:p-10 lg:p-14">
        <div className="max-w-[760px] mx-auto bg-paper border border-rule px-6 py-10 sm:px-12 sm:py-14">
          {activeTab === "About" && <AboutTab resume={resume} />}
          {activeTab === "Resume" && <ResumeTab resume={resume} />}
          {activeTab === "Projects" && <ProjectsTab resume={resume} />}
          {activeTab === "Blog" && <BlogTab posts={posts} />}
          {activeTab === "Contact" && <Contact contact={resume.contact} />}

          <footer className="mt-10 pt-5 border-t border-rule font-mono text-[10px] text-ink-soft text-center tracking-wider">
            © {new Date().getFullYear()} {resume.name} · Built with Next.js & Tailwind CSS
          </footer>
        </div>
      </div>
    </main>
  );
}
