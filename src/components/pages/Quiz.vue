<template>
    <div class="wrapper">
        <div class="quiz">
            <div class="header">{{currentQuiz.header}}</div>
            <div class="data">{{currentQuiz.data}}</div>
            <ui-button theme="primary" @click.native="nextStep">Следующий шаг</ui-button>
        </div>
        <div class="banner"></div>
    </div>
</template>

<script>
import json from '../../assets/json/catalog.json';

export default {
    data() {
        return {
            catalog: null,
            currentQuiz: null
        };
    },
    methods: {
        nextStep() {
            alert(1);
        }
    },
    created() {
        this.catalog = json;
        this.currentQuiz = json[0];
    }
}
</script>

<style scoped lang="scss">
@import '../../styles/_index.scss';

.wrapper {
    padding: $m-basic;
    display: flex;
}
.quiz {
    flex-grow: 1;
    border: 1px solid;
    margin-right: 30px;
    .header {
        padding: 20px;
        background: silver;
    }
    .data {
        padding: 20px;
    }
    .ui-btn {
        margin: 10px auto;
    }
}
.banner {
    flex-shrink: 0;
    width: 200px;
    height: 400px;
    border: 1px solid;
}
</style>