<template>
  <div class="home">
    <Navigation />
    <section class="flex items-center justify-center p-6 child">
      <Admin v-if="userType === 'admin'" />
      <User v-if="userType === 'user'" />
      <Client v-if="userType === 'client'" />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
  import Navigation from '@/components/Navigation'
  import Admin from '@/components/Admin.comp'
  import User from '@/components/User.comp'
  import Client from '@/components/Client.comp'
  import { getAPI } from '../axios.api'
  import { mapState } from 'vuex'

  export default {
    name: 'Home',
    components: {
      Navigation,
      Admin,
      User,
      Client
    },
    computed: {
      userType(){
        return this.$store.state.userType
      }
    },
    created() {
      const userData = {
				'email': this.$store.state.email,
			}
      getAPI.post('/api/account/usertype/', userData, {
        headers: {
          'Authorization': `Bearer ${this.$store.state.accessToken}`,
        }
      })
      .then(res => {
        this.$store.state.userType = res.data.type;
      })
      .catch(err => console.error(err))
    }
  }
</script>

<style scoped>
  .home{
    width: 100%;
    height: calc(100vh);
    background-color: #f7f7f7;
  }

  .child{
    height: calc(100vh - 5rem);
  }
</style>