<!--
 * @Author: your name
 * @Date: 2020-12-10 10:18:57
 * @LastEditTime: 2020-12-10 13:47:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /SamSung/src/components/echarts/line.vue
-->
<template>
  <div class="Echarts">
    <div id="main" style="width: 800px;height:300px;"></div>
  </div>
</template>

<script>
export default {
    name: 'Echarts',
    mounted() {
        this.$nextTick(() => {
            this.myEcharts()
            // alert('2')
        })
    },
    methods: {
        myEcharts() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('main'))
            // 指定图表的配置项和数据
            var option = {
                tooltip: {
                    show: true,
                    borderColor: '#333',
                    backgroundColor: '#333',
                    position: 'top',
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (param) {
                        console.log(param)
                        return '2020/10/' + param.name + '<br/>当前收益 ' + param.value
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 132 ],
                    type: 'line',
                    color: '#c23531' // 折线的颜色
                }]
            }
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option)
        }
    }

}
</script>

<style>

</style>
