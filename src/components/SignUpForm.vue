<template>
  <div>
  	<form @submit.prevent="signUp">
  	  <div class="row">
  	    <label>用户名：</label>
  	    <input type="text" v-model="formDate.username" required>
  	  </div>
  	  <div class="row">
  	  	<label>密码&nbsp;&nbsp;&nbsp;：</label>
  	    <input type="password" v-model="formDate.password" required>
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
  	name:'SignUpForm',
  	data(){
  	  return {
  	  	formDate:{
  	  	  username:'',
  	  	  password:''
  	  	},
  	  	errorMessage:''
  	  }
  	},
  	created(){

  	},
  	methods:{
  	  signUp(){
        let {username,password} = this.formDate
        var user = new AV.User()
        user.setUsername(username)
        user.setPassword(password)
        user.signUp().then(()=>{
          this.$emit('success',getAVUser())
        },(error)=>{
          this.errorMessage=getErrorMessage(error)
        });  
  	  }
  	}
  }

</script>

<style lang="scss">
  .row{
    padding:5px;
    
  }
  .btn{
    padding:10px 0;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    >input{
      margin-right:10px;
      border-radius:8px;
      padding:5px 30px;
      cursor:pointer;
    }
  }
  .errorMessage{
    color:red;
    font-size:12px;
    text-align:center;
  }
</style>