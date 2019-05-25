<template>
    <div id="app">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
import Index      from './components/pages/Index.vue';
import Quiz       from './components/pages/Quiz.vue';
import QuizResult from './components/pages/QuizResult.vue';

import Header     from './components/components/Header.vue';
import Page404    from './components/pages/Page404.vue';

export default {
    components: {
        'app-header': Header
    }
}

export const routes = [
    { path: '/',            component: Index,      name: 'index'       },
    { path: '/quiz',        component: Quiz,       name: 'quiz'        },
    { path: '/quiz-result', component: QuizResult, name: 'quiz-result' },
    { path: '*',            component: Page404,    name: 'page404'     }
]
</script>

<style lang="scss">
@import './styles/_index.scss';
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    font-size: $fz-basic;
    font-family: $ff-basic;
}
.wrapper {
    max-width: 1920px;
    margin: auto;
}
h1 {
    font-size: $fz-h1;
}
h2 {
    font-size: $fz-h2;
}
h3 {
    font-size: $fz-basic;
}
.btn {
    padding: 10px 15px;
    border-radius: 3px;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    display: block;
}
</style>