<template>
  <div id="resumeEditor">
  	<nav>
  	  <ol>
  	  	<li v-for="(item,index) in resume.config" :class="{active:item.field === selected}" @click="selected=item.field">
  	  	  <svg class="icon">
  	  	    <use :xlink:href="`#icon-${item.icon}`"  width="32" height="32"></use>
  	  	  </svg>
  	  	</li>
  	  </ol>
  	</nav>
  	<ol class="panels">
  	  <li v-for="item in resume.config" v-show="item.field === selected">
  	    <div v-if="resume[item.field] instanceof Array">
  	      <div class="subitem" v-for="(subitem,i) in resume[item.field]">
  	        <div class="resumeField" v-for="(value,key) in subitem">
  	          <label>{{key}}:</label>
  	          <input type="text" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`,$event.target.value)">
  	        </div>
  	        <hr/>
  	      </div> 
  	    </div>
  	    <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
  	    	<label>{{key}}</label>
  	    	<input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`,$event.target.value)">
  	    </div>
  	  </li>
  	</ol>
  </div>
</template>

<script>
export default{
  name:'ResumeEditor',
  
  computed:{
    selected:{
      get(){
        return this.$store.state.selected
      },
      set(value){
        return this.$store.commit('switchTab',value)
      }
    },
    resume(){
      return this.$store.state.resume
    }
  },
  methods:{
    changeResumeField(path,value){
      this.$store.commit('updateResume',{
        path,
        value
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  #resumeEditor{
  	background-color:#ffffff;
  	box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
  	display:flex;
  	flex-direction:row;
  	overflow-Y:scroll;
  	>nav{
  	  width:80px;
  	  background-color:#000;
  	  color:#fff;
  	  >ol{
  	  	>li{
  	  	  height:48px;
  	  	  display:flex;
  	  	  justify-content:center;
  	  	  align-items:center;
  	  	  margin:16px 0;
  	  	  &.active{
  	  	  	background-color:#fff;
  	  	  	color:#000;
  	  	  }
	  	  }
	    }
  	}
  	> .panels{
  	  flex-grow:1;
  	  >li{
  	  	padding:24px;
  	  }
  	}
  	svg.icon{
  		width:32px;
  		height:32px;
  		font-weight:bold;
  	}
  }
  ol{
  	list-style-type:none;
  }
  .resumeField{
  	>label{
  	  dsiplay:block;
  	}
  	input[type=text]{
  	  margin:16px 0;
  	  border:1px solid #ddd;
  	  box-shadow:inset 0 1px 3px 0 rgba(0,0,0,0.25);
  	  width:100%;
  	  height:40px;
  	  padding:0 8px;
  	}
  }
  hr{
  	border:none;
  	border-top:2px solid #ccc;
  	margin:24px 0;
  }
  
</style>