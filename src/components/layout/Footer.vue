<template>
	<v-footer
        dark
        padless
        app
        bottom
        absolute
        inset
        height="200"
    >
    <v-card
	  id="margin"
      flat
      tile
      class="grey darken-3 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. 
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <img src="@/assets/logo/onego_white.png" width="12%" height="12%">
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		data: () => ({
			icons: [
				'mdi-facebook',
				'mdi-twitter',
				'mdi-linkedin',
				'mdi-instagram',
			],
		}),
	})
</script>

<style>
	#margin{
		padding-left:300px;
		padding-right:300px;
	}
  
</style>