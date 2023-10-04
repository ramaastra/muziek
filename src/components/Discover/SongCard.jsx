import { Card, Image, Text, Tooltip } from '@mantine/core'
import { API } from '../../api'

export default function SongCard({ song }) {
  return (
    <Tooltip
      label={`${song.title_short} - ${song.artist.name}`}
      position='bottom'
    >
      <Card
        component='a'
        href={`/discover/song/${song.id}`}
        w={200}
        padding='md'
        radius='md'
      >
        <Card.Section>
          <Image
            src={API.getSongCover(song.md5_image)}
            alt={song.title}
            style={{ aspectRatio: 1/1 }}
          />
        </Card.Section>

        <Text fw={500} size='lg' mt='md' lineClamp={1}>
          {song.title_short}
        </Text>
        <Text c='dimmed' size='sm' lineClamp={1}>
          {song.artist.name}
        </Text>
      </Card>
    </Tooltip>
  )
}