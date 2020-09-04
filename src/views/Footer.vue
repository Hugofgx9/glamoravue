<script>
export default {
	name: 'Footer',
	data () {
		return {
			selectLangage: {
				isVisible: false,
				color: null,
			}

		}
	},
	methods: {
		openSelectLangage: function() {
			if(this.selectLangage.isVisible) {
				this.selectLangage.isVisible = false;
				this.selectLangage.color = null;
			}
			else {
				this.selectLangage.isVisible = true;
				this.selectLangage.color = 'white';
			}
			console.log(this.selectLangage.isVisible);
		},
	},
}

</script>

<template>
	<footer>
		<div class='row-1'>
			<span class='footer-title'>Glamora</span>
			<ul>
				<li>
					<span class='footer-title-2'>Corporate</span>
					<a><span>About</span></a>
					<a><span>Professionals</span></a>
					<a><span>Bespoke Design Service</span></a>
					<a><span>Projects</span></a>
					<a><span>Diary</span></a>
					<a><span>Contacts</span></a>
				</li>
				<li>
					<span class='footer-title-2'>Collections</span>
					<a><span>Creative Wallcoverings</span></a>
					<a><span>GlamFusion™</span></a>
					<a><span>GlamPure</span></a>
					<a><span>Discover all</span></a>
					<a><span>Designers</span></a>
				</li>
				<li>
					<span class='footer-title-2'>Legal & info</span>
					<a><span>Conditions de ventes</span></a>
					<a><span>Info & Legal</span></a>
					<a><span>Privacy policy</span></a>
					<a><span>Cookie policy</span></a>
				</li>
				<li>
					<span class='footer-title-2'>Follow us</span>
					<a><span>Instagram</span></a>
					<a><span>Pinterest</span></a>
					<a><span>Facebook</span></a>
					<a><span>LinkedIn</span></a>
					<a><span>Archiproducts</span></a>
					<a><span>Architonic</span></a>
				</li>
				<li>
					<span class='footer-title-2'>Download area</span>
					<a><span>Design Files</span></a>
					<a><span>Catalogues</span></a>
					<a><span>Materials</span></a>
					<a><span>Presskit</span></a>
				</li>
			</ul>
		</div>
		<div class='row-2'>
			<span class='footer-title-2'>Join our NewsLetter</span>
			<button>
				<span>Sign up</span>
			</button>
			<div class='change-langage' @click='openSelectLangage'>	
				<span :style="{ color: selectLangage.color }">
					Change langage
				</span>
				<div class='select-langage-box' v-show='selectLangage.isVisible'>
					<ul>
						<li>Italiano</li>
						<li>English</li>
						<li>Español</li>
						<li>Français</li>
						<li>Deutsch</li>
					</ul>
				</div>
			</div>
		</div>
		
	</footer>
</template>

<style lang='scss' scoped>

footer {
	background-color: #111;
	color: white;
	padding: 0px 50px;
	padding-bottom: 50px;

	.footer-title-2{
		color: white;
		text-transform: uppercase;
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.3em;
	}

	.row-1 {
		padding-bottom: 50px;

		.footer-title {
			font-size: 24px;
			padding: 24px 24px;
			margin-top: 30px;
			margin-bottom: 70px;
			display: inline-block;
			font-weight: 600;
			text-transform: uppercase;
		}

		ul {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
			justify-content: space-between;
			li {
				display: flex;
				flex-direction: column;
				padding: 24px;
				> span {
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
	.row-2 {
		padding: 0 24px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		> span {
			display: inline-block;
			padding-bottom: 7px;
		}
		button {
			grid-column: 1;
			width: fit-content;
			padding: 0 62px;
			height: 62px;
			border: 1px solid rgba(68,68,68,1);
			text-transform: uppercase;
			font-weight: 500;
			font-size: 11px;
			letter-spacing: 0.2em;
			display: flex;
			justify-content: center;
			align-items: center;
			color: rgba(153,153,153,1);
			transition: all .3s ease;

			&:hover {
				background-color: white;
				color: black;
				border-color: white;

			}
		}
		.change-langage {
			color: grey;
			font-weight: 400;
			font-size: 12px;
			line-height: 12px;
			position: relative;
			justify-self: end;
			align-self: end;

			span {
			display: inline-block;
			cursor: pointer;
			transition: color .2s ease-in-out;
			padding-bottom: 7px;

				&:hover {
					color: white;
				}

				&:active {
					color: white;
				}				
			}
			.select-langage-box{
				width: 140%;
				position: absolute;
				bottom: 180%;
				left: 50%;
				transform: translateX(-50%);
				background-color: white;

				li {
					padding: 8px 10px;
					margin-bottom: 5px;
					cursor: pointer;
					color: grey;
					transition: all .1s ease;

					&:hover {
						background-color: rgba(228,228,228,1);
						color: black;

					}
				}
			}
		}
	}
}
	
</style>