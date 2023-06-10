<script lang="ts">
	import { Fancybox } from '@fancyapps/ui';
	import { createEventDispatcher, onMount } from 'svelte';
	import TipTap from './TipTap.svelte';
	import { colors } from '../appwrite';

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
	const id = Math.floor(Math.random() * 1e5);

	export let expandable = true;

	const dispatch = createEventDispatcher();
	export let value = '';

	onMount(() => {
		if (!forceShort) {
			let charCount = (data?.innerText || '').length;
			long = forceLong || charCount > 160;
		}
		if (expandable)
			Fancybox.bind(`[data-fancybox-${id}]`, {
				animated: true,
				on: { close: () => dispatch('closed', { value, color: color[0] }) }
			});
	});

	let settings = false;

	let i: number | null = null;

	function swapColor() {
		if (i === null) i = colors.indexOf(color);
		i = (i + 1) % colors.length;
		color = colors[i];
	}
 
	function toggleSettings() {
		settings = !settings;
	}
</script>

<div
	bind:this={element}
	class="note {color} border-{border} {classes}"
	class:dim
	class:long
	class:expandable
	class:absolute={!expandable}
	{...{ [`data-fancybox-${id}`]: true }}
	data-src="#dialog-content-{id}"
>
	<span bind:this={data}>
		<slot />
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html value}
	</span>
	{#if collaborator}
		{#each collaborators as collaborator, i}
			<img
				src="https://picsum.photos/100"
				alt={collaborator}
				class="colab-circle colab-{i} border-{color}"
			/>
		{/each}
	{/if}
	{#if expandable}
		<div
			id="dialog-content-{id}"
			class="dialog note border-{border} {classes}"
			class:long
			style="display: none; width: 70vw; height: 70vh; border-color: var(--{color})"
		>
			<div class="dialog-inner">
				{#if settings}
					<h1>Settings</h1>
					<h2>Collaborators</h2>
					<ul>
						{#each collaborators as collaborator}
							<li>{collaborator}</li>
						{/each}
					</ul>
				{:else}
					<TipTap bind:value />
					<div id="note-settings">
						<div id="color-picker" class={color} on:click={swapColor} on:keydown={swapColor}/>
						<div id="settings-cog" on:click={toggleSettings} on:keydown={toggleSettings}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
						</div>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	@import '@fancyapps/ui/dist/fancybox/fancybox.css';
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
		transition: border-color 500ms;
	}

	.long {
		width: 22rem;
	}

	.blue {
		border-color: var(--blue);
	}
	#color-picker.blue {
		background-color: var(--blue);
	}
	.red {
		border-color: var(--red);
	}
	#color-picker.red {
		background-color: var(--red);
	}
	.green {
		border-color: var(--green);
	}
	#color-picker.green {
		background-color: var(--green);
	}
	.purple {
		border-color: var(--purple);
	}
	#color-picker.purple {
		background-color: var(--purple);
	}
	.yellow {
		border-color: var(--yellow);
	}
	#color-picker.yellow {
		background-color: var(--yellow);
	}
	.orange {
		border-color: var(--orange);
	}
	#color-picker.orange {
		background-color: var(--orange);
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

	.dialog {
		opacity: 0;
		padding: 0;
		transition: opacity 1s, border-color 500ms;
		overflow: visible;
	}

	.dialog.fancybox__content {
		opacity: 1;
	}

	.dialog.f-fadeOut {
		opacity: 0;
	}

	.dialog-inner {
		position: relative;
		padding: 1rem;
		height: 100%;
	}

	#note-settings {
		position: absolute;
		bottom: 0;
		right: 0;
		border-radius: 10px;
		padding: 0.5rem;
		display: flex;
	}

	#color-picker {
		height: 2rem;
		width: 2rem;
		border: 1px solid #101010;
		border-radius: 50%;
		transition: background-color 500ms;
		background-color: white;
	}
	
	#settings-cog {
		height: 2rem;
		width: 2rem;
		border: 1px solid #101010;
		border-radius: 50%;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
