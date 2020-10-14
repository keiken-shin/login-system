<template>
    <div class="front-page flex h-screen">
        <Hero />
		<section class="second">
            <div class="p-6 form-section">
                <section class="form-title">
                    <p class="form-title--pre text-gray-600">Welcome</p>
                    <p class="form-title--heading"><span>Register to</span><span>Assignment Portal</span></p>
                </section>

                <section class="form-register flex-1 mt-6">
                    <form v-on:submit.prevent="register" class="reigster-form"> 
                        <div class="bg-green-500 text-green-900 absolute px-6 py-4 rounded-xl alert-success" id="registerAlert" style="visibility: hidden; top: -120px; right: 20px">Account created successfully!</div> 
                        <p v-if="error" class="alert-danger bg-red-500 text-red-900 rounded-xl px-4 py-2 mb-6">{{errorMsg}}</p>          
                        <div class="form-div">
                            <label for="" class="form-label">Full Name</label>
                            <input type="text" v-model="name" name="name" class="form-elem form-elem--name" data-id="name" autocomplete="off" placeholder="John Doe" required>
                            <span class="note"></span>
                        </div>

                        <div class="form-div">
                            <label for="" class="form-label">Email</label>
                            <input type="text" v-model="email" name="email" class="form-elem form-elem--email" data-id="email" autocomplete="off" placeholder="john.doe@gmail.com" required>
                            <span class="note"></span>
                        </div>
                        
                        <div class="form-div">
                            <label for="" class="form-label">Password <small>(6 characters minimum)</small></label>
                            <input type="password" v-model="password" name="password" class="form-elem form-elem--pass" data-id="pass" autocomplete="off" placeholder="********" minlength="6" required>
                            <span class="note"></span>
                        </div>

                        <div class="form-div">
                            <label for="" class="form-label">Confirm Password</label>
                            <input type="password" v-model="password2" name="password2" class="form-elem form-elem--pass2" data-id="pass" autocomplete="off" placeholder="********" minlength="6" required>
                            <span class="note text-red-700 text-sm" id="confirmPass"></span>
                        </div>

                        <div class="form-div">
                            <label for="" class="form-label">Select user type</label>
                            <select v-model="user_type" name="user_type" class="form-elem form-elem--type" required>
                                <option value="">--select type--</option>
                                <option value="user">User</option>
                                <option value="client">Client</option>
                                <option value="admin">Admin</option>
                            </select>
                            <span class="note"></span>
                        </div>

                        <div class="form-bottom flex items-center justify-between">
                            <button type="submit" class="btn--primary" id="registerBtn">Register</button>
                            <div class="goto-signup">Already have an account? 
                                <router-link to="/login" exact class="text-blue-600">Login</router-link>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
		</section>
	</div>
</template>

<script>
    import { getAPI } from '../axios.api';
    import Hero from '@/components/Hero.vue';

    export default {
        name: "Register",
        components: {
            Hero
        },
        data() {
            return{
                name: '',
                email: '',
                password: '',
                password2: '',
                user_type: '',
                errorMsg: '',
                error: false
            }
        },
        methods: {
            register(){
                const userRegisterData = {
                    'name': this.name,
                    'email': this.email,
                    'password': this.password,
                    'password2': this.password2,
                    'user_type': this.user_type
                }

                if(this.password !== this.password2){
                    return document.querySelector('#confirmPass').textContent = 'Password doesnot match';
                }else{
                    document.querySelector('#confirmPass').textContent = '';
                }

                getAPI.post('/api/account/signup/', userRegisterData, {
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                .then((res) => {
                    const registerAlert = document.querySelector('#registerAlert');
                    registerAlert.style = `
                        visibility: visible;
                        top: 20px;
                    `;
                    setTimeout(() => {
                        this.$router.push({ name: 'Login' });
                    }, 2000)
                })
                .catch(error => {
                    this.error = true;
                    this.errorMsg = error.response.data.error;
                    setTimeout(() => {
                        this.error = false;
                    }, 5000);
                })
            }
        }
    }
</script>

<style scoped>
    .reigster-form{
        width: 400px;
    }

    .form-div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .form-label{
        font-size: .9rem;
        margin-bottom: .25rem;
    }

    .form-elem{
        width: 400px;
        height: 50px;
        background: #Ffffff;
        border: 0;
        border-radius: 17px;
        padding: 0em 1rem;
        outline: none;
    }
</style>