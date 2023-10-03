import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classes from './NavLinks.module.css'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Discover', href: '/discover' }
]

export default function NavLinks() {
  const location = useLocation()
  const [active, setActive] = useState(location.pathname)

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          data-active={active === link.href || undefined}
          className={classes.link}
          onClick={() => {
            setActive(link.href)
          }}
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}
