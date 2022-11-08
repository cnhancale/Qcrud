<template>
  <q-page class="row justify-center items-center">

    <q-card class="card-login" style="width: 90%; max-width: 550px; padding: 20px">
      <q-card-section style="">

        <div class="text-h6 text-center">
          <q-img src="https://unisave.ac.mz/wp-content/uploads/2022/05/unisave.jpg" height="60px" width="60px" />
            <p class="col-12 text-h6 text-danger">Login</p>
        </div>

        <q-form @submit.prevent="handleLogin">
          <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md  q-pt-md">
            <q-input
              outlined
              label="Email"
              type="email"
              v-model="form.email"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório!']" />

            <q-input
              outlined
              label="Senha"
              type="password"
              v-model="form.password"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório!']" />

            <div class="full-width q-pt-md">
              <q-btn label="Autenticar" color="primary" class="full-width"  rounded type="submit" />
            </div>

            <div class="">
              <q-btn label="Criar Conta" color="primary" class="full-width" flat size="sm" to="/register" rounded />
              <q-btn
                label="Esqueceu sua senha?"
                color="primary"
                class="full-width"
                flat
                size="sm"
                to="/forgot-password"
                rounded />
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import useNotify from 'src/composables/UseNotify'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageLogin',

  setup () {
    const router = useRouter()
    //
    const { login, isLoggedIn } = useAuthUser()
    //
    const { notifyError, notifySuccess } = useNotify()

    const form = ref({
      email: '',
      password: ''
    })

    onMounted(() => {
      if (isLoggedIn) {
        router.push({ name: 'me' })
      }
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        notifySuccess('Login successfully!')
        router.push({ name: 'me' })
      } catch (error) {
        // alert(error.message)
        notifyError(error.message)
      }
    }

    return {
      form,
      handleLogin
    }
  }
})
</script>

<style>
/*.body--dark input:-webkit-autofill {*/
/*  -webkit-box-shadow: 0 0 0 30px #327aed inset;*/
/*  box-shadow: 0 0 0 30px #191919 inset;*/
/*  -webkit-text-fill-color: white;*/
/*  border-bottom: 1.5px solid #327aed;*/
/*}*/

/*.body--light input:-webkit-autofill {*/
/*  -webkit-box-shadow: 0 0 0 30px #327aed inset;*/
/*  box-shadow: 0 0 0 30px #d8d8d8 inset;*/
/*  border-bottom: 1.5px solid #327aed;*/
/*}*/

/*.body--dark .card-login {*/
/*  background-color: #327aed;*/
/*}*/

/*.body--light .card-login {*/
/*  background-color: #d8d8d8;*/
/*}*/
</style>
