<template>
    <div class="wrapper">
        <div class="quiz">
            <div class="header">{{catalogQuiz[currentNum].header}}</div>
            <div class="wrapper-data">
                <div class="data">{{catalogQuiz[currentNum].data}}</div>
                <ui-button v-if="currentNum !== catalogQuiz.length-1" theme="primary" @click.native="nextStep">На следующий шаг</ui-button>
                <ui-button v-if="currentNum === catalogQuiz.length-1" theme="primary" @click.native="finishQuiz">Получить результат</ui-button>
            </div>
        </div>
        <div class="banner"></div>
    </div>
</template>

<script>
import json from '../../assets/json/catalog.json';

// radio
// checkbox
// text

export default {
    data() {
        return {
            catalogQuiz: null,
            currentNum: 0
        };
    },
    methods: {
        nextStep() {
            this.currentNum++;
        },
        finishQuiz() {
            alert('Завершили');
        }
    },
    created() {
        this.catalogQuiz = json;
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
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border: 1px solid;
    margin-right: 30px;
    .header {
        padding: 20px;
        background: silver;
    }
    .wrapper-data {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        .data {
            padding: 20px;
        }
        .ui-btn {
            margin: 10px auto;
        }
    }
}
.banner {
    flex-shrink: 0;
    width: 200px;
    height: 400px;
    border: 1px solid;
}
</style>