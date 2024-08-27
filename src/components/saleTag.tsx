import React from 'react'
import { SaleTagProp } from '@/types/allTypes'
import { cn } from '@/lib/utils'
export default function SaleTag({ text, className }: SaleTagProp) {
  return (
    <div>
        <p className={cn("",className)}>{text}</p>
    </div>
  )
}
