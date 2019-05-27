<template>
    <div class="wrapper">
        
        <div class="wrapper-header">
            <h1>Оборудование плазменной резки с повышенной работоспособностью напрямую от производителя!</h1>
            <p class="text">Пройдите тест за 2 минуты и узнайте стоимость вашего станка плазменной резки</p>
        </div>

        <app-carousel-text></app-carousel-text>
        <app-projects-border></app-projects-border>

        <div class="wrapper-button-quiz">
            <router-link :to="{name: 'quiz'}">
                <ui-button theme="primary">Собрать станок сейчас и получить подарок</ui-button>
            </router-link>
            <p class="comment">Тест бесплатный. Данные защищены</p>
        </div>

    </div>
</template>

<script>
import CarouselText from '../components/Index/CarouselText.vue';
import ProjectsBorder from '../components/Index/ProjectsBorder.vue';

export default {
    data () {
        return {
            //
        }
    },
    components: {
        'app-carousel-text': CarouselText,
        'app-projects-border': ProjectsBorder
    }
}
</script>

<style scoped lang="scss">
@import '../../styles/_index.scss';

.wrapper {
    padding: $m-basic;
    background-image: url(../../assets/index/bg-section-1.jpg);
    @include img-cover-top;
    a {
        text-decoration: none; 
    }
}

.wrapper-header {
    h1 {
        text-align: center;
        font-weight: normal;
        margin: $m-large;
        text-transform: uppercase;
        font-family: $ff-header;
        text-shadow: $text-shadow;
    }
    .text {
        text-align: center;
        font-size: $fz-normal;
        font-family: $ff-header;
        text-transform: uppercase;
        text-shadow: $text-shadow;
    }
}

.wrapper-button-quiz {
    .comment {
        margin-top: $m-small;
        font-size: $fz-unaccented;
        color: $c-unaccented;
        text-align: center;
    }
    .ui-btn {
        margin: 10px auto;
    }
}

</style>