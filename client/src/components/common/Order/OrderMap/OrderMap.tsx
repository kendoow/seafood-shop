import { FC, useState } from 'react'

import { Map, Placemark, YMaps } from 'react-yandex-maps'
import styles from './OrderMap.module.scss'

const OrderMap: FC = () => {
    const [coordinates, setCoordinates] = useState(null)

    const clickOnMap = (e) => {
        console.log(e)
    }

    // function getAddress(coords) {
    //     myPlacemark.properties.set('iconCaption', 'поиск...');
    //     ymaps.geocode(coords).then(function (res) {
    //         var firstGeoObject = res.geoObjects.get(0);

    //         myPlacemark.properties
    //             .set({
    //                 // Формируем строку с данными об объекте.
    //                 iconCaption: [
    //                     // Название населенного пункта или вышестоящее административно-территориальное образование.
    //                     firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
    //                     // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
    //                     firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
    //                 ].filter(Boolean).join(', '),
    //                 // В качестве контента балуна задаем строку с адресом объекта.
    //                 balloonContent: firstGeoObject.getAddressLine()
    //             });
    //     });
    // }
    // console.log(coordinates)
    return (
        <div className={styles.Container}>
            <YMaps onApiAvaliable={(ymaps) => console.log(ymaps)}>
                <Map
                    modules={['geocode']}
                    onClick={clickOnMap}
                    width="95%"
                    height="40vh"
                    defaultState={{ center: [55.751592, 37.621389], zoom: 12 }}
                    searchControlProvider="yandex#search"

                >
                    {
                        coordinates ? null : <Placemark geometry={coordinates} />
                    }
                </Map>
            </YMaps>
        </div>
    )
}

export default OrderMap
