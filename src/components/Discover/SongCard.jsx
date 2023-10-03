import { Card, Image, Text, Tooltip } from '@mantine/core'

const getCoverSource = (md5_image) => {
  return `https://e-cdns-images.dzcdn.net/images/cover/${md5_image}/500x500-000000-80-0-0.jpg`
}

export default function SongCard({ song }) {
  return (
    <Tooltip
      label={`${song.title_short} - ${song.artist.name}`}
      position='bottom'
    >
      <Card
        component='a'
        href={song.link}
        target='_blank'
        w={200}
        padding='md'
        radius='md'
      >
        <Card.Section>
          <Image
            src={getCoverSource(song.md5_image)}
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