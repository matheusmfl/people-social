'use client'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import { Button } from './ui/button'
import { Container } from './Container'
import { useEffect, useState } from 'react'

export function Header() {
  const paths = ['Quem somos', 'Benefícios', 'Como Funciona?', 'Sou influencer']

  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 60) {
        // Rolando para baixo
        setIsVisible(false)
      } else {
        // Rolando para cima
        setIsVisible(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])
  return (
    <header
      className={`w-full h-[60px] fixed top-0 bg-[#0F0F0F33]/20 px-44 backdrop-blur-md flex justify-center z-40 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} `}
    >
      <Container className="flex items-center">
        <div className="flex-1">
          <Image src={logo} alt="logoPeople" />
        </div>
        <nav className="w-fit flex gap-6">
          <div className="px-4 flex gap-5 items-center">
            {paths.map((path, index) => {
              return (
                <span
                  key={index}
                  className={`${index === 3 ? 'text-rosaPrimary font-medium' : 'text-[#696969]'} hover:underline transition ease-in text-sm ${index === 3 ? 'hover:text-rosaPrimary/90' : 'hover:text-white'} font-normal cursor-pointer`}
                >
                  {path}
                </span>
              )
            })}
          </div>

          <div className="flex gap-4">
            <Button>Quero anunciar!</Button>
            <Button variant={'ghost'}>Entrar</Button>
          </div>
        </nav>
      </Container>
    </header>
  )
}
