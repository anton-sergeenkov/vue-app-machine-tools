<template>
    <div class="wrapper">
        <router-link :to="{name: 'index'}">
            <img src="../../assets/logo.png" class="logo">
        </router-link>
        <div class="name">
            <p>ASTEK</p>
            <p>производитель промышленного оборудования</p>
        </div>
        <div class="phone">
            <a href="tel:88002503860">8-800-250-38-60</a>
        </div>
    </div>
</template>

<script>

export default {
    //
}
</script>

<style scoped lang="scss">
@import '../../styles/_index.scss';

.wrapper {
    display: flex;
    align-items: center;
    padding: 10px;
}
.logo {
    height: 50px;
    margin: 0 $margin-basic;
}
.name {
    width: 200px;
    text-align: center;
    p:first-child {
        margin-bottom: 10px;
        font-weight: bold;
        font-size: $fz-normal;
    }
}
p {
    margin: 0;
}
.phone {
    margin-left: auto;
    margin-right: $margin-basic;
    font-weight: bold;
    font-size: $fz-normal;
    a {
        color: #000;
        text-decoration: none;
    }
}
</style>