import React from 'react'
import { ButtonProp } from '@/types/allTypes'
import { cn } from '@/lib/utils'
export default function Button({ text, className }: ButtonProp) {
  return (
    <div>
        <button className={cn("",className)}>{text}</button>
    </div>
  )
}
