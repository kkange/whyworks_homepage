'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function ServicesSection() {
  useEffect(() => {
    // 스크롤 애니메이션 관찰자
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationClass = entry.target.getAttribute('data-animate')
            if (animationClass) {
              // remove the opacity-0 class so the element becomes visible
              entry.target.classList.remove('opacity-0')
              entry.target.classList.add('animate__animated', animationClass)
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[class*="animate__"]').forEach((item) => {
      if (!item.classList.contains('animate__animated')) {
        // store the original animation class in a data attribute (check for specific classes)
        if (item.classList.contains('animate__fadeIn')) {
          item.setAttribute('data-animate', 'animate__fadeIn')
        } else if (item.classList.contains('animate__fadeInUp')) {
          item.setAttribute('data-animate', 'animate__fadeInUp')
        }
        // remove animation classes so they don't animate on initial load
        item.classList.remove(
          'animate__fadeIn',
          'animate__fadeInUp',
          'animate__delay-1s',
          'animate__delay-2s',
          'animate__delay-3s'
        )
        // add opacity-0 to hide the element initially
        item.classList.add('opacity-0')
        observer.observe(item)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      id="services"
      className="py-20 bg-[#F5F5F5]"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#2E8B57] font-primary">
            혁신적인 농업 서비스
          </h2>
          <div className="w-20 h-1 bg-[#4682B4] mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto font-secondary">
            WhyWorks는 첨단 기술을 활용한 지속 가능한 농업 솔루션을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 서비스 카드 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 animate__fadeInUp">
            <div className="bg-[#2E8B57] p-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-[#2E8B57] font-primary">
                스마트 APC 솔루션
              </h3>
              <p className="text-neutral-600 mb-4 font-secondary">
                입고, 선별, 저장, 출하 관리의 전산화 및 단계별 생성 데이터를
                활용한 스마트 운영 관리 프로그램
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#4682B4] mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-neutral-700 font-secondary">
                    실시간 저장고 모니링
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#4682B4] mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-neutral-700 font-secondary">
                    자동화 저장 및 가공 시스템
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#4682B4] mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-neutral-700 font-secondary">
                    데이터 기반 유통 최적화
                  </span>
                </li>
              </ul>
              {/* <Link
                href="#contact"
                className="inline-flex items-center text-[#2E8B57] hover:text-[#4682B4] transition-colors duration-300 font-medium"
              >
                <span>자세히 알아보기</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link> */}
            </div>
          </div>

          {/* 서비스 카드 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 animate__fadeInUp animate__delay-1s">
            <div className="bg-[#4682B4] p-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-[#2E8B57] font-primary">
                지속가능한 농업 솔루션
              </h3>
              <p className="text-neutral-600 mb-4 font-secondary">
                스마트 기술을 기반으로 한 차세대 농업의 새로운 표준 제안
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#4682B4] mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-neutral-700 font-secondary">
                    IoT기반의 자원 효율화
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#4682B4] mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-neutral-700 font-secondary">
                    데이터 기반의 지속가능성 제공
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#4682B4] mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-neutral-700 font-secondary">
                    생산자와 소비자를 연결하는 연계시스템
                  </span>
                </li>
              </ul>
              {/* <Link
                href="#contact"
                className="inline-flex items-center text-[#2E8B57] hover:text-[#4682B4] transition-colors duration-300 font-medium"
              >
                <span>자세히 알아보기</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link> */}
            </div>
          </div>

          {/* 서비스 카드 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 animate__fadeInUp animate__delay-2s">
            <div className="bg-[#2E8B57] p-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-[#2E8B57] font-primary">
                신뢰할수 있는 스마트 플랫폼
              </h3>
              <p className="text-neutral-600 mb-4 font-secondary">
                정보기술을 통한 생산자와 소비자를 연결하고 신뢰할수 있는
                유통환경 구축
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#4682B4] mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-neutral-700 font-secondary">
                    생산이력관리
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#4682B4] mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-neutral-700 font-secondary">
                    실시간 데이터 공유
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#4682B4] mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-neutral-700 font-secondary">
                    맞춤형 추천 서비스
                  </span>
                </li>
              </ul>
              {/* <Link
                href="#contact"
                className="inline-flex items-center text-[#2E8B57] hover:text-[#4682B4] transition-colors duration-300 font-medium"
              >
                <span>자세히 알아보기</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link> */}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-[#2E8B57] text-white rounded-full text-lg font-medium hover:bg-[#2E8B57]/90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>문의하기</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
