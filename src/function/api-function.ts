type latLog = {
  lat: number;
  lng: number;
};


import axios from 'axios';


export const getAddressByPlaceId = (api_key: string, placeId: string) => {
  return new Promise((resolve, reject) => {
    axios.get(
      "https://maps.googleapis.com/maps/api/place/details/json?place_id=" +
        placeId +
        "&fields=formatted_address,name,photos&key=" +
        api_key
    )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getAddressByLatlng = (
  api_key: string,
  lat: number,
  lng: number
) => {
  return new Promise((resolve, reject) => {
    axios.get(
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        lat +
        "," +
        lng +
        "&key" +
        api_key
    )
  
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getDirections = (api_key: string, data: latLog[]) => {
  return new Promise((resolve, reject) => {
    if (!data || data.length < 2) {
      reject({ success: false, message: "Places Select at least 2 Location" });
    }
    if (data.length > 12) {
      reject({
        success: false,
        message: "You cannot select more than 12 locations",
      });
    }

    let origin = `${data[0].lat},${data[0].lng}`;
    let destination = `${data[data.length - 1].lat},${
      data[data.length - 1].lng
    }`;
    let waypoint = "|";
    data.forEach((item, i) => {
      if (i == 0 || i == data.length - 1) {
        return;
      }
      waypoint += `${item.lat},${item.lng}|`;
    });

    let reqURL = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&${
      waypoint.length > 5 ? "waypoints=" : ""
    }optimize:true:${waypoint}&key=${api_key}`;
    axios.get(reqURL)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
