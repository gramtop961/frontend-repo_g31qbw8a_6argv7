import React, { useEffect, useRef } from 'react'

const ProgressRing = ({ size = 90, stroke = 8, progress = 65, color = '#4A6CF7' }) => {
  const normalizedRadius = size / 2 - stroke * 1.5
  const circumference = normalizedRadius * 2 * Math.PI
  const circleRef = useRef(null)

  useEffect(() => {
    const offset = circumference - (progress / 100) * circumference
    if (circleRef.current) {
      circleRef.current.style.strokeDashoffset = offset
    }
  }, [progress, circumference])

  return (
    <svg height={size} width={size} className="block">
      <defs>
        <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#F9B37D" />
        </linearGradient>
      </defs>
      <circle
        stroke="#F2F2F2"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        ref={circleRef}
        stroke="url(#ring)"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        r={normalizedRadius}
        cx={size / 2}
        cy={size / 2}
        style={{ transition: 'stroke-dashoffset 1s ease' }}
      />
    </svg>
  )
}

export default ProgressRing
