<template>
    <div class="wrapper">
        <div class="quiz">
            <div class="header">{{catalogQuiz[currentNum].header}}</div>
            <div class="wrapper-data">
                
                <div class="data">

                    <div v-for="item in catalogQuiz[currentNum].data" :key="item.name">
                        
                        <ui-input-radio    v-if="item.type=='radio'"    v-model="stateRadio"    :label="item.name" color="red" :val="item.name" :group="String(currentNum)"  />
                        <ui-input-checkbox v-if="item.type=='checkbox'" v-model="stateCheckbox" :label="item.name" color="red" :val="item.name" />
                        <ui-input-text     v-if="item.type=='text'"     v-model="stateText"     :label="item.name" color="red" />

                    </div>

                </div>
                
                <ui-button v-if="currentNum !== catalogQuiz.length-1" color="red" @click.native="nextStep" label="На следующий шаг" />
                <ui-button v-if="currentNum === catalogQuiz.length-1" color="red" @click.native="finishQuiz" label="Получить результат" />
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
            currentNum: 0,

            stateText: '',
            stateRadio: '',
            stateCheckbox: []
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
        background: rgb(228, 228, 228);
    }
    .wrapper-data {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        .data {
            padding: 20px;
        }
        .component-ui-button {
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

.component-ui-input-text {
    margin: 10px 15px;
    padding-right: 25px;
}
</style>