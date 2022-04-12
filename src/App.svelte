<script lang="ts">
	import ModeSwitcher from './ModeSwitcher.svelte';
	import Tailwindcss from './Tailwindcss.svelte';
	import axios from 'axios';
	import Home from './pages/Home.svelte';

	type DataType = {
		accelerator: string;
		video: string;
		description: string;
	};

	let data: DataType | undefined = undefined;
  let failed = false;

	axios
			.get(/*'http://cdn.pol.engineer/webdata/data.json'*/ 'http://localhost:3000/data', {
					headers: {
							'Access-Control-Allow-Origin': '*'
					}
			})
			.then(res => {
					data = res.data as DataType;
			})
			.catch(e => {
					failed = true;
			});
</script>

<Tailwindcss />
<!--<ModeSwitcher />-->

{#if failed}
    <p>Failed</p>
{:else if data === undefined}
    <p>Loading</p>
{:else}
    <Home {data} />
{/if}
