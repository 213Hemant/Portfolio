import Section from "./Section";

export default function About() {
  return (
    <Section id="about">
      <h2 className="h2">About Me</h2>
      <p className="p-muted mt-4">
        I’m an engineering graduate focused on full-stack web development. I enjoy turning ideas into
        performant, accessible products. I’m comfortable with JavaScript/TypeScript, React/Next.js,
        Node.js, and databases, and I’m always learning.
      </p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="card p-5">
          <h3 className="font-semibold">Problem Solver</h3>
          <p className="p-muted mt-2">Strong DSA fundamentals and clean code practices.</p>
        </div>
        <div className="card p-5">
          <h3 className="font-semibold">Team Player</h3>
          <p className="p-muted mt-2">Collaborative, communicative, and reliable under deadlines.</p>
        </div>
        <div className="card p-5">
          <h3 className="font-semibold">Curious</h3>
          <p className="p-muted mt-2">I love exploring new tools, patterns, and design systems.</p>
        </div>
      </div>
    </Section>
  );
}
