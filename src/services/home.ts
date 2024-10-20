import { http } from "@/utils/http"

export const getHomeBannerAPI = (distributionSite : 1) => {
   return  http({
        url: '/home/banner',
        method: 'GET',
        data: {
            distributionSite
        }
    })
}