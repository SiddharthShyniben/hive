<script lang="ts">
	import {onMount} from "svelte";
	import {fade, scale} from 'svelte/transition';

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

	let element!: HTMLElement;
	onMount(() => {
		let charCount = (data?.innerText || '').length;
		short = forceShort|| charCount > 0 && charCount < 160;
		long = forceLong || !short;
		const rect = element.getBoundingClientRect();
		const topPercent = (rect.top / window.innerHeight) * 100;
		const leftPercent = (rect.left / window.innerWidth) * 100;
		element.style.top = `calc(${topPercent}% - 1rem)`;
		element.style.left = `calc(${leftPercent}% - 1rem)`;
	})

	// TODO: expandable=false for homepage
	export let expandable = true;
	export let expanded = false;
	function toggleNoteEditor() {
		if (expandable) expanded = !expanded;
	}

</script>

<div bind:this={element} class="note {color} border-{border} {classes}"
	class:dim class:short={short} class:long={long} class:expanded
	on:click={toggleNoteEditor}>
	{#if !expanded}
		<span transition:fade bind:this={data}><slot></slot></span>
	{/if}
	{#if collaborator && !expanded}
		{#each collaborators as collaborator, i}
			<img src="https://picsum.photos/100" alt={collaborator} class="colab-circle colab-{i} border-{color}">
		{/each}
	{/if}
</div>

<style>
	.note {
		background-color: #101010;
		margin: 1rem;
		padding: 1rem;
		color: #fff;
		height: 12.5rem;
		border: 3px solid #95a5a6;
		border-radius: 20px;
		overflow: scroll;

		position: absolute;
		z-index: 1000;
		transition: all 500ms;
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
	
	.colab-2 {
		transform: translate(250%, 50%);
		z-index: 49;
	}

	.expanded {
		position: absolute;
		width: 70%;
		height: 70%;
		top: 15% !important;
		left: 15% !important;
	}

	/* TODO SCROLLBARS FIX */
</style>
