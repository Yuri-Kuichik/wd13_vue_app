## Создаем компонент SignIn

👷🏻 _Задача нормальной сложности_\
📚 _Закрепление материала_

Требуется разработать компонент `SignInForm`


- там должно быть 2 инпута. 1) email: "string" 2) password: "string"
- кнопка с отправкой всех данных в консоль. Все поля обязательны, поэтому если хоть одно поле пустое, кнопка должна быть задизейблена (disabled)

📝 Для решения задачи работайте в файле: `/src/pages/HomePage.vue`.

---

## Создаем компонент Registration

Требуется разработать компонент `RegistrationForm`

- там должно быть 4 инпута. 1) username: "string" 2) email: "string" 3) password: "string" 4) course_group: 0 (здесь будет id нашей группы - 12)
- кнопка с отправкой всех данных в консоль. Все поля обязательны, поэтому если хоть одно поле пустое, кнопка должна быть задизейблена (disabled)
- оба компонента импортировать в HomePage, переключать динамически в `<component :is=""></component>` с помощь табов 'Sign in' and 'Registration'


📝 Для решения задачи работайте в файле: `/src/pages/HomePage.vue`.



## переписываем на компоненты PostsList и PostsListFilter

