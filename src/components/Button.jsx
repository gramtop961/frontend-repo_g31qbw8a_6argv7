import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const Button = ({ children, className = '', onClick, variant = 'primary', ...props }) => {
  const btnRef = useRef(null)

  const handleClick = (e) => {
    const button = btnRef.current
    if (!button) return onClick?.(e)

    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`
    circle.classList.add('ripple')

    const ripple = button.getElementsByClassName('ripple')[0]

    if (ripple) {
      ripple.remove()
    }

    button.appendChild(circle)
    onClick?.(e)
  }

  const variants = {
    primary: 'bg-[#4A6CF7] text-white hover:shadow-lg hover:shadow-[#4A6CF7]/30',
    peach: 'bg-[#F9B37D] text-[#1E1E1E] hover:shadow-lg hover:shadow-[#F9B37D]/40',
    ghost: 'bg-white text-[#1E1E1E] border border-[#EDEDED] hover:bg-gray-50',
  }

  return (
    <motion.button
      ref={btnRef}
      whileHover={{ y: -1, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={`relative overflow-hidden rounded-[20px] px-5 py-3 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4A6CF7]/40 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
