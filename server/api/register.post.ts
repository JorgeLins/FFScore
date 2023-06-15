// export default defineEventHandler(async () => {
//     console.log('entrou')
//     // return await useFetch("localhost:8000/sessions")
// })

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    return `${body}, meus dados`
})