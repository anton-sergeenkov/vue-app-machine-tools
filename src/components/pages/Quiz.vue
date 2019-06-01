<template>
    <div class="wrapper">
        <div class="quiz">
            <div class="header">{{catalogQuiz[currentNum].header}}</div>
            <div class="wrapper-data">
                
                <div class="data">
                    <label v-for="item in catalogQuiz[currentNum].data" :key="item.name">
                        <input :type="item.type" name="quiz">
                        {{item.name}}
                    </label>
                </div>
                
                <ui-button v-if="currentNum !== catalogQuiz.length-1" theme="primary" @click.native="nextStep">На следующий шаг</ui-button>
                <ui-button v-if="currentNum === catalogQuiz.length-1" theme="primary" @click.native="finishQuiz">Получить результат</ui-button>
            </div>
        </div>

        <img :src="require('@/assets/quiz/'+catalogQuiz[currentNum].img)" class="banner">

    </div>
</template>

<script>
import json from '../../assets/json/catalog.json';

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
            alert('Спасибо!');
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
    padding: $m-large;
    display: flex;
    background: $c-light;
    justify-content: center;
}
.quiz {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-right: 30px;
    box-shadow: $box-shadow;
    max-width: 800px;
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
            margin: 20px auto;
        }
    }
}
.banner {
    flex-shrink: 0;
    width: 400px;
    min-height: 400px;
    max-height: 500px;
    display: block;
    object-fit: cover;
    object-position: 50% 50%;
}
label {
    display: block;
    padding: 10px;
    cursor: pointer;
    user-select: none;
}
input[type="text"] {
    padding: 5px;
    border: 1px solid #000;
}
input {
    margin-right: 5px;
}
</style>