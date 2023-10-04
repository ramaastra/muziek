import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Container, Flex, Input, Text, Title } from '@mantine/core'
import SearchResult from '../components/Discover/SearchResult'

export default function DiscoverPage() {
  const [searchParams, setSearchParams] = useSearchParams('')
  const [searchInput, setSearchInput] = useState(searchParams.get('search'))

  const handleSearch = (event) => {
    const query = event.target.value
    setSearchParams({ search: query }, { replace: true })
    setSearchInput(query)
  }

  return (
    <Container fluid mx='md' my='xl' p={0}>
      <Flex direction='column' justify='center' align='center' mb='xl'>
        <Title order={2} style={{ textAlign: 'center' }}>
          Search Our Library
        </Title>
        <Input
          placeholder='Track titles, artists, albums'
          value={searchParams.get('search') || ''}
          onChange={handleSearch}
          mt='xs'
          radius='xl'
          w={250}
          autoFocus={true}
        />
      </Flex>

      <Container p={0}>
        {searchInput ?
          <SearchResult searchInput={searchInput} /> :
          <Text fs='italic' style={{ textAlign: 'center' }}>
            Got nothing to search?
          </Text>
        }
      </Container>
    </Container>
  )
}
