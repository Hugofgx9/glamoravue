<script>
import gsap from "gsap";

export default {
	name: 'ModalMenu',
	data () {
		return {
		}
	},
	methods: {
		close () {
			this.$emit('close');
		},
		enterAnimation: function () {
			let tl= gsap.timeline();

			tl.fromTo('#modal-menu', .5, { 
				opacity: 0 }, { 
				opacity: 1
			})
			.from('#modal-menu .navLink li', {
				opacity: 0,
				x: 40,
				stagger: {
					amount: 0.5,
				},
			})
			.from('#modal-menu .firstList li', {
				opacity: 0,
				x: 40,
				stagger: {
					amount: 0.5,
				},
			}, '<');
			document.body.classList.add('modal-open');
		},
		leaveAnimation: function () {
			gsap.to('#modal-menu', .2, { 
				opacity: 0,
			});
			document.body.classList.remove('modal-open');
		}

	}
}
</script>


<template>
	<section id='modal-menu' class='scroll-wrap'>
		<button id="quite-modal-menu" @click='close'>
			<svg width="24" height="24" viewBox="0 0 32 33" >
				<title>Close icon</title> 
				<path fill-rule="evenodd" d="M17.948 16l7.104 7.104a.426.426 0 0 1 .115.315.426.426 0 0 1-.115.315l-1.318 1.318a.426.426 0 0 1-.315.115.426.426 0 0 1-.315-.115L16 17.948l-7.104 7.104a.426.426 0 0 1-.315.115.426.426 0 0 1-.315-.115l-1.318-1.318a.426.426 0 0 1-.115-.315c0-.133.039-.238.115-.315L14.052 16 6.948 8.896a.426.426 0 0 1-.115-.315c0-.134.039-.239.115-.315l1.318-1.318a.426.426 0 0 1 .315-.115c.133 0 .238.039.315.115L16 14.052l7.104-7.104a.426.426 0 0 1 .315-.115c.134 0 .239.039.315.115l1.318 1.318a.426.426 0 0 1 .115.315.426.426 0 0 1-.115.315L17.948 16z" ></path>
			</svg>
		</button>
		<div class='container'>
			<div class='leftPart'>
				<h2>Collections</h2>
				<ul class="navLink">
					<li>
						<a href="">
							<span>Creative Wallcoverings</span>
							<span>The Wallpaper for Interior Design</span>
						</a>
					</li>
					<li>	
						<a href="">
							<span>GlamFusion™</span>
							<span>The Waterproof Wallcovering</span>
						</a>
					</li>
					<li>	
						<a href="">
							<span>Glampure</span>
							<span>The Organic Wallcovering</span>
						</a>
					</li>
					<li>	
						<a href="">
							<span>Discover All</span>
							<span>Voir tous les produits par style, couleur et matière</span>
						</a>
					</li>						
				</ul>
			</div>
			<div class="rightPart">
				<ul class='firstList'>
					<li><a>About</a></li>
					<li><a>Professionals</a></li>
					<li><a>Bespoke Design Service</a></li>
					<li><a>Projects</a></li>
					<li><a>Diary</a></li>
					<li><a>Contacts</a></li>
				</ul>
				<ul class='secondList'>
					<li><a>Download area</a></li>
					<li><a>Materials</a></li>
					<li><a>Designer</a></li>
				</ul>
			</div>
		</div>
	</section>
</template>

<style lang='scss' scoped>

.modal-open {
	overflow: hidden;
	position: fixed;
}

#modal-menu {
	// display: none;
	z-index: 100;
	position: fixed;
	// opacity: 0;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	overflow-x: scroll;
	background-color: #222;

	.container{
		height: 100vh;
		min-height: 500px;
		width: 100%;
	}

	button#quite-modal-menu {
		position: absolute;
		top: 30px;
		right: 30px;
		height: 24px;
		width: 24px;
		fill: #ffffff;
		opacity: 0.57;
		transition: all .3s ease-out;
		transform-origin: center;
	}

	button#quite-modal-menu:hover {
		opacity: 1;
		transform: rotate(180deg);
	}



	.leftPart, .rightPart {
		display: grid;
		width: 50%;
		float: left;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: 125px 50px 280px auto;

		a {
			color: rgba(255, 255, 255, 0.57);
			transition: all .2S ease-out;
		}
	}

	.leftPart {
		h2 {
			text-transform: uppercase;
			font-size: 12px;
			letter-spacing: 0.4em;
			color: rgba(255, 255, 255, 0.3);
			grid-column: 2/10;
			grid-row: 1;
			align-self: end;
		}

		.navLink {
			grid-column: 2/10;
			grid-row: 3;	
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			list-style-type: none;

			a {
				span:nth-of-type(1){
					font-size: 19px;
					letter-spacing: 0.04em;
					font-weight: 400;
					display: inline;

					&:after { 
						content: '\A'; 
						white-space: pre;
					}
				}
				span:nth-of-type(2){
					font-weight: 300;
					font-size: 12px;
				}
			}
		}
	}


	.rightPart {

		li {
			cursor: default;
		}

		ul:nth-of-type(1) {
			grid-column: 5/10;
			grid-row: 3;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			li {
				font-size: 20px;
			/*	margin-bottom: 20px;*/
			}
		}
		ul:nth-of-type(2) {
			grid-column: 5/10;
			grid-row: 4;
			margin-top: 40px;

			li {
				text-transform: uppercase;
				font-weight: 600;
				font-size: 12px;
				letter-spacing: 0.2em;
				margin-bottom: 7px;
			}
		}
	}

	a:hover{
		color: rgba(255, 255, 255, 1);
		cursor: pointer;
	}
}
</style>