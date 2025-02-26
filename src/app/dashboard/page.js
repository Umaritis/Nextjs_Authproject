import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Dashboard() {
  return (
    <div>
      <h1 className='font-bold text-2xl text-[#41644A] mt-10 ml-6'>
        You got access to these two pages. <br />Press any of them and visit it!
      </h1>
      <Button className="bg-[#F1F0E9] text-[#41644A] p-6 ml-16 rounded-3xl mt-6">
        <Link href="/contact">
          Contact Page
        </Link>
      </Button>

      <Button className="bg-[#F1F0E9] text-[#41644A] p-6 ml-16 rounded-3xl mt-6">
        <Link href="/about">
          About Us
        </Link>
      </Button>
    </div>
  )
}

export default Dashboard
