## Переписываем на компоненты Counter

👷🏻 _Задача нормальной сложности_\
📚 _Закрепление материала_

Требуется разработать компонент `BaseButton`

- Единственный входной параметр компонента: `text-button` ('increase'/'decrease'), текст кнопки (строка, по умолчанию 'click me');
- На компонент повесить обработчик события click. Обрабатывается событие в зависимости от назначения кнопки (уменьшить или увеличить)

📝 Для решения задачи работайте в файле: `/src/pages/HomePage.vue`. Там же локально регистрируем компонент `BaseButton`

---

## Переписываем на компоненты Calculator

Требуется разработать компонент `BaseInput`

- повесить на него 'кастомный' обработчик событий и через $emit вызывать его в `BaseInput` и передавать текущее значение value. Или же сложным путем - v-model на компонент
- используем его дважды для получения firstValue and secondValue

Требуется также разработать компонент `CalculatorButton`

- в самом компоненте разместить четыре оператора и подставлять нужный в зависомости от входного параметра operator. Возможные его значения `sum/subtract/multiply/divide` 

<details>
<summary>Подсказка</summary>

На сам компонент `CalculatorButton` можно вешать обработчик события `v-on:click`
</details>

📝 Для решения задачи работайте в файле: `/src/pages/HomePage.vue`. Там же локально регистрируем компоненты `CalculatorButton` и `BaseInput`



## переписываем на компоненты PostsList и PostsListFilter

