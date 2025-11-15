import React from 'react'
import MCQCard from '../components/MCQCard'

const MCQs = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        {['Technical', 'Aptitude', 'HR', 'Logical Reasoning'].map((c) => (
          <button key={c} className="rounded-[20px] border border-[#EDEDED] bg-white px-4 py-2 text-sm text-[#4D4D4D] hover:shadow-sm">{c}</button>
        ))}
      </div>
      <MCQCard
        question="Which data structure uses LIFO ordering?"
        options={["Queue", "Stack", "Linked List", "Tree"]}
        answer={1}
        explanation="Stack follows Last In, First Out ordering."
      />
      <MCQCard
        question="What is the time complexity of binary search?"
        options={["O(n)", "O(log n)", "O(n log n)", "O(1)"]}
        answer={1}
        explanation="Binary search divides the range in half each step, giving logarithmic time."
      />
    </div>
  )
}

export default MCQs
