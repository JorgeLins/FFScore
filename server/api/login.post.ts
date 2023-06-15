// export default defineEventHandler(async () => {
//     console.log('entrou')
//     // return await useFetch("localhost:8000/sessions")
// })

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const response = $fetch("'https://fakestoreapi.com/products", {method: "POST", body: body})
    return response
})