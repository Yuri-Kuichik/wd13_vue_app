<script>
import BaseLayout from '@/components/BaseLayout.vue';
import PostList from '@/components/PostList.vue';
import VueCalculator from '@/components/VueCalculator.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';

export default {
	components: {
		BaseLayout,
		PostList,
		VueCalculator,
		BaseButton,
		BaseInput
	},

	provide: {
		message: 'привет!'
	},

	data() {
		return {
			counter: '0',
		}
	},

	methods: {
		handleButtonClick(action) {
			if (action === 'increase') {
				this.counter++;
			} else if (action === 'decrease') {
				this.counter--;
			} else if (action === 'reset') {
				this.counter = '0';
			}
		},


	},
}
</script>

<template>
	<BaseLayout>

		<PostList />

		<h2>Counter</h2>
		<div class="counter">
			<BaseButton @click="handleButtonClick('increase')" text-button="increase" />
			<BaseButton @click="handleButtonClick('decrease')" text-button="decrease" />
			<BaseButton @click="handleButtonClick('reset')" text-button="reset" />
			<p>Счетчик: {{ counter }}</p>
		</div>

		<VueCalculator />

		<BaseInput />

		<!-- <div class="d-flex d-flex_jcc">
			<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
		</div> -->
	</BaseLayout>
</template>

<style scoped>
.counter {
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(2, 1fr);
	max-width: 600px;
	padding: 30px;
	background: #f0f0f0;
	margin-bottom: 50px;
}
</style>