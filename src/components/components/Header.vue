<template>
    <div class="wrapper">
        <router-link :to="{name: 'index'}">
            <img src="../../assets/logo.png" class="logo">
        </router-link>
        <div class="name">
            <p>Astek</p>
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
    padding: 15px;
}
.logo {
    height: 50px;
    margin: 0 $m-basic;
}
.name {
    width: 250px;
    p:first-child {
        margin-bottom: $m-smaller;
        font-family: $ff-accent;
        font-size: $fz-normal;
        text-transform: uppercase;
    }
    p:last-child {
        font-family: $ff-unaccented;
    }
}
p {
    margin: 0;
}
.phone {
    margin-left: auto;
    margin-right: $m-basic;
    font-size: $fz-normal;
    font-family: $ff-header;
    a {
        color: #000;
        text-decoration: none;
    }
}
</style>