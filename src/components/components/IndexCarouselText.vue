<template>
    <div class="wrapper">
        <p>Ответив на вопросы, получите:</p>
        <v-carousel light vertical interval="4000" height="50" hide-controls hide-delimiters>
            <v-carousel-item v-for="(item,i) in items" :key="i">
                <v-responsive>
                    <div class="carousel-text">{{item.title}}</div>
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
@import '../../styles/_index.scss';
p {
    text-align: center;
}
.carousel-text {
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.v-carousel {
    box-shadow: none;
}
</style>