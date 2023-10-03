import { Text } from '@mantine/core'
import classes from './index.module.css'

export default function Logo({ size }) {
  return (
    <Text
      component='span'
      display='inline'
      fw={700}
      className={classes.logo}
      style={{ fontSize: size }}
    >
      Muz<span>ї</span>ek <span>🢒</span>
    </Text>
  )
}