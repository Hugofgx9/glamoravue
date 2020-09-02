<script>
export default {
	name: 'Footer',
	data () {
		return {

		}
	},
	methods: {

	},
}

</script>

<template>
	<footer>
		<span class='footer-title'>Glamora</span>
		<ul>
			<li>
				<span>Corporate</span>
				<a><span>About</span></a>
				<a><span>Professionals</span></a>
				<a><span>Bespoke Design Service</span></a>
				<a><span>Projects</span></a>
				<a><span>Diary</span></a>
				<a><span>Contacts</span></a>
			</li>
			<li>
				<span>Collections</span>
				<a><span>Creative Wallcoverings</span></a>
				<a><span>GlamFusion™</span></a>
				<a><span>GlamPure</span></a>
				<a><span>Discover all</span></a>
				<a><span>Designers</span></a>
			</li>
			<li>
				<span>Legal & info</span>
				<a><span>Conditions de ventes</span></a>
				<a><span>Info & Legal</span></a>
				<a><span>Privacy policy</span></a>
				<a><span>Cookie policy</span></a>
			</li>
			<li>
				<span>Follow us</span>
				<a><span>Instagram</span></a>
				<a><span>Pinterest</span></a>
				<a><span>Facebook</span></a>
				<a><span>LinkedIn</span></a>
				<a><span>Archiproducts</span></a>
				<a><span>Architonic</span></a>
			</li>
			<li>
				<span>Download area</span>
				<a><span>Design Files</span></a>
				<a><span>Catalogues</span></a>
				<a><span>Materials</span></a>
				<a><span>Presskit</span></a>
			</li>
		</ul>
		
	</footer>
</template>

<style lang='scss' scoped>

footer {
	background-color: #111;
	color: white;

	.footer-title {
		font-weight: 600;
		text-transform: uppercase;
	}

	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		justify-content: space-between;
		padding: 0px 50px;
		li {
			display: flex;
			flex-direction: column;
			padding: 24px;
			> span {
				color: white;
				text-transform: uppercase;
				font-size: 10px;
				font-weight: 600;
				letter-spacing: 0.3em;
				margin-bottom: 24px;
			}
			a {
				color: grey;
				font-weight: 400;
				font-size: 12px;
				line-height: 12px;
				margin-bottom: 16px;

				span {
					transition: color .2s ease-in-out;
					cursor: pointer;
					display: inline;

					&:hover {
						color: white;
					}
				}

				&:last-child {
					margin-bottom: 0px;
				}

			}
		}
	}

}
	
</style>