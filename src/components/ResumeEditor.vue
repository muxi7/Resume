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
  	      <div class="subitem" v-for="subitem in resume[item.field]">
  	        <div class="resumeField" v-for="(value,key) in subitem">
  	          <label>{{key}}</label>
  	          <input type="text" :value="value">
  	        </div>
  	        <hr/>
  	      </div> 
  	    </div>
  	    <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
  	    	<label>{{key}}</label>
  	    	<input type="text" v-model="resume[item.field][key]">
  	    </div>
  	  </li>
  	</ol>
  </div>
</template>

<script>
export default{
  name:'ResumeEditor',
  data(){
  	return{
  	  selected:'profile',
  	  resume:{
  	  	config:[
  	  	  {field:'profile',icon:'id'},
  	  	  {field:'work history',icon:'work'},
  	  	  {field:'education',icon:'book'},
  	  	  {field:'projects',icon:'heart'},
  	  	  {field:'awards',icon:'cup'},
  	  	  {field:'contacts',icon:'phone'},
  	  	  {field:'others',icon:'add'}
  	  	],
		profile:{
	  	  name:'your name',
	  	  city:'where are you',
	  	  title:'title'
	  	},
		'work history':[
		  {company:'AL',startTime:'2015',endTime:'2016'},
		  {company:'TX',startTime:'2016',endTime:'2017'},
		  {company:'TX',startTime:'2016',endTime:'2017'}
		    
		],
		education:[
 		  {school:'xx大学',time:'2017'},
 		  {school:'xx高中',time:'2013'}
		],
		projects:[
		  {name:'project A',content:'文字'},
		  {name:'project B',content:'文字'}
		],
		awards:[
		  {name:'awards A',content:'文字'},
          {name:'awards B',content:'文字'}
		],
		contacts:[
		  {contact:'phone',content:'13012345678' },
		  {contact:'qq',content:'12345678' }
		],
		others:[
		  {},
		  {}
		],
  	  } 
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