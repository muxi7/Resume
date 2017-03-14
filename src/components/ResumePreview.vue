<template>
  <div id="resumePreview">
  	<section data-name="profile" v-if="resume.profile && resume.profile.name">
      <h2>基本信息</h2>
  		<h3>{{resume.profile.name}}</h3>
  		<h4>{{resume.profile.title}}</h4>
      <small>{{resume.profile.city}}</small>
      <small>{{resume.profile.birthday}}</small>
  	</section>
    <section data-name="workHistory" v-if="resume.workHistory && resume.workHistory.length>0" >
      <h2>工作经历</h2>
      <ol>
        <li v-for="item in resume.workHistory">
          <h3>{{item.company}}</h3>
          <span v-show="item.time">
            {{item.time}}
          </span>
          <span v-show="item.details">
            {{item.details}}
          </span>
        </li>
      </ol>
    </section>
    <section data-name="education" v-if="resume.education && resume.education.length>0">
      <h2>毕业院校</h2>
      <ol>
        <li v-for="item in resume.education">
          <h3>{{item.school}}</h3>
          <p>{{item.time}}</p>
          <p>{{item.details}}</p>
        </li>
      </ol>
    </section>
    <section data-name="projects" v-if="resume.projects && resume.projects.length>0">
      <h2>项目经验</h2>
      <ol>
        <li v-for="item in resume.projects">
          <h3>{{item.name}}</h3>
          <p v-show="item.details">{{item.details}}</p>
        </li>
      </ol>
    </section>
    <section data-name="awards" v-if="resume.awards && resume.awards.length>0">
      <h2>获奖情况</h2>
      <ol>
        <li v-for="item in resume.awards">
          <h3>{{item.name}}</h3>
          <p v-show="item.details">{{item.details}}</p>
        </li>
      </ol>
    </section>
    <section data-name="contacts" v-if="resume.contacts && resume.contacts.length>0">
      <h2>联系方式</h2>
      <table>
        <tr v-for="item in resume.contacts">
          <th>{{item.contact}}</th>
          <td v-show="item.content">{{item.content}}</td>
        </tr>
      </tabel>
    </section>
    <section data-name="others" v-if="resume.others && resume.others.length>0">
      <h2>在线作品</h2>
      <ol v-for="item in resume.others">
        <li>
          <a :href="item.address" target="_block">{{item.name}}</a><br><br>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
export default{
  name:'ResumePreview',
  computed:{
  	resume(){
  		return this.$store.state.resume
  	}
  },
  created(){
    // console.log(this.resume.profile.length)
  }
}
</script>

<style lang="scss">
  #resumePreview{
  	background-color:#ffffff;
  	box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    padding:2em;
    color:#333;
    line-height:1.2em;
    overflow:auto;
  }
  *{
    box-sizing:border-box;
    font-variant:normal;
    font-weight:normal;
  }
  ol{
    list-style:none;
  }
  section+section{
    margin-top:2em;
  }
  p{
    white-space:pre-line;
  }
  section{
    >h2:first-child{
      background:#ddd;
      padding:.2em;
      margin-bottom:.5em;
      border-bottom:2px solid green;
    }
  }
  section[data-name="profile"]{
    >h1{
      margin:.1em 0;
      font-size:4em;
    }
  }
  section[data-name="workHistory"],section[data-name="projects"],section[data-name="awards"]{
    li+li{
      margin-top:1em;
    }
    li{
      >h3{
        border-bottom:1px solid #ddd;
        padding-bottom:.3em;
        margin-bottom:.3em;
      }
    }
  }
  section[data-name="education"]{
    li{
      inline-heigth:1.5;
    }
  }
  section[data-name="contacts"]{
    th{padding-right:1em;font-weight:bold;}
  }
</style>