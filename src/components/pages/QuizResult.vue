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
            <ui-input-text label="Как к вам обращаться?" color="red" />
            <ui-input-text label="Телефон для консультации" color="red" />
            <ui-input-text label="Электронный ящик для ТКП" color="red" />

            <label>
                <input type="checkbox" checked>
                <span>
                    Отправляя сведения через электронную форму, вы даете согласие на обработку, 
                    сбор, хранение и передачу третьим лицам предоставленной Вами информации на условиях
                    <a href='./server/agreement.pdf' target='_blank'>Политики конфиденциальности</a>
                </span>
            </label>

            <ui-button label="Получить результат" color="red" @click.native="checkQuiz" />
    
        </div>

        <div class="wrapper-img">
            
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            storeGift: null,
            storeQuiz: ''
        };
    },
    methods: {
        checkQuiz() {
            // result += '------------------------------------\n\r\n\r';
            // result += 'Подарок: '+this.storeGift.name;
        },
        sendQuiz(data) {
            axios.post('./server/send-email.php', { quiz: data })
            .then(function(response) {
                console.log(response.data);
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
@import '../../styles/_index.scss';

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
    border: 1px solid #000;
    flex-shrink: 0;
    width: 400px;
}

</style>
