<script>
export default {
  name: "LavoraConNoi",
  data() {
    return {
      positions: [
        { title: "Consegna a domicilio", description: "Cercasi addetti per la consegna a domicilio nel territorio di Milano." },
        { title: "Cuoco/a per i nostri ristoranti partner", description: "Cercasi cuochi esperti in cucina italiana." },
        { title: "Servizio clienti", description: "Cercasi operatori per il servizio clienti." }
      ],
      form: {
        name: "",
        email: "",
        position: "",
        message: ""
      },
      submitted: false
    };
  },
  methods: {
    submitForm() {
      // Qui puoi aggiungere la logica per inviare il modulo, ad esempio tramite un'API
      this.submitted = true;
      console.log("Form data:", this.form);
    }
  }
};
</script>

<template>
  <div class="container">
    <h1>Lavora con noi</h1>
    <p>
      Unisciti al team di <strong>Deliveboo</strong>! Siamo alla ricerca di persone appassionate e motivate per
      aiutarci a portare il cibo migliore direttamente a casa dei nostri clienti.
    </p>

    <section class="my-5">
      <h2>Posizioni aperte</h2>
      <ul class="list-group">
        <li class="list-group-item" v-for="position in positions" :key="position.title">
          <h3>{{ position.title }}</h3>
          <p>{{ position.description }}</p>
        </li>
      </ul>
    </section>

    <section class="my-5">
      <h2>Invia la tua candidatura</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="name" class="form-label">Nome</label>
          <input type="text" class="form-control" id="name" v-model="form.name" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="form.email" required />
        </div>
        <div class="mb-3">
          <label for="position" class="form-label">Posizione desiderata</label>
          <select class="form-control" id="position" v-model="form.position" required>
            <option value="" disabled>Seleziona una posizione</option>
            <option v-for="position in positions" :key="position.title" :value="position.title">
              {{ position.title }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Messaggio</label>
          <textarea class="form-control" id="message" v-model="form.message" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-success">Invia</button>
      </form>
      <div v-if="submitted" class="alert alert-success mt-3">
        Grazie per aver inviato la tua candidatura! Ti contatteremo a breve.
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1,h2 {
  color: #FFC108;
}

h2 {
  margin-top: 40px;
}

.list-group-item {
  margin-bottom: 10px;
}

.btn-primary {
  background-color: #d9534f;
  border-color: #d9534f;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
</style>