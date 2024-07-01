<script>
export default {
  name: "Nostroteam",
  data() {
    return {
      teamMembers: [
        {
          name: "Marco Bianchi",
          role: "Fondatore e CEO",
          bio: "Marco ha fondato Deliveboo con la missione di rivoluzionare l'e-commerce alimentare, unendo la tecnologia all'innovazione nel settore.",
        },
        {
          name: "Linda Verdi",
          role: "Chief Technology Officer",
          bio: "Linda guida lo sviluppo tecnologico di Deliveboo, assicurando una piattaforma robusta e user-friendly per i nostri clienti e ristoranti partner.",
        },
        {
          name: "Giulia Rossi",
          role: "Responsabile Marketing",
          bio: "Giulia è responsabile delle strategie di marketing di Deliveboo, garantendo che la nostra piattaforma raggiunga e soddisfi un vasto pubblico di utenti.",
        }
      ]
    };
  }
};
</script>

<template>
  <div class="container-fluid bg_color">
    <h1>Il nostro team</h1>
    <section class="my-5">
      <div class="row">
        <div class="col-md-4 mb-4" v-for="member in teamMembers" :key="member.name">
          <div class="card">
            
            <div class="card-body">
              <h5 class="card-title">{{ member.name }}</h5>
              <p class="card-text fw-semibold mt-3">{{ member.role }}</p>
              <p class="card-text">{{ member.bio }}</p>
              <div class="social-links">
                <a :href="member.linkedin" class="me-2" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a :href="member.twitter" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.bg_color {
	background: rgb(235,194,44);
	background: radial-gradient(circle, rgba(235,194,44,0.3841911764705882) 0%, rgba(184,42,8,0.05085784313725494) 100%);
}

.container-fluid {
	padding: 100px 10% 50px 10%;
  border-radius: 10px;
}

h1, h5 {
  color: #FFC108;
}

h5 {
  text-align: center;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  color: #666;
}

.social-links {
  margin-top: 10px;
}

.social-links a {
  color: #333;
  font-size: 1.5rem;
}

.social-links a:hover {
  color: #FFC108;
}
</style>
