'use client'
import { useRef } from 'react'
import { useAppSelector, useAppDispatch, useAppStore } from '../lib/hooks'
import { getNavbarState } from '@/lib/features/entryApp/entryAppSlice'

export default function Navbar() {
  // Initialize the store with the product information
  const navbar = useAppSelector(getNavbarState);
  
  return (
    <div className='w-full h-[60px] bg-grey-100'>
        {!!navbar?.length && navbar.map((el:string, index:number) => <p key={index}>{el}</p>)}
    </div>
  )
}