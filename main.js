import './style.css';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Map from 'ol/Map';
import View from 'ol/View';
import TileWMS from 'ol/source/TileWMS'
import Control from 'ol/control/Control';
import MousePosition from 'ol/control/MousePosition'
import { format } from 'ol/coordinate';
import { ScaleLine, defaults as defaultControls } from 'ol/control'
import { Overlay } from 'ol';

let container = document.getElementById('popup');
let content = document.getElementById('popup-content');
let closer = document.getElementById('popup-closer');
let currentYear;

const overlay = new Overlay({
  element: container,
  autoPan: {
    animation: {
      duration: 250,
    },
  },
});

closer.onclick = function () {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};

const OSMBasic = new TileLayer({
  title: 'Open Street Map',
  source: new OSM()
});


const terras = new TileLayer({
  title: 'Terras Indigenas em Mato Grosso',
  source: new TileWMS({
    url: 'http://localhost:8080/geoserver/TCC/wms',
    params: { 'LAYERS': 'TCC:terras_indigenas', 'TILED': true },
    serverType: 'geoserver',
  }),
});

const picos_2012 = new TileLayer({
  title: 'Focos de Incendio em 2012',
  source: new TileWMS({
    url: 'http://localhost:8080/geoserver/TCC/wms',
    params: { 'LAYERS': 'TCC:focos_2012', 'TILED': true },
    serverType: 'geoserver'
  }),
});

const picos_2013 = new TileLayer({
  title: 'Focos de Incendio em 2013',
  source: new TileWMS({
    url: 'http://localhost:8080/geoserver/TCC/wms',
    params: { 'LAYERS': 'TCC:focos_2013', 'TILED': true },
    serverType: 'geoserver'
  }),
});

const picos_2014 = new TileLayer({
  title: 'Focos de Incendio em 2014',
  source: new TileWMS({
    url: 'http://localhost:8080/geoserver/TCC/wms',
    params: { 'LAYERS': 'TCC:focos_2014', 'TILED': true },
    serverType: 'geoserver'
  }),
});

const picos_2015 = new TileLayer({
  title: 'Focos de Incendio em 2015',
  source: new TileWMS({
    url: 'http://localhost:8080/geoserver/TCC/wms',
    params: { 'LAYERS': 'TCC:focos_2015', 'TILED': true },
    serverType: 'geoserver'
  }),
});

const picos_2016 = new TileLayer({
  title: 'Focos de Incendio em 2016',
  source: new TileWMS({
    url: 'http://localhost:8080/geoserver/TCC/wms',
    params: { 'LAYERS': 'TCC:focos_2016', 'TILED': true },
    serverType: 'geoserver'
  }),
});

const picos_2017 = new TileLayer({
  title: 'Focos de Incendio em 2017',
  source: new TileWMS({
    url: 'http://localhost:8080/geoserver/TCC/wms',
    params: { 'LAYERS': 'TCC:focos_2017', 'TILED': true },
    serverType: 'geoserver'
  }),
});

const picos_2018 = new TileLayer({
  title: 'Focos de Incendio em 2018',
  source: new TileWMS({
    url: 'http://localhost:8080/geoserver/TCC/wms',
    params: { 'LAYERS': 'TCC:focos_2018', 'TILED': true },
    serverType: 'geoserver'
  }),
});

const picos_2019 = new TileLayer({
  title: 'Focos de Incendio em 2019',
  source: new TileWMS({
    url: 'http://localhost:8080/geoserver/TCC/wms',
    params: { 'LAYERS': 'TCC:focos_2019', 'TILED': true },
    serverType: 'geoserver'
  }),
});

const picos_2020 = new TileLayer({
  title: 'Focos de Incendio em 2020',
  source: new TileWMS({
    url: 'http://localhost:8080/geoserver/TCC/wms',
    params: { 'LAYERS': 'TCC:focos_2020', 'TILED': true },
    serverType: 'geoserver'
  }),
});

const picos_2021 = new TileLayer({
  title: 'Focos de Incendio em 2021',
  source: new TileWMS({
    url: 'http://localhost:8080/geoserver/TCC/wms',
    params: { 'LAYERS': 'TCC:focos_2021', 'TILED': true },
    serverType: 'geoserver'
  }),
});

