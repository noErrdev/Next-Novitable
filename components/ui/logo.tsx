import Link from 'next/link'
import logo from '@/public/images/novi.svg'
import Image from 'next/image'
export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image src={logo} width={300} alt='logo'></Image>
    </Link>
  )
}
