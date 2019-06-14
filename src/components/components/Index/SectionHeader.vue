<template>
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
</template>

<script>
import CarouselText from './CarouselText.vue';
import ProjectsSVG from './ProjectsSVG.vue';

export default {
    components: {
        'app-carousel-text': CarouselText,
        'app-projects-svg': ProjectsSVG
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/_index.scss';

.section-header {
    @include img-cover-top;
    padding: $m-basic;
    background-image: url(../../../assets/index/bg-section-1.png);
    a {
        text-decoration: none; 
    }
}
.header {
    h1 {
        margin: $m-large;
        text-align: center;
    }
    .text {
        font-size: $fz-normal;
        font-family: $ff-header;
        text-align: center;
        text-transform: uppercase;
        text-shadow: $text-shadow;
    }
}
.projects {
    display: flex;
    justify-content: center;
    margin: 40px auto;
}
.quiz {
    .comment {
        margin-top: $m-small;
        text-align: center;
    }
    .component-ui-button {
        margin: $m-small auto;
    }
}

@media screen and (max-width: 530px) {
    .header h1 {
        margin-left: $m-small;
        margin-right: $m-small;
    }
}
@media screen and (max-width: 430px) {
    .header .text {
        margin-bottom: $m-large;
    }
}
@media screen and (max-width: 350px) {
    .header h1 {
        font-size: $fz-medium;
        margin-left: $m-smaller;
        margin-right: $m-smaller;
    }
}
</style>