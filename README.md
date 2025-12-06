# Portfolio

Personal portfolio website built with Astro.

## Tech Stack

- [Astro](https://astro.build/) v5
- MDX for content
- Sharp for image optimization

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Content

Content is managed through Astro Content Collections in `src/content/`:

| Collection | Path | Description |
|------------|------|-------------|
| `experience` | `/experience` | Work history |
| `hackathons` | `/hackathons` | Hackathon projects |
| `sideProjects` | `/projects` | Side projects |
| `interviews` | `/interviews` | Podcast/interview appearances |

To add new content, create a `.md` file in the appropriate folder with the required frontmatter (see existing files for examples).