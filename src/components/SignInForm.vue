<template>
	<div class="mb-5">
		<form @submit.prevent="handleSubmit">
			<div class="mb-3">
				<label class="form-label" for="email">Email:</label>
				<input class="form-control" type="email" id="email" v-model="email" required>
			</div>
			<div class="mb-3 position-relative">
				<label class="form-label" for="password">Пароль:</label>
				<input :type="showPassword ? 'text' : 'password'" class="form-control" id="password" v-model="password"
					required>
				<button class="btn btn-secondary position-absolute mt-2 me-2" type="button"
					@click="showPassword = !showPassword">
					<i class="bi bi-eye-fill" v-if="showPassword"></i>
					<i class="bi bi-eye-slash-fill" v-else></i>
				</button>
			</div>

			<button class="btn btn-primary" type="submit" :disabled="!isValidForm">Войти</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: '',
			showPassword: false
		}
	},

	computed: {
		isValidForm() {
			return this.email !== '' && this.password !== '';
		}
	},

	methods: {
		handleSubmit() {
			if (this.isValidForm) {
				console.log({
					email: this.email,
					password: this.password
				})
				this.email = ''
				this.password = ''
			}
		}
	}
}
</script>

<style scoped>
.position-absolute {
	top: 26px;
	right: -7px;
}
</style>
