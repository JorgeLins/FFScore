<template>

  <v-card color="#282828" width="660" height="540 " class="px-10 " variant="elevated">
    <v-card-title class="px-0 title-div mt-3">
      <h4 class="">Insira seu email e senha para realizar o Cadastro</h4>
    </v-card-title>
    <div class="inputs-div d-flex flex-column justify-space-evenly ">
      <v-responsive>
        <v-text-field label="Email" hide-details="true" variant="solo" density="comfortable"
                      v-model="userEmail"></v-text-field>
      </v-responsive>

      <v-responsive>

        <v-text-field label="Senha" hide-details="true" variant="solo" type="password" density="comfortable"
                      v-model="userSenha"></v-text-field>
      </v-responsive>

    </div>
    <v-card-actions class="d-flex flex-column">
      <v-btn class="loginButton mb-2" @click="register()">Registrar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
let userEmail = ref("")
let userSenha = ref("")
const {$swal} = useNuxtApp()


async function register(): Promise<void> {
  const router = useRouter();

  await useFetch("http://localhost:8000/users", {
    method: "post", body: {
      email: userEmail.value,
      password: userSenha.value
    },
  }).then(async res => {
    const {data, pending, error, refresh} = res
    if (data.value) {
      console.log('data', data.value)
      await router.push("login")
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
  background: #27AE60;
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
</style>