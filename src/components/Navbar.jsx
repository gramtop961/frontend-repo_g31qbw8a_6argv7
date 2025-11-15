import React from 'react'
import { motion } from 'framer-motion'
import { Bell, ChevronDown, Search, Moon, Sun } from 'lucide-react'

const Navbar = ({ onToggleTheme, theme = 'light' }) => {
  return (
    <div className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-[#EDEDED]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-[#1E1E1E] font-semibold text-lg tracking-tight">InterPrep</a>
          <nav className="hidden md:flex items-center gap-6 text-[#4D4D4D]">
            {['Home', 'MCQs', 'Coding', 'HR', 'Simulator', 'Dashboard'].map((item) => (
              <a key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="relative py-1">
                <span className="hover:text-[#1E1E1E] transition-colors">{item}</span>
                <motion.span
                  className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#4A6CF7] rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25 }}
                />
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center rounded-[20px] bg-white border border-[#EDEDED] px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[#4A6CF7]/30 transition-all">
            <Search className="w-4 h-4 text-[#4D4D4D]" />
            <input placeholder="Search questions..." className="ml-2 w-56 bg-transparent outline-none text-sm placeholder:text-[#9CA3AF]" />
          </div>

          <button onClick={onToggleTheme} className="p-2 rounded-full hover:bg-gray-50 transition-colors">
            {theme === 'light' ? <Moon className="w-5 h-5 text-[#4D4D4D]" /> : <Sun className="w-5 h-5 text-[#4D4D4D]" />}
          </button>

          <div className="relative">
            <button className="p-2 rounded-full hover:bg-gray-50 transition-colors">
              <Bell className="w-5 h-5 text-[#4D4D4D]" />
            </button>
          </div>

          <button className="flex items-center gap-2 rounded-[20px] border border-[#EDEDED] bg-white px-2 py-1">
            <img src="https://i.pravatar.cc/100?img=8" alt="avatar" className="w-7 h-7 rounded-full" />
            <span className="hidden sm:block text-sm text-[#1E1E1E] font-medium">Alex</span>
            <ChevronDown className="w-4 h-4 text-[#4D4D4D]" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
