import { Button, Container, Flex, Text } from '@mantine/core'
import Logo from '../components/Logo'

export default function HomePage() {
  const titleSize = 40

  return (
    <Container
      fluid
      h='70vh'
      mx='auto'
      style={{ textAlign: 'center' }}
    >
      <Flex
        direction='column'
        justify='center'
        align='center'
        h='100%'
      >
        <Text mb={10} style={{ fontSize: titleSize, lineHeight: 1 }} >
          Welcome to <Logo size={titleSize} />
        </Text>
          <Button variant='light' radius='xl' component='a' href='/discover'>
            Discover the Groove
          </Button>
      </Flex>
    </Container>
  )
}
