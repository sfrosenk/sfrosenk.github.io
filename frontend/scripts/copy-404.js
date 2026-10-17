// GitHub Pages has no server-side router, so a deep link like /projects
// 404s on refresh. Serving index.html as 404.html lets React Router take
// over client-side once the page loads.
import { copyFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");
copyFileSync(path.join(dist, "index.html"), path.join(dist, "404.html"));
