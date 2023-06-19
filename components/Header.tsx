import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { BiArrowBack } from 'react-icons/bi'

interface HeaderProps {
    label: string, 
    showBackArrow?: boolean
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
    const router = useRouter()
    const handleBack = useCallback(() => {
        router.back()
    }, [router])
  return (
    <div className='border-b-[1px] border-neutral-800 p-5'>
        <div className='flex items-center flex-row gap-2'>
            {showBackArrow && (<BiArrowBack onClick={handleBack} color='white' size={20} className='cursor-pointer transition hover:opacity-70'/>)}
            <h1 className='text-white text-2xl font-bold'>{label}</h1>

        </div>

    </div>
  )
}

export default Header