import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'

const Feature = ({ title, desc, icon }) => (
  <motion.div whileHover={{ scale: 1.02 }} className="rounded-[20px] border border-[#EDEDED] bg-white p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <div className="rounded-2xl bg-[#F3F6FF] text-[#4A6CF7] px-3 py-2 text-sm font-semibold">{icon}</div>
      <div>
        <h4 className="text-[#1E1E1E] font-semibold">{title}</h4>
        <p className="text-[#4D4D4D] text-sm">{desc}</p>
      </div>
    </div>
  </motion.div>
)

const Home = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#F9B37D22,transparent_40%),radial-gradient(circle_at_80%_0%,#4A6CF722,transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#4A6CF7] font-semibold">Interview Preparation Platform</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-[#1E1E1E]">Prepare Smarter. Get Hired Faster.</h1>
            <p className="mt-4 text-[#4D4D4D] text-lg">Handcrafted practice across MCQs, coding, HR, and realistic mock interviews — built to feel warm, calm, and premium.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/mcqs"><Button>Start Practicing</Button></a>
              <a href="/coding"><Button variant="peach">Explore Question Bank</Button></a>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative">
            <div className="rounded-[28px] border border-[#EDEDED] bg-white p-6 shadow-xl">
              <div className="h-64 rounded-[20px] bg-gradient-to-br from-[#F3F6FF] to-white border border-[#EDEDED] grid place-items-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#4A6CF7] to-[#F9B37D] opacity-20 blur-2xl" />
                <img src="https://images.unsplash.com/photo-1579762593175-20226054cad0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpbGx1c3RyYXRpb258ZW58MHwwfHx8MTc2MzIxNjk5NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="illustration" className="absolute w-64" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                {['MCQs Practice', 'Coding Prep', 'HR Interview', 'Mock Simulator'].map((it) => (
                  <div key={it} className="rounded-[16px] border border-[#EDEDED] bg-[#FDFDFE] p-3 text-[#4D4D4D]">{it}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Feature title="MCQs Practice" desc="Practice curated questions with delightful feedback." icon="A" />
          <Feature title="Coding Prep" desc="Dive into structured problems with constraints." icon="</>" />
          <Feature title="HR Interview" desc="Confident responses with best-in-class samples." icon="HR" />
          <Feature title="Simulator" desc="Feel the real interview with a gentle UI." icon="🎤" />
        </div>

        <div className="rounded-[20px] border border-[#EDEDED] bg-white p-8 shadow-sm">
          <h3 className="text-[#1E1E1E] font-semibold">Smooth Scrolling & Transitions</h3>
          <p className="mt-2 text-[#4D4D4D] max-w-2xl">Every interaction is intentional — soft lifts, subtle fades, and glows that feel premium without distraction.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
