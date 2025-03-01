'use client'

import { useEffect } from 'react'

export default function Footer() {
  useEffect(() => {
    // 스무스 스크롤 (맨 위로 버튼)
    const backToTopButton = document.querySelector('a[href="#hero"]')
    if (backToTopButton) {
      backToTopButton.addEventListener('click', function (e) {
        e.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      })
    }
  }, [])

  return (
    <footer
      id="footer"
      className="bg-neutral-800 text-white pt-16 pb-8"
    >
      <div
        className="container mx-auto px-4 max-w-6xl"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
          style={{ alignItems: 'stretch', padding: '0px', margin: '0px' }}
        >
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white font-primary">
              WhyWorks
            </h3>
            <p className="text-neutral-300 mb-6 font-secondary">
              첨단 기술로 농업의 미래를 혁신하며 지속 가능한 푸드 시스템을
              만들어갑니다.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#2E8B57] transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
                <span className="sr-only">페이스북</span>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#2E8B57] transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                </svg>
                <span className="sr-only">트위터</span>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#2E8B57] transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
                <span className="sr-only">링크드인</span>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#2E8B57] transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
                </svg>
                <span className="sr-only">유튜브</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white font-primary">
              연락처
            </h3>
            <ul className="space-y-3 font-secondary">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-[#2E8B57] mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-neutral-300">
                  경기도 군포시 고산로148번길 17 A동 1201호, 1208호 주식회사
                  와이웍스
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-[#2E8B57] mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-neutral-300">
                  customer@whyworks.co.kr
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-[#2E8B57] mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-neutral-300">010-3714-7380</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-[#2E8B57] mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-neutral-300">
                  월요일 - 금요일: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-neutral-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-400 mb-4 md:mb-0 text-center md:text-left font-secondary">
            © 2025 WhyWorks. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-4 font-secondary">
            <a
              href="#privacy"
              className="text-neutral-400 hover:text-white transition-colors duration-300"
            >
              개인정보처리방침
            </a>
            <span className="text-neutral-600">|</span>
            <a
              href="#terms"
              className="text-neutral-400 hover:text-white transition-colors duration-300"
            >
              이용약관
            </a>
          </div>
        </div>

        {/* Back to top button */}
        <div className="text-center mt-8">
          <a
            href="#hero"
            className="inline-flex items-center justify-center w-10 h-10 bg-[#2E8B57] text-white rounded-full hover:bg-[#2E8B57]/90 transition-all duration-300 animate__animated animate__fadeIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
            <span className="sr-only">맨 위로</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
