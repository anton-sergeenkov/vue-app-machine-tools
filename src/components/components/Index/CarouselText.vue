<template>
    <div class="wrapper-carousel">
        <p>Ответив на вопросы, получите:</p>
        <v-carousel light vertical interval="4000" height="20" hide-controls hide-delimiters>
            <v-carousel-item v-for="(item,i) in items" :key="i">
                <v-responsive>
                    <div class="title-carousel">&#187; {{item.title}}</div>
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
@import '@/styles/_index.scss';

.wrapper-carousel {
    @include img-contain-top;
    width: 550px;
    margin: 20px auto;
    padding: 20px;
    background-image: url(../../../assets/index/main-subtitle.png);
    font-size: $fz-normal;
    p {
        text-align: center;
    }
}
.title-carousel {
	display: flex;
	justify-content: center;
    align-items: flex-end;
	height: 20px;
    font-family: $ff-accent-num;
    text-transform: uppercase;
}
.v-carousel {
    box-shadow: none;
}

@media screen and (max-width: 665px) {
    .wrapper-carousel {
        width: 100%;
    }
}
@media screen and (max-width: 430px) {
    .wrapper-carousel {
        display: none;
    }
}
</style>