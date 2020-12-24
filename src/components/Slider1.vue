<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
	name: 'Slider1',
	data () {
		return {
		}
	},
	mounted: function () {
		this.slideShow();
	},
	methods: {
		slideShow: function () {
			const slider = this.$refs.slider;
			const container = slider.children[0].children[0];
			const container2 = slider.children[2].children[0];
			//to select with $refs, I must loop the li, but it mean create data with asset path and type;
			const overlay = slider.getElementsByClassName('overlay');
			const prevBtn = slider.getElementsByClassName('prev')[0];
			const nextBtn = slider.getElementsByClassName('next')[0];
			let btnHover = false;
			let x = 0;
			let y = 0;
			let sliderIndex = 0;
			let newSliderIndex;

			container.style.transform = 'translateX(0)'; //init
			container2.style.transform = 'translateY(0)';
			container.style.transition = container2.style.transition = 'transform .5s';

			function btnIsHover () { //return true if a button is hover 
				let btn = slider.querySelectorAll('.slider-vertical a');
				btn.forEach(function(el) {
					el.addEventListener('mouseover', () => {
						btnHover = true;
					})
					el.addEventListener('mouseout', () => {
						btnHover = false;
					})
				}) 
				return btnHover;
			}

			function changeSliderNumberTo (newNumber) { //change pagination number
				slider.getElementsByClassName('sliderNumber')[0].textContent = newNumber;
			}

			function nextSlide () { //slide to next
				if ( sliderIndex < ( container.querySelectorAll('li').length - 1 )) {
				newSliderIndex = sliderIndex + 1;
				overlay[newSliderIndex].classList.add('active');
				overlay[sliderIndex].classList.remove('active');
				x = 85 * newSliderIndex; //width et height en static, à passer en dynamique??
				y = 150 * newSliderIndex;
				container.style.transform = 'translateX(-' + x + 'vw)';
				container2.style.transform = 'translateY(-' + y + 'px)';
				sliderIndex = newSliderIndex;
				changeSliderNumberTo(sliderIndex + 1);
				}
			}

			function prevSlide () { //slide to previous
				if (sliderIndex > 0) {
				newSliderIndex = sliderIndex - 1;
				overlay[newSliderIndex].classList.add('active');
				overlay[sliderIndex].classList.remove('active');
				x = 85 * newSliderIndex;
				y = 150 * newSliderIndex;
				container.style.transform = 'translateX(-' + x + 'vw)';
				container2.style.transform = 'translateY(-' + y + 'px)';
				sliderIndex = newSliderIndex;
				changeSliderNumberTo(sliderIndex + 1);
				}
			}

			function autoSlide () {
				let i;
				if (!btnIsHover()) {
					if ( sliderIndex >= ( container.querySelectorAll('li').length - 1 )) {
						for (i = 0; i < ( container.querySelectorAll('li').length - 1 ) ; i ++) {
							prevSlide();
						}
					} 
					else {
						nextSlide();
					}
				}
			}

			nextBtn.addEventListener('click', () => {
				nextSlide();
			});
			prevBtn.addEventListener('click', () => {
				prevSlide();
			});

			setInterval(autoSlide,5000); // auto slide each 3s
		},
		enterAnimation: function () {
			let tl = gsap.timeline();
			tl.from('#slider .slider-horizontal', 2, {
				opacity: 0,
			}, '1')
			.from('#slider .slider-vertical', 1, {
				opacity: 0,
				y: 100,
			}, '2');
		},
	}
}

</script>

