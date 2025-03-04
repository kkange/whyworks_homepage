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

    document
      .querySelectorAll(
        '.animate__fadeIn, .animate__fadeInLeft, .animate__fadeInRight'
      )
      .forEach((item) => {
        // store the original animation class in a data attribute
        if (item.classList.contains('animate__fadeIn')) {
          item.setAttribute('data-animate', 'animate__fadeIn')
        } else if (item.classList.contains('animate__fadeInLeft')) {
          item.setAttribute('data-animate', 'animate__fadeInLeft')
        } else if (item.classList.contains('animate__fadeInRight')) {
          item.setAttribute('data-animate', 'animate__fadeInRight')
        }
        // remove the animation classes so they don't animate on initial load
        item.classList.remove(
          'animate__fadeIn',
          'animate__fadeInLeft',
          'animate__fadeInRight'
        )
        // add opacity-0 class to hide the element initially
        item.classList.add('opacity-0')
        observer.observe(item)
      })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      id="about"
      className="py-20 bg-white overflow-x-hidden"
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
              농업과 첨단 기술을 융합하여 농산물의 품질과 가치를 강화하고, 환경
              친화적인 농업 방식을 통해 지속 가능한 미래를 만들어갑니다.
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
                    스마트 APC 솔루션
                  </h4>
                  <p className="text-neutral-600 font-secondary  mt-2">
                    입고, 선별, 저장, 출하 관리 전산화 및 단계별 생성데이터를
                    활용한 스마트 운영관리 프로그램
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
                    지속가능한 농업 솔루션
                  </h4>
                  <p className="text-neutral-600 font-secondary  mt-2">
                    농업 가치사슬에 스마트기술을 적용하여 미래농업의 새로운 기준
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
                    신뢰할수 있는 스마트 플랫폼
                  </h4>
                  <p className="text-neutral-600 font-secondary mt-2">
                    정보기술을 통한 생산자와 소비자를 연결하고 신뢰할수 있는
                    유통환경
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 animate__fadeInRight">
            <div className="relative mr-4">
              <div className="absolute inset-0 bg-[#4682B4] rounded-lg transform translate-x-4 translate-y-4"></div>
              <div className="relative bg-[#2E8B57] p-6 rounded-lg shadow-xl">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg mb-6"></div>
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-8 font-primary">
                    창업멤버 주요연혁
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
                      4차산업 기술을 활용한 스마트(통합마케팅조직)
                      수급관리플랫폼
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
                      괴산 노지스마트팜 빅데이터 플랫폼
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
                      인공지능을 이용한 스마트 온실의 완전자율형 복합환경 제어
                      플랫폼
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
