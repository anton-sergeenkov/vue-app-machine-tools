<template>
    <div class="wrapper">
        <router-link :to="{name: 'index'}">
            <img src="@/assets/img/logo.png" class="logo">
        </router-link>
        <div class="name">
            Производитель промышленного оборудования
        </div>
        <div class="phone">
            <a href="tel:84957906333">8(495)790-63-33</a>
            <p>Сейчас работаем</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/styles/_index.scss';

.wrapper {
    display: flex;
    align-items: center;
    padding: 15px;
}
.logo {
    height: 50px;
    margin: 0 $m-basic;
}
.name {
    width: 250px;
}
p {
    margin: 0;
}
.phone {
    margin-left: auto;
    margin-right: $m-basic;
    a {
        color: #000;
        text-decoration: none;
        font-size: $fz-normal;
        font-family: $ff-header;
    }
    p {
        margin-top: 7px;
        font-size: $fz-unaccented;
        color: $c-accent;
    }
}

@media screen and (max-width: 780px) {
    .name {
        display: none;
    }
}
@media screen and (max-width: 500px) {
    .wrapper {
        flex-direction: column;
    }
    .logo, .phone {
        margin: 0;
    }
    .phone p {
        display: none;
    }
}
</style>