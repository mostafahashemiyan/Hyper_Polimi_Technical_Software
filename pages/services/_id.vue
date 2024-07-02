<template>
  <div>
    <h1>services: {{ id }}</h1>
    <!-- Puoi aggiungere ulteriori dettagli utente qui -->
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const id = params.id
    // Puoi fare una chiamata API per ottenere i dettagli dell'utente con l'id
    // const userData = await fetchUserDetails(id)
    return { id }
  }
}
</script>

<style scoped>
/* Aggiungi il tuo stile qui */
</style>