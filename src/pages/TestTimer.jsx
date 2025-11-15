import React, { useState, useEffect } from 'react'
import Button from '../components/Button'

const TestTimer = () => {
  const [seconds, setSeconds] = useState(60)
  const [current, setCurrent] = useState(0)
  const questions = [
    { q: 'Which sorting algorithm has the best average time complexity?', options: ['Bubble', 'Merge sort', 'Insertion', 'Selection'], a: 1 },
    { q: 'What does HTTP stand for?', options: ['HyperText Transfer Protocol', 'High Transfer Text Protocol', 'Hyper Transfer Test Protocol', 'None'], a: 0 },
  ]
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (seconds <= 0) return
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(id)
  }, [seconds])

  const next = () => {
    setSelected(null)
    setCurrent((c) => Math.min(c + 1, questions.length - 1))
  }
  const prev = () => setCurrent((c) => Math.max(c - 1, 0))

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div className="rounded-[20px] border border-[#EDEDED] bg-white p-6 shadow-sm flex items-center justify-between">
        <div className="text-[#1E1E1E] font-semibold">Time Left</div>
        <div className="text-[#4A6CF7] text-2xl font-bold tabular-nums">00:{String(seconds).padStart(2, '0')}</div>
      </div>

      <div className="rounded-[20px] border border-[#EDEDED] bg-white p-6 shadow-sm">
        <p className="text-[#1E1E1E] font-medium">{questions[current].q}</p>
        <div className="mt-4 grid gap-3">
          {questions[current].options.map((o, i) => (
            <button key={i} onClick={() => setSelected(i)} className={`rounded-[20px] border px-4 py-3 text-left transition-all ${selected === i ? 'border-[#4A6CF7] bg-[#4A6CF7]/5' : 'border-[#EDEDED] bg-white'}`}>{o}</button>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-3">
          <Button variant="ghost" onClick={prev}>Previous</Button>
          <Button onClick={next}>Next</Button>
          <Button variant="peach">Save & Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default TestTimer
