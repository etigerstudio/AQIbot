
import Locator from './locator';

class Fetcher {
    fetchData(success, failure) {
        //Online Logic
        Locator.getCity((cityResult) => {
            return fetch(this.getURLByCity(cityResult.citycode))
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);

                success({aqi: this.getAQI(responseJson),
                    pollutants: this.getPollutants(responseJson),
                        caption: `${cityResult.city} ${this.getTime()}`,
                        citycode: cityResult.citycode, city: cityResult.city});
            })
            .catch((error) =>{
                failure(error);
            });
        }, (error) => {
            failure(error);
        });

        //Offline Logic
        // Locator.getCity((cityResult) => {
        //     success({aqi: this.getAQI(result),
        //         pollutants: this.getPollutants(result),
        //         caption: `${cityResult.city} ${this.getTime()}`,
        //         citycode: cityResult.citycode, city: cityResult.city});
        // }, (error) => {
        //     failure(error);
        // });

    }

    getURLByCity(city) {
        return `http://www.pm25.in/api/querys/aqi_details.json?token=${token}&city=${city}`;
    }

    getAQI(data) {
        let raw = data.reduce((sum, current) => sum + current[aqi], 0) / data.length;
        let value = raw.toFixed();
        let desc = '';
        if(raw <= 50) {
            desc = '优';
        } else if (raw <= 100) {
            desc = '良';
        } else if (raw <= 200) {
            desc = '轻度污染';
        } else if (raw <= 300) {
            desc = '中度污染';
        } else {
            desc = '严重污染';
        }

        return {value, desc};
    }

    getTime() {
        var now = new Date(Date.now());
        return `${now.getHours()}:${now.getMinutes()}`;
    }

    /*getCity(data) {
        return data[0].area;
    }*/

    getPollutants(data) {
        let result = [];
        let count = data.length;

        for(let type of pollutants) {
            let value = data.reduce((sum, current) => sum + current[type.id], 0) / count;
            value = type.id !== 'co' ? value.toFixed() : value.toPrecision(2);
            let unit = type.id !== 'co' ? 'mg' : 'μg';
            result.push({type: type.desc, value, unit});
        }

        return result;
    }
}

const pollutants = [{id: 'pm2_5', desc: 'PM 2.5'},
                    {id: 'pm10', desc: 'PM 10'},
                    {id: 'co', desc: '一氧化碳'},
                    {id: 'no2', desc: '二氧化氮'},
                    {id: 'so2', desc: '二氧化硫'},
                    {id: 'o3', desc: '臭氧'},];
const aqi = 'aqi';

const token = '5j1znBVAsnSf5xQyNQyq';

//Offline Data

