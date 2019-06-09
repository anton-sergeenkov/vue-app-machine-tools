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
                <ui-button v-if="currentNum === catalogQuiz.length-1" color="red" @click.native="getResult" label="Получить результат" />
            </div>
        </div>

        <img :src="require('@/assets/quiz/'+catalogQuiz[currentNum].img)" class="banner">

    </div>
</template>

<script>
import axios from 'axios';
import json from '../../assets/json/catalog.json';

export default {
    data() {
        return {
            catalogQuiz: null,
            currentNum: 0,

            stateText: '',
            stateRadio: '',
            stateCheckbox: [],
            storeResult: []
        };
    },
    methods: {
        nextStep() {
            this.pushResult();
            this.currentNum++;
        },
        getResult() {
            this.pushResult();

            let result = '';
            this.storeResult.forEach(function(element, counter) {
                result += `Вопрос №${counter+1}: ${element.quiz} \n\r`;
                
                if (element.radio.length !== 0) {
                    result += 'Выбранный вариант: '+element.radio+'\n\r';
                }
                if (element.checkbox.length !== 0) {
                    result += 'Несколько выбранных вариантов: '+element.checkbox+'\n\r';
                }
                if (element.text.length !== 0) {
                    result += 'Комментарий: '+element.text+'\n\r';
                }

                result += '\n\r';
            });

            this.sendResult(result);
        },
        sendResult(data) {
            axios.post('./server/send-email.php', { quiz: data })
            .then(function(response) {
                console.log(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        pushResult() {
            this.storeResult.push({
                quiz:     this.catalogQuiz[this.currentNum].header,
                text:     this.stateText,
                radio:    this.stateRadio,
                checkbox: this.stateCheckbox
            });
            this.stateText = '';
            this.stateRadio = '';
            this.stateCheckbox = [];
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