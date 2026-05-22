'use client'

import { motion } from 'framer-motion'

export function Technologies() {
    const ICON_BASE = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons";

    const techs = [
        { name: "React",       slug: "react",        color: "#61DAFB" },
        { name: "Next.js",     slug: "nextdotjs",    color: "#" },
        { name: "TypeScript",  slug: "typescript",   color: "#3178C6" },
        { name: "Node.js",     slug: "nodedotjs",    color: "#339933" },
        { name: "Python",      slug: "python",       color: "#3776AB" },
        { name: "Spring Boot", slug: "springboot",   color: "#6DB33F" },
        { name: "PostgreSQL",  slug: "postgresql",   color: "#4169E1" },
        { name: "AWS",         slug: "amazonaws",    color: "#FF9900" },
        { name: "Docker",      slug: "docker",       color: "#2496ED" },
        { name: "Java",        slug: "openjdk",      color: "#ED8B00" },
        { name: "MongoDB",     slug: "mongodb",      color: "#47A248" },
        { name: "Redis",       slug: "redis",        color: "#FF4438" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6 },
        },
    }

    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute left-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 opacity-30"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="space-y-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {/* Header */}
                    <motion.div className="max-w-3xl space-y-4" variants={itemVariants}>
                        <motion.span
                            className="inline-block text-sm font-semibold text-accent uppercase tracking-wider"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Technology Stack
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Built With Modern Technologies
                        </h2>
                        <p className="text-lg text-foreground/70 max-w-2xl">
                            We use industry-leading tools and frameworks to deliver scalable, secure solutions.
                        </p>
                    </motion.div>

                    {/* Tech Grid */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        {techs.map((tech) => (
                            <motion.div
                                key={tech.name}
                                className="group flex flex-col items-center justify-center p-8 rounded-2xl border border-border/20 bg-card/40 backdrop-blur-xl hover:border-accent/50 transition-all duration-300"
                                variants={itemVariants}
                                whileHover={{
                                    y: -10,
                                    borderColor: 'rgb(82, 183, 136)',
                                    boxShadow: '0 15px 40px rgba(82, 183, 136, 0.15)',
                                }}
                            >
                                <motion.div
                                    className="mb-4 p-3 rounded-xl bg-foreground/5 group-hover:bg-accent/10 transition-colors flex items-center justify-center w-16 h-16"
                                    whileHover={{ scale: 1.15, rotate: 15 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {/* Wrap in a colored container matching the brand color.
                      The SVG stays black; the background provides the color identity.
                      This works perfectly in both light and dark mode. */}
                                    <div
                                        style={{ backgroundColor: tech.color }}
                                        className="w-10 h-10 rounded-lg flex items-center justify-center p-1.5"
                                    >
                                        <img
                                            src={`${ICON_BASE}/${tech.slug}.svg`}
                                            alt={`${tech.name} logo`}
                                            width={28}
                                            height={28}
                                            style={{
                                                // SVGs are black — invert to white so they show on the colored bg.
                                                // Next.js is black-on-white so we skip inverting it.
                                                filter: tech.slug === 'nextdotjs' ? 'none' : 'invert(1)',
                                            }}
                                        />
                                    </div>
                                </motion.div>
                                <span className="text-sm font-bold text-center text-foreground group-hover:text-accent transition-colors">
                  {tech.name}
                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        {[
                            { title: 'Frontend',                  technologies: 'React, Next.js, TypeScript' },
                            { title: 'Backend',                   technologies: 'Node.js, Python, Java, Spring Boot' },
                            { title: 'Infrastructure & Database', technologies: 'AWS, Docker, PostgreSQL, MongoDB, Redis' },
                        ].map((category) => (
                            <motion.div
                                key={category.title}
                                className="p-6 rounded-2xl border border-border/20 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl"
                                variants={itemVariants}
                                whileHover={{ y: -4 }}
                            >
                                <h3 className="font-bold mb-2 text-accent">{category.title}</h3>
                                <p className="text-sm text-foreground/70">{category.technologies}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}