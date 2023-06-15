<template>
  <v-card color="#282828" width="660" height="560 " class="px-10 " variant="elevated">
    <v-card-title class="px-0 title-div mt-3">
      <h4 class="">Insira seu email e senha para realizar login</h4>
    </v-card-title>
    <div class="inputs-div d-flex flex-column justify-space-evenly ">
      <v-responsive>
        <v-text-field label="Email" hide-details="true" variant="solo" density="comfortable"
                      v-model="userEmail"></v-text-field>
      </v-responsive>

      <v-responsive>

        <v-text-field label="Senha" hide-details="true" variant="solo" type="password" density="comfortable"
                      v-model="userSenha"></v-text-field>
        <p class="mt-3">Esqueci a senha</p>
      </v-responsive>

    </div>
    <v-card-actions class="d-flex flex-column">
      <v-btn class="loginButton mb-2" @click="logIn()">Entrar</v-btn>
      <NuxtLink to="/register"> Não possui uma conta? Clique aqui!</NuxtLink>
    </v-card-actions>
  </v-card>


</template>

<script setup lang="ts">
const router = useRouter();
let userEmail = ref("")
let userSenha = ref("")
const {$swal} = useNuxtApp()

async function logIn(): Promise<void> {

  await useFetch("http://localhost:8000/sessions", {
    method: "post", body: {
      email: userEmail.value,
      password: userSenha.value
    },
  }).then(async res => {
    const {data, pending, error, refresh} = res
    if (data.value) {
      console.log('data', data.value)
      await router.push("dashboard")
    } else if (error.value) {
      userEmail.value = ""
      userSenha.value = ""
      $swal.fire({
        title: 'Error!',
        text: 'Login ou senha inválidos, tente novamente',
        icon: 'error',
        confirmButtonText: 'ok'
      })
      console.log('error', error)

    }
  })


}

</script>

<style scoped>
.loginButton {
  background: #920F0F;
  width: 100%;
  color: white;
}

.title-div {
  margin-bottom: 5rem;
}

.inputs-div {
  height: clamp(300px, 300px, 300px)
}

h4 {
  color: white
}

a:link {
  text-decoration: none;
  color: white
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: #9d9b9b;
}

</style>