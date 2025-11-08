"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const workExperience = [
  {
    company: "CalendarCompanion",
    role: "Co-founder & Lead Software Developer",
    location: "Toronto, ON",
    date: "Sep 2025 — Present",
    logo: "/logos/cclogosmall.png",
    logoBg: "bg-white-500",
  },
  {
    company: "WATOnomous",
    role: "AI/Autonomous Software Engineer",
    location: "Waterloo, ON",
    date: "Sep 2025 — Present",
    logo: "/logos/wato.png",
    logoBg: "bg-blue-600",
  },
  {
    company: "W.E Global",
    role: "Robotics Instructor",
    location: "Markham, ON",
    date: "Mar 2025 — Jul 2025",
    logo: "/logos/weglobal.png",
    logoBg: "bg-blue-600",
  },
  {
    company: "VEX Robotics",
    role: "Team Lead (Design & Programming)",
    location: "Richmond Hill, ON",
    date: "Jun 2021 — Apr 2025",
    logo: "/logos/vex.png",
    logoBg: "bg-red-600",
  },
];

const education = [
  {
    institution: "University of Waterloo",
    degree:
      "Bachelor's Degree of Honors Mathematics (BMath) — Major in AMath/Machine Learning",
    date: "2025 — 2029",
    logo: "/logos/uwaterloo.svg",
    logoBg: "bg-white border border-gray-300",
  },
  {
    institution: "St. Theresa of Lisieux Secondary School",
    degree: "Ontario Secondary School Diploma (OSSD)",
    date: "2021 — 2025",
    logo: "/logos/stl.png",
    logoBg: "bg-green-100",
  },
];

const projects = [
  {
    title: "Self-Learning Chess AI",
    description:
      "AlphaZero-style chess engine with Monte Carlo Tree Search (MCTS) and self-play reinforcement learning using Pytorch and CUDA. Achieved 1800 Elo vs. Stockfish Depth 3 in <72 hours of training.",
    tech: ["Pytorch", "Pandas", "CUDA", "ML"],
    image: "/projects/chess.png",
    github: "https://github.com/mqnch",
  },
  {
    title: "MNIST Neural Network",
    description:
      "Neural network from scratch with modular, vectorized NumPy code, using He initialization, ReLU activation, and Adam optimization on the MNIST dataset to achieve 95% test accuracy.",
    tech: ["Python", "ML"],
    image: "/projects/mnist.png",
    github: "https://github.com/mqnch/numpy-mnist-nn",
  },
  {
    title: "Personal Portfolio Website",
    description: "You're on it right now :)",
    tech: ["React", "Typescript", "Tailwind CSS"],
    image: "/projects/website.png",
    github: "https://github.com/mqnch",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
        <section id="intro" className="pb-12 pt-20 md:pb-10 md:pt-32">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-6 md:gap-8">
              <div className="flex-1">
                <motion.h1
                  variants={fadeInUp}
                  className="mb-4 text-5xl font-semibold text-gray-900 dark:text-white md:text-7xl"
                >
                  hey, i'm felix!
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="mb-4 text-xl text-gray-600 dark:text-gray-400 md:text-2xl"
                >
                  math @ uwaterloo
                </motion.p>
              </div>
              <motion.div
                variants={fadeInUp}
                className="h-30 w-30 relative shrink-0 overflow-hidden rounded-full border-2 border-gray-200 dark:border-gray-700 md:h-36 md:w-36"
              >
                <Image
                  src="/logos/felix.png"
                  alt="Felix Pan"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="py-12 md:py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-3xl">
              About
            </h2>
            <p className="mb-4 text-base font-light leading-relaxed text-gray-700 dark:text-gray-400">
              i'm felix pan, studying{" "}
              <a
                href="#education"
                className="font-normal text-gray-900 underline decoration-1 underline-offset-4 transition-colors hover:text-highlight/80 dark:text-gray-200"
              >
                mathematics @ the university of waterloo
              </a>
              . i take pride in projects that i can stand behind: i'm currently
              working on{" "}
              <a
                href="#experience"
                className="font-normal text-gray-900 underline decoration-1 underline-offset-4 transition-colors hover:text-highlight/80 dark:text-gray-200"
              >
                CalendarCompanion
              </a>
              , as well as a{" "}
              <a
                href="#projects"
                className="font-normal text-gray-900 underline decoration-1 underline-offset-4 transition-colors hover:text-highlight/80 dark:text-gray-200"
              >
                self-taught chess neural network
              </a>
              . in my free time, i enjoy going to the gym, playing badminton,
              practicing guitar, and cooking.
            </p>
          </motion.div>
        </section>

        <section id="experience" className="py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white md:text-3xl">
              Experience
            </h2>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div
                    className={`relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg ${job.logoBg}`}
                  >
                    {job.logo ? (
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        width={40}
                        height={40}
                        className="h-full w-full object-contain p-0"
                        unoptimized
                      />
                    ) : (
                      <span className="text-xs font-bold text-white">
                        {job.company.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {job.company}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {job.role}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          {job.location}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-500 md:text-right">
                        {job.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="education" className="py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white md:text-3xl">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div
                    className={`relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full ${edu.logoBg}`}
                  >
                    {edu.logo ? (
                      <Image
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        width={40}
                        height={40}
                        className="h-full w-full object-contain p-0.5"
                        unoptimized
                      />
                    ) : (
                      <span className="text-xs font-bold text-gray-900 dark:text-white">
                        {edu.institution.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {edu.institution}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {edu.degree}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-500 md:text-right">
                        {edu.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="py-12 pb-32 md:py-16 md:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-3xl">
              Projects
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-colors hover:border-highlight dark:border-gray-800 dark:bg-gray-800 dark:hover:border-highlight-dark"
                >
                  <div className="relative h-48 w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-4xl opacity-20">📁</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-highlight/10 px-3 py-1 text-xs text-highlight dark:bg-highlight-dark/20 dark:text-highlight-dark"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Source
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
