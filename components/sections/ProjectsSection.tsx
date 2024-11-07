"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/ProjectCard"
import { projects } from "@/data/projects"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="container py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              image={project.image}
              links={project.links}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
