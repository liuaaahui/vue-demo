<template>
  <div class="table">
    <table border="1" class="innertable">
      <tr>
        <th v-for='(item, index) in columnList' :key="index">{{item}}</th>
      </tr>
      <tr v-for='(eachInfor, index) in inforList' :key="index">
        <td v-for='(item, index) in columnList' :key="index">{{eachInfor[item]}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableDemo',
  data () {
    return {
      columnList: ['userId', 'userName', 'userTel', 'userEmail', 'userMessage', 'inTime'],
      inforList: [{'userId': '1', 'userName': '大华', 'userTel': '12345678', 'userEmail': 'xxxxxxx', 'userMessage': 'xxx', 'inTime': '2020-08-30 12:23:13'},
        {'userId': '2', 'userName': '小李', 'userTel': '12345678', 'userEmail': 'xxxxxxx', 'userMessage': 'xxx', 'inTime': '2020-08-30 13:10:08'}
      ]
    }
  }
}
</script>

<style>
.innertable{
    margin:10px auto;
}
</style>
