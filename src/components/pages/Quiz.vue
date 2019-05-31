<template>
    <div class="wrapper">
        {{this.catalog}}
    </div>
</template>

<script>
import json from '../../assets/json/catalog.json';

export default {
    data() {
        return {
            catalog: null
        };
    },
    created() {
        this.catalog = json;
    }
}
</script>

<style scoped lang="scss">
@import '../../styles/_index.scss';

.wrapper {
    padding: $m-basic;
    background: silver;
}
</style>