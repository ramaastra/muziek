import { Burger, Group } from '@mantine/core'
import Logo from '../Logo'
import NavLinks from './NavLinks'
import classes from './index.module.css'

export default function Header({ opened, toggle }) {
  return (
    <div className={classes.inner}>
      <Logo size={25} />
      
      <Group gap={5} visibleFrom='xs'>
        <NavLinks />
      </Group>

      <Burger opened={opened} onClick={toggle} hiddenFrom='xs' size='sm' />
    </div>
  )
}
