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
    resumeConfig:[
      {field:'profile',icon:'id',keys:['name','title','city','birthday']},
      {field:'workHistory',icon:'work',type:'array',keys:['company','time','details']},
      {field:'education',icon:'book',type:'array',keys:['school','time','details']},
      {field:'projects',icon:'heart',type:'array',keys:['name','details']},
      {field:'awards',icon:'cup',type:'array',keys:['name','details']},
      {field:'contacts',icon:'phone',type:'array',keys:['contact','content']},
      {field:'others',icon:'add',type:'array',keys:['name','address']}
    ],
    resume:{
  	  // config:[
  	  //   {field:'profile',icon:'id',key:['name','city','title','birthday']},
  	  //   {field:'workHistory',icon:'work',type:'array',key:['company','time','details']},
  	  //   {field:'education',icon:'book',type:'array',key:['school','time','details']},
  	  //   {field:'projects',icon:'heart',type:'array',key:['name','details']},
  	  //   {field:'awards',icon:'cup',type:'array',key:['name','details']},
  	  //   {field:'contacts',icon:'phone',type:'array',key:['contact','content']},
  	  //   {field:'others',icon:'add',type:'array',key:['content']}
  	  // ]
	   //  profile:{
  	 //    // name:'',
  	 //    // city:'',
  	 //    // title:'',
  	 //    // birthday:''
  	 //  },
	   // 'workHistory':[
  	 //    // {company:'',startTime:'',endTime:''}
	   //  ],
  	 //  education:[
  		//   // {school:'',time:''}
  	 //  ],
  	 //  projects:[
  	 //    // {name:'',content:''}
  	 //  ],
  	 //  awards:[
  	 //    // {name:'',content:''}
  	 //  ],
  	 //  contacts:[
  	 //    // {contact:'',content:'' }
  	 //  ],
  	 //  others:[
  	 //    // {}
  	 //  ]
    }  
  },
  mutations:{
  	initState(state,payload){
      state.resumeConfig.map((item)=>{
        if(item.type==='array'){
          // state.resume[item.field]=[] 

          Vue.set(state.resume,item.field,[])
        }else{
          // state.resume[item.field]={}

          Vue.set(state.resume,item.field,{})
          item.keys.map((key)=>{
            // state.resume[item.field][key]=''

            Vue.set(state.resume[item.field],key,'')
          })
        }
      })
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
  	},
    removeUser(state){
      state.user.id=''
    },
    addResumeSubfield(state,{field}){
      let empty={}
      state.resume[field].push(empty)
      state.resumeConfig.filter((i)=>i.field === field)[0].keys.map((key)=>{
        Vue.set(empty,key,'') 
      }) // 取出resumeConfig中的resumeConfig[field]这组对象，然后对它里面的keys数组进行迭代，将里面的数据放入empty对象中，此时的empty对象在resume这个对象中；
    },
    removeResumeSubfield(state,{field,i}){
      state.resume[field].splice(i,1);
    }
  }
})