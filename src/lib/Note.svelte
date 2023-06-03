<script lang="ts">
	import { onMount } from 'svelte';
	import TipTap from './TipTap.svelte';

	export let color = 'grey';
	export let border = '1';
	export let classes = '';
	export let dim = false;

	let forceLong = false;
	let forceShort = false;
	export { forceLong as long, forceShort as short };

	export let collaborator = false;
	export let collaborators = ['balls', 'balls2'];

	let element!: HTMLElement;
	let data!: HTMLElement;

	let long = forceShort ? false : forceLong ? true : false;

	onMount(() => {
		if (!forceShort) {
			let charCount = (data?.innerText || '').length;
			long = forceLong || charCount > 160;
		}
		window.addEventListener('resize', handlePositioning);
	});

	export let expandable = true;
	export let expanded = false;
	function toggleNoteEditor() {	
		handlePositioning();
		if (expandable) {
			if (!expanded) expanded = true;
		}
	}
	
	function handlePositioning() {
		console.log('Resize')
		const rect = element.getBoundingClientRect();
		const topPercent = (rect.top / window.innerHeight) * 100;
		const leftPercent = (rect.left / window.innerWidth) * 100;
		element.style.top = `calc(${topPercent}% - 1rem)`;
		element.style.left = `calc(${leftPercent}% - 1rem)`;
	}

	function handleKey(e: KeyboardEvent) {
		if (expanded) {
			if (e.key === 'Escape') expanded = false
		} else if (e.key === 'Enter') expanded = true
	}

	function closeNote(e: KeyboardEvent) {
		if (expanded) {
			if (e.key === 'Escape') expanded = false
		}
	}

	function clickOutside(element, callbackFunction) {
		function onClick(event) {
			if (!element.contains(event.target)) {
				callbackFunction();
			}
		}

		document.body.addEventListener('click', onClick);

		return {
			update(newCallbackFunction) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		}
	}

	export let value = 'Run free';
</script>

<svelte:window on:keydown={closeNote}/>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	bind:this={element}
	class="note static {color} border-{border} {classes}"
	class:dim class:long class:expanded class:expandable
	on:click={toggleNoteEditor}
	on:keydown={handleKey}
	use:clickOutside={() => expanded = false}
	tabindex="0">
	{#if !expanded}
		<span bind:this={data}>{@html value}</span>
	{/if}
	{#if expanded}
		<TipTap bind:value />
	{/if}
	{#if collaborator && !expanded}
		{#each collaborators as collaborator, i}
			<img
				src="https://picsum.photos/100"
				alt={collaborator}
				class="colab-circle colab-{i} border-{color}"
			/>
		{/each}
	{/if}
</div>

<style>
	.note {
		background-color: #101010;
		margin: 1rem;
		padding: 1rem;
		color: #fff;
		width: 18rem;
		height: 12.5rem;
		border: 3px solid #95a5a6;
		border-radius: 20px;
		overflow: scroll;
	}
	
	.note.expandable {
		position: absolute;
		z-index: 1000;
		transition: all 500ms;
	}

	.long {
		width: 22rem;
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

	.note:not(.expanded) {
		width: 18rem;
		height: 12.5rem;
		animation: static 1.75s forwards;
	}

	@keyframes static {
	to {
		position: static;
		transition: none;
	}
	}
</style>
