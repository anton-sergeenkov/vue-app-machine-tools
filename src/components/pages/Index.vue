<template>
    <div>
        <div class="section-header">
            <div class="header wrapper">
                <h1 class="text-header">Оборудование плазменной резки с повышенной работоспособностью напрямую от производителя!</h1>
                <p class="text">Пройдите тест за 2 минуты и узнайте стоимость вашего станка плазменной резки</p>
            </div>

            <app-carousel-text></app-carousel-text>

            <div class="projects wrapper">
                <app-projects-svg header="1000+" text="Выполненных проектов" />
                <app-projects-svg header="20 лет" text="Опыт производства станков" />
            </div>

            <div class="quiz wrapper">
                <router-link :to="{name: 'quiz'}">
                    <ui-button color="red" label="Собрать станок сейчас и получить подарок" />
                </router-link>
                <p class="comment text-comment">Тест бесплатный. Данные защищены</p>
            </div>
        </div>
        

        <div class="section-gift wrapper">
            <div class="header text-header">Выберите <span>подарок*</span> <br> за прохождение теста</div>
            <div class="comment text-comment">Нажмите "Выбрать" на понравившийся лот</div>

            <div class="gifts">
                <div v-for="item in gifts" :key="item.name" class="gift">
                    <div v-html="item.name" class="gift-header"></div>
                    <div v-html="item.description" class="gift-description"></div>
                    <img :src="require('@/assets/gift/'+item.img)">
                    <ui-button label="Выбрать" block />
                </div>
            </div>

        </div>


    </div>
</template>

<script>
import CarouselText from '../components/Index/CarouselText.vue';
import ProjectsSVG from '../components/Index/ProjectsSVG.vue';

export default {
    data () {
        return {
            gifts: [
                {name: 'Индивидуальный проект',           img: '1.png', description: 'Проектирование вашего станка и визуализация 3D'},
                {name: 'Комплект расходников на 1 месяц', img: '2.png', description: ''},
                {name: 'Доставка бесплатно',              img: '3.png', description: ''},
                {name: 'Отдых на берегу моря',            img: '4.png', description: ''}
            ]
        }
    },
    components: {
        'app-carousel-text': CarouselText,
        'app-projects-svg': ProjectsSVG
    }
}
</script>

<style scoped lang="scss">
@import '../../styles/_index.scss';

.section-header {
    padding: $m-basic;
    background-image: url(../../assets/index/bg-section-1.png);
    @include img-cover-top;
    a {
        text-decoration: none; 
    }
    .header {
        h1 {
            text-align: center;
            margin: $m-large;
        }
        .text {
            text-align: center;
            font-size: $fz-normal;
            font-family: $ff-header;
            text-transform: uppercase;
            text-shadow: $text-shadow;
        }
    }
    .projects {
        display: flex;
        justify-content: center;
        margin: 40px 0px;
    }
    .quiz {
        .comment {
            margin-top: $m-small;
            text-align: center;
        }
        .component-ui-button {
            margin: 10px auto;
        }
    }
}

.section-gift {
    padding: $m-basic;
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
            width: 300px;
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
}
</style>