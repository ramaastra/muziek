import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classes from './NavLinks.module.css'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Discover', href: '/discover' }
]

export default function NavLinks() {
  const location = useLocation()
  const [active, setActive] = useState(location.pathname)

  useEffect(() => {
    setActive(
      location.pathname.includes('/discover')
        ? '/discover'
        : location.pathname
    )
  }, [location.pathname])

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
