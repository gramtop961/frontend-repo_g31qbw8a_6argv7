import React from 'react'
import { motion } from 'framer-motion'
import ProgressRing from './ProgressRing'

const Stat = ({ label, value, suffix = '' }) => (
  <motion.div whileHover={{ scale: 1.02 }} className="rounded-[20px] border border-[#EDEDED] bg-white p-5 shadow-sm">
    <p className="text-sm text-[#4D4D4D]">{label}</p>
    <p className="mt-2 text-2xl font-semibold text-[#1E1E1E]">{value}{suffix}</p>
  </motion.div>
)

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Stat label="Daily Streak" value={12} />
        <Stat label="Accuracy" value={92} suffix="%" />
        <Stat label="Completed" value={187} />
      </div>

      <div className="rounded-[20px] border border-[#EDEDED] bg-white p-6 shadow-sm">
        <h3 className="text-[#1E1E1E] font-semibold">Strengths & Weaknesses</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-[16px] bg-[#FDFDFE] border border-[#EDEDED] p-4">
            <p className="text-sm text-[#4D4D4D]">Areas</p>
            <div className="mt-3 space-y-3">
              {[['Arrays', 85], ['Strings', 70], ['OOP', 55], ['System Design', 35]].map(([name, val]) => (
                <div key={name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#1E1E1E]">{name}</span>
                    <span className="text-[#4D4D4D]">{val}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-gray-100">
                    <div className="h-2 rounded-full bg-[#4A6CF7]" style={{ width: `${val}%`, transition: 'width 1s ease' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid place-items-center">
            <div className="flex gap-10">
              <div className="text-center">
                <ProgressRing progress={78} />
                <p className="mt-2 text-sm text-[#4D4D4D]">Overall</p>
              </div>
              <div className="text-center">
                <ProgressRing progress={64} color="#F9B37D" />
                <p className="mt-2 text-sm text-[#4D4D4D]">Consistency</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[20px] border border-[#EDEDED] bg-white p-6 shadow-sm">
        <h3 className="text-[#1E1E1E] font-semibold">Profile</h3>
        <div className="mt-4 flex flex-col sm:flex-row gap-6 items-center">
          <img src="https://i.pravatar.cc/160?img=12" alt="profile" className="w-24 h-24 rounded-full" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {['Name', 'Target Role', 'Email'].map((label, i) => (
              <div key={i} className="rounded-[16px] border border-[#EDEDED] bg-[#FDFDFE] p-3">
                <p className="text-xs text-[#4D4D4D]">{label}</p>
                <input className="mt-1 w-full bg-transparent outline-none text-[#1E1E1E]" defaultValue={label === 'Name' ? 'Alex Carter' : label === 'Target Role' ? 'Frontend Developer' : 'alex@example.com'} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
