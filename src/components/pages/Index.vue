<template>
    <div>
        <app-index-header />
        <app-index-gift />
    </div>
</template>

<script>
import SectionHeader from '../components/Index/SectionHeader.vue';
import SectionGift from '../components/Index/SectionGift.vue';

export default {
    components: {
        'app-index-header': SectionHeader,
        'app-index-gift': SectionGift
    }
}
</script>

<style scoped lang="scss">
@import '../../styles/_index.scss';
</style>