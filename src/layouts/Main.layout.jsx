import { Outlet } from 'react-router-dom'
import { useDisclosure } from '@mantine/hooks'
import { AppShell, } from '@mantine/core'
import Header from '../components/Header'
import NavLinks from '../components/Header/NavLinks'

export default function MainLayout() {
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <AppShell
      padding='md'
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened }
      }}
    >
      <AppShell.Header m={0} p='xl'>
        <Header
          opened={ opened }
          toggle={ toggle }
        />
      </AppShell.Header>

      <AppShell.Navbar py='md' px={4}>
        <NavLinks />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}