<template>
    <div class="wrapper">
        
        <div class="wrapper-step">
            <div class="step-name">Шаг {{currentNum+1}}</div>
            <div v-for="(item, i) in catalogQuiz" :key="item.name" class="step-wrapper">
                <div class="step-circle" :class="{ active: i<=currentNum }"></div>
                <div class="step-line" v-if="i!==catalogQuiz.length-1"></div>
            </div>
        </div>

        <div class="wrapper-content">

            <div class="wrapper-quiz">
                <div class="header">{{catalogQuiz[currentNum].header}}</div>
                <div class="wrapper-data">

                    <div class="data">
                        <div v-for="item in catalogQuiz[currentNum].data" :key="item.name">
                            <ui-input-radio    v-if="item.type=='radio'"    v-model="stateRadio"    :label="item.name" color="red" :val="item.name" :group="String(currentNum)" />
                            <ui-input-checkbox v-if="item.type=='checkbox'" v-model="stateCheckbox" :label="item.name" color="red" :val="item.name" />
                            <ui-input-text     v-if="item.type=='text'"     v-model="stateText"     :label="item.name" color="red" />
                        </div>
                    </div>
                    
                    <ui-button v-if="currentNum !== catalogQuiz.length-1" color="red" @click.native="nextStep" label="На следующий шаг" />
                    <ui-button v-if="currentNum === catalogQuiz.length-1" color="red" @click.native="getResult" label="Получить результат" />
                </div>
            </div>

            <div class="wrapper-banner">
                <img :src="require('@/assets/quiz/'+catalogQuiz[currentNum].img)" class="main">
                <div class="gift" v-if="storeGift.img.length !== 0">
                    <img :src="require('@/assets/gift/'+storeGift.img)" class="gift">
                    <div>Гарантированный подарок</div>
                    <img src="@/assets/gift/icon1.png" class="icon">
                    <img src="@/assets/gift/icon2.png" class="icon">
                    <div>Бонус - секретный подарок</div>
                </div>
            </div>
        
        </div>
    </div>
</template>

<script>
import json from '@/assets/json/catalog.json';

export default {
    data() {
        return {
            catalogQuiz: null,
            currentNum: 0,
            storeGift: null,

            stateText: '',
            stateRadio: '',
            stateCheckbox: [],
            storeResult: []
        };
    },
    methods: {
        nextStep() {
            if (this.checkResult()) {
                this.pushResult();
                this.currentNum++;
            } else {
                alert('Выберите вариант или заполните поле');
            }
        },
        getResult() {
            if (this.checkResult()) {
                this.pushResult();

                let result = '';
                
                this.storeResult.forEach(function(element, counter) {
                    result += `Вопрос №${counter+1}: ${element.quiz} \n`;
                    
                    if (element.radio.length !== 0) {
                        result += 'Выбранный вариант: '+element.radio+'\n';
                    }
                    if (element.checkbox.length !== 0) {
                        result += 'Несколько выбранных вариантов: '+element.checkbox+'\n';
                    }
                    if (element.text.length !== 0) {
                        result += 'Комментарий: '+element.text+'\n';
                    }
                });

                this.$store.commit('SET_QUIZ', {quiz:result});
                this.$router.push({ name: 'quiz-result' });
            } else {
                alert('Выберите вариант или заполните поле');
            }
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
        },
        checkResult() {
            if ( 
                (this.stateText.length != 0) || 
                (this.stateRadio.length != 0) || 
                (this.stateCheckbox.length != 0) 
            ) {
                return true;
            } else {
                return false;
            }
        }
    },
    created() {
        this.catalogQuiz = json;
        this.storeGift = this.$store.getters.GET_GIFT;
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/_index.scss';

.wrapper {
    padding: $m-large;
    background: $c-light;
}
.wrapper-content {
    display: flex;
    justify-content: center;
}
.wrapper-step {
    $step-size: 20px;
    $step-color: $c-lighten;
    display: flex;
    padding: 20px;
    .step-name {
        flex-shrink: 0;
        font-weight: bold;
        margin-right: $m-normal;
        color: $c-unaccented;
    }
    .step-wrapper {
        display: flex;
        align-items: center;
        .step-circle {
            flex-shrink: 0;
            width: $step-size;
            height: $step-size;
            border: 2px solid #fff;
            background-color: $step-color; 
            border-radius: 50%;
            &.active {
                background-color: transparentize($c-accent, 0.4);
                border: 2px solid #fff;
            }
        }
        .step-line {
            flex-shrink: 0;
            width: $step-size / 1.2;
            height: 2px;
            background-color: $step-color;
        }
    }
}
.wrapper-quiz {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: 800px;
    margin-right: $m-basic;
    box-shadow: $box-shadow;
    background: #fff;
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
.wrapper-banner {
    flex-shrink: 0;
    width: 400px;
    img.main {
        display: block;
        width: 100%;
        min-height: 400px;
        max-height: 500px;
        object-fit: cover;
        object-position: 50% 50%;
        box-shadow: $box-shadow;
    }
    .gift {
        display: flex;
        align-items: center;
        height: 70px;
        margin-top: $m-small;
        padding-right: $m-small;
        background-color: #fff;
        box-shadow: $box-shadow;
        font-size: $fz-small;
        color: $c-accent;
        img.gift, img.icon {
            flex-shrink: 0;
            display: block;
            padding: 0;      
            object-fit: cover;
            object-position: 50% 50%;
        }
        img.gift {
            width: 95px;
            height: 100%;
            margin: 0;
            margin-right: $m-small;
        }
        img.icon {
            width: 30px;
            height: 30px;
            margin: 0 $m-small;
        }
    }
}
label {
    display: block;
    padding: 7px;
    cursor: pointer;
    user-select: none;
}
.component-ui-input-text {
    margin: 10px 15px;
    padding-right: 25px;
}

@media screen and (max-width: 935px) {
    .wrapper-banner {
        display: none;
    }
    .wrapper-quiz {
        margin: 0;
    }
}
@media screen and (max-width: 470px) {
    .wrapper-step {
        display: none;
    }
}
</style>