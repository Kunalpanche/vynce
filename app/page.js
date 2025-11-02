"use client"

import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes';

import React from 'react'

function page() {
  const {setTheme} = useTheme();
  return (
    <div>
    <h1>Hiii my name is kunal Panche I am a we devloper</h1>
    <h2 className='text-amber-200'> Hiii</h2>
    <br />
    <Button className='m-3' onClick= {()=>setTheme('dark')}>Dark Mode</Button>
    <Button onClick= {()=>setTheme('light')}>Light Mode</Button>
    </div>
  )
}

export default page
