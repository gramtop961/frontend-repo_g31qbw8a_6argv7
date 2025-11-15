import React from 'react'
import { motion } from 'framer-motion'

const CodeCard = ({ title, description, constraints, difficulty = 'Medium', tags = [] }) => {
  const badgeColor = difficulty === 'Basic' ? 'bg-emerald-100 text-emerald-700' : difficulty === 'Advanced' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'

  return (
    <motion.div whileHover={{ scale: 1.02 }} className="rounded-[20px] border border-[#EDEDED] bg-white p-5 shadow-sm hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-[#1E1E1E] font-semibold">{title}</h3>
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${badgeColor}`}>{difficulty}</span>
      </div>
      <p className="mt-2 text-[#4D4D4D] text-sm">{description}</p>
      {constraints && (
        <div className="mt-3 rounded-[16px] bg-[#FDFDFE] border border-[#EDEDED] p-3 text-xs text-[#4D4D4D]">
          <strong className="text-[#1E1E1E]">Constraints:</strong> {constraints}
        </div>
      )}
      {tags?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs">{t}</span>
          ))}
        </div>
      )}
      <div className="mt-4 rounded-[16px] border border-[#EDEDED] bg-[#0B1020] text-[#E2E8F0] p-4 font-mono text-sm overflow-auto">
        <pre>{`// Read-only code area\nfunction twoSum(nums, target){\n  const map = new Map()\n  for(let i=0;i<nums.length;i++){\n    const n = nums[i]\n    if(map.has(target - n)) return [map.get(target-n), i]\n    map.set(n, i)\n  }\n}`}</pre>
      </div>
    </motion.div>
  )}

export default CodeCard
