<script>
export default {
  name: "Domandefrequenti",
};
</script>

<template>
  <div class="container-fluid bg_color">
    <h1 class="mb-4">Domande frequenti</h1>
    
    <div class="accordion" id="faqAccordion">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Come posso fare un ordine?
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Per fare un ordine su Deliveboo, visita il nostro sito web o utilizza la nostra app. Sfoglia il menu dei ristoranti disponibili, aggiungi i piatti desiderati al carrello e procedi al checkout. Potrai scegliere il metodo di pagamento preferito e inserire l'indirizzo di consegna.
          </div>
        </div>
      </div>
      
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Quali metodi di pagamento accettate?
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Accettiamo vari metodi di pagamento tra cui carte di credito, carte di debito, PayPal e altri metodi di pagamento digitali. Il pagamento è sicuro e criptato per garantire la tua protezione.
          </div>
        </div>
      </div>
      
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Come posso monitorare il mio ordine?
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Dopo aver completato l'ordine, riceverai un'email di conferma con i dettagli dell'ordine e un link per monitorarlo. Puoi anche seguire lo stato del tuo ordine direttamente sulla nostra app nella sezione "I miei ordini".
          </div>
        </div>
      </div>
      
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Posso modificare o cancellare un ordine dopo averlo effettuato?
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Se desideri modificare o cancellare il tuo ordine, contatta il nostro servizio clienti il prima possibile. Cercheremo di soddisfare la tua richiesta, ma tieni presente che potrebbe non essere possibile se l'ordine è già in fase di preparazione o consegna.
          </div>
        </div>
      </div>
      
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Cosa devo fare se il mio ordine è in ritardo?
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Se il tuo ordine è in ritardo, controlla lo stato dell'ordine attraverso il link di monitoraggio o l'app. In caso di ulteriori ritardi, contatta il nostro servizio clienti per assistenza. Faremo del nostro meglio per risolvere il problema il più rapidamente possibile.
          </div>
        </div>
      </div>
      
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSix">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            Posso richiedere una fattura per il mio ordine?
          </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Sì, puoi richiedere una fattura al momento del checkout selezionando l'opzione "Richiedi fattura" e inserendo i dettagli necessari. La fattura verrà inviata via email dopo la conferma dell'ordine.
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg_color {
	background: rgb(235,194,44);
	background: radial-gradient(circle, rgba(235,194,44,0.3841911764705882) 0%, rgba(184,42,8,0.05085784313725494) 100%);
}

.container-fluid {
	padding: 100px 10% 50px 10%;
}

h1 {
  color: #FFC108;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.accordion-button {
  color: #000000;
}

.accordion-button:focus {
  box-shadow: none;
}

.accordion-body {
  color: #818181;
}
</style>
