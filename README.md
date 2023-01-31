
## Google Map Api Helper 
This library provides for google map api helper function

----------------

## Documentation


### Get distance between two lat long
```
import { getDistanceLatLog } from 'google-map-api-helper';

getDistanceLatLog({lat:26.549394, log:80.5370636}, {lat:26.6418662,log:80.7651918})
.then(res => console.log(res))
.catch(error => console.log(error))


// async await syntax

const getData = async () => {
  try {
    const res = await getDistanceLatLog(
      { lat: 26.549394, log: 80.5370636 },
      { lat: 26.6418662, log: 80.7651918 }
    );
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

getData()

```

### Get address by lat long
```
import { getAddressByLatlng } from 'google-map-api-helper';

getAddressByLatlng(map_api_key,26.549394,80.5370636)
.then(res => console.log(res))
.catch(error => console.log(error))


// async await syntax

const getData = async () => {
  try {
    const res = await getAddressByLatlng(map_api_key,26.549394,80.5370636)
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

getData()

```
### Get address by placeId

```
import { getAddressByPlaceId } from 'google-map-api-helper';

getAddressByPlaceId(map_api_key,'ChIJn9QLssk0hTkRGgTUaoU3Igo')
.then(res => console.log(res))
.catch(error => console.log(error))


// async await syntax

const getData = async () => {
  try {
    const res = await getAddressByPlaceId(map_api_key,'ChIJn9QLssk0hTkRGgTUaoU3Igo')
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

getData()

```

### Get Google map Directions
```
import { getDirections } from 'google-map-api-helper';


const data = [
  {
    "lat": 28.785065113983514,
    "lng": 77.22917705769757
  },
  {
    "lat": 28.762194273521946,
    "lng": 77.35551983113507
  },
  {
    "lat": 28.717641939370953,
    "lng": 77.35551983113507
  },
  {
    "lat": 28.735705986138594,
    "lng": 77.26488262410382
  }
]
getDirections(map_api_key, data)
.then(res => console.log(res))
.catch(error => console.log(error))


// async await syntax

const getData = async () => {
  try {
    const res = await getDirections(map_api_key, data)
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

getData()

```

### Import Default

```
import GMAH from 'google-map-api-helper';

GMAH.getDistanceLatLog({lat:26.549394, log:80.5370636}, {lat:26.6418662,log:80.7651918})
.then(res => console.log(res))
.catch(error => console.log(error))

GMAH.getAddressByLatlng(map_api_key,26.549394,80.5370636)
.then(res => console.log(res))
.catch(error => console.log(error))

GMAH.getAddressByPlaceId(map_api_key,26.549394,80.5370636)
.then(res => console.log(res))
.catch(error => console.log(error))



```