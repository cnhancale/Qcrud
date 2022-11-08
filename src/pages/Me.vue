<template>
  <q-page class="row justify-center items-center">
    <div class="row flex flex-center" style="margin: 20px 0 20px 0; padding: 0">
      <div v-if="user">
        <p>Bem vindo ao APP q-Crud</p>
<!--        <p>Olá, {{ user.user_metada.name }}  .!</p>-->
      </div>
    </div>

    <div class="row flex flex-center q-col-gutter-sm">
      <div class="col-md-4 col-xs-12 col-sm-6">
        <card-dashboard table="category" label="Categorias" icon="mdi-shape-outline" />
      </div>
      <div class="col-md-4 col-xs-12 col-sm-6">
        <card-dashboard table="product" label="Produtos" icon="mdi-archive" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue'
import useAuthUser from '../composables/UseAuthUser'

export default defineComponent({
  name: 'PageMe',
  // components: {
  //   CardDashboard: defineAsyncComponent(() => import('components/CardDashboard.vue')),
  // },
  setup() {
    const { user } = useAuthUser()

    return {
      user,
    }
  },
})
</script>
