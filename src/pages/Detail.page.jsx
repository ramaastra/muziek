import { useLoaderData } from 'react-router-dom'
import {
  em,
  Badge,
  Container,
  Divider,
  Flex,
  Image,
  Text,
  Title,
  Tooltip
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { API } from '../api'
import AlbumSongs from '../components/AlbumSongs'
import SongPreview from '../components/SongPreview'

export async function loader({ params }) {
  const song = await API.getSongById(params.id)
  const album = await API.getAlbumById(song.album.id)
  return { song, album }
}

export default function DetailPage() {
  const { song, album } = useLoaderData()
  const isMobile = useMediaQuery(`(max-width: ${em(600)})`);

  return (
    <Container fluid mx='md' my='xl' p={0}>
      <Flex
        direction={isMobile ? 'column' : 'row'}
        w='100%'
        gap={isMobile ? 10 : 40}
        align='center'
      >
        <Image
          src={API.getSongCover(song.md5_image)}
          alt={song.title}
          style={{ aspectRatio: 1/1 }}
          radius='md'
          w={isMobile ? '90%' : '40%'}
          maw={300}
        />
        <Container m={0} p={0} w='100%' ta={isMobile ? 'center' : 'left'}>
          <Text
            component='a'
            href={song.link}
            target='_blank'
            display='inline-block'
            mb={8}
          >
            <Title td='underline' display='inline'>
              {song.title}
            </Title>
          </Text>
          {song.explicit_lyrics ?
            <Tooltip label='Explicit Lyrics' position='right'>
              <Badge size='sm' radius='sm' color='yellow' ml={10}>
                Explicit
              </Badge>
            </Tooltip> : null
          }
          <Title fw={200} size={18} mb={20}>{song.artist.name}</Title>
          <SongPreview previewSource={song.preview} />
          <Text mt={isMobile ? 10 : 40} fw={200} size='14px'>
            Released in {song.release_date}
          </Text>
        </Container>
      </Flex>
      {album.tracks.data.length > 1 ? 
        <>
          <Divider
            my="lg"
            label="More from the album"
            labelPosition="center"
          />
          <AlbumSongs album={ album } />
        </> : null
      }
    </Container>
  )
}
