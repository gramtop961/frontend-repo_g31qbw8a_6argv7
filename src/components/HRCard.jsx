import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2 } from 'lucide-react'
import Button from './Button'

const HRCard = ({ question, answer, points }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-[20px] border border-[#EDEDED] bg-white p-5 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between">
        <h3 className="text-[#1E1E1E] font-semibold">{question}</h3>
        <Button variant="ghost" onClick={() => setOpen(true)}>View</Button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="mx-4 max-w-xl rounded-[20px] border border-[#EDEDED] bg-white p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-[#1E1E1E]">Best Sample Answer</h4>
                <button className="p-2 rounded-full hover:bg-gray-50" title="Listen"><Volume2 className="w-5 h-5 text-[#4D4D4D]" /></button>
              </div>
              <p className="mt-3 text-[#4D4D4D] text-sm leading-6">{answer}</p>
              {points?.length > 0 && (
                <ul className="mt-4 list-disc pl-5 text-sm text-[#4D4D4D] space-y-1">
                  {points.map((p, i) => (<li key={i}>{p}</li>))}
                </ul>
              )}
              <div className="mt-6 flex justify-end">
                <Button onClick={() => setOpen(false)}>Close</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HRCard
