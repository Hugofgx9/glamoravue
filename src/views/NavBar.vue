<script>
import ModalMenu from '@/components/ModalMenu.vue';
import ModalSearch from '@/components/ModalSearch.vue';
import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

export default {
	name: 'NavBar',
	components: {
		ModalMenu,
		ModalSearch,
	},
	data () {
		return {
			isMenuVisible: false,
			isSearchVisible: false,

		};
	},
	mounted: function () {
		this.navEnter();
	},

	methods: {
		showMenu () {
			this.isMenuVisible = true;
		},
		hideMenu () {
			this.isMenuVisible = false;
		},

		menuEnter: function (el, done) {
			this.$refs.modalMenu.enterAnimation();
			done();
		},
		menuLeave: function (el, done) {
			this.$refs.modalMenu.leaveAnimation();
			done();
		},
		showSearch () {
			this.isSearchVisible = true;
		},
		hideSearch () {
			this.isSearchVisible = false;
		},

		searchEnter: function (el, done) {
			this.$refs.modalSearch.enterAnimation();
			done();
		},
		searchLeave: function (el, done) {
			this.$refs.modalSearch.leaveAnimation();
			done();
		},

		navEnter: function () {
			let tl = gsap.timeline();
			tl.from('header h1', 1, {
				scale: .8,
				opacity: 0,
			})
			.from('header .leftPart li', {
				opacity: 0,
				x: 80,
				stagger: {
					amount: 0.8,
				},
			}, '.5')
			.from('header .rightPart li', {
				opacity: 0,
				x: -80,
				stagger: {
					amount: 0.8,
					from: 'end',
				},
			}, '<');
		}
	},
};

</script>


<template>
	<div>
		<header>
			<h1><router-link to='/'>Glamora</router-link></h1>
			<ul class="leftPart">
				<li>
					<button id="openModalMenu" @click='showMenu'>
						<svg width="24" height="24" viewBox="0 0 24 24">
							<title>Menu icon</title> 
							<path fill-rule="evenodd" d="M21.367 5.898H2.633c-.057 0-.115-.028-.172-.085-.057-.058-.086-.115-.086-.172V4.609c0-.057.029-.114.086-.171.057-.058.115-.086.172-.086h18.734c.057 0 .115.028.172.086.057.057.086.114.086.171v1.032c0 .057-.029.114-.086.172-.057.057-.115.085-.172.085zm0 6.875H2.633c-.057 0-.115-.028-.172-.086-.057-.057-.086-.114-.086-.171v-1.032c0-.057.029-.114.086-.171.057-.058.115-.086.172-.086h18.734c.057 0 .115.028.172.086.057.057.086.114.086.171v1.032c0 .057-.029.114-.086.171-.057.058-.115.086-.172.086zm0 6.875H2.633c-.057 0-.115-.028-.172-.086-.057-.057-.086-.114-.086-.171v-1.032c0-.057.029-.114.086-.172.057-.057.115-.085.172-.085h18.734c.057 0 .115.028.172.085.057.058.086.115.086.172v1.032c0 .057-.029.114-.086.171-.057.058-.115.086-.172.086z"></path>
						</svg>
					</button>
				</li>
				<li><button @click='showMenu'>Collections</button></li>
				<li><router-link to='bespoke'>Bespoke</router-link></li>
				<li><router-link to='professionals'>Professionals</router-link></li>
			</ul>
			<ul class="rightPart">
				<li>
					<button @click='showSearch'>
						<svg width="24" height="24" viewBox="0 0 24 24">
							<title>Search icon</title> 
							<path fill-rule="evenodd" d="M22.871 21.71c.086.087.129.201.129.345a.628.628 0 0 1-.129.386l-.43.387a.534.534 0 0 1-.386.172.408.408 0 0 1-.344-.172l-5.543-5.543a.408.408 0 0 1-.172-.344v-.43a8.816 8.816 0 0 1-2.771 1.74 8.822 8.822 0 0 1-3.287.624c-1.633 0-3.13-.401-4.49-1.203a9.03 9.03 0 0 1-3.245-3.244C1.401 13.068 1 11.57 1 9.938c0-1.633.401-3.13 1.203-4.49a9.03 9.03 0 0 1 3.244-3.245C6.808 1.401 8.305 1 9.937 1c1.633 0 3.13.401 4.49 1.203a9.03 9.03 0 0 1 3.245 3.244c.802 1.361 1.203 2.858 1.203 4.49a8.822 8.822 0 0 1-.623 3.288 8.816 8.816 0 0 1-1.74 2.771h.43c.143 0 .272.057.386.172l5.543 5.543zM9.938 17.5a7.443 7.443 0 0 0 3.802-1.01 7.45 7.45 0 0 0 2.75-2.75 7.443 7.443 0 0 0 1.01-3.802 7.443 7.443 0 0 0-1.01-3.803 7.45 7.45 0 0 0-2.75-2.75 7.443 7.443 0 0 0-3.802-1.01 7.443 7.443 0 0 0-3.803 1.01 7.45 7.45 0 0 0-2.75 2.75 7.443 7.443 0 0 0-1.01 3.803c0 1.375.337 2.642 1.01 3.802a7.45 7.45 0 0 0 2.75 2.75 7.443 7.443 0 0 0 3.803 1.01z"></path>
						</svg>
					</button>
				</li>
				<li>
					<button>
						<svg width="24" height="24" viewBox="0 0 24 24">
							<title>Add favorites icon</title> 
							<path fill-rule="evenodd" d="M16.984 2.031c1.948 0 3.495.566 4.641 1.698 1.146 1.131 1.719 2.685 1.719 4.662 0 1.231-.401 2.492-1.203 3.78a11.048 11.048 0 0 1-1.72 2.106l-7.304 7.262c-.315.286-.687.43-1.117.43-.43 0-.802-.144-1.117-.43l-7.305-7.262a11.228 11.228 0 0 1-1.547-1.847C1.115 11.055.656 9.708.656 8.39c0-1.976.573-3.53 1.719-4.661C3.521 2.597 5.068 2.03 7.015 2.03c1.605 0 3.266.788 4.985 2.364 1.719-1.576 3.38-2.364 4.984-2.364zm2.45 11.301c.744-.716 1.332-1.475 1.761-2.277.516-.946.774-1.834.774-2.664 0-1.576-.437-2.8-1.31-3.674-.875-.874-2.1-1.31-3.675-1.31-.916 0-1.89.357-2.922 1.073-.572.402-1.217.96-1.933 1.676l-.129.13c-.86-.86-1.604-1.505-2.234-1.934-.974-.63-1.891-.946-2.75-.946-1.576 0-2.8.437-3.674 1.31-.874.875-1.31 2.1-1.31 3.675 0 .83.257 1.733.773 2.707a8.56 8.56 0 0 0 1.718 2.191l7.348 7.262c.086.086.172.086.258 0l7.305-7.219z">
							</path>
						</svg>
					</button>
				</li>
			</ul>
		</header>

		<transition 
			v-on:enter='menuEnter'
			v-on:leave='menuLeave'>
			<ModalMenu v-show='isMenuVisible' @close='hideMenu' ref='modalMenu' />
		</transition>

		<transition 
			v-on:enter='searchEnter'
			v-on:leave='searchLeave'>
			<ModalSearch v-show='isSearchVisible' @close='hideSearch' ref='modalSearch' />
		</transition>

	</div>
</template>


<style lang='scss' scoped>

.modal-open{
	overflow: hidden;
	position: fixed;
}

header {
	z-index: 100;
	position: fixed;
	top: 0;
	background-color: white;
	height: 100px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	align-items: center;

	button {
		fill: grey;
		color: grey;
		font-size: 12px;
	}

	a:visited, a:active {
		color: grey;
	}

	a, button {
		transition: all .2s ease-out;
	}

	a:hover, button:hover {
		color: black;
		fill: black;
		cursor: pointer;
	}

	a.router-link-active {
		color: black;
	}

	ul:nth-of-type(1){
		color: grey;
		margin-right: 60px;
		font-weight: 400;
		font-size: 12px;
		grid-row: 1;
		grid-column: 1/5; 
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	h1 {
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.07em;
		font-stretch: 10px;
		grid-column: 6/8;
		text-align: center;
	}

	ul:nth-of-type(2){
		grid-row: 1;
		grid-column: 12/13; 
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}
}	
</style>