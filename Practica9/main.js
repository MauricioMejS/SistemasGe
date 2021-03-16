var coords = {
    lat: 0,
    lng: 0,
  };
  
  var propiedades = {
    center: coords,
    zoom: 2,
  };
  
  function getMarkers() {
    const markers = [
      {
        name: "Mexico",
        longitude: "22.7665",
        latitude: "-102.0241",
      },
      {
        name: "China",
        longitude: "34.8422",
        latitude: "103.5439",
      },
      {
        name: "Corea del Sur",
        longitude: "36.7722",
        latitude: "127.8489",
      },
    ];
  
    return markers;
  }
  
  function iniciaMapa = () => {
    const map = new google.maps.Map(document.getElementById("map"), propiedades);
  
    const marcadores = getMarkers();
      
    console.log(marcadores);
  
    for (marcador of marcadores) {
        markers = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(marcador.latitude, marcador.longitude),
        title: marcador.name,
      });
    }
  };
