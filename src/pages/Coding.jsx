import React from 'react'
import CodeCard from '../components/CodeCard'

const Sidebar = () => (
  <div className="rounded-[20px] border border-[#EDEDED] bg-white p-4 shadow-sm">
    <h4 className="text-[#1E1E1E] font-semibold">Filters</h4>
    <div className="mt-3 space-y-3 text-sm text-[#4D4D4D]">
      <div>
        <p className="text-[#1E1E1E]">Difficulty</p>
        {['Basic', 'Medium', 'Advanced'].map((d) => (
          <label key={d} className="mt-1 flex items-center gap-2">
            <input type="checkbox" className="rounded" /> {d}
          </label>
        ))}
      </div>
      <div>
        <p className="text-[#1E1E1E]">Topics</p>
        {['Arrays', 'Strings', 'OOP', 'Recursion'].map((t) => (
          <label key={t} className="mt-1 flex items-center gap-2">
            <input type="checkbox" className="rounded" /> {t}
          </label>
        ))}
      </div>
    </div>
  </div>
)

const Coding = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1"><Sidebar /></div>
      <div className="md:col-span-3 grid gap-4">
        <CodeCard title="Two Sum" description="Find indices of two numbers that add up to target." constraints="1 <= n <= 1e4" tags={["Arrays", "Hashing"]} />
        <CodeCard title="Valid Anagram" description="Check if two strings are anagrams." constraints="s,t lowercase" difficulty="Basic" tags={["Strings"]} />
      </div>
    </div>
  )
}

export default Coding
