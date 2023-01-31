type latLog = {
  lat: number;
  log: number;
};


export const getDistanceLatLog = (obj1: latLog, obj2: latLog) => {
  return new Promise((resolve, reject) => {
    try {
      var lat1 = obj1.lat;
      var lat2 = obj2.lat;

      var lon1 = obj2.log;
      var lon2 = obj2.log;

      if (!lat1 || !lat2 || !lon1 || !lon2) {
        reject({ message: "data is not valid" });
      }
      if (lat1 == lat2 && lon1 == lon2) {
        return 0;
      }
     
      var unit = "K";
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") {
        dist = dist * 1.609344;
      }
      if (unit == "N") {
        dist = dist * 0.8684;
      }
      resolve(dist);
    } catch (error) {
      reject(error);
    }
  });
};



