import { useMemberStore } from "@/stores"

const memberStore = useMemberStore()  

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor =  {
    //拦截前触发
    invoke(options:UniApp.RequestOptions) {
        if (!options.url.startsWith(baseUrl)) {
            options.url =  baseUrl + options.url
        }
        options.timeout = 10000
        options.header  = {
            ...options.header,
            'source-client': 'miniapp'
        }
        const token = memberStore.profile?.token
        if (token) {
            options.header.Authorization = token
        }
        console.log('请求拦截器', options);
        
    }
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)