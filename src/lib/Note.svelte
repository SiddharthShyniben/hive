<script lang="ts">
	export let color = 'grey';
	export let border = '1';
	export let classes = '';
	export let dim = false;
</script>

<div class="note {color} border-{border} {classes}" class:dim={dim}>
	<slot />
</div>

<style>
	div {
		background-color: #101010;
		margin: auto;
		padding: 1em;
		color: #fff;
		min-width: 15em;
		max-width: 20em;
		max-height: 12.5em;
		border: 3px solid #95a5a6;
		border-radius: 20px;
		overflow: scroll;
	}
	
	.blue {border-color: #3498db}
	.red {border-color: #e74c3c}
	.green {border-color: #1abc9c}
	.purple {border-color: #9b59b6}
	.yellow {border-color: #f1c40f}
	.orange {border-color: #e67e22}
	
	.border-1 {border-top-left-radius: 0px}
	.border-2 {border-top-right-radius: 0px}
	.border-3 {border-bottom-left-radius: 0px}
	.border-4 {border-bottom-right-radius: 0px}

	.dim {
		filter: brightness(0.5);
	}

	::-webkit-scrollbar {
		-webkit-appearance: none;
	}
	
	::-webkit-scrollbar-thumb {
		border-radius: 8px;
		border: 6px solid #101010;
		background-color: #95a5a6;
	}

	::-webkit-scrollbar-corner {
		background-color: #0000;
	}
</style>
