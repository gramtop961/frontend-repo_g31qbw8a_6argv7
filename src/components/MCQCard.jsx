import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

const Option = ({ label, active, correct, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left rounded-[20px] border px-4 py-3 transition-all relative overflow-hidden ${
        active ? 'border-[#4A6CF7] bg-[#4A6CF7]/5' : 'border-[#EDEDED] bg-white'
      }`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <span className="relative z-10 text-[#1E1E1E]">{label}</span>
      <AnimatePresence>
        {typeof correct === 'boolean' && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.08 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 ${correct ? 'bg-green-500' : 'bg-red-400'}`}
          />
        )}
      </AnimatePresence>
    </motion.button>
  )
}

const MCQCard = ({ question, options, answer, explanation }) => {
  const [selected, setSelected] = useState(null)
  const [checked, setChecked] = useState(false)

  const handleCheck = () => setChecked(true)

  return (
    <div className="rounded-[20px] border border-[#EDEDED] bg-white p-6 shadow-sm hover:shadow-md transition-all">
      <p className="text-[#1E1E1E] font-medium text-lg">{question}</p>
      <div className="mt-4 grid gap-3">
        {options.map((opt, idx) => (
          <Option
            key={idx}
            label={opt}
            active={selected === idx}
            correct={checked ? idx === answer : undefined}
            onClick={() => setSelected(idx)}
          />
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3">
        <Button onClick={handleCheck}>Check Answer</Button>
        {checked && (
          <span className={`text-sm ${selected === answer ? 'text-green-600' : 'text-red-600'}`}>
            {selected === answer ? 'Correct!' : 'Not quite. Keep going!'}
          </span>
        )}
      </div>
      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 rounded-[16px] bg-[#FDFDFE] border border-[#EDEDED] p-4 text-sm text-[#4D4D4D]"
          >
            {explanation}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MCQCard