const map = new Map({
  target: 'map',
  layers: [
    OSMBasic, terras
  ],
  overlays: [overlay],
  view: new View({
    center: fromLonLat([-55.89, -13]),
    zoom: 6,
  }),
});

// Get the button:
let mybutton = document.getElementById("meuBotao");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

const myBtn = document.querySelector('#myBtn');
const anos = document.querySelector('.form-group');

myBtn.addEventListener('click', function () {
  if (anos.style.display === 'none') {
    anos.style.display = 'block';
  } else {
    anos.style.display = 'none';
  }
});

$('#customCheck1').on('change', function () {
  currentYear = '2012'
  content.innerHTML = ''
  i = 0

  const isChecked = $(this).is(':checked');

  if (isChecked) {
    map.addLayer(picos_2012)
    for (var i = 2; i <= 10; i++) {
      document.getElementById("customCheck" + i).disabled = true;
    }

  } else {
    currentYear = null;
    map.removeLayer(picos_2012);
    for (var i = 2; i <= 10; i++) {
      document.getElementById("customCheck" + i).disabled = false;
    }
    overlay.setPosition(undefined);

  }
});

$('#customCheck2').on('change', function () {
  currentYear = '2013'
  content.innerHTML = ''

  const isChecked = $(this).is(':checked');

  if (isChecked) {
    map.addLayer(picos_2013)
    for (var i = 3; i <= 10; i++) {
      document.getElementById("customCheck" + i).disabled = true;
      for (var j = 1; j < 2; j++) {
        document.getElementById("customCheck" + j).disabled = true;
      }
    }


  } else {
    currentYear = null;
    map.removeLayer(picos_2013);
    for (var i = 3; i <= 10; i++) {
      document.getElementById("customCheck" + i).disabled = false;
      for (var j = 1; j < 2; j++) {
        document.getElementById("customCheck" + j).disabled = false;
      }
    }
  }
});

$('#customCheck3').on('change', function () {
  currentYear = '2014'
  content.innerHTML = ''

  const isChecked = $(this).is(':checked');

  if (isChecked) {
    map.addLayer(picos_2014)
    for (var i = 4; i <= 10; i++) {
      document.getElementById("customCheck" + i).disabled = true;
      for (var j = 1; j < 3; j++) {
        document.getElementById("customCheck" + j).disabled = true;
      }
    }


  } else {
    currentYear = null;

    map.removeLayer(picos_2014);
    for (var i = 4; i <= 10; i++) {
      document.getElementById("customCheck" + i).disabled = false;
      for (var j = 1; j < 3; j++) {
        document.getElementById("customCheck" + j).disabled = false;
      }
    }
  }
});

$('#customCheck4').on('change', function () {
  currentYear = '2015'
  content.innerHTML = ''

  const isChecked = $(this).is(':checked');

  if (isChecked) {
    map.addLayer(picos_2015)
    for (var i = 5; i <= 10; i++) {
      document.getElementById("customCheck" + i).disabled = true;
      for (var j = 1; j < 4; j++) {
        document.getElementById("customCheck" + j).disabled = true;
      }
    }


  } else {
    currentYear = null;

    map.removeLayer(picos_2015);
    for (var i = 5; i <= 10; i++) {
      document.getElementById("customCheck" + i).disabled = false;
      for (var j = 1; j < 4; j++) {
        document.getElementById("customCheck" + j).disabled = false;
      }
    }
  }
});

$('#customCheck5').on('change', function () {
  currentYear = '2016'
  content.innerHTML = ''

  const isChecked = $(this).is(':checked');

  if (isChecked) {
    map.addLayer(picos_2016)
    for (var i = 6; i <= 10; i++) {
      document.getElementById("customCheck" + i).disabled = true;
      for (var j = 1; j < 5; j++) {
        document.getElementById("customCheck" + j).disabled = true;
      }
    }

  } else {
    currentYear = null;

    map.removeLayer(picos_2016);
    for (var i = 6; i <= 10; i++) {
      document.getElementById("customCheck" + i).disabled = false;
      for (var j = 1; j < 5; j++) {
        document.getElementById("customCheck" + j).disabled = false;
      }
    }
  }
});

