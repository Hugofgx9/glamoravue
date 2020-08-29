<script>
import Slider1 from '@/components/Slider1.vue';
import CollectionDrag from '@/components/CollectionDrag.vue';

export default {
	name: 'Home',
	components: {
		Slider1,
		CollectionDrag,
	}
}
</script>


<template>
	<div>
		<Slider1 />
		<CollectionDrag />
	</div>
</template>
