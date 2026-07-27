"use client";

import { useState } from "react";
import * as Fa from "react-icons/fa";
import * as Fa6 from "react-icons/fa6";
import { pickIcon } from "./iconUtils";

const TABS = ["About", "Resume", "Projects", "Blog", "Contact"];

const SOCIAL_ICONS = {
  linkedin: pickIcon(Fa, "FaLinkedinIn"),
  github: pickIcon(Fa, "FaGithub"),
  dribbble: pickIcon(Fa, "FaDribbble"),
  twitter: pickIcon(Fa6, "FaXTwitter") || pickIcon(Fa, "FaTwitter"),
};

// Official brand colors for each platform's hover state.
// GitHub's mark is black/white — white is used here so it stays visible
// against the dark sidebar background; swap to #181717 if your sidebar
// is ever light.
const SOCIAL_COLORS = {
  linkedin: "#0A66C2",
  github: "#FFFFFF",
  dribbble: "#EA4C89",
  // X's brand black is invisible against a dark sidebar, so it's swapped
  // for X's light "dark mode" text color instead — still reads as "X",
  // but actually visible on hover. Use #1DA1F2 if you'd rather have the
  // legacy Twitter blue.
  twitter: "#E7E9EA",
};

function Avatar({ resume }) {
  const [failed, setFailed] = useState(!resume.photo);

  if (failed) {
    return (
      <div className="w-24 h-24 rounded-full bg-accent/90 text-paper font-display font-semibold text-2xl flex items-center justify-center mb-5">
        {resume.initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resume.photo}
      alt={resume.name}
      onError={() => setFailed(true)}
      className="w-24 h-24 rounded-full object-cover mb-5 border-2 border-accent/50"
    />
  );
}

export default function Sidebar({ resume, activeTab, setActiveTab }) {
  return (
    <aside className="lg:w-[320px] lg:shrink-0 bg-[#161b28] text-paper lg:sticky lg:top-0 lg:h-screen flex flex-col">
      <div className="p-8 flex flex-col items-center text-center border-b border-white/10">
        <Avatar resume={resume} />
        <h1 className="font-display font-semibold text-xl leading-tight">
          {resume.name}
        </h1>
        <div className="font-mono text-[11px] uppercase tracking-widest text-accent mt-2">
          {resume.role}
        </div>

        <div className="font-mono text-[11px] text-paper/60 mt-5 space-y-1">
          <div>{resume.location}</div>
          <div>{resume.availability}</div>
        </div>

        <a
          href={resume.resumeUrl.startsWith("[") ? "#" : resume.resumeUrl}
          className="mt-6 w-full font-mono text-[10.5px] uppercase tracking-wider border border-paper/30 py-2.5 hover:bg-paper hover:text-ink transition-colors"
        >
          Download CV
        </a>
        <button
          onClick={() => setActiveTab("Contact")}
          className="mt-2.5 w-full font-mono text-[10.5px] uppercase tracking-wider bg-accent text-paper py-2.5 hover:bg-paper hover:text-accent transition-colors"
        >
          Hire Me
        </button>

        <div className="flex gap-4 mt-6 text-paper/50">
          {resume.socials.map((s) => {
            const Icon = SOCIAL_ICONS[s.icon];
            const hoverColor = SOCIAL_COLORS[s.icon];
            return (
              <a
                key={s.label}
                href={s.href.startsWith("[") ? "#" : s.href}
                aria-label={s.label}
                title={s.label}
                style={hoverColor ? { "--hover-color": hoverColor } : undefined}
                className="transition-colors hover:text-[color:var(--hover-color)]"
              >
                {Icon ? <Icon size={16} /> : s.label}
              </a>
            );
          })}
        </div>
      </div>

      <nav className="flex lg:flex-col flex-1">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            aria-current={activeTab === tab ? "page" : undefined}
            className={`flex-1 lg:flex-none text-left px-8 py-4 font-mono text-[11px] uppercase tracking-widest border-b border-white/10 lg:border-b-0 lg:border-l-2 transition-colors ${
              activeTab === tab
                ? "border-accent text-accent bg-white/5"
                : "border-transparent text-paper/60 hover:text-paper hover:bg-white/5"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </aside>
  );
}
