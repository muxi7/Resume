<template>
  <div class="wrapper" v-show="visible">
    <div class="dialog">
      <header>
        <span>{{title}}</span>
		    <span class="close" @click="close">X</span>
      </header>
      <main>
      	<slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
  export default{
  	name:'MyDialog',
  	props:['title','visible'],
  	methods:{
  		close(){
  			this.$emit('close')
  		}
  	}
  }
</script>

<style scoped lang="scss">
  .wrapper{
  	position:fixed;
  	background:hsla(0,0%,0%,0.25);
  	top:0;
  	left:0;
  	bottom:0;
  	right:0;
  	margin:0;
  	display:flex;
  	justify-content:center;
  	align-items:center;
  }
  .dialog{
  	background:white;
  	min-height:4em;
  	min-width:10em;
  	>header{
      color:white;
  		padding:16px;
      border-bottom:1px solid;
      background-color:#000;
  		display:flex;
  		align-items:center;
      flex-direction:column-reverse;
      >.close{
        align-self:flex-end;
        position:relative;
        top:-14px;
        right:-14px;
        width:24px;
        text-align:center;
        background-color:#eee;
        color:#000;
        border-radius:12px;
        cursor:pointer;
      }
    }
  	>main{
  		padding:16px;
  	}
  }
</style>