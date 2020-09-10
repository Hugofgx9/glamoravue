<script>

export default {
	name: 'ThisIsCopy',
	data () {
		return {

		}
	},
	mounted: function () {

	},
	methods: {
		close () {
			this.$emit('close');
		},
	}
}
	
</script>

<template>
	<div>
		<div class='container'>
			<button id="quite-disclamer" @click='close'>
				<svg  width="24" height="24" viewBox="0 0 32 33">
					<title>Close icon</title> 
					<path fill-rule="evenodd" d="M17.948 16l7.104 7.104a.426.426 0 0 1 .115.315.426.426 0 0 1-.115.315l-1.318 1.318a.426.426 0 0 1-.315.115.426.426 0 0 1-.315-.115L16 17.948l-7.104 7.104a.426.426 0 0 1-.315.115.426.426 0 0 1-.315-.115l-1.318-1.318a.426.426 0 0 1-.115-.315c0-.133.039-.238.115-.315L14.052 16 6.948 8.896a.426.426 0 0 1-.115-.315c0-.134.039-.239.115-.315l1.318-1.318a.426.426 0 0 1 .315-.115c.133 0 .238.039.315.115L16 14.052l7.104-7.104a.426.426 0 0 1 .315-.115c.134 0 .239.039.315.115l1.318 1.318a.426.426 0 0 1 .115.315.426.426 0 0 1-.115.315L17.948 16z" ></path>
				</svg>
			</button>
			<p>
				<span class='heavy-text'>This website is a copy</span>
				of the original Glamora site homepage that I made in order to work on my front skills in vue.
			</p>
			<p class='contact-me'>If you like me work, you can contact me : 
				<span class="heavy-text">hugo.faugeroux@mmibordeaux.com</span> 
			</p>
			<a target="_blank" rel="noopener noreferrer" href="https://www.glamora.it/fr/">Visit the real Website</a>
		</div>
		<div class='overlay'>	
		</div>
	</div>
	
</template>

<style lang="scss" scoped>

.overlay {
	z-index: 999;
	position: fixed;
	top: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(11, 11, 11, 0.85);
}
.container {
	display: flex;
	flex-direction: column;
	width: 600px;
	background-color: #111;
	padding: 24px;
	padding-right: 50px;
	z-index: 1000;
	color: rgba(255, 255, 255, 0.57);
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media (max-width: 767px) {
		width: 80vw;
	}

	button#quite-disclamer {
		position: absolute;
		top: 25px;
		right: 24px;
		height: 24px;
		fill: #ffffff;
		opacity: 0.57;
		transform: scale(0.8);
		transition: all .3s ease-out;
		transform-origin: center;

	}

	button#quite-disclamer:hover {
		opacity: 1;
		transform: rotate(180deg) scale(0.8);
	}


	p{
		font-weight: 300;
		font-size: 14px;

		.heavy-text {
			color: white;
			font-weight: 400;
		}

		&.contact-me {
			padding: 24px 0px;
		}
	}

	a {
		align-self: center;
		padding: 0 24px;
		height: 48px;
		width: fit-content;
		overflow: hidden;
		border: .1px solid rgba(204,204,204,1);
		color: rgba(204,204,204,1);
		text-transform: uppercase;
		font-weight: 300;
		font-size: 13px;
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
			background-color: white;
			transform: scaleX(0) skew(-90deg);
			transform-origin: 0 center;
			z-index: -1;
			transition: all .7s ease;
		}

		&:hover {
			color: black;
			border-color: white;

			&::before {
				transform: scaleX(1);
			}
		}
	}
}
	
</style>