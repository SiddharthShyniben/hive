<script>
	export let spinning = false;
</script>

{#if spinning}
	<div class="overlay">
		<div class="lds-ellipsis">
			<div />
			<div />
			<div />
			<div />
		</div>
	</div>
	<slot />
{/if}

<style>
	.overlay {
		width: 100vw;
		height: 100vh;
		background-color: #0007;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
	}
	.lds-ellipsis {
		display: inline-block;
		width: 80px;
		height: 80px;

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.lds-ellipsis div {
		position: absolute;
		top: 33px;
		width: 13px;
		height: 13px;
		border-radius: 50%;
		background: #f1c40f;
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
	}
	.lds-ellipsis div:nth-child(1) {
		left: 8px;
		animation: lds-ellipsis1 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(2) {
		left: 8px;
		animation: lds-ellipsis2 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(3) {
		left: 32px;
		animation: lds-ellipsis2 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(4) {
		left: 56px;
		animation: lds-ellipsis3 0.6s infinite;
	}
	@keyframes lds-ellipsis1 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes lds-ellipsis3 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}
	@keyframes lds-ellipsis2 {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(24px, 0);
		}
	}

	.overlay {
		width: 100vw;
		height: 100vh;
		background-color: #0007;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
	}
</style>
