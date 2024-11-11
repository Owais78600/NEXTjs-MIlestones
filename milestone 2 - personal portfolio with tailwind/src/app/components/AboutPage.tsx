'use client'
import { motion } from 'framer-motion';
import Navigation from './Navigation';

const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span>{skill}</span>
      <span>{percentage}%</span>
    </div>
    <div className="h-2 bg-gray-700 rounded">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-full bg-blue-600 rounded"
      />
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
              <div className="text-gray-300 space-y-4">
  <h2 className="text-2xl font-bold text-white">Owais - Front Sales Executive</h2>
  <p className="text-gray-400 leading-relaxed">
    Experienced sales professional with a solid background in various sectors, including software, internet services, credit card solutions, and insurance. Currently working as a <span className="text-blue-400 font-semibold">Front Sales Executive</span> at <span className="text-blue-400 font-semibold">Gotech Solutions</span>, specializing in selling software products like CRM, ERP systems, websites, and mobile applications. Skilled in building and nurturing client relationships, leading successful sales teams, and achieving targets.
  </p>
  <p className="text-gray-400 leading-relaxed">
    With extensive experience in direct sales and leadership roles, I have a proven track record of exceeding sales goals and managing client expectations effectively. My previous roles have equipped me with strong sales techniques, from closing Medicare insurance deals to handling internet services, credit cards, and financial solutions. Recognized for my ability to drive growth and for earning the <span className="font-semibold text-blue-400">"Rising Star"</span> certificate during my time as a Senior Sales Executive, I have demonstrated adaptability and dedication to delivering top results in competitive industries.
  </p>
  <h3 className="text-xl font-semibold text-white">Key Skills:</h3>
  <ul className="list-disc list-inside text-gray-400 space-y-2 pl-4">
    <li>Relationship building and client communication</li>
    <li>Business development and sales strategy</li>
    <li>Familiarity with Microsoft Excel for data management</li>
    <li>Basic front-end web development</li>
    <li>Goal-oriented and results-driven</li>
  </ul>
</div>

            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
              
              <SkillBar skill="Technical Skills" percentage={75} />
<SkillBar skill="Sales and Negotiation" percentage={80} />
<SkillBar skill="Communication and Client Relations" percentage={95} />
<SkillBar skill="Lead Generation and Prospecting" percentage={85} />
<SkillBar skill="UI/UX Design" percentage={75} />
<SkillBar skill="React" percentage={90} />
<SkillBar skill="TypeScript" percentage={85} />
<SkillBar skill="Node.js" percentage={80} />
<SkillBar skill="JavaScript" percentage={85} />
<SkillBar skill="Microsoft Excel" percentage={80} />
<SkillBar skill="Project Management" percentage={70} />
<SkillBar skill="Market Analysis" percentage={75} />
<SkillBar skill="CRM Tools" percentage={80} />
<SkillBar skill="Product Presentation" percentage={85} />
<SkillBar skill="Time Management" percentage={80} />

              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
