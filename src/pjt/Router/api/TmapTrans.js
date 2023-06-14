import { useEffect, useState } from 'react';
import axios from 'axios';

var datalist;

const TmapTrans = (startlat, startlon, destlat, destlon) => {
    const api_key = 'x7gSYlQjVI52sY0z3E6J6YaVZFPaIoW4vVdLz6Q3';
    const url = 'https://apis.openapi.sk.com/transit/routes';

    const [trafficData, setTrafficData] = useState([]);

    const payload = {
        startX: '127.02550910860451',
        startY: '37.63788539420793',
        endX: '127.030406594109',
        endY: '37.609094989686',
        count: 1,
        lang: 0,
        format: 'json',
    };

    useEffect(() => {
        console.log('[TmapTrans.js] useEffect() CALLED!!!');
        const Data = async () => {
            try {
                const response = await axios.post(url, payload, {
                    headers: {
                        'content-Type': 'application/json',
                        appKey: api_key,
                        accept: 'application/json',
                    },
                });
                setTrafficData(response.data);
            } catch (error) {
                console.log('API 호출에 실패했습니다.', error);
                return error;
            }
        };

        Data();
    }, []);

    useEffect(() => {
        console.log(trafficData);
    }, [trafficData]);
};

export default TmapTrans;
