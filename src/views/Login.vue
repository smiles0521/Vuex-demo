<template>
    <div><span @click="login">登录</span></div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            login(){
                this.$axios.get('/api/data.json')
                    .then(data => {
                        if(data.status == 200){
                            this.$store.dispatch("setUser", true);
                            sessionStorage.setItem("store",JSON.stringify(this.$store.state))
                            console.log(this.$store.state)
                            this.$router.push("/");
                        }
                    })
            }
        }
    }
</script>

<style>
</style>
