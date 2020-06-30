<template>
    <div class="home">
        home
        <span @click="loginOut">退出登录</span>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        // HelloWorld
    },
    methods: {
        loginOut() {
            this.$store.dispatch('setUser', false);
            sessionStorage.setItem('store', JSON.stringify(this.$store.state));
            console.log(this.$store.state);
            window.location.reload()
        }
    }
};
</script>
