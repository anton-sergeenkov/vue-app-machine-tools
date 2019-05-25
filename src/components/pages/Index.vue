<template>
    <div class="wrapper">
        <h1>Оборудование плазменной резки с повышенной работоспособностью напрямую от производителя!</h1>
        <p>Пройдите тест за 2 минуты и узнайте стоимость вашего станка плазменной резки</p>
        <app-carousel-text></app-carousel-text>

        <router-link :to="{name: 'quiz'}">
            <v-btn flat>Собрать станок сейчас и получить подарок</v-btn>
        </router-link>

        <p>* Тест бесплатный. Данные защищены</p>
    </div>
</template>

<script>
import IndexCarouselText from '../components/IndexCarouselText.vue';

export default {
    data () {
        return {
            //
        }
    },
    components: {
        'app-carousel-text': IndexCarouselText
    }
}
</script>

<style scoped lang="scss">
@import '../../styles/_index.scss';

.wrapper {
    padding: $padding-basic;
    background-image: url(../../assets/index/bg-section-1.png);
    @include img-cover-center;
}
h1 {
    text-align: center;
    font-weight: normal;
    margin: 50px 0;
}
p {
    text-align: center;
    font-size: $fz-normal;
}
.v-btn {
    background: #1867c0;
    color: white;
    display: block;
    margin: auto;
    text-transform: none;
    text-decoration: none;
}
a {
   text-decoration: none; 
}
</style>