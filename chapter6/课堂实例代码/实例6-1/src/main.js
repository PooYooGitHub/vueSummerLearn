import Vue from 'vue'
import App from './App.vue'
// ����·��
import router from "./index.js" ? ?// import router ��router һ��ҪСд�� ��Ҫд��Router, ���� can't match�ı���
new Vue({
        el: '#app',
        router, ?// ע�뵽��ʵ����
        render: h => h(App)
})