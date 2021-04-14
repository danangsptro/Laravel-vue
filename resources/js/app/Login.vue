<template>
    <div>
        <div v-if="loading" class="d-flex justify-content-center mt-5">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div class="login container mt-4" v-else>
            <form class="form" >
                <p>Email :</p>
                <div class="form-group">
                    <input class="form-control" placeholder="Email" v-model="credentials.email">
                </div>
                <p>Password :</p>
                <div class="form-group">
                    <input class="form-control" placeholder="Password" type="password" v-model="credentials.password">
                </div>
                <button class="btn btn-warning" @click.prevent="login">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Login',
    data() {
        return{
            credentials: {
                email: '',
                password: ''
            },
            loading : true,
        }
    },
    mounted() {
        if (this.$store.state.token !== '') {
            axios.post('/api/checkToken', { token : this.$store.state.token })
                .then( response =>{
                    this.loading = false
                    if (response.data.success) {
                        this.$router.push('/dashboard');
                    } else{
                        this.$store.commit('setToken', response.data.token);
                    }
                })
                .catch(e => {
                    this.loading = false;
                })
        }else{
            this.loading = false;
        }
    },
    methods: {
         login() {
             axios.post('/api/login', this.credentials)
                .then(response => {
                    this.$store.commit('setToken', response.data.token)
                    this.$router.push('/dashboard');
                })
                .catch(e =>{
                    console.log('Error!');
                })
         }
    }
}
</script>

<style scoped>
    .login{
        background-color: wheat;
        padding: 2rem;
        border-radius: 2rem;
        width: 500px;
        border: 5px solid rgb(245, 201, 118);
    }
    button{
        margin: 0 auto;
        display: block;
    }
</style>
