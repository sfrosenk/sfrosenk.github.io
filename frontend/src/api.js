const DATA_URL = `${import.meta.env.BASE_URL}data`;

export async function fetchAbout() {
  const res = await fetch(`${DATA_URL}/about.json`);
  if (!res.ok) throw new Error("Failed to load about data");
  return res.json();
}

export async function fetchProjects() {
  const res = await fetch(`${DATA_URL}/projects.json`);
  if (!res.ok) throw new Error("Failed to load projects");
  return res.json();
}

export async function fetchBlog() {
  const res = await fetch(`${DATA_URL}/blog.json`);
  if (!res.ok) throw new Error("Failed to load blog");
  return res.json();
}
