<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Local development

Install with `npm ci`. Start the site with `npm run dev` (port 3000). Open http://localhost:3000. Next.js serves dev assets only for the startup hostname plus hosts in `allowedDevOrigins`; `127.0.0.1` is allowed. `npm run lint` currently reports existing source errors. `npm run build` is the check used in CI. Postgres (`POSTGRES_URL` or `DATABASE_URL`) and SMTP credentials are optional and are used only by the contact and lean API routes. Pages render without them.
