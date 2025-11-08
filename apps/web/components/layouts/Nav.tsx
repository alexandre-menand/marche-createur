import { Button } from '@workspace/ui/components/button'
import Wrapper from '@workspace/ui/components/wrapper'
import { resolveSitemap } from 'next/dist/build/webpack/loaders/metadata/resolve-route-data'
import Image from 'next/image'
import Link from 'next/link'
import LOGO_IMG from '@/assets/img/logo.svg'

export default function Nav() {
  const navItems = NAV_CONNECTED
  return (
    <Wrapper asChild>
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image src={LOGO_IMG} alt="Marché créateur" width={120} />
          </Link>
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </ul>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="secondary">
            <Link href="/auth/signup">Créer un compte</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/login">Connexion</Link>
          </Button>
        </div>
      </nav>
    </Wrapper>
  )
}

function NavItem({ label, href }: NavItem) {
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  )
}

type NavItem = {
  label: string
  href: string
}
const NAV_PUBLIC: NavItem[] = [
  {
    label: 'Prochains marchés',
    href: '/marche',
  },
  {
    label: 'Je suis créateur',
    href: '/marche',
  },
  {
    label: 'Je suis organisateur',
    href: '/marche',
  },
]

const NAV_CONNECTED: NavItem[] = [
  {
    label: 'Prochains marchés',
    href: '/marche',
  },
  {
    label: 'Je suis créateur',
    href: '/espace/createur',
  },
  {
    label: 'Je suis organisateur',
    href: '/espace/organisateur',
  },
]
