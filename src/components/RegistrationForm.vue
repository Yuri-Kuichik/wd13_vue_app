<template>
	<div class="mb-5">
		<form>
			<div class="mb-3">
				<label class="form-label" for="username">Логин:</label>
				<input class="form-control" type="text" v-model="username" id="username" required>
			</div>
			<div class="mb-3">
				<label class="form-label" for="email">Email:</label>
				<input class="form-control" type="email" v-model="email" id="email" required>
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
			<div class="mb-3">
				<label class="form-label" for="course_group">Группа:</label>
				<input class="form-control" type="text" v-model="course_group" id="course_group" required>
			</div>
			<button class="btn btn-primary" type="submit" :disabled="!isValidForm">Зарегистрироваться</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: '',
			email: '',
			password: '',
			course_group: '',
			showPassword: false
		}
	},

	methods: {
		handleSubmit() {
			if (this.isValidForm) {
				console.log({
					username: this.username,
					email: this.email,
					password: this.password,
					course_group: this.course_group
				})
				this.username = ''
				this.email = ''
				this.password = ''
				this.course_group = ''
			}
		}
	},

	computed: {
		isValidForm() {
			return this.username !== '' && this.email !== '' && this.password !== '' && this.course_group !== '';
		}
	},
}
</script>

<style scoped>
.position-absolute {
	top: 26px;
	right: -7px;
}
</style>