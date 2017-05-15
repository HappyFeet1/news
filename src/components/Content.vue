<template>
  <div id="content_view">
    <!--新闻列表-->
    <ul class="list">
      <li v-for="(item,index) in content" class="item">

        <router-link :to="'/article/'+item.id">
          <h2> {{item.title}}</h2>
          <p v-html="item.content"></p>
        </router-link>

      </li>
    </ul>
  </div>

</template>
<script>
  export default{
    data(){
      return {
        content: [],
      }
    },
    mounted(){
      this.getContent()
    },
    methods: {
      getContent(){
        this.$http({
            method: 'post',
            url: '/api/json/index.json',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
          }
        ).then((res) => {
//              console.log(res)
          this.content = res.data;
        })
      }
    }
  }
</script>

<style scoped lang="less">
#content_view{
  .list{
    padding: 20px;
    overflow: hidden;
    .item{
      list-style: none;
      margin-top: 20px;
      padding: 10px 4px;
      h2{
        text-align: left;
        margin-bottom: 11px;
        color: black;
        font-size: 16px;
      }
      p{
        font-size: 14px;
      }
    }
  }
}
</style>
