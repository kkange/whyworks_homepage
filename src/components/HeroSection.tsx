import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-[#1A5D38] to-[#2C5282] min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A5D38]/60 to-[#2C5282]/80"></div>
      </div>

      <div className="container mx-auto max-w-6xl z-10 text-center">
        <div className="animate__animated animate__fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-primary leading-tight">
            {/* 농업의 <span className="text-[#F5F5DC]">미래</span>를 혁신하는<br />기술의 힘 */}
            농업 및 농업 경영체를 위한
            <br />
            디지털 <span className="text-[#F5F5DC]">솔루션</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto font-secondary">
            정보화 기술의 농업 현장 적용을 통해 지속적인
            <br className="hidden md:block" /> 농업과 농업 경영체의 성공을
            지원합니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#about"
              style={{
                fontWeight: 700,
                lineHeight: '28px',
              }}
              className="px-8 py-3 bg-white text-[#2E8B57] border-2 border-white rounded-full text-lg font-medium hover:bg-transparent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl animate__animated animate__fadeInLeft"
            >
              알아보기
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 animate__animated animate__fadeInRight"
            >
              문의하기
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <Link
          href="#about"
          className="text-white animate-bounce mb-8 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <span className="sr-only">스크롤 다운</span>
        </Link>
      </div>
      {/* 플로팅 요소 */}
      <div className="hidden md:block">
        <div className="absolute top-1/4 left-1/6 w-16 h-16 bg-white/10 rounded-full animate-float1"></div>
        <div className="absolute bottom-1/3 right-1/5 w-12 h-12 bg-[#F5F5DC]/20 rounded-full animate-float2"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white/20 rounded-full animate-float3"></div>
      </div>
    </section>
  )
}
