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

interface ResponseData<T> {
    code: string
    message: string
    data: T
    }
/**
 * 封装请求方法
 * @param UniApp.RequestOptions
 * @returns promise
 */

export const http = <T>(options:UniApp.RequestOptions) => {
    return new Promise<ResponseData<T>>((resolve, reject) => {
        uni.request({
            ...options,
            success: (res) => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data as ResponseData<T>)
                } else if (res.statusCode === 40) { 
                    const memberStore = useMemberStore()
                    memberStore.clearProfile()
                    uni.navigateTo({url:'/pages/login/login'})
                    reject(res.data)
                }else {
                    uni.showToast({
                        title: '请求失败'+ (res.data as ResponseData<T>).message,
                        icon: 'none'
                    })
                    reject(res.data)
                }
            },
            fail: (err) => {
                uni.showToast({
                    title: '服务器连接失败',
                    icon: 'none'
                })
                reject(err)
            }
        })
    })
}