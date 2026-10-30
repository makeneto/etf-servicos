export default function AboutImage() {
  return (
    <div className="relative min-h-56 sm:min-h-110">
      <div className="absolute -left-20 -top-22 h-full w-full bg-black lg:-top-20" />

      <div
        role="img"
        aria-label="Escritório moderno"
        className="relative z-10 h-full min-h-56 bg-cover bg-center sm:min-h-110"
        style={{ backgroundImage: `url('/about-image.avif')` }}
      >
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </div>
  )
}
