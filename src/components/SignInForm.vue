<template>
  <div>
  	<form @submit.prevent="signIn">
  	  <div class="row">
  	  	<label>用户名:</label>
  	  	<input type="text" required v-model="formDate.username">
  	  </div>
  	  <div class="row">
  	  	<label>密码：</label>
  	  	<input type="password" required v-model="formDate.password">
  	  </div>
  	  <div class="actions">
        <div class="btn">
          <input type="submit" value="提交">
          <input type="reset" value="重置">
        </div>
  	    <div class="errorMessage">{{errorMessage}}</div>
  	  </div>
  	</form>
  </div>
</template>

<script>
  import AV from "../lib/leancloud"
  import getErrorMessage from '../lib/getErrorMessage'
  import getAVUser from '../lib/getAVUser'

  export default{
  	name:'SignInForm',
  	data(){
  	  return {
  	    formDate:{
  	   	  username:'',
  		    password:''
  	    },
  	    errorMessage:''
  	  }	
  	},
    methods:{
      signIn(){
        let {username,password}=this.formDate
        AV.User.logIn(username,password).then(()=>{
          this.$emit('success',getAVUser())
        },(error)=>{
          this.errorMessage=getErrorMessage(error);
        })
      }
    }
  }
</script>