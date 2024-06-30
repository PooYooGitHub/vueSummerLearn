import axios from "axios"
import CONFIG from "@/config"
import store from "@/store"
import router from "@/router"
import Vue from "vue"

const baseURL = process.env.NODE_ENV === "development" ? CONFIG.baseURL.development : CONFIG.baseURL.product

axios.defaults.withCredentials = true

class HttpRequest {
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    getInsideConfig() {
        return {
            baseURL: this.baseURL,
            method: "get",
        }
    }

    interceptors(instance) {
        instance.interceptors.request.use(config => {
            return config
        })
        instance.interceptors.response.use(res => {
            // 验证401未认证
            if ( res.data.code == 401 && res.config.url != "/user/profile" ) {
                //  未认证
                Vue.prototype.$warning("先登录叭. 😜")
                router.push({name: "index"})
                store.commit("setUser", null)
                store.commit("changeModalStatus", { componentName: "login", visible: true })
            }
            return res.data
        }, err => {
            return {
                code: -999,
                data: null,
                message: "请求失败" + err,
            }
        })
    }

    request(options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance)
        return instance(options)
    }
}

const axiosObj = new HttpRequest(baseURL)
export default axiosObj
