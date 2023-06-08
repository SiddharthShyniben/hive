<script lang="ts">
	import { Fancybox } from '@fancyapps/ui';
	import { createEventDispatcher, onMount } from 'svelte';
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
	const id = Math.floor(Math.random() * 1e5);

	onMount(() => {
		if (!forceShort) {
			let charCount = (data?.innerText || '').length;
			long = forceLong || charCount > 160;
		}
		if (expandable) Fancybox.bind(`[data-fancybox-${id}]`, { animated: true });
	});

	export let expandable = true;
	
	type AnyFunction = (...args: unknown[]) => unknown;

	function clickOutside(element: HTMLDivElement, callbackFunction: AnyFunction) {
		function onClick(event: MouseEvent) {
			if (!element.contains(event.target as Node)) {
				callbackFunction();
			}
		}

		document.body.addEventListener('click', onClick);

		return {
			update(newCallbackFunction: AnyFunction) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		};
	}

	const dispatch = createEventDispatcher();
	export let value = '';

	const close = () => {
		dispatch('closed', { value });
	};
</script>

<div
	bind:this={element}
	class="note {color} border-{border} {classes}"
	class:dim
	class:long
	class:expandable
	class:absolute={!expandable}
	use:clickOutside={close}
	{...{[`data-fancybox-${id}`]: true}}
	data-src="#dialog-content"
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
			id="dialog-content"
			class="note {color} border-{border} {classes}"
			class:long
			style="display: none; width: 70vw; height: 70vh">
			<TipTap bind:value />
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

	#dialog-content {
		opacity: 0;
		transition: opacity 1s;
	}

	#dialog-content.fancybox__content {
		opacity: 1;
	}

	#dialog-content.f-fadeOut {
		opacity: 0;
	}
</style>
