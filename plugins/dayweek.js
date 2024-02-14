import { getData, setData } from 'nuxt-storage/local-storage';
const daysOfWeek = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
}
export default defineNuxtPlugin(() => {
    return {
        provide: {
            storeByDay: (data, value,dataGot) => {
                const dayOfWeek = new Date().getDay()
                const dayKey = dayOfWeek;
                dataGot[dayKey] = value
                return dataGot;
            },
            getDataStored: (data)=>{return getData(data)}
        }
    }
})
