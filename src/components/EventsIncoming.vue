<script>
export default {
	name: 'EventsIncoming',
	data () {
		return {

		}
	},
}
</script>

<template>
	<section>
		<h2>évènements à venir</h2>
		<div class='container-border'>
			<span class='place'>Architect@work Paris</span>
			<span class='date'>24 - 25 Septembre 2020</span>
			<span class='last-element'>Booth 96</span>
		</div>
	</section>
</template>

<style lang='scss' scoped>

section {
	margin-top: 100px;
	display: grid;
	grid-template-columns: 1fr 2.7fr 1fr;

}
	h2 {
		grid-column: 2;
		text-transform: uppercase;
		font-size: 23px;
		font-weight: 700;
		line-height: 1;
		letter-spacing: 0.1em;
	}
	
	.container-border {
		grid-row: 2;
		grid-column: 1/4;
		margin: 40px 6vw;
		padding: 24px 0;
		display: grid;
		grid-template-columns: 1fr repeat(3, 2fr) 1fr;
		grid-template-rows: repeat(2, 1fr);
		border-width: 1px;
		border-style: solid none;

		.place {
			grid-column: 2;
			grid-row: 1/3;
			align-self: center;
			letter-spacing: 4px;
			font-size: 13px;
			font-weight: 600;
			text-transform: uppercase;
		}

		.date {
			grid-column: 4;
			grid-row: 1;
		}

		.last-element {
			grid-column: 4;
			grid-row: 2;
		}

		.date, .last-element {
			font-weight: 400;
			font-size: 12px;
			line-height: 1.8;
		}
	}

</style>