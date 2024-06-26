<script>
export default {
  name: "contacts",
};
</script>

<template>
  <div class="contacts">
    <h1>Contatti</h1>
    <section class="contact-info">
      <h2>Informazioni di Contatto</h2>
      <p>
        Per qualsiasi domanda o informazione, puoi contattarci tramite uno dei seguenti metodi. Siamo qui per aiutarti!
      </p>
      <ul>
        <li>
          <strong>Indirizzo:</strong> Via Monte Napoleone, 12, 20121 Milano MI, Italia
        </li>
        <li>
          <strong>Telefono:</strong> +39 02 1234 5678
        </li>
        <li>
          <strong>Email:</strong> supporto@deliveboo.com
        </li>
      </ul>
    </section>
    
  </div>
</template>

<style lang="scss" scoped>
div{
	margin: 40px;
	padding-top: 40px;
}
.contacts {
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
	border: none;

  h1, h2 {
    color: #333;
  }

  h1 {
		color: #FFC108;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }



  ul {
    list-style: none;
    padding: 0;
    
    li {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      
      strong {
        color: #333;
      }
    }
  }

  }
</style>