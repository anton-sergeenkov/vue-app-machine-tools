<template>
    <div class="wrapper">
        <h1>Оборудование плазменной резки с повышенной работоспособностью напрямую от производителя!</h1>
        <p class="text-test">Пройдите тест за 2 минуты и узнайте стоимость вашего станка плазменной резки</p>
        <app-carousel-text></app-carousel-text>

        <router-link :to="{name: 'quiz'}">
            <ui-button theme="primary">Собрать станок сейчас и получить подарок</ui-button>
        </router-link>

        <p class="text-comment">Тест бесплатный. Данные защищены</p>
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
    padding: $m-basic;
    background-image: url(../../assets/index/bg-section-1.jpg);
    @include img-cover-top;
    a {
        text-decoration: none; 
    }
}
h1 {
    text-align: center;
    font-weight: normal;
    margin: $m-large;
    text-transform: uppercase;
    font-family: $ff-header;
    text-shadow: $text-shadow;
}
.text-test {
    text-align: center;
    font-size: $fz-normal;
    font-family: $ff-header;
    text-transform: uppercase;
    text-shadow: $text-shadow;
}
.text-comment {
    margin-top: $m-small;
    font-size: $fz-unaccented;
    color: $c-unaccented;
    text-align: center;
}


.ui-btn {
    margin: 10px auto;
}

</style>