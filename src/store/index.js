import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:0,
	  selected:'profile',
  	user:{
  	  id:'',
  	  username:''
  	},
    resume:{
  	  config:[
  	    {field:'profile',icon:'id'},
  	    {field:'workHistory',icon:'work'},
  	    {field:'education',icon:'book'},
  	    {field:'projects',icon:'heart'},
  	    {field:'awards',icon:'cup'},
  	    {field:'contacts',icon:'phone'},
  	    {field:'others',icon:'add'}
  	  ],
	    profile:{
  	    name:'zuo',
  	    city:'shenzhen',
  	    title:'To be an interesting person',
  	    birthday:'1990-12-3'
  	  },
	   'workHistory':[
  	    {company:'xxx1公司',startTime:'2015',endTime:'2016'},
  	    {company:'xxx2公司',startTime:'2016',endTime:'2017'}
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
  	  ]
    }  
  },
  mutations:{
  	initState(state,payload){
  	  Object.assign(state,payload) //es6语法，将除state对象的其他对象中的可枚举属性拷贝到state对象中
  	},
	  switchTab(state,payload){
	   state.selected=payload
	   localStorage.setItem('state',JSON.stringify(state))
	  },
	  updateResume(state,{path,value}){
  	  objectPath.set(state.resume,path,value)
  	  localStorage.setItem('state',JSON.stringify(state))
  	},
  	setUser(state,payload){
  	   Object.assign(state.user,payload)
       console.log(state.user)
  	},
    removeUser(state){
      state.user.id=''
    }
  }
})