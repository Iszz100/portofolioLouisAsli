export const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export const cardInteraction = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.01,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
  tap: { scale: 0.985 },
}