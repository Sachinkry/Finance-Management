"use client";

import { useUser } from '@clerk/nextjs';
import React from 'react'

const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl text-whtie font-medium">
        Welcome Back{isLoaded ? ", ": " "}{user?.firstName?.split(' ')[0]}! 
      </h2>
      <p className="text-sm lg:text-base text-[#9b98fd]">
        This is your Financial Overview
      </p>
    </div>
  )
}

export default WelcomeMsg;