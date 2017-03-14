<template>
  <div id="resumeEditor">
  	<nav>
  	  <ol>
  	  	<li v-for="(item,index) in resumeConfig" :class="{active:item.field === selected}" @click="selected=item.field">
  	  	  <svg class="icon">
  	  	    <use :xlink:href="`#icon-${item.icon}`"  width="32" height="32"></use>
  	  	  </svg>
  	  	</li>
  	  </ol>
  	</nav>
  	<ol class="panels">
  	  <li v-for="item in resumeConfig" v-show="item.field === selected">
  	    <div v-if="item.type==='array'">
  	      <div class="subitem" v-for="(subitem,i) in resume[item.field]">
            <button class="removeBtn" @click="removeResumeSubfield(item.field,i)">删除</button>
            <h2>{{$t(`resume.${item.field}._`)}}</h2>
  	        <div class="resumeField" v-for="(value,key) in subitem">
  	          <label>{{$t(`resume.${item.field}.${key}`)}}:</label>
  	          <input type="text" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`,$event.target.value)">
  	        </div>
  	        <hr/>
  	      </div> 
          <button class="addBtn" @click="addResumeSubfield(item.field)">新增</button>
  	    </div>
  	    <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
  	    	<label>{{$t(`resume.profile.${key}`)}}</label>
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
    },
    resumeConfig(){
      return this.$store.state.resumeConfig
    }
  },
  methods:{
    changeResumeField(path,value){
      this.$store.commit('updateResume',{
        path,
        value
      })
    },
    addResumeSubfield(field){
      this.$store.commit('addResumeSubfield',{field})
    },
    removeResumeSubfield(field,i){
      this.$store.commit('removeResumeSubfield',{field,i})
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
  .subitem{
    position:relative;
    .removeBtn{
      position:absolute;
      top:0;
      right:0;
      background-color:#4aa6f7;
      width:30%;
      outline:none;
      border-radius:10px;
      cursor:pointer;
    }
    .removeBtn:hover{
      background-color:#dd5044;
    }

  }
  .addBtn{
    background-color:#4aa6f7;
    width:100%;
    border-radius:10px;
    cursor:pointer;
    outline:none;
  }
  .addBtn:hover{
    background-color:#83d048;
  }
  
  
</style>