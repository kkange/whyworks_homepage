'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen
    setIsMobileMenuOpen(newState)
  }

  useEffect(() => {
    // 초기 스크롤 위치 확인
    if (window.scrollY > 20) {
      setScrolled(true)
    }

    // 모바일 메뉴 토글 스크립트
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    // 스크롤 감지 스크립트
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobileMenuOpen])

  return (
    <header id="header">
      <nav
        className={`${
          scrolled || isMobileMenuOpen
            ? 'bg-white/90 shadow-md backdrop-blur-md'
            : 'bg-transparent'
        } 
        px-4 lg:px-6 py-4 fixed w-full z-50 transition-all duration-300`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link
            href="#hero"
            className="flex items-center"
          >
            <span
              className="self-center text-xl font-semibold whitespace-nowrap font-primary"
              style={{
                color: scrolled || isMobileMenuOpen ? '#111827' : '#ffffff',
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '28px',
                transition: 'color 0.3s ease',
              }}
            >
              Why
            </span>
            <span
              className="self-center text-xl font-semibold whitespace-nowrap font-primary"
              style={{
                color: '#3B82F6',
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '28px',
                transition: 'color 0.3s ease',
              }}
            >
              Works
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              type="button"
              className={`inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden  ${
                scrolled || isMobileMenuOpen
                  ? 'text-neutral-600 hover:bg-neutral-100 focus:ring-neutral-200'
                  : 'text-white hover:bg-white/10 focus:ring-white/20'
              }`}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">메뉴 열기</span>
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? '' : 'hidden'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? '' : 'hidden lg:flex md:flex'
            } justify-between items-center w-full lg:${
              scrolled ? 'flex' : 'hidden'
            } lg:w-auto lg:order-1`}
            id="mobile-menu"
          >
            <ul
              className={`flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ${
                scrolled || isMobileMenuOpen ? 'text-neutral-800' : 'text-white'
              }`}
            >
              <li>
                <Link
                  href="#hero"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 font-medium"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                  onClick={toggleMobileMenu}
                >
                  홈
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 font-medium"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                  onClick={toggleMobileMenu}
                >
                  소개
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 font-medium"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                  onClick={toggleMobileMenu}
                >
                  서비스
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 font-medium"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                  onClick={toggleMobileMenu}
                >
                  문의하기
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
