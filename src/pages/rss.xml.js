import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const [experience, hackathons, projects, interviews] = await Promise.all([
		getCollection('experience'),
		getCollection('hackathons'),
		getCollection('sideProjects'),
		getCollection('interviews'),
	]);

	const items = [
		...experience.map((post) => ({
			title: post.data.company,
			link: `/experience/${post.id}/`,
		})),
		...hackathons.map((post) => ({
			title: post.data.name,
			link: `/hackathons/${post.id}/`,
		})),
		...projects.map((post) => ({
			title: post.data.name,
			link: `/projects/${post.id}/`,
		})),
		...interviews.map((post) => ({
			title: post.data.name,
			link: `/interviews/${post.id}/`,
		})),
	];

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items,
	});
}
