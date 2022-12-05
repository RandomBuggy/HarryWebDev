function updateMap() {
    fetch("/data.json").then((responce) => {responce.json()}).then((rsp) => {
        console.log(rsp.data); rsp.data.forEach((element) => {
            latitude = element.latitute;
            let longtitude = element.longtitude;

            cases = element.infected;

            if (cases > 255) {
                color = "rgb(255, 0, 0)";
            }
            else {
                color = `rgb(${cases}, 0, 0)`;
            }
            // mark on the map
            new mapboxgl.Marker({draggable: false, color: `${color}`}).setLngLat([longtitude, latitute]).addTo(map);
        });
    });
};

let interval = 2000;
setInterval(updateMap, interval);
