<script lang="ts">
	import { onMount } from "svelte";

	export let color = 'grey';
	export let border = '1';
	export let classes = '';
	export let dim = false;
	
	let forceLong = false;
	let forceShort = false;
	export {forceLong as long, forceShort as short}

	export let collaborator = false;
	export let collaborators = ["balls", "balls2"];
	
	let data!: HTMLElement;

	let short = false;
	let long = false;

	onMount(() => {
		let charCount = (data?.innerText || '').length;
		short = forceShort|| charCount > 0 && charCount < 160;
		long = forceLong || !short;
	})
</script>

<div class="note {color} border-{border} {classes}" class:dim
	class:short={short} class:long={long}>
	<span bind:this={data}><slot></slot></span>
	{#if collaborator}
		{#each collaborators as collaborator, i}
			<img src="https://picsum.photos/100" alt={collaborator} class="colab-circle colab-{i} border-{color}">
		{/each}
	{/if}
</div>

<style>
	div {
		background-color: #101010;
		margin: 1rem;
		padding: 1rem;
		color: #fff;
		min-width: 10rem;
		max-width: 20rem;
		max-height: 12.5rem;
		border: 3px solid #95a5a6;
		border-radius: 20px;
		overflow: scroll;
	}

	.short {
		width: 15rem;
	}
	
	.long {
		width: 20rem;
	}

	.blue {
		border-color: #3498db;
	}
	.red {
		border-color: #e74c3c;
	}
	.green {
		border-color: #1abc9c;
	}
	.purple {
		border-color: #9b59b6;
	}
	.yellow {
		border-color: #f1c40f;
	}
	.orange {
		border-color: #e67e22;
	}

	.border-1 {
		border-top-left-radius: 0px;
	}
	.border-2 {
		border-top-right-radius: 0px;
	}
	.border-3 {
		border-bottom-left-radius: 0px;
	}
	.border-4 {
		border-bottom-right-radius: 0px;
	}

	.dim {
		filter: brightness(0.5);
	}


	.colab-circle {
		background-color: #101010;
		border-radius: 50%;
		z-index: 50;
		width: 32px;
		height: 32px;

		position: absolute;
		transform: translate(350%, 50%);
		border: 2px solid #101010;
	}

	.colab-1 {
		transform: translate(300%, 50%);
		z-index: 49;
	}

	/* TODO SCROLLBARS FIX */
</style>
