<template>
    <div class="section-gift wrapper">
        <div class="header text-header">Выберите <span>подарок*</span> <br> за прохождение теста</div>
        <div class="comment text-comment">Нажмите "Выбрать" на понравившийся лот</div>

        <div class="gifts">
            <div v-for="item in gifts" :key="item.name" class="gift" @click="getGift(item.name, item.img)">
                <div v-html="item.name" class="gift-header"></div>
                <div v-html="item.description" class="gift-description"></div>
                <img :src="require('@/assets/gift/'+item.img)">

                <slot v-if="checkGift(item.name)">
                    <ui-button label="Выбрано" block style="background-color: rgba(255, 10, 10, 0.3)" />
                </slot>
                <slot v-else>
                    <ui-button label="Выбрать" block />
                </slot>
            </div>
        </div>
        
        <div class="gift-check" v-if="giftCheck.length !== 0">
            <div class="header">Вы выбрали подарок:</div>
            <div v-html="giftCheck" class="name"></div>
        
            <router-link :to="{name: 'quiz'}">
                <ui-button label="Получить подарок" color="red" />
            </router-link>

            <div class="comment text-comment">Ответив на 7 вопросов</div>
            <div class="comment text-comment">Тест бесплатный. Данные защищены</div>

            <div class="footer-comment text-comment">* Прохождение теста дает возможность получить подарки при оплате заказа</div>
            <hr>
            <div class="footer text-comment"><b>Промышленное предприятие "ASTEK"</b> <br> - производим высокоточное промышленное оборудование</div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            gifts: [
                {name: 'Индивидуальный проект',           img: '1.png', description: 'Проектирование вашего станка и визуализация 3D'},
                {name: 'Комплект расходников на 1 месяц', img: '2.png', description: ''},
                {name: 'Доставка бесплатно',              img: '3.png', description: ''},
                {name: 'Отдых на берегу моря',            img: '4.png', description: ''}
            ],
            giftCheck: ''
        }
    },
    methods: {
        getGift(name, img) {
            this.giftCheck = name;
		    this.$store.commit('SET_GIFT', {giftName:name, giftImage:img});
        },
        checkGift(element) {
            if (element == this.giftCheck) {
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/_index.scss';

.section-gift {
    padding: $m-basic;
}
.header {
    margin-top: $m-large;
    text-align: center;
    span {
        color: $c-accent;
    }
}
.comment {
    margin-top: $m-small;
    text-align: center;
}
.gifts {
    display: flex;
    flex-wrap: wrap;
    max-width: 1100px;
    margin: $m-basic auto;
}
.gift {
    @include flex-column(4, 10px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px 10px;
    padding: 20px;
    box-shadow: $box-shadow-color;
    cursor: pointer;
    transition: 0.4s;
    outline: 3px solid transparent;
    &:hover {
        outline: 3px solid transparentize($c-accent, 0.7)
    }
    .gift-header {
        font-family: $ff-header;
        font-size: $fz-normal;
        text-transform: uppercase;
        text-align: center;
    }
    .gift-description {
        margin: $m-normal 0px;
    }
    img {
        display: block;
        flex-shrink: 0;
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: 50% 50%;
    }
    .component-ui-button {
        margin-top: $m-normal;
    }
}
.gift-check {
    text-align: center;
    a {
        text-decoration: none;
    }
    .header {
        font-size: $fz-large;
        font-family: $ff-header;
        text-transform: uppercase;
    }
    .name {
        font-size: $fz-large;
        font-family: $ff-header;
        text-transform: uppercase;
        color: $c-accent;
    }
    .component-ui-button {
        margin: $m-basic auto 0px auto;
        line-height: 1.7;
    }
    .footer-comment {
        margin-top: $m-large * 1.5;
        line-height: 1.7;
    }
    .footer {
        line-height: 1.7;
    }
    hr {
        max-width: 200px;
        height: 1px;
        margin: $m-normal auto;
        border: none;
        background-color: $c-unaccented;
    }
}

@media screen and (max-width: 1150px) {
    .gift {
        @include flex-column(3, 10px);
    }
}
@media screen and (max-width: 935px) {
    .gift {
        @include flex-column(2, 10px);
    }
}
@media screen and (max-width: 640px) {
    .gift {
        @include flex-column(1, 10px);
    }
}
</style>