Vue.component('pane',{
    name:'pane',
    template:`
    <div class="pane" v-show="show">
        <slot></slot>
    </div>
    `,
    data:function () {
        return{
            show:true
        }
    },
    props:{
        // 唯一的标志
        name:{
            type:String
        },
        label:{
            type:String,
            default:''
        }
    },
    methods:{
        updateNav(){
            this.$parent.updateNav()
        }
    },
    watch:{
        label:function () {
            this.updateNav()
        }
    },
    mounted(){
        this.updateNav()
    }
})