$('#customCheck6').on('change', function () {
  currentYear = '2017'
  content.innerHTML = ''

  const isChecked = $(this).is(':checked');

  if (isChecked) {
    map.addLayer(picos_2017)
    for (var i = 7; i <= 10; i++) {
      document.getElementById("customCheck" + i).disabled = true;
      for (var j = 1; j < 6; j++) {
        document.getElementById("customCheck" + j).disabled = true;
      }
    }


  } else {
    currentYear = null;

    map.removeLayer(picos_2017);
    for (var i = 7; i <= 10; i++) {
      document.getElementById("customCheck" + i).disabled = false;
      for (var j = 1; j < 6; j++) {
        document.getElementById("customCheck" + j).disabled = false;
      }
    }
  }
});

$('#customCheck7').on('change', function () {
  currentYear = '2018'
  content.innerHTML = ''

  const isChecked = $(this).is(':checked');

  if (isChecked) {
    map.addLayer(picos_2018)
    for (var i = 8; i <= 10; i++) {
      document.getElementById("customCheck" + i).disabled = true;
      for (var j = 1; j < 7; j++) {
        document.getElementById("customCheck" + j).disabled = true;
      }
    }

  } else {
    currentYear = null;

    map.removeLayer(picos_2018);
    for (var i = 8; i <= 10; i++) {
      document.getElementById("customCheck" + i).disabled = false;
      for (var j = 1; j < 7; j++) {
        document.getElementById("customCheck" + j).disabled = false;
      }
    }
  }
});

$('#customCheck8').on('change', function () {
  currentYear = '2019'
  content.innerHTML = ''

  const isChecked = $(this).is(':checked');

  if (isChecked) {
    map.addLayer(picos_2019)
    for (var i = 9; i <= 10; i++) {
      document.getElementById("customCheck" + i).disabled = true;
      for (var j = 1; j < 8; j++) {
        document.getElementById("customCheck" + j).disabled = true;
      }
    }

  } else {
    currentYear = null;

    map.removeLayer(picos_2019);
    for (var i = 9; i <= 10; i++) {
      document.getElementById("customCheck" + i).disabled = false;
      for (var j = 1; j < 8; j++) {
        document.getElementById("customCheck" + j).disabled = false;
      }
    }
  }
});

$('#customCheck9').on('change', function () {
  currentYear = '2020'
  content.innerHTML = ''

  const isChecked = $(this).is(':checked');

  if (isChecked) {
    map.addLayer(picos_2020)
    for (var i = 10; i <= 10; i++) {
      document.getElementById("customCheck" + i).disabled = true;
      for (var j = 1; j < 9; j++) {
        document.getElementById("customCheck" + j).disabled = true;
      }
    }


  } else {
    currentYear = null;

    map.removeLayer(picos_2020);
    for (var i = 10; i <= 10; i++) {
      document.getElementById("customCheck" + i).disabled = false;
      for (var j = 1; j < 9; j++) {
        document.getElementById("customCheck" + j).disabled = false;
      }
    }

    // inserir o 'content' como sendo os dados da terra indigena
    // content.innerHTML = '';
    //
  }
});

$('#customCheck10').on('change', function () {
  currentYear = '2021'
  content.innerHTML = ''

  const isChecked = $(this).is(':checked');

  if (isChecked) {
    map.addLayer(picos_2021)
    for (var i = 1; i < 10; i++) {
      document.getElementById("customCheck" + i).disabled = true;
    }

  } else {
    currentYear = null;

    map.removeLayer(picos_2021);
    for (var i = 1; i < 10; i++) {
      document.getElementById("customCheck" + i).disabled = false;
    }
  }
});

let mousePosition = new MousePosition({
  className: 'mousePosition',
  projection: 'EPSG:4674',
  coordinateFormat: function (coordinate) { return format(coordinate, '{y} , {x}', 4); }
});


map.on('singleclick', function (evt) {
  content.innerHTML = '';

  const resolution = map.getView().getResolution();
  let url;
  let eTerraIndigena = false;
  switch (currentYear) {
    case '2012':
      url = picos_2012.getSource().getFeatureInfoUrl(evt.coordinate, resolution, 'EPSG:3857', {
        'INFO_FORMAT': 'application/json',
        'propertyname': 'municipio,bioma,datahora'
      });

      break;
    case '2013':

      url = picos_2013.getSource().getFeatureInfoUrl(evt.coordinate, resolution, 'EPSG:3857', {
        'INFO_FORMAT': 'application/json',
        'propertyname': 'municipio,bioma,datahora'
      });

      break;
    case '2014':

      url = picos_2014.getSource().getFeatureInfoUrl(evt.coordinate, resolution, 'EPSG:3857', {
        'INFO_FORMAT': 'application/json',
        'propertyname': 'municipio,bioma,datahora'
      });

      break;
    case '2015':

      url = picos_2015.getSource().getFeatureInfoUrl(evt.coordinate, resolution, 'EPSG:3857', {
        'INFO_FORMAT': 'application/json',
        'propertyname': 'municipio,bioma,datahora'
      });

      break;
    case '2016':

      url = picos_2016.getSource().getFeatureInfoUrl(evt.coordinate, resolution, 'EPSG:3857', {
        'INFO_FORMAT': 'application/json',
        'propertyname': 'municipio,bioma,datahora'
      });

      break;
    case '2017':

      url = picos_2017.getSource().getFeatureInfoUrl(evt.coordinate, resolution, 'EPSG:3857', {
        'INFO_FORMAT': 'application/json',
        'propertyname': 'municipio,bioma,datahora'
      });

      break;
    case '2018':

      url = picos_2018.getSource().getFeatureInfoUrl(evt.coordinate, resolution, 'EPSG:3857', {
        'INFO_FORMAT': 'application/json',
        'propertyname': 'municipio,bioma,datahora'
      });

      break;
    case '2019':

      url = picos_2019.getSource().getFeatureInfoUrl(evt.coordinate, resolution, 'EPSG:3857', {
        'INFO_FORMAT': 'application/json',
        'propertyname': 'municipio,bioma,datahora'
      });

      break;
    case '2020':

      url = picos_2020.getSource().getFeatureInfoUrl(evt.coordinate, resolution, 'EPSG:3857', {
        'INFO_FORMAT': 'application/json',
        'propertyname': 'municipio,bioma,datahora'
      });

      break;
    case '2021':

      url = picos_2021.getSource().getFeatureInfoUrl(evt.coordinate, resolution, 'EPSG:3857', {
        'INFO_FORMAT': 'application/json',
        'propertyname': 'municipio,bioma,datahora'
      });

      break;
    default:
      url = terras.getSource().getFeatureInfoUrl(evt.coordinate, resolution, 'EPSG:3857', {
        'INFO_FORMAT': 'application/json',
        'propertyname': 'terrai_nom,etnia_nome,municipio_'
      });

      eTerraIndigena = true;
      break;
  }


  if (url) {
    $.getJSON(url, function (data) {

      const feature = data.features[0];
      const props = feature.properties;

      if (eTerraIndigena === true) {
        content.innerHTML = "<h5> Municipio: </h5> <h6>" + props.municipio_.toUpperCase() + "</h6> <br> <h5> Terra: </h5> <h6>" + props.terrai_nom.toUpperCase() + "</h6> <br> <h5> Etnia: </h5> <h6>" + props.etnia_nome.toUpperCase() + "</h6>";
        overlay.setPosition(evt.coordinate);
      } else {
        content.innerHTML = "<h5> Municipio: </h5> <h6>" + props.municipio.toUpperCase() + "</h6> <br> <h5> Bioma: </h5> <h6>" +
          props.bioma.toUpperCase() + "</h6> <br> <h5> Data e hora: </h5> <h6>" + props.datahora.toUpperCase() + "</h6>";
      }

      overlay.setPosition(evt.coordinate);

    })
  } else {
    overlay.setPosition(undefined);
  }
});

map.addControl(mousePosition);

let scaleControl = new ScaleLine({
  bar: true,
  text: true
});
map.addControl(scaleControl);
