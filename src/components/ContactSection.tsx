"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    loading: false,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 간단한 유효성 검사
    if (!formData.name || !formData.email || !formData.message || !formData.privacy) {
      setFormStatus({
        submitted: false,
        error: true,
        loading: false,
        message: "모든 필수 항목을 입력해주세요.",
      });
      return;
    }

    try {
      // 로딩 상태 표시
      setFormStatus({
        submitted: false,
        error: false,
        loading: true,
        message: "문의를 처리 중입니다...",
      });

      // API 라우트 호출
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '문의 접수 중 오류가 발생했습니다.');
      }

      // 성공 메시지 표시
      setFormStatus({
        submitted: true,
        error: false,
        loading: false,
        message: data.message || "문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.",
      });

      // 폼 초기화
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        privacy: false,
      });
    } catch (error) {
      console.error('문의 제출 오류:', error);
      setFormStatus({
        submitted: false,
        error: true,
        loading: false,
        message: error instanceof Error ? error.message : "문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#2E8B57] font-primary">문의하기</h2>
          <div className="w-20 h-1 bg-[#4682B4] mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto font-secondary">
            WhyWorks의 서비스에 관심이 있으시거나 문의사항이 있으시면 아래 양식을 작성해 주세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:items-stretch">
          {/* 지도 및 연락처 정보 */}
          <div className="order-2 md:order-1 flex flex-col md:h-full">
            <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md mb-8 flex-grow">
              <h3 className="text-xl font-bold mb-4 text-[#2E8B57] font-primary">찾아오시는 길</h3>
              <div className="embed-container rounded-lg overflow-hidden mb-4 h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1583.1236276514546!2d126.94582687677395!3d37.36485997210193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5d0a1d6a8a97%3A0x9f3c5b9a8c4f8c9a!2z6rK96riw64-EIOq1sO2PrOyLnCDqs6DsgrDroZwxNDjrsojquLggMTc!5e0!3m2!1sko!2skr!4v1620120000000!5m2!1sko!2skr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="WhyWorks 위치"
                ></iframe>
              </div>
              <div className="space-y-3 font-secondary">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#2E8B57] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-neutral-700">경기도 군포시 고산로148번길 17 A동 1201호, 1208호 주식회사 와이웍스</span>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#2E8B57] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-neutral-700">customer@whyworks.co.kr</span>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#2E8B57] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-neutral-700">010-3714-7380</span>
                </div>
              </div>
            </div>

            <div className="bg-[#2E8B57]/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#2E8B57] font-primary">업무 시간</h3>
              <ul className="space-y-2 font-secondary">
                <li className="flex justify-between">
                  <span className="text-neutral-700 font-medium">월요일 - 금요일:</span>
                  <span className="text-neutral-600">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-neutral-700 font-medium">토요일:</span>
                  <span className="text-neutral-600">휴무</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-neutral-700 font-medium">일요일:</span>
                  <span className="text-neutral-600">휴무</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-neutral-700 font-medium">공휴일:</span>
                  <span className="text-neutral-600">휴무</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 문의 양식 */}
          <div className="order-1 md:order-2 md:h-full flex">
            <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-xl flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-[#2E8B57] font-primary">문의 양식</h3>
              {formStatus.submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  <p className="font-secondary">{formStatus.message}</p>
                </div>
              ) : formStatus.error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  <p className="font-secondary">{formStatus.message}</p>
                </div>
              ) : formStatus.loading ? (
                <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4 flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p className="font-secondary">{formStatus.message}</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="flex flex-col h-full">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-neutral-700 font-medium mb-2 font-primary">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E8B57] font-secondary text-neutral-900 bg-white"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-neutral-700 font-medium mb-2 font-primary">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E8B57] font-secondary text-neutral-900 bg-white"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-neutral-700 font-medium mb-2 font-primary">
                    전화번호
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E8B57] font-secondary text-neutral-900 bg-white"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-neutral-700 font-medium mb-2 font-primary">
                    문의 유형
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E8B57] font-secondary text-neutral-900 bg-white"
                  >
                    <option value="일반">일반 문의</option>
                    <option value="서비스">서비스 문의</option>
                    <option value="제휴">제휴 문의</option>
                    <option value="기술">기술 지원</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-neutral-700 font-medium mb-2 font-primary">
                    메시지 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E8B57] font-secondary text-neutral-900 bg-white"
                    required
                  ></textarea>
                </div>

                <div className="mb-6">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleCheckboxChange}
                      className="mt-1 mr-2"
                      required
                    />
                    <label htmlFor="privacy" className="text-neutral-600 text-sm font-secondary">
                      개인정보 수집 및 이용에 동의합니다. <span className="text-red-500">*</span>
                      <a href="#privacy" className="text-[#2E8B57] hover:underline ml-1">
                        개인정보처리방침
                      </a>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className={`w-full ${formStatus.loading ? 'bg-[#2E8B57]/70 cursor-not-allowed' : 'bg-[#2E8B57] hover:bg-[#2E8B57]/90'} text-white py-3 px-6 rounded-md transition-colors duration-300 font-medium font-primary mt-auto`}
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? '처리 중...' : '문의하기'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 