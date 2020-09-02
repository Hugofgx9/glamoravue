<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
	name: 'CollectionDrag',
	data () {
		return {
			imageHeight: null,
			diplacement: null,
		}
	},
	mounted: function () {
		this.scaleImageOnHover();
		this.scrollByDrag(this.$refs.scrollWrap1);
		this.scrollByDrag(this.$refs.scrollWrap2);
		setTimeout( () => {
			this.calculateImageHeight();
		}, 400);
		window.addEventListener('resize', this.calculateImageHeight);
	},
	beforeDestroy: function () {
		window.removeEventListener('resize', this.calculateImageHeight);
	},
	methods: {
		scaleImageOnHover: function () {
			function ImageHover (wrapper) {
				wrapper.addEventListener('mouseover', function(){
					wrapper.querySelector('img').style.transform = 'scale(1.05)';
				});
				wrapper.addEventListener('mouseout', function(){
					wrapper.querySelector('img').style.transform = 'scale(1)';
				});
			}
			let allElements = document.querySelectorAll('#collections li, #projects li'); //or try to concat the NodeList? 
			allElements.forEach( e => ImageHover(e));
		},
		scrollByDrag: function (container) {
			let isDown = false;
			let speedX = 0;
			let startX;
			let scrollLeft;
			let scrollInertie; 

			function afterDragInertie (speed) {
				// remplacer par if (scrollInertie) { clearInterval } mais ne fonctionne pas ?????
				// essayer avec les racines carrées 
				clearInterval(scrollInertie); 
				scrollInertie = setInterval( function () {
					speed = Math.floor(( speed * 0.9 ) * 100) / 100;
					container.scrollLeft = container.scrollLeft - speed; 
					if (Math.abs(speed) < 0.6) {
						clearInterval(scrollInertie);
					}   
				}, 10);
			}

			container.addEventListener('mousedown', (e) => {
				isDown = true;
				container.classList.add('active');
				startX = e.pageX - container.offsetLeft;
				scrollLeft = container.scrollLeft;
			});
			container.addEventListener('mouseleave', () => {
				isDown = false;
				container.classList.remove('active');
			});
			container.addEventListener('mouseup', () => {
				isDown = false;
				container.classList.remove('active');
				afterDragInertie(speedX);
			});
			container.addEventListener('mousemove', (e) => {
				if(isDown) {
					e.preventDefault();
					const x = e.pageX - container.offsetLeft;
					const walk = (x - startX) * 1; //increase scroll-speed
					container.scrollLeft = scrollLeft - walk;
					speedX = e.movementX;
				}
			});
		},
		calculateImageHeight: function () {
			this.$nextTick(() => {
				this.imageHeight = this.$refs.parallaxImg.clientHeight;
				this.parallaxImage();
			});
		},
		parallaxImage: function () {
			if (parallax) {
				parallax.kill();
			}
			this.diplacement = -this.imageHeight * 0.1;
			console.log('diplacement = ' + this.diplacement);
			let parallax = gsap.timeline({
				scrollTrigger: {
					scrub: true,
					trigger: '.grid-style1.collections .img-wrap',
					start:"top bottom",
					end:'bottom top',
				},
			});
			parallax.to('.grid-style1.collections img', {y: this.diplacement});

		},
	},
}
</script>

<template>
	<section>
		<div id='collections'>
			<h2 class='first-title'>Collections</h2>
			<div ref='scrollWrap1' class='scroll-wrap'>
				<ul>
					<li>
						<div class="img-wrap">
							<img src="@/assets/img/cwmat-720x900.jpg">
						</div>
						<div>
							<h3>Creative Wallcoverings</h3>
							<hr>
							<p>The Wallpaper for Interior Design</p>
						</div>
					</li>
					<li>
						<div class="img-wrap">
							<img src="@/assets/img/MUSA-GLF481A_2-720x900.jpg">
						</div>
						<div>
							<h3>GlamFusion™</h3>
							<hr>
							<p>The Waterproof Wallcovering</p>
						</div>
					</li>
					<li>
						<div class="img-wrap">
							<img src="@/assets/img/TEMPS-PERDU-GLPU31A-per-lino-1-720x900.jpg">
						</div>
						<div>
							<h3>Glampure</h3>
							<hr>
							<p>The Organic Wallcovering</p>
						</div>
					</li>
					<li>
						<div class="img-wrap">
							<img src="@/assets/img/TANGLE-GLX811A_2-720x900.jpg">
						</div>
						<div>
							<h3>Discover All</h3>
							<hr>
							<p>Voir tous les produits par style, couleur et matière</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class='grid-style1 collections'>
			<h2 class='vertical-text'>professionals</h2>
			<span class='subtitle'>Collections</span>
			<p>Les collections Glamora associent des sources d’inspiration et des codes artistiques hétérogènes, pour une réinterprétation dans un style contemporain. L'objectif est de donner vie à un design pouvant accentuer aussi bien l’esthétisme que l’utilisation et l’idée du projet.</p>
			<div :style="{ height: 0.9*imageHeight + 'px'}" class='img-wrap'>
				<img ref='parallaxImg' src="@/assets/img/ProfessionalArea_1-2-1710x1140.jpg">
			</div>
		</div>
		<div class='grid-style1 project-partner'>
			<span class='subtitle'>A project Partner</span>
			<p>Les solutions Glamora sont entièrement réalisées sur mesure et pensées pour des espaces au style unique et personnel : elles se distinguent en effet par leur adaptabilité en termes de dimension, de développement graphique et éventuellement de couleur qui s’harmonisent ainsi avec l’environnement et offrent des solutions décoratives exprimant à la perfection l’atmosphère des projets.</p>
			<a class='link-style1' href="">
				<span>Explore</span>
			</a>			
		</div>
		<div id='projects'>
			<h2 class='first-title'>Projets</h2>
			<div ref='scrollWrap2' class='scroll-wrap'>
				<ul>
					<li>
						<div class="img-wrap">
							<img src="https://www.glamora.it/media/LIVING-aspect-ratio-4x5-1-830x1245.jpg">
						</div>
						<div>
							<h3>Living</h3>
							<hr>
						</div>
					</li>
					<li>
						<div class="img-wrap">
							<img src="https://www.glamora.it/media/DINING-aspect-ratio-4x5-1-830x1245.jpg">
						</div>
						<div>
							<h3>Dining</h3>
							<hr>
						</div>
					</li>
					<li>
						<div class="img-wrap">
							<img src="https://www.glamora.it/media/WORKING-3-aspect-ratio-4x5-1-830x1245.jpg">
						</div>
						<div>
							<h3>Working</h3>
							<hr>
						</div>
					</li>
					<li>
						<div class="img-wrap">
							<img src="https://www.glamora.it/media/WET-AREA-1-aspect-ratio-4x5-1-830x1245.jpg">
						</div>
						<div>
							<h3>Wet areas</h3>
							<hr>
						</div>
					</li>
					<li>
						<div class="img-wrap">
							<img src="https://www.glamora.it/media/HOSPITALITY-aspect-ratio-4x5-1-830x1245.jpg">
						</div>
						<div>
							<h3>Hospitality</h3>
							<hr>
						</div>
					</li>
					<li>
						<div class="img-wrap">
							<img src="https://www.glamora.it/media/PUBLIC-aspect-ratio-4x5-1-830x1245.jpg">
						</div>
						<div>
							<h3>Public</h3>
							<hr>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class='grid-style1 projects'>
			<span class='subtitle'>Projects</span>
			<p>Les produits Glamora sont conçus pour des pièces au style unique et personnel. L’adaptabilité complète en termes de dimension, de développement graphique et éventuellement de couleur donne naissance à des solutions décoratives exprimant au mieux l’essence des projets.</p>
			<a class='link-style1' href="">
				<span>More Info</span>
			</a>			
		</div>
	</section>
</template>


<style lang='scss' scoped>

section {

	h2 {
		text-transform: uppercase;
		font-size: 10px;
		font-weight: 600;
		letter-spacing: 0.3em;
		margin-bottom: 25px;

		&.first-title {
			padding-left: 6vw;
		}
	}

	a.link-style1{
		text-transform: uppercase;
		letter-spacing: 4px;
		font-size: 13px;
		font-weight: 600;
	}

	#collections, #projects {
		.scroll-wrap {
			overflow-x: scroll;
			white-space: nowrap;
			cursor: pointer;
			padding-left: 6vw;

			&.active {
				cursor: grab;
			}

			&::-webkit-scrollbar { 
				display: none !important;
			}

			ul {
				width: max-content;
			}

			li {
				width: 420px;
				float: left;
				margin-right: 15px;
			}

			img {
				width: 100%;
				height: auto;
				transform-origin: center;
				transition: all .6s ease-out;
			}

			.img-wrap {
				height: 525px;
				overflow: hidden;
			}

			h3, hr, p {
				text-align: center;
				-webkit-user-select: none; /* Safari */        
				-moz-user-select: none; /* Firefox */
				-ms-user-select: none; /* IE10+/Edge */
				user-select: none; /* Standard */
			} 

			h3 {
				text-transform: uppercase;
				font-size: 13px;
				letter-spacing: 0.25em;
				margin-top: 25px;
				margin-bottom: 6px;
			}

			hr {
				width: 16px;
				border-top-width: 0.3px;
				border-color: black;
				margin: auto;
			}

			p {
				font-weight: 400;
				font-size: 11.5px;
				color: grey;
				margin-top: 8px;
			}
		}

	}


	.grid-style1 {
		margin-top: 50px;
		display: grid;
		grid-template-columns: 1fr 2.7fr 1fr;
		color: black;

		.subtitle {
			grid-column: 2;
			text-transform: uppercase;
			font-size: 23px;
			font-weight: 700;
			line-height: 1;
			letter-spacing: 0.1em;
		}
		p {
			grid-column: 2;
			text-align: left;
			font-weight: 400;
			font-size: 14.5px;
			line-height: 1.72;
			padding: 24px 0;
		}
		&.collections {
			p {
				margin-bottom: 10vh;
			}
			.img-wrap {
				grid-column: 1/3;
				grid-row: 3;
				height: 90vh;
				overflow: hidden;

				img {
					width: 100%;
				}		
			}
			.vertical-text {
				grid-column: 3;
				grid-row : 3;
				writing-mode: vertical-lr;
				text-orientation: sideways;
				text-align: center;
				padding-left: 15px;
			}
		}
		&.project-partner, &.projects {
			a {
				grid-column: 2;
				text-transform: uppercase;

				span {
					display: inline-flex;
					align-items: center;

					&::before {
						content: '';
						width: 32px;
						margin-right: 16px;
						height: 1px;
						background-color: black;
						transition: width .2s ease-out;
					}
				}
				&:hover {
					span::before {
						width: 50px;
					}
				}
			}
		}
	}
}
</style>