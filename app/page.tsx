import { Button } from '@/components/ui/button'
import React from 'react'
import Hero from './_components/Hero'
import Header from './_components/header'

const Page = () => {
  return (
    <div className=' h-screen items-center flex flex-col overflow-hidden ' >
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />
    </div>
  )
}

export default Page