import React from 'react'
import { Github, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-[#EDEDED] bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-[#4D4D4D]">
        <div>
          <h3 className="text-[#1E1E1E] font-semibold">InterPrep</h3>
          <p className="mt-2">A handcrafted platform for interview excellence.</p>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-[#1E1E1E]" href="#">MCQs</a>
          <a className="hover:text-[#1E1E1E]" href="#">Coding</a>
          <a className="hover:text-[#1E1E1E]" href="#">HR</a>
          <a className="hover:text-[#1E1E1E]" href="#">Simulator</a>
        </div>
        <div className="flex sm:justify-end items-center gap-4">
          <a className="hover:text-[#1E1E1E]" href="#" aria-label="github"><Github size={18} /></a>
          <a className="hover:text-[#1E1E1E]" href="#" aria-label="twitter"><Twitter size={18} /></a>
          <a className="hover:text-[#1E1E1E]" href="#" aria-label="email"><Mail size={18} /></a>
        </div>
      </div>
      <div className="text-center text-xs text-[#9CA3AF] pb-8">© {new Date().getFullYear()} InterPrep. All rights reserved.</div>
    </footer>
  )
}

export default Footer
