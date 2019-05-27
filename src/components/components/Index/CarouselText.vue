<template>
    <div class="wrapper-carousel">
        <p>Ответив на вопросы, получите:</p>
        <v-carousel light vertical interval="4000" height="20" hide-controls hide-delimiters>
            <v-carousel-item v-for="(item,i) in items" :key="i">
                <v-responsive>
                    <div class="text-carousel">&#187; {{item.title}}</div>
                </v-responsive>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { title: 'Стоимость вашего станка' },
                { title: 'Подробное техническое описание' },
                { title: 'Подарки и бонусы до 100 000р.' }
            ]
        }
    },
}
</script>

<style scoped lang="scss">
@import '../../../styles/_index.scss';

.wrapper-carousel {
    width: 550px;
    padding: 20px;
    margin: 20px auto;
    background-image: url(../../../assets/index/main-subtitle.png);
    @include img-contain-top;
    font-size: $fz-normal;
}
p {
    text-align: center;
}
.text-carousel {
	height: 20px;
	display: flex;
	justify-content: center;
    align-items: flex-end;
    font-family: $ff-accent-num;
    text-transform: uppercase;
}
.v-carousel {
    box-shadow: none;
}
</style>