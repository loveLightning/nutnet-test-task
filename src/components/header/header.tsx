"use client"

import { useRouter } from 'next/navigation'
import s from './header.module.scss'
import { LogoIcon } from "@/icons"

interface Props {
  isExists?: boolean
}

export const Header = ({ isExists = true }) => {
  const { push } = useRouter()
  return (
    <div className={s.wrap}>
      <div className={`${s.header} ${!isExists && s.isExists}`} onClick={() => push('/')}>
        <LogoIcon />
        <p className={s['text-logo']}>WeatherCheck</p>
      </div>
    </div>
  )
}