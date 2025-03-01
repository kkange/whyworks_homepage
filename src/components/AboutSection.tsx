'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function AboutSection() {
  useEffect(() => {
    // 스크롤 애니메이션 관찰자
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('animate__fadeIn')) {
              entry.target.classList.add('animate__animated')
            } else if (entry.target.classList.contains('animate__fadeInLeft')) {
              entry.target.classList.add('animate__animated')
            } else if (
              entry.target.classList.contains('animate__fadeInRight')
            ) {
              entry.target.classList.add('animate__animated')
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document
      .querySelectorAll(
        '.animate__fadeIn, .animate__fadeInLeft, .animate__fadeInRight'
      )
      .forEach((item) => {
        observer.observe(item)
      })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      id="about"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#2E8B57] font-primary">
            농업과 기술의 조화
          </h2>
          <div className="w-20 h-1 bg-[#4682B4] mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto font-secondary">
            WhyWorks는 첨단 기술을 활용하여 지속 가능한 농업의 미래를
            열어갑니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate__fadeInLeft">
            <h3 className="text-2xl font-bold mb-4 text-[#2E8B57] font-primary">
              우리의 비전
            </h3>
            <p className="text-neutral-700 mb-6 font-secondary">
              농업과 첨단 기술을 융합하여 식량 안보를 강화하고, 환경 친화적인
              농업 방식을 통해 지속 가능한 미래를 만들어갑니다.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 bg-[#F5F5DC] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#2E8B57]"
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
                </div>
                <div>
                  <h4 className="font-bold text-neutral-800 font-primary">
                    스마트 농업 솔루션
                  </h4>
                  <p className="text-neutral-600 font-secondary">
                    IoT와 데이터 분석으로 농작물 생산성 향상
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-[#F5F5DC] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#2E8B57]"
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
                </div>
                <div>
                  <h4 className="font-bold text-neutral-800 font-primary">
                    자원 효율화
                  </h4>
                  <p className="text-neutral-600 font-secondary">
                    물과 에너지 사용을 최적화하는 지능형 시스템
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-[#F5F5DC] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#2E8B57]"
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
                </div>
                <div>
                  <h4 className="font-bold text-neutral-800 font-primary">
                    기후 적응 농업
                  </h4>
                  <p className="text-neutral-600 font-secondary">
                    기후 변화에 대응하는 혁신적인 재배 방식
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 animate__fadeInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-[#4682B4] rounded-lg transform translate-x-4 translate-y-4"></div>
              <div className="relative bg-[#2E8B57] p-6 rounded-lg shadow-xl">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                    alt="첨단 농업 기술"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2 font-primary">
                    2025년 주요 성과
                  </h3>
                  <ul className="space-y-2 font-secondary">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-[#F5F5DC]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4"
                        />
                      </svg>
                      물 사용량 30% 감소
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-[#F5F5DC]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4"
                        />
                      </svg>
                      수확량 25% 증가
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-[#F5F5DC]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4"
                        />
                      </svg>
                      탄소 배출량 45% 감소
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#services"
            className="inline-flex items-center px-6 py-3 bg-[#2E8B57] text-white rounded-full text-lg font-medium hover:bg-[#2E8B57]/90 transition-all duration-300 shadow-md hover:shadow-lg animate__pulse animate__infinite animate__slower"
          >
            <span>서비스 알아보기</span>
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
