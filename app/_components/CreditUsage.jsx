import { Progress } from '@/components/ui/progress'
import React from 'react'

function CreditUsage() {
  return (
    <div className='w-full mb-4 border rounded-[10px] p-3 flex flex-col gap-2'>
      <h2 className='font-bold'>Free Plan</h2>
      <p className=' text-muted-foreground'>0/5 Message Used</p>
      <Progress value={50} />
    </div>
  )
}

export default CreditUsage
