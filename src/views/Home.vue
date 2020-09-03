<script>
import Slider1 from '@/components/Slider1.vue';
import CollectionDrag from '@/components/CollectionDrag.vue';
import EventsIncoming from '@/components/EventsIncoming.vue';

export default {
	name: 'Home',
	components: {
		Slider1,
		CollectionDrag,
		EventsIncoming,
	},
	mounted: function () {
		this.homeEnter();
	},
	methods: {
		homeEnter: function() {
			this.$refs.slider1.enterAnimation();
		},
	},
}
</script>


<template>
	<div>
		<Slider1 ref='slider1' />
		<CollectionDrag />
		<EventsIncoming />

	</div>
</template>
