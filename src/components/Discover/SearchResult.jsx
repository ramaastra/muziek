import { useEffect, useState } from 'react'
import { Flex } from '@mantine/core'
import { API } from '../../api'
import SongCard from './SongCard'

export default function SearchResult({ searchInput }) {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    API.search(searchInput)
      .then((result) => setSongs(result))
      .catch((error) => console.log(error))
  }, [searchInput])
  
  return (
    <Flex justify='center' gap={20} wrap='wrap'>
      {songs.map((song) => {
        return <SongCard key={song.id} song={song} />
      })}
    </Flex>
  )
}
