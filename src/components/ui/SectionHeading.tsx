import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="font-display text-3xl md:text-5xl text-balance text-gray-900 mb-4">
        {title}
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">{subtitle}</p>
    </motion.div>
  );
}
