'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { SiNaver } from 'react-icons/si'
import { RiKakaoTalkFill } from 'react-icons/ri'

import toast from 'react-hot-toast'

export default function SignInPage() {
  const router = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'authenticated') {
      toast.success('로그인되었습니다.')
      router.replace('/')
    }
  }, [router, status])

  const handleSignIn = async (provider: string) => {
    try {
      await signIn(provider, { callbackUrl: '/' })
    } catch (error) {
      console.error(`로그인 시 오류 발생: ${error}`)
      toast.error('로그인 중 문제가 발생했습니다.')
    }
  }

  return (
    <div className="max-w-xl mx-auto pt-10 pb-24">
      <div className="flex flex-col gap-6">
        <h1 className="text-lg font-semibold text-center">
          로그인 또는 회원가입
        </h1>
        <hr className="border-b-gray-300" />
        <div className="text-xl md:text-2xl font-semibold">
          Comma에 오신 것을 환영합니다.
        </div>
      </div>
      <div className="text-sm text-gray-500 mt-2">
        SNS 계정을 이용해서 로그인 또는 회원가입을 해주세요.
      </div>
      <div className="flex flex-col gap-5 mt-16">
        <button
          type="button"
          onClick={() => handleSignIn('google')}
          className="relative border border-gray-700 rounded-md py-3 text-sm hover:bg-black/5 text-center font-semibold flex items-center justify-center"
        >
          <FcGoogle className="absolute left-5 text-xl my-auto inset-y-0" />
          구글로 로그인하기
        </button>
        <button
          type="button"
          onClick={() => handleSignIn('naver')}
          className="relative border border-gray-700 rounded-md py-3 text-sm hover:bg-black/5 text-center font-semibold flex items-center justify-center"
        >
          <SiNaver className="absolute left-6 text-green-400 my-auto inset-y-0" />
          네이버로 로그인하기
        </button>
        <button
          type="button"
          onClick={() => handleSignIn('kakao')}
          className="relative border border-gray-700 rounded-md py-3 text-sm hover:bg-black/5 text-center font-semibold flex items-center justify-center"
        >
          <RiKakaoTalkFill className="absolute left-5 text-yellow-950 text-xl my-auto inset-y-0" />
          카카오로 로그인하기
        </button>
      </div>
    </div>
  )
}
