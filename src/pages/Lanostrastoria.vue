<script>
export default {
	name: "LaNostraStoria",
};
</script>

<template>
	<div class="container-fluid bg_color">

	
		<h1>La nostra storia</h1>
		<section class="mt-5">
			<p>
				<strong>Deliveboo</strong> è nata dalla passione per il buon cibo e
				dalla volontà di portarlo direttamente a casa dei nostri clienti.
				Fondata nel 2021 a Milano, Deliveboo è rapidamente cresciuta
				diventando uno dei servizi di food delivery più amati e affidabili
				della città.
			</p>
			<h2>Le nostre origini</h2>
			<p>
				Tutto è iniziato con un piccolo team di appassionati di cucina e
				tecnologia, che ha deciso di rivoluzionare il modo in cui le persone
				ordinano e ricevono il cibo. Abbiamo iniziato collaborando con pochi
				ristoranti locali, ma grazie alla qualità del servizio e al
				passaparola, siamo cresciuti rapidamente.
			</p>
			<h2>La nostra missione</h2>
			<p>
				La missione di Deliveboo è semplice: offrire un'esperienza di food
				delivery impeccabile, portando i migliori piatti direttamente a casa
				dei nostri clienti. Crediamo che ogni pasto debba essere
				un'occasione speciale e ci impegniamo a garantire la massima qualità
				in ogni consegna.
			</p>
			<h2>I nostri valori</h2>
			<ul>
				<li>
					<strong>Qualità:</strong> Collaboriamo solo con i migliori
					ristoranti e utilizziamo ingredienti freschi e di alta qualità.
				</li>
				<li>
					<strong>Affidabilità:</strong> Garantiamo consegne puntuali e un
					servizio clienti sempre disponibile.
				</li>
				<li>
					<strong>Innovazione:</strong> Utilizziamo la tecnologia per
					migliorare continuamente l'esperienza di ordinazione e consegna.
				</li>
				<li>
					<strong>Sostenibilità:</strong> Ci impegniamo a ridurre il nostro
					impatto ambientale utilizzando imballaggi ecologici e promuovendo
					pratiche sostenibili.
				</li>
			</ul>
			<h2>Guardando al futuro</h2>
			<p>
				Siamo orgogliosi del nostro percorso finora, ma il viaggio è appena
				iniziato. Con l'obiettivo di espanderci in nuove città e continuare
				a migliorare il nostro servizio, Deliveboo è pronta a portare la sua
				passione per il buon cibo a un pubblico ancora più vasto.
			</p>
			<p>
				Grazie per essere parte della nostra storia. Non vediamo l'ora di
				condividere con voi il prossimo capitolo del nostro viaggio.
			</p>
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
}

h1,
h2 {
	color: #ffc108;
}

h2 {
	margin-top: 40px;
}

ul {
	list-style-type: disc;
	margin-left: 20px;
}

li {
	margin-bottom: 10px;
}
</style>
