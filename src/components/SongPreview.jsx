export default function SongPreview({ previewSource }) {
  return (
    <audio controls style={{ height: 36}}>
      <source src={previewSource} />
      Your browser does not support the audio element.
    </audio>
  )
}
