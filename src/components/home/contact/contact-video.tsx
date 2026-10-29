export default function ContactVideo() {
  return (
    <div className="relative block min-h-160 overflow-hidden">
      <video
        className="absolute inset-0 size-full object-cover"
        src="/deal-video.mp4"
        poster="/poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-blue-950/20" />
    </div>
  )
}
