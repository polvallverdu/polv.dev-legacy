<script lang="ts">
	import ModeSwitcher from './ModeSwitcher.svelte';
	import Tailwindcss from './Tailwindcss.svelte';
	import axios from 'axios';
	import Home from './pages/Home.svelte';
	import type { DataType, ProjectType, ReviewType } from './types';

	import { onMount } from 'svelte';
	import Error from './pages/Error.svelte';
	import Loading from './pages/Loading.svelte';
import Icons from './Icons';

	let data: DataType | undefined = undefined;
	let projects: ProjectType[] | undefined = undefined;
	let reviews: ReviewType[] | undefined = undefined;
  let failed = false;

	type Page = "home" | "project" | "404" | "error" | "loading";
	let page: Page = "loading";

	onMount(async () => {
		const url = window.location.href;

		if (url.includes("/project?")) {
			// TODO: Get id
			page = "project";
		} else if (url.endsWith("/")) {
			page = "loading";
			try {
				await Icons.load();
				data = (await axios.get('http://localhost:3000/data').then((res) => res)).data as DataType;
				page = "home";
				projects = (await axios.get('http://localhost:3000/projects').then((res) => res)).data as ProjectType[];
				reviews = (await axios.get('http://localhost:3000/reviews').then((res) => res)).data as ReviewType[];
			} catch (e) {
				failed = true;
			}
		} else {
			page = "404";
		}
	});
</script>

<Tailwindcss />
<!--<ModeSwitcher />-->
<main class="">
	{#if page === "loading"}
		{#if failed}
			<Error error="Data could not be fetch" />
		{:else}
			<Loading />
		{/if}
	{:else if page === "404"}
		<Error error="404" />
	{:else if page === "error"}
		<Error error="Unknown error" />
	{:else if page === "home"}
		<Home {data} projectsdata={projects} reviewsdata={reviews} />
	{/if}
</main>