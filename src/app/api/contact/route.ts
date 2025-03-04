import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // 필수 필드 검증
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '필수 항목을 모두 입력해주세요.' },
        { status: 400 }
      )
    }

    // Nodemailer 트랜스포터 설정
    // 실제 환경에서는 환경 변수를 사용하세요
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // 이메일 수신자 설정 (환경 변수 또는 기본값)
    const recipientEmail = process.env.RECIPIENT_EMAIL

    // 이메일 내용 구성
    const mailOptions = {
      from: `"WhyWorks 웹사이트" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      subject: `[WhyWorks 문의] ${subject || '일반'} - ${name}님으로부터`,
      text: `
          이름: ${name}
          이메일: ${email}
          전화번호: ${phone || '미입력'}
          문의 유형: ${subject || '일반'}

          메시지:
          ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2E8B57;">WhyWorks 웹사이트 문의</h2>
          <p><strong>이름:</strong> ${name}</p>
          <p><strong>이메일:</strong> ${email}</p>
          <p><strong>전화번호:</strong> ${phone || '미입력'}</p>
          <p><strong>문의 유형:</strong> ${subject || '일반 문의'}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #2E8B57;">
            <h3 style="margin-top: 0;">메시지:</h3>
            <p style="white-space: pre-line;">${message}</p>
          </div>
        </div>
      `,
    }

    // 이메일 발송
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      {
        success: true,
        message:
          '문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('이메일 전송 오류:', error)
    return NextResponse.json(
      { error: '문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    )
  }
}
