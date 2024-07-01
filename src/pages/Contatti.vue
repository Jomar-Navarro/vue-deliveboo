<script>
import Loader from "@/components/partials/Loader.vue";

export default {
	name: "contacts",

	components: {
		Loader,
	},

	data() {
		return {
			isLoading: false,
		};
	},
};
</script>

<template>
	<div class="container_c">

	<Loader v-if="isLoading" />
	<div class="container pt-5" v-else>
		<div class="contacts mt-5 pt-5">
			<div class="my-5">
				<h1>Contatti</h1>
				<section class="contact-info">
					<h2>Informazioni di Contatto</h2>
					<p>
						Per qualsiasi domanda o informazione, puoi contattarci tramite uno
						dei seguenti metodi. Siamo qui per aiutarti!
					</p>
					<ul>
						<li>
							<strong>Indirizzo:</strong> Via Monte Napoleone, 12, 20121 Milano
							MI, Italia
						</li>
						<li><strong>Telefono:</strong> +39 02 1234 5678</li>
						<li><strong>Email:</strong> supporto@deliveboo.com</li>
					</ul>
				</section>
			</div>
		</div>
	</div>
</div>
</template>


<style lang="scss" scoped>

.container_c{
	padding-top: 100px;
	padding-bottom: 50px;
  background-color: #3C0A05;
}

.contacts {
	margin: 0 auto;
	padding: 20px;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: #fff;

	h1,
	h2 {
		color: #333;
	}

	h1 {
		color: #ffc108;
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