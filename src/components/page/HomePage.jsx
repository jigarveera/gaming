const InstagramIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-7 w-7">
    <path
      d="M8 3.5h16l4.5 4.5v16L24 28.5H8L3.5 24V8L8 3.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="16" cy="16" r="5.5" stroke="currentColor" strokeWidth="2" />
    <path d="M23 9h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
)

const YouTubeIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-7 w-7">
    <path
      d="M5 7.5h22l2 2v13l-2 2H5l-2-2v-13l2-2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="m13 11 9 5-9 5V11Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
)

const HomePage = () => {
  return (
    <main className="font-audiowide flex min-h-screen flex-col items-center justify-center gap-10 bg-surface-200 px-6 text-center text-surface-900">
      <h1 className="text-2xl sm:text-3xl xl:text-4xl">Coming Soon!</h1>

      <nav aria-label="Social media" className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://www.instagram.com/heyjigarexe/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram: heyjigarexe (opens in a new tab)"
          className="text-black transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://youtube.com/@heyjigarexe?si=FQxnUMKO51bN3f7J"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube: heyjigarexe (opens in a new tab)"
          className="text-black transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          <YouTubeIcon />
        </a>
      </nav>
    </main>
  )
}

export default HomePage
