<template>
    <div class="wrapper">
        <h1>Оборудование плазменной резки с повышенной работоспособностью напрямую от производителя!</h1>
        <p>Пройдите тест за 2 минуты и узнайте стоимость вашего станка плазменной резки</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            //
        }
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
</style>