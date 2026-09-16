export default function Home() {
  return (
    <main style={{ maxWidth: 720, margin: "80px auto", padding: 24, fontFamily: "system-ui" }}>
      <h1>Client Site Demo</h1>
      <p>
        Reference install: Next.js + TypeScript, deployed as prebuilt output
        via GitHub Actions and Vercel CLI. The Vercel project is not linked to Git.
      </p>
      <ul>
        <li>Typecheck and build run in CI before every deploy</li>
        <li>Per-client Supabase project with migrations and RLS</li>
        <li>Secrets live in CI and Vercel only, never in the repo</li>
      </ul>
      <p>
        <a href="https://github.com/maxigosh/client-site-demo">Source and workflow on GitHub</a>
      </p>
    </main>
  );
}
