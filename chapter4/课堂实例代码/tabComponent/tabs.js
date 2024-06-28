Vue.component('tabs',{
    template:`
    <div class="tabs">
        <div class="tabs-bar">
            <!--标签标题-->
            <div :class="tabCls(item)" v-for="(item,index) in navList" @click="handleChange(index)">{{item.label}}</div>
        </div>
        <div class="tabs-content">
        <!--这里的slot用来嵌套pane-->
            <slot></slot>
        </div>
    </div>
    `,
    props:{
        value:{
            type:[String,Number]
        }
    },
    data:function () {
        return{
            navList:[],
            currentValue:this.value
        }
    },
    methods:{
        getTabs(){
            return this.$children.filter((item) => {
                return item.$options.name==='pane'
            })
        },
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
                // 设置当前选中的tab的索引
                if (index===0){
                    if(!this.currentValue){
                        this.currentValue=pane.name||index
                    }
                }
            })
            this.updateStatus()
        },
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
            //触发一个自定义事件，供父级使用
            // this.$emit('on-click',nav.name)
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