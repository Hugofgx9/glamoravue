<script>
import NavBar from '@/views/NavBar.vue';
import Footer from '@/views/Footer.vue';
import ThisIsCopy from '@/components/ThisIsCopy.vue';

export default { 
	name: "App",
	components: {
		NavBar,
		Footer,
		ThisIsCopy,
	},
	data () {
		return {
			isThisIsCopyVisible: true,
		}
	},
	methods: {
		hideThisIsCopy () {
			this.isThisIsCopyVisible = false;
			this.$refs.navBar.navEnter();
		}

	}
}
</script>

<template>
	<div id="app">
		<ThisIsCopy v-show='isThisIsCopyVisible' @close='hideThisIsCopy'/>
		<div class='overlay'>
		</div>
		<NavBar ref='navBar'/>
		<router-view/>
		<Footer/>
	</div>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

* {
	margin: 0;
	padding: 0;
}

li {
	list-style: none;
}

a{
	text-decoration: none;
	color: black;
}

#app {
	font-family: 'Poppins', sans-serif;
	padding-top: 100px;
	overflow-x: hidden;

	>.overlay {


	}
}

button {
	border: none;
	background-color: transparent;
}

button:focus {
	outline: 0;
}

::selection {
	background-color: #6e84f5;
}


</style>
