import Swal from 'sweetalert2'
import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('swal', Swal)
})