<template>
    <div id="app">
        <app-header />
        <router-view></router-view>
        <app-modal-dialog />
        <app-metrics />
    </div>
</template>

<script>
import Index       from './components/pages/Index.vue';
import Quiz        from './components/pages/Quiz.vue';
import QuizResult  from './components/pages/QuizResult.vue';

import Header      from './components/components/Header.vue';
import ApiMetrics  from './components/components/ApiMetrics.vue';
import ModalDialog from './components/components/ModalDialog.vue';
import Page404     from './components/pages/Page404.vue';

export default {
    components: {
        'app-header': Header,
        'app-metrics': ApiMetrics,
        'app-modal-dialog': ModalDialog
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

$path: './assets/fonts/';
@font-face { font-family: 'Roboto-Regular'; src: url($path+'roboto/Roboto-Regular.ttf'); }
@font-face { font-family: 'Roboto-Medium';  src: url($path+'roboto/Roboto-Medium.ttf');  }
@font-face { font-family: 'Roboto-Light';   src: url($path+'roboto/Roboto-Light.ttf');   }
@font-face { font-family: 'PT-Sans-Bold';   src: url($path+'pt-sans/PT-Sans-Bold.ttf');  }
@font-face { font-family: 'Oswald-Bold';    src: url($path+'oswald/Oswald-Bold.ttf');    }

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
    font-size: $fz-large;
}
h2 {
    font-size: $fz-medium;
}
h3 {
    font-size: $fz-basic;
}
.text-header {
    font-weight: normal;
    text-transform: uppercase;
    font-family: $ff-header;
    text-shadow: $text-shadow;  
    font-size: $fz-large;
}
.text-comment {
    font-size: $fz-unaccented;
    color: $c-unaccented;
}
</style>
