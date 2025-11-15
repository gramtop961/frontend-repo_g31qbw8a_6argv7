import React from 'react'
import HRCard from '../components/HRCard'

const HR = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-5">
      <HRCard
        question="Tell me about yourself"
        answer="I’m a detail-oriented developer with a strong foundation in JavaScript and React. I enjoy turning complex problems into simple, beautiful interfaces and I thrive in collaborative teams."
        points={["Keep it concise (60–90 seconds)", "Tie your background to the role", "Share one proof of impact"]}
      />
      <HRCard
        question="What are your strengths and weaknesses?"
        answer="Strength: I’m disciplined with systems that ensure consistent output. Weakness: I can over-polish UI details; I manage this by time-boxing and aligning on scope early."
        points={["Pick role-relevant strength", "Show growth strategy for weakness", "Be specific and credible"]}
      />
      <HRCard
        question="Why should we hire you?"
        answer="I deliver dependable results with a calm, ownership mindset. I pair design sensitivity with engineering rigor, and I care deeply about user experience."
        points={["Tie to team goals", "Show differentiation", "Convey reliability and learning speed"]}
      />
    </div>
  )
}

export default HR
