import { Button, ScrollArea, Table, Text } from '@mantine/core'
import SongPreview from './SongPreview'

export default function AlbumSongs({ album }) {
  return (
    <ScrollArea
      h='40vh'
      type='always'
      bg='dark'
      px='md'
      py='xs'
      style={{ borderRadius: 10 }}
    >
      <Table>
        <Table.Tbody>
          <Table.Tr align='center'>
            <Table.Td colSpan={4}>
              <Text size='20px' span fw={700}>{album.title}</Text>
              <Text span> – Setlist</Text>
            </Table.Td>
          </Table.Tr>
          {album.tracks.data.map((song, index) => {
            return (
              <Table.Tr key={song.id} align='center'>
                <Table.Td style={{ fontSize: 16 }}>{++index}</Table.Td>
                <Table.Td style={{ fontSize: 16 }}>
                  <Text
                    component='a'
                    href={`/discover/song/${song.id}`}
                    td='underline'
                  >
                    {song.title}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <SongPreview previewSource={song.preview} />
                </Table.Td>
                <Table.Td>
                  <Button
                    variant='light'
                    radius='xl'
                    component='a'
                    href={song.link}
                    target='_blank'
                  >
                    Listen Full Song
                  </Button>
                </Table.Td>
              </Table.Tr>
            )
          })}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  )
}
