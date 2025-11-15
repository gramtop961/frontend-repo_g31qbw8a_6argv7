import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

const Message = ({ role, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    className={`max-w-[70%] rounded-[20px] p-4 shadow-sm ${
      role === 'interviewer' ? 'bg-white border border-[#EDEDED] self-start' : 'bg-[#4A6CF7] text-white self-end'
    }`}
  >
    <p className="text-sm leading-6">{text}</p>
  </motion.div>
)

const Score = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <div className="relative">
      <svg width="110" height="110">
        <circle cx="55" cy="55" r="46" stroke="#F2F2F2" strokeWidth="10" fill="none" />
        <circle
          cx="55" cy="55" r="46" stroke="#4A6CF7" strokeWidth="10" fill="none"
          strokeDasharray={`${2 * Math.PI * 46}`} strokeDashoffset={`${2 * Math.PI * 46 * (1 - value / 100)}`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center font-semibold text-[#1E1E1E]">{value}%</div>
    </div>
    <p className="mt-2 text-sm text-[#4D4D4D]">{label}</p>
  </div>
)

const ChatSimulator = () => {
  const [messages, setMessages] = useState([
    { role: 'interviewer', text: 'Welcome to your mock interview. Tell me about yourself.' },
  ])
  const [input, setInput] = useState('')
  const [finished, setFinished] = useState(false)

  const send = () => {
    if (!input.trim()) return
    setMessages((m) => [...m, { role: 'you', text: input }])
    setInput('')
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'interviewer', text: 'Thanks. How do you handle tight deadlines?' }])
    }, 700)
  }

  useEffect(() => {
    if (messages.length > 6 && !finished) setFinished(true)
  }, [messages, finished])

  return (
    <div className="rounded-[20px] border border-[#EDEDED] bg-white p-6 shadow-sm">
      <div className="h-[360px] overflow-y-auto flex flex-col gap-3 p-2 bg-[#FDFDFE] rounded-[16px] border border-[#EDEDED]">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'you' ? 'justify-end' : 'justify-start'}`}>
            <Message role={m.role === 'you' ? 'you' : 'interviewer'} text={m.text} />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your response..."
          className="flex-1 rounded-[20px] border border-[#EDEDED] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#4A6CF7]/30"
        />
        <Button onClick={send}>Send</Button>
      </div>

      {finished && (
        <div className="mt-6 rounded-[20px] border border-[#EDEDED] bg-white p-5 shadow-sm">
          <h4 className="text-[#1E1E1E] font-semibold">Score Summary</h4>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Score label="Communication" value={84} />
            <Score label="Accuracy" value={76} />
            <Score label="Confidence" value={88} />
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatSimulator
