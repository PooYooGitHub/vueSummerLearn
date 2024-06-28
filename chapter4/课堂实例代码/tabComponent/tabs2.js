Vue.component('tabs',{
    template:`
    <div class="tabs">
        <div class="tabs-bar">
            <div :class="tabCls(item)" v-for="(item,index) in navList" @click="handleChange(index)">{{item.label}}</div>
        </div>
        <div class="tabs-content">
        <!--这里的slot用来嵌套pane-->
            <slot></slot>
        </div>
    </div>
    `,
    props:{
        //这里的value，主要是为了方便使用v-model
        value:{
            type:[String,Number]
        }
    },
    data:function () {
        return{
            navList:[],
            //因为不能直接修改value，所以存储一份
            currentValue:this.value
        }
    },
    methods:{
        //获取所有pane组件
        getTabs(){
            return this.$children.filter((item) => {
                return item.$options.name==='pane'
            })
        },
        //更新标题
        updateNav(){
            this.navList=[]
            this.getTabs().forEach((pane,index) => {
                this.navList.push({
                    label:pane.label,
                    name:pane.name|| index
                })
                if (!pane.name){
                    pane.name=index
                }
                if (index===0){
                    if(!this.currentValue){
                        this.currentValue=pane.name||index
                    }
                }
            })
            this.updateStatus()
        },
        //显示选中pane组件，隐藏其他组件
        updateStatus(){
            var tabs=this.getTabs()
            tabs.forEach((tab) => {
                return tab.show=tab.name===this.currentValue
            })
        },
        tabCls:function (item) {
            return [
                'tabs-tab',
                {
                    'tabs-tab-active':item.name===this.currentValue
                }
            ]
        },
        handleChange:function (index) {
            var nav=this.navList[index]
            this.currentValue=nav.name
            this.$emit('input',nav.name)
            this.$emit('on-click',nav.name)
        }
    },
    watch:{
        value:function (val) {
            this.currentValue=val
        },
        currentValue:function () {
            this.updateStatus()
        }
    }
})