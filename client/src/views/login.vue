<template lang="pug">
	v-container(grid-list-md text-xs-center)
		v-btn(small color='primary' @click='connecting') BTN
		h1 Wow
</template>


<script>

export default {
	data () {
		return {
			isConnected: false
		}
	},
	sockets: {
		connect(){
			console.log('Socket Connected to server!')
			this.isConnected = true
		}
	},	
	methods: {
		connecting : function (event){
			this.$socket.emit('emit_method', 'wow')
		}
	},
}
</script>

<style lang="stylus">
@import './test'
</style>