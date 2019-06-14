<template>
    <div class="wrapper">

        <div class="wrapper-data">
            <div class="header">
                Мы взволнованны, подбираем станок и делаем для Вас детальное персональное предложение. 
                Заполните форму и Вы получите
            </div>
            <ul>
                <li><b>Подарок: </b>{{storeGift.name}}</li>
                <li><b>Секретный бонус:</b> Мангал дизайнерской работы</li>
            </ul>

            <ui-input-text v-model="inputContact.name" label="Как к вам обращаться?*" color="red" />
            <ui-input-text v-model="inputContact.phone" label="Телефон для консультации*" color="red" />
            <ui-input-text v-model="inputContact.email" label="Электронный ящик для ТКП*" color="red" />

            <label>
                <input type="checkbox" checked v-model="inputContact.agreement">
                <span>
                    Отправляя сведения через электронную форму, вы даете согласие на обработку, 
                    сбор, хранение и передачу третьим лицам предоставленной Вами информации на условиях
                    <a href='./server/agreement.pdf' target='_blank'>Политики конфиденциальности</a>
                </span>
            </label>

            <ui-button label="Получить результат" color="red" @click.native="checkQuiz" />
        </div>

        <div class="wrapper-img">
            <img src="@/assets/quiz-result/mashine.jpg" class="main">
            <div class="gift" v-if="storeGift.img.length !== 0">
                <img :src="require('@/assets/gift/'+storeGift.img)" class="gift">
                <div>Гарантированный подарок</div>
                <img src="@/assets/gift/icon1.png" class="icon">
                <img src="@/assets/gift/icon2.png" class="icon">
                <div>Бонус - секретный подарок</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            storeGift: null,
            storeQuiz: '',
            inputContact: { name: '', phone: '', email: '', agreement: true }
        };
    },
    methods: {
        checkQuiz() {
            if ( 
                (this.inputContact.name.length !== 0) &&
                (this.inputContact.phone.length !== 0) &&
                (this.inputContact.email.length !== 0) &&
                (this.inputContact.agreement !== false)
            ) {
                let splitter = '------------------------------------\n';
                let result =  
                    this.storeQuiz + splitter + 
                    'Подарок: ' + this.storeGift.name + '\n'+splitter + 
                    'Имя: '     + this.inputContact.name + '\n' +  
                    'Телефон: ' + this.inputContact.phone + '\n' +  
                    'E-mail: '  + this.inputContact.email;
                this.sendQuiz(result);
            } else {
                alert('Заполните все поля!');
            }
        },
        sendQuiz(data) {
            axios.post('./server/send-email.php', { quiz: data })
            .then(function(response) {
                alert('Спасибо за заявку!');
            })
            .catch(function(error) {
                console.log(error);
            });
        },
    },
    created() {
        this.storeGift = this.$store.getters.GET_GIFT;
        this.storeQuiz = this.$store.getters.GET_QUIZ;
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/_index.scss';

.wrapper {
    display: flex;
    justify-content: center;
    padding: $m-biggest $m-large;
    background: $c-light;
}
.wrapper-data {
    flex-grow: 1;
    max-width: 500px;
    margin-right: $m-large;
    .header {
        margin-bottom: $m-basic;
        font-family: $ff-accent;
        font-size: $fz-medium;
        line-height: 1.6;
    }
    li {
        margin: $m-small 0px;
    }
    .component-ui-input-text {
        margin-top: $m-basic;
    }
    label {
        display: block;
        margin: $m-basic 0px;
        color: $c-unaccented;
        font-size: $fz-small;
        a {
            color: #000;
        }
    }
}

.wrapper-img {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-shrink: 0;
    width: 400px;
    background: #fff;
    box-shadow: $box-shadow;
    
    img.main {
        display: block;
        width: 100%;
        min-height: 400px;
        max-height: 500px;
        object-fit: contain;
        object-position: 50% 50%;
    }
    .gift {
        display: flex;
        align-items: center;
        height: 70px;
        margin-top: $m-small;
        padding-right: $m-small;
        background-color: #fff;
        
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
            margin: 0;
            width: 95px;
            height: 100%;
            margin-right: $m-small;
        }
        img.icon {
            margin: 0 $m-small;
            width: 30px;
            height: 30px;
        }
    }
}
</style>
