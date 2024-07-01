<script>
export default {
  name: "Segnalazioni",
  data() {
    return {
      issueType: "",
      description: "",
      orderId: "",
      contactInfo: "",
      issueTypes: [
        "Problemi con l'ordine",
        "Problemi di pagamento",
        "Problemi di consegna",
        "Altro"
      ]
    };
  },
  methods: {
    submitForm() {
      // Invia i dati al server o esegui altre azioni necessarie
      console.log("Tipo di problema:", this.issueType);
      console.log("Descrizione:", this.description);
      console.log("ID dell'ordine:", this.orderId);
      console.log("Informazioni di contatto:", this.contactInfo);
      alert("Segnalazione inviata con successo!");
      // Resetta il form
      this.issueType = "";
      this.description = "";
      this.orderId = "";
      this.contactInfo = "";
    }
  }
};
</script>

<template>
  <div class="container-fluid bg_color">
    <h1>Segnala un problema</h1>
    <form @submit.prevent="submitForm" class="">
      <div class="form-group">
        <label for="issueType">Tipo di problema:</label>
        <select v-model="issueType" id="issueType" class="form-control">
          <option disabled>Seleziona un tipo di problema</option>
          <option v-for="type in issueTypes" :key="type">{{ type }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="description">Descrizione del problema:</label>
        <textarea v-model="description" id="description" class="form-control" rows="4"></textarea>
      </div>

      <div class="form-group">
        <label for="orderId">ID dell'ordine:</label>
        <input v-model="orderId" id="orderId" class="form-control" />
      </div>

      <div class="form-group">
        <label for="contactInfo">Informazioni di contatto (email o telefono):</label>
        <input v-model="contactInfo" id="contactInfo" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary mt-3">Invia Segnalazione</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.bg_color {
	background: rgb(235,194,44);
	background: radial-gradient(circle, rgba(235,194,44,0.3841911764705882) 0%, rgba(184,42,8,0.05085784313725494) 100%);
}

.container-fluid {
	padding: 100px 20% 50px 20%;
}

h1 {
  color: #FFC108;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.form-control {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

.btn-primary {
  background-color: #007bff;
  border: none;
  padding: 0.5rem 1rem;
  color: #fff;
  cursor: pointer;
}
</style>
