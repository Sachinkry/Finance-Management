import { Loader2 } from 'lucide-react';
import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import Image from 'next/image';
import Logo from '@/components/Logo';

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
      <div className="h-full bg-violet-900 hidden lg:flex items-center justify-center">
        {/* <Image src="/logo.svg" height={100} width={100} alt="Logo" /> */}
        <Logo width={130} height={130} color='#fff' />
      </div>
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16 lg:pt-4">
          <h1 className="font-bold text-3xl text-[#2e2a47]">
            Welcome Back!
          </h1>
          <p className="text-base text-[#7e8ca0]">
            Log in or Create account to get back to your dashboard!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-[#2e2a47]" />
          </ClerkLoading>
        </div>
      </div>
      
    </div>
  )
}