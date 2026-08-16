import Link from "next/link";

export default function NotFound() {
  return (
    <section className="article-shell" aria-labelledby="not-found-title">
      <header className="article-hero">
        <p className="eyebrow">Route status · 404</p>
        <h1 id="not-found-title">Briefing Not Found</h1>
        <p>This route is outside the current operation.</p>
        <div className="hero-actions">
          <Link href="/" className="button">Return home</Link>
          <Link href="/beginner-guide" className="button button-secondary">Beginner guide</Link>
        </div>
      </header>
    </section>
  );
}
