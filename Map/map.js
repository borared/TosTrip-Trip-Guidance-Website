mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v11",
  center: [0, 20],
  zoom: 2
});

let markers = [];

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const marker = new mapboxgl.Marker()
        .setLngLat([item.lng, item.lat])
        .setPopup(new mapboxgl.Popup().setText(item.name))
        .addTo(map);

      marker.type = item.type;
      markers.push(marker);
    });
  });

function filterMap(type) {
  markers.forEach(marker => {
    const el = marker.getElement();
    el.style.display =
      type === "all" || marker.type === type ? "block" : "none";
  });
}