<template>
	<section ref='slider' id="slider">
		<div class="slider-horizontal">
			<ul>
				<li>
					<div class="wrap">
						<div class='overlay active'></div>
						<video autoplay loop muted>
							<source src="@/assets/video/1868006336.mp4" type="video/mp4">
						</video>							
					</div>
				</li>
				<li>
					<div class="wrap">
						<div class='overlay'></div>
						<img src="@/assets/img/About_1-1-1440x960.jpg">						
					</div>
				</li>
				<li>
					<div class="wrap">
						<div class='overlay'></div>
						<video autoplay loop muted>
							<source src="@/assets/video/1868040663.mp4" type="video/mp4">
						</video>							
					</div>
				</li>
				<li>
					<div class="wrap">
						<div class='overlay'></div>
						<img src="@/assets/img/0_GALLERY-1440x960.jpg">						
					</div>
				</li>
			</ul>		
		</div>
		<div class="slider-navigation">
			<div class='pagination'>
				<span class='sliderNumber'>1</span>
				<span>/4</span>
			</div>
			<div class="arrows">
				<button class="prev">
					<svg width="25" height="24">
						<path d="M9.927 12.344l5.07 4.984c.086.115.2.172.344.172a.534.534 0 0 0 .386-.172l.301-.3a.408.408 0 0 0 .172-.344.534.534 0 0 0-.172-.387L11.645 12l4.383-4.297a.628.628 0 0 0 .129-.387.465.465 0 0 0-.129-.343l-.3-.344a.628.628 0 0 0-.387-.129.465.465 0 0 0-.344.129l-5.07 4.984a.628.628 0 0 0-.13.387c0 .143.044.272.13.387v-.043z"></path>	
					</svg>
				</button>
				<button class="next">
					<svg width="25" height="24">
						<path d="M9.927 12.344l5.07 4.984c.086.115.2.172.344.172a.534.534 0 0 0 .386-.172l.301-.3a.408.408 0 0 0 .172-.344.534.534 0 0 0-.172-.387L11.645 12l4.383-4.297a.628.628 0 0 0 .129-.387.465.465 0 0 0-.129-.343l-.3-.344a.628.628 0 0 0-.387-.129.465.465 0 0 0-.344.129l-5.07 4.984a.628.628 0 0 0-.13.387c0 .143.044.272.13.387v-.043z"></path>	
					</svg>
				</button>
			</div>
		</div>
		<div class="slider-vertical">
			<ul>
				<li>
					<span>Glampure</span>
					<a href="">Discover More</a>
				</li>
				<li>
					<span>Creative Wallcoverings Collection X</span>
					<a href="">Discover More</a>
				</li>
				<li>
					<span>GlamFusion™</span>
					<a href="">Discover More</a>
				</li>				
				<li>
					<span>Le sand-casting de Costantino Nivola</span>
					<a href="">Discover More</a>
				</li>
			</ul>
		</div>
	</section>
</template>

<style lang='scss' scoped>

#slider {
	height: auto;

	.slider-horizontal {
		overflow-x: hidden;

		ul {
			width: max-content;
			padding-left: 10vw;
		}

		li {
			float: left;
			margin-right: 5vw;
		}
	}

	.wrap {
		width: 80vw;
		height: 55vh;
		min-height: 200px;
		overflow: hidden;
		position: relative;

		@media (max-width: 800px) {
			height: 30vh;
			min-height: 20px;
		}

		video, img {
			width: 100%;
			height: auto;
			position: relative;
			top: 50%;
			transform: translateY(-50%);

			@media (max-width: 567px) {
				width: auto;
				height: 100%;
				top: 0;
				left: 50%;
				transform: translateX(-50%);
			}
		}

		.overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 10;
			background-color: rgba(255,255,255,0.5);
			transition: background-color .5s;

			&.active {
				background-color: rgba(255,255,255,0);	
			}

		}
	}

	.slider-navigation {
		margin-top: 20px;
		margin-left: 10vw;
		width: 80vw;
		display: flex;
		justify-content: space-between;

		.arrows {
			button {
				cursor: pointer;
			}

			.next svg {
				transform: rotate(180deg);
			}
		}
	}

	.pagination {
		font-size: 14px;
		font-weight: 300;

		.sliderNumber {
			font-weight: 400;
		}
	}

	.slider-vertical {
		overflow-y: hidden;
		height: 150px;
		width: 60vw;
		margin: auto;

		li {
			height: 150px;
			display: flex;
			justify-content: space-between;

			span {
				text-transform: uppercase;
				font-weight: 500;
				font-size: 23px;
				letter-spacing: 0.1em;
				width: 50%;
				line-height: 95%;
			}
		}

		a {
			padding: 0 48px;
			height: 48px;
			overflow: hidden;
			border: 1px solid rgba(204,204,204,1);
			text-transform: uppercase;
			font-weight: 600;
			font-size: 10px;
			letter-spacing: 0.2em;
			margin-top: 16px;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			transition: all .5s ease;

			&::before {
				content: '';
				overflow: hidden;
				position: absolute;
				top: 0;
				right: -40%;
				left: -40%;
				height: 100%;
				background-color: black;
				transform: scaleX(0) skew(-90deg);
				transform-origin: 0 center;
				z-index: -1;
				transition: all .7s ease;
			}

			&:hover {
				color: white;
				border-color: rgba(0,0,0,1);

				&::before {
					transform: scaleX(1);
				}
			}
		}
	}

	@media (max-width: 767px) {
		.slider-vertical li {
			flex-direction: column;
			justify-content: start;

			span {
				width: 100%;
			}
		}
	}
}

</style>