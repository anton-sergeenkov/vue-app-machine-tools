<template>
    <div class="section-gift wrapper">
        <div class="header text-header">Выберите <span>подарок*</span> <br> за прохождение теста</div>
        <div class="comment text-comment">Нажмите "Выбрать" на понравившийся лот</div>

        <div class="gifts">
            <div v-for="item in gifts" :key="item.name" class="gift" @click="getGift(item.name)">
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
            <div class="">Вы выбрали подарок:</div>
            <div v-html="giftCheck"></div>
            <ui-button label="Получить подарок" color="red" />
            <div class="comment text-comment">Ответив на 7 вопросов</div>
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
        getGift(element) {
            this.giftCheck = element;
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
@import '../../../styles/_index.scss';

.section-gift {
    padding: $m-basic;
}


.header {
    text-align: center;
    margin-top: $m-large;
    span {
        color: $c-accent;
    }
}
.comment {
    text-align: center;
    margin-top: $m-small;
}
.gifts {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: $m-basic;

    .gift {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 290px;
        padding: 20px;
        margin: 20px 10px;
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
            margin: $m-basic 0px;
        }

        img {
            flex-shrink: 0;
            width: 100%;
            height: 200px;
            display: block;
            object-fit: cover;
            object-position: 50% 50%;
        }

        .component-ui-button {
            margin-top: $m-basic;
        }
    }

}


.gift-check{
    .component-ui-button {
        line-height: 1.7;
        margin: 10px auto;
    }
}


</style>