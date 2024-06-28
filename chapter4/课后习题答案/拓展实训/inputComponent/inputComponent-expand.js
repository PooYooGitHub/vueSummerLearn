//验证输入值是否为数字
function isValueNumber(value) {
    return(/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + '')
}

Vue.component('input-number',{
    template:`
    <div>
        <button :disabled="currentValue<=min" @click="handleDown">-</button>
        <!--在input上绑定一个keydown事件-->
        <input type="text" :value="currentValue" @change="handleChange" @keydown="handleChange2">
        <button :disabled="currentValue>=max" @click="handleUp"> + </button>
    </div>
    `,
    data:function(){
        return{
            currentValue:this.value,
            prop_step:1
        }
    },
    props:{
        max:{
            type:Number,
            default:Infinity
        },
        min:{
            type:Number,
            default:-Infinity
        },
        value:{
            type:Number,
            default:0
        }
    },
    watch:{
        // currentValue变化时，通知父组件的value也变化
        currentValue:function (val) {
            this.$emit('input',val)
            // this.$emit('on-change',val)
        },
        // 父组件value改变时，子组件currentValue也改变
        value:function (val) {
            this.updataValue(val)
        }
    },
    methods:{
        //验证父组件传递过来的初始值
        updataValue(val) {
            if(val > this.max) val = this.max
            if(val < this.min) val = this.min
            this.currentValue = val
        },
        // 点击减号
        handleDown() {
            if(this.currentValue <= this.min) return
            this.currentValue -=this.prop_step
        },
        // 点击加号
        handleUp() {
            if(this.currentValue >= this.max) return
            this.currentValue += this.prop_step
        },
        // 输入框输入值
        handleChange(event) {
            var val = event.target.value.trim()
            var max = this.max
            var min = this.min
            console.log('aaa'+isValueNumber(val))
            if(isValueNumber(val)) {
                val = Number(val)
                if(val > max) {
                    this.currentValue = max
                }
                else if(val < min) {
                    this.currentValue = min
                }else {
                    this.currentValue = val
                }
            }else {
                event.target.value = this.currentValue
            }
        },
        //当聚焦时，按上键加1，按下键减1
        handleChange2(event) {
            if(event.keyCode == '38') {
                this.currentValue ++
            }
            if(event.keyCode == '40') {
                this.currentValue --
            }
        }
    },
    mounted(){
        this.updataValue(this.value)
    }
})