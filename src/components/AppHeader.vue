<template>
	<div class="app-header">
		<BaseLayout class="header-section">
			<img class="logo" src="/src/assets/logo.svg" alt="logo Vue">
			<nav class="d-flex">
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>

			<button class="btn btn-dark" @click="showModal = true">Войти / Зарегистрироваться</button>

			<!-- Для того, чтобы модальное окно всегда было выше других элементов, использован телепорт в body -->
			<teleport to="body">
				<div v-show="showModal" class="modal">
					<div class="modal-content">
						<div class="modal-header">
							<h2>Войти / Зарегистрироваться</h2>
						</div>

						<div class="modal-body">
							<p>Войдите или создайте новый аккаунт</p>

							<ul class="nav nav-pills mb-4">
								<li class="nav-item">
									<button class="nav-link" :class="{ 'active': signState === 'SignIn' }" @click="switchSignState('SignIn')">Вход</button>
								</li>
								<li class="nav-item">
									<button class="nav-link" :class="{ 'active': signState === 'Registration' }"
										@click="switchSignState('Registration')">Регистрация</button>
								</li>
							</ul>

							<component :is="currentState"></component>
						</div>

						<div class="modal-footer">
							<button class="btn" @click="showModal = false">Закрыть</button>
						</div>
					</div>
				</div>
			</teleport>

		</BaseLayout>
	</div>
</template>

<script>
import BaseLayout from './BaseLayout.vue';

import SignInForm from '@/components/SignInForm.vue';
import RegistrationForm from '@/components/RegistrationForm.vue';

export default {
	components: {
		BaseLayout,
		SignInForm,
		RegistrationForm
	},

	data() {
		return {
			showModal: false,
			signState: 'SignIn'
		}
	},

	methods: {
		switchSignState(state) {
			this.signState = state;
		}
	},
	computed: {
		currentState() {
			return this.signState === 'SignIn' ? 'SignInForm' : 'RegistrationForm';
		}
	}
}
</script>

<style scoped>
.app-header {
	background: var(--color-background-header);
}

.header-section {
	display: flex;
	align-items: center;
	padding: 1rem;
}

.logo {
	width: 30px;
	height: auto;
	margin-right: 1rem;
}

nav {
	width: auto;
	font-size: 12px;
	text-align: center;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

.modal {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal-content {
	width: 600px;
	background: #fff;
	padding: 1rem;
	border-radius: 0.5rem;
}

.modal-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.modal-footer {
	display: flex;
	justify-content: flex-end;
}

@media (min-width: 1024px) {
	nav {
		text-align: left;
		font-size: 1rem;
	}
}
</style>