const result = [{"aqi":61,"area":"北京","co":0.5,"co_24h":0.4,"no2":36,"no2_24h":41,"o3":38,"o3_24h":86,"o3_8h":14,"o3_8h_24h":14,"pm10":72,"pm10_24h":39,"pm2_5":6,"pm2_5_24h":12,"position_name":"万寿西宫","primary_pollutant":"颗粒物(PM10)","quality":"良","so2":4,"so2_24h":2,"station_code":"1001A","time_point":"2018-09-17T11:00:00Z"},
{"aqi":23,"area":"北京","co":0.4,"co_24h":0.3,"no2":24,"no2_24h":23,"o3":56,"o3_24h":90,"o3_8h":46,"o3_8h_24h":46,"pm10":23,"pm10_24h":38,"pm2_5":5,"pm2_5_24h":7,"position_name":"定陵","primary_pollutant":null,"quality":"优","so2":5,"so2_24h":4,"station_code":"1002A","time_point":"2018-09-17T11:00:00Z"},
{"aqi":33,"area":"北京","co":0.4,"co_24h":0.3,"no2":31,"no2_24h":37,"o3":48,"o3_24h":100,"o3_8h":24,"o3_8h_24h":24,"pm10":33,"pm10_24h":38,"pm2_5":10,"pm2_5_24h":10,"position_name":"东四","primary_pollutant":null,"quality":"优","so2":4,"so2_24h":3,"station_code":"1003A","time_point":"2018-09-17T11:00:00Z"},
{"aqi":44,"area":"北京","co":0.6,"co_24h":0.5,"no2":46,"no2_24h":41,"o3":39,"o3_24h":91,"o3_8h":18,"o3_8h_24h":18,"pm10":44,"pm10_24h":36,"pm2_5":8,"pm2_5_24h":6,"position_name":"天坛","primary_pollutant":null,"quality":"优","so2":3,"so2_24h":3,"station_code":"1004A","time_point":"2018-09-17T11:00:00Z"},
{"aqi":32,"area":"北京","co":0.3,"co_24h":0.3,"no2":22,"no2_24h":37,"o3":53,"o3_24h":102,"o3_8h":20,"o3_8h_24h":20,"pm10":32,"pm10_24h":37,"pm2_5":12,"pm2_5_24h":12,"position_name":"农展馆","primary_pollutant":null,"quality":"优","so2":4,"so2_24h":3,"station_code":"1005A","time_point":"2018-09-17T11:00:00Z"},
{"aqi":52,"area":"北京","co":0.5,"co_24h":0.3,"no2":40,"no2_24h":41,"o3":37,"o3_24h":91,"o3_8h":12,"o3_8h_24h":12,"pm10":53,"pm10_24h":40,"pm2_5":18,"pm2_5_24h":13,"position_name":"官园","primary_pollutant":"颗粒物(PM10)","quality":"良","so2":2,"so2_24h":2,"station_code":"1006A","time_point":"2018-09-17T11:00:00Z"},
{"aqi":50,"area":"北京","co":0.5,"co_24h":0.4,"no2":40,"no2_24h":48,"o3":39,"o3_24h":97,"o3_8h":14,"o3_8h_24h":14,"pm10":50,"pm10_24h":47,"pm2_5":7,"pm2_5_24h":11,"position_name":"海淀区万柳","primary_pollutant":null,"quality":"优","so2":4,"so2_24h":2,"station_code":"1007A","time_point":"2018-09-17T11:00:00Z"},
{"aqi":20,"area":"北京","co":0.2,"co_24h":0.2,"no2":14,"no2_24h":32,"o3":63,"o3_24h":95,"o3_8h":44,"o3_8h_24h":44,"pm10":16,"pm10_24h":25,"pm2_5":6,"pm2_5_24h":8,"position_name":"顺义新城","primary_pollutant":null,"quality":"优","so2":2,"so2_24h":2,"station_code":"1008A","time_point":"2018-09-17T11:00:00Z"},
{"aqi":22,"area":"北京","co":0.2,"co_24h":0.3,"no2":11,"no2_24h":12,"o3":57,"o3_24h":85,"o3_8h":36,"o3_8h_24h":40,"pm10":22,"pm10_24h":18,"pm2_5":6,"pm2_5_24h":5,"position_name":"怀柔镇","primary_pollutant":null,"quality":"优","so2":3,"so2_24h":3,"station_code":"1009A","time_point":"2018-09-17T11:00:00Z"},
{"aqi":27,"area":"北京","co":0.4,"co_24h":0.4,"no2":17,"no2_24h":19,"o3":50,"o3_24h":90,"o3_8h":29,"o3_8h_24h":45,"pm10":27,"pm10_24h":34,"pm2_5":3,"pm2_5_24h":8,"position_name":"昌平镇","primary_pollutant":null,"quality":"优","so2":5,"so2_24h":4,"station_code":"1010A","time_point":"2018-09-17T11:00:00Z"},
{"aqi":37,"area":"北京","co":0.3,"co_24h":0.3,"no2":28,"no2_24h":38,"o3":42,"o3_24h":76,"o3_8h":16,"o3_8h_24h":16,"pm10":37,"pm10_24h":38,"pm2_5":10,"pm2_5_24h":12,"position_name":"奥体中心","primary_pollutant":null,"quality":"优","so2":4,"so2_24h":2,"station_code":"1011A","time_point":"2018-09-17T11:00:00Z"},
{"aqi":21,"area":"北京","co":0.5,"co_24h":0.5,"no2":35,"no2_24h":54,"o3":61,"o3_24h":105,"o3_8h":18,"o3_8h_24h":22,"pm10":21,"pm10_24h":30,"pm2_5":10,"pm2_5_24h":10,"position_name":"古城","primary_pollutant":null,"quality":"优","so2":2,"so2_24h":2,"station_code":"1012A","time_point":"2018-09-17T11:00:00Z"},
{"aqi":36,"area":"北京","co":0.4,"co_24h":0.35,"no2":28,"no2_24h":35,"o3":48,"o3_24h":92,"o3_8h":24,"o3_8h_24h":26,"pm10":35,"pm10_24h":35,"pm2_5":8,"pm2_5_24h":9,"position_name":null,"primary_pollutant":"","quality":"优","so2":3,"so2_24h":2,"station_code":null,"time_point":"2018-09-17T11:00:00Z"}];

export default new Fetcher();
