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

	<Loader v-if="isLoading" />

	<div class="container-fluid bg_color" v-else>
		<div class="contacts">
			<div class="my-3">
				<h1>Contatti</h1>
				<section class="contact-info">
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
</template>


<style lang="scss" scoped>
.bg_color {
	background: rgb(235, 194, 44);
	background: radial-gradient(circle, rgba(235, 194, 44, 0.3841911764705882) 0%, rgba(184, 42, 8, 0.05085784313725494) 100%);
}

.container-fluid {
	padding: 140px 10% 100px 10%;
}

.contacts {
	margin: 0 auto;
	padding: 20px;

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