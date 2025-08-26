export default function Footer() {
  return (
    <footer className="py-4 border-t border-black/10 dark:border-white/10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="p-muted text-sm">© {new Date().getFullYear()} Your Name</p>
        <p className="p-muted text-sm">Built with Next.js, Tailwind & Framer Motion</p>
      </div>
    </footer>
  );
}
