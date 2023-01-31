
## Google Map Api Helper 
Google map is the leading location data and visualisation platform for the web. You might use it to show and view locations on map, draw point, line, polygone and route between two points, track vehicle etc.

This library is specially designed to help developer to do some tedious operations on map within a time.

This library provide solution to efficiently get the distance between two locations, get the exact address from the latitude and longitude, get the address by providing place ID and get shortest path between multiple points on map

 **Requirement**
The first step is to acquire the Google Maps API key. Before you can do any of this, you need a Google account – However, I’m going to assume that most of you have a Google account already, so let’s skip to the next step.

When you’re logged into Google, make your way to the Google Maps Javascript API page – [link here.](https://developers.google.com/maps/documentation/javascript/get-api-key)

after that enable all need api's you use

----------------

## Documentation


### Installation

**npm**

```bash
npm install google-map-api-helper --save
```

**yarn**

```bash
yarn add google-map-api-helper
```

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


GMAH.getDirections(map_api_key, data)
.then(res => console.log(res))
.catch(error => console.log(error))


```