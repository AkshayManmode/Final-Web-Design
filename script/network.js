var maha_map;
var andhra_map;
var arunachal_map;
var assam_map;
var bihar_map;
var chha_map;
var goa_map;
var gujarat_map;
var haryana_map;
var himachal_map;
var jhar_map;
var karna_map;
var kerala_map;
var madhyapradesh_map;
var manipur_map;
var megha_map;
var mizoram_map;
var nagaland_map;
var odisha_map;
var punb_map;
var rajas_map;
var sikkim_map;
var tamil_map;
var telan_map;
var tripura_map;
var uttrakhand_map;
var uttarPradesh_map;
var westBengal_map;
var delhi_map;
var andamanandnicobar_map;
var dadraandnagarhaveli_map;
var jammuandakashmir_map;
var lakshadweep_map;
var ladakh_map;
// ---------------------------------

var marker4;
var marker5;
var marker6;
var marker7;
var marker8;
var marker9;
var marker10;
var marker11;
var marker13;
var marker14;
var marker15;
var marker16;
var marker17;
var marker18;
var marker19;
var marker20;
var marker21;
var marker22;
var marker23;
var marker24;
var marker25;
var marker26;
var marker27;
var marker28;
var marker29;
var marker30;
var marker31;
var marker32;
var marker33;
var marker34;
var marker35;
var marker36;
var marker37;
var marker38;
var marker39;
var marker40;

var puneCity;
var khed;
var ambegaon;
var junnar;
var shirur;
var daund;
var indapur;
var baramati;
var purandhar;
var haveli;
var bhor;
var velhe;
var mulshi;
var maval;

var WORLD_X_VALUE = ["Open to Business", "Open to Usage", "Active for usage"];
var WORLD_Y_VALUE = [10, 4, 2];
var WORLD_LEDGEND = "View";
var WORLD_BAR_GRAPH_COLOR = ["#b91d47", "#00aba9", "#2b5797"];

var STATE_X_VALUE = ["Open to Business", "Open to Usage", "Active for usage"];
var STATE_Y_VALUE = [3, 8, 2];
var STATE_LEDGEND = "This is state graph";
var STATE_BAR_GRAPH_COLOR = ["#b91d47", "#00aba9", "#2b5797"];

var INDIA_X_VALUE = ["Open to Business", "Open to Usage", "Active for usage"];
var INDIA_Y_VALUE = [41, 14, 38];
var INDIA_LEDGEND = "This is india view";
var INDIA_BAR_GRAPH_COLOR = ["#b91d47", "#00aba9", "#2b5797"];

async function getMaharashtra() {
  const response = await fetch("../state/maharashtra.txt");
  const res = await response.json();
  maha_map = L.geoJSON(res, { color: "orange" });
}

async function getAndhraPradesh() {
  const response = await fetch("../state/andhraPradesh.txt");
  const res = await response.json();
  andhra_map = L.geoJSON(res, { color: "yellow" });
}

async function getArunachal() {
  const response = await fetch("../state/arunachal.txt");
  const res = await response.json();
  arunachal_map = L.geoJSON(res, { color: "black" });
}

async function getAssam() {
  const response = await fetch("../state/assam.txt");
  const res = await response.json();
  assam_map = L.geoJSON(res, { color: "blue" });
}

async function getBihar() {
  const response = await fetch("../state/bihar.txt");
  const res = await response.json();
  bihar_map = L.geoJSON(res, { color: "gold" });
}

async function getChhattishghar() {
  const response = await fetch("../state/chhattishghar.txt");
  const res = await response.json();
  chha_map = L.geoJSON(res, { color: "cyan" });
}

async function getGoa() {
  const response = await fetch("../state/goa.txt");
  const res = await response.json();
  goa_map = L.geoJSON(res, { color: "maroon" });
}

async function getGujarat() {
  const response = await fetch("../state/gujarat.txt");
  const res = await response.json();
  gujarat_map = L.geoJSON(res, { color: "black" });
}

async function getHaryana() {
  const response = await fetch("../state/haryana.txt");
  const res = await response.json();
  haryana_map = L.geoJSON(res, { color: "gray" });
}

async function getHimachal() {
  const response = await fetch("../state/himachal.txt");
  const res = await response.json();
  himachal_map = L.geoJSON(res, { color: "#E52800" });
}

async function getJharkhand() {
  const response = await fetch("../state/jharkhand.txt");
  const res = await response.json();
  jhar_map = L.geoJSON(res, { color: "#DEE500" });
}

async function getKarnataka() {
  const response = await fetch("../state/karnataka.txt");
  const res = await response.json();
  karna_map = L.geoJSON(res, { color: "#00E503" });
}

async function getKerala() {
  const response = await fetch("../state/kerala.txt");
  const res = await response.json();
  kerala_map = L.geoJSON(res, { color: "#00E55E" });
}

async function getMadhyaPradesh() {
  const response = await fetch("../state/madyapradesh.txt");
  const res = await response.json();
  madhyapradesh_map = L.geoJSON(res, { color: "#06EEBD" });
}

async function getManipur() {
  const response = await fetch("../state/manipur.txt");
  const res = await response.json();
  manipur_map = L.geoJSON(res, { color: "#047FCB" });
}

async function getMeghalaya() {
  const response = await fetch("../state/meghalaya.txt");
  const res = await response.json();
  megha_map = L.geoJSON(res, { color: "#033FDF" });
}

async function getMizoram() {
  const response = await fetch("../state/mizoram.txt");
  const res = await response.json();
  mizoram_map = L.geoJSON(res, { color: "#BD08F2" });
}

async function getNagaland() {
  const response = await fetch("../state/nagaland.txt");
  const res = await response.json();
  nagaland_map = L.geoJSON(res, { color: "#634F69" });
}

async function getOdisha() {
  const response = await fetch("../state/odisha.txt");
  const res = await response.json();
  odisha_map = L.geoJSON(res, { color: "#BD00A6" });
}

async function getPunbjab() {
  const response = await fetch("../state/punjab.txt");
  const res = await response.json();
  punb_map = L.geoJSON(res, { color: "#FF000C" });
}

async function getRajasthan() {
  const response = await fetch("../state/rajasthan.txt");
  const res = await response.json();
  rajas_map = L.geoJSON(res, { color: "#490408" });
}

async function getSikkim() {
  const response = await fetch("../state/sikkim.txt");
  const res = await response.json();
  sikkim_map = L.geoJSON(res, { color: "#490437" });
}

async function getTamilNadu() {
  const response = await fetch("../state/tamilnadu.txt");
  const res = await response.json();
  tamil_map = L.geoJSON(res, { color: "#340449" });
}

async function getTelangana() {
  const response = await fetch("../state/telangana.txt");
  const res = await response.json();
  telan_map = L.geoJSON(res, { color: "#120449" });
}

async function getTripura() {
  const response = await fetch("../state/tripura.txt");
  const res = await response.json();
  tripura_map = L.geoJSON(res, { color: "#02046D" });
}

async function getUttarakhand() {
  const response = await fetch("../state/uttarakhand.txt");
  const res = await response.json();
  uttrakhand_map = L.geoJSON(res, { color: "#023C6D" });
}

async function getUttarPradesh() {
  const response = await fetch("../state/uttarPradesh.txt");
  const res = await response.json();
  uttarPradesh_map = L.geoJSON(res, { color: "#03444C" });
}

async function getWestBengal() {
  const response = await fetch("../state/west_bengal.txt");
  const res = await response.json();
  westBengal_map = L.geoJSON(res, { color: "#034C36" });
}

async function getDelhi() {
  const response = await fetch("../state/delhi.txt");
  const res = await response.json();
  delhi_map = L.geoJSON(res, { color: "#034C36" });
}

async function getAndamanandNicobar() {
  const response = await fetch("../state/andamanandnicobar.txt");
  const res = await response.json();
  andamanandnicobar_map = L.geoJSON(res, { color: "#034C36" });
}

async function getdadraandnagarhaveli() {
  const response = await fetch("../state/dadraandnagarhaveli.txt");
  const res = await response.json();
  dadraandnagarhaveli_map = L.geoJSON(res, { color: "#034C36" });
}

async function getJammuandKashmir() {
  const response = await fetch("../state/jammuandkashmir.txt");
  const res = await response.json();
  jammuandakashmir_map = L.geoJSON(res, { color: "#034C36" });
}

async function getLadakh() {
  const response = await fetch("../state/ladakh.txt");
  const res = await response.json();
  ladakh_map = L.geoJSON(res, { color: "#038C36" });
}

async function getLakshadweep() {
  const response = await fetch("../state/lakshadweep.txt");
  const res = await response.json();
  lakshadweep_map = L.geoJSON(res, { color: "#038C36" });
}

var mapOption = {
  center: [21.1613263, 78.9077009],
  zoom: 3,
  minZoom: 2,
};

var map = L.map("map", mapOption);

var layerGroup = new L.LayerGroup();
layerGroup.addTo(map);

function createGeoJsonData() {
  getMaharashtra();
  getAndhraPradesh();
  getArunachal();
  getAssam();
  getBihar();
  getChhattishghar();
  getGoa();
  getGujarat();
  getHaryana();
  getHimachal();
  getJharkhand();
  getKarnataka();
  getKerala();
  getMadhyaPradesh();
  getManipur();
  getMeghalaya();
  getMizoram();
  getNagaland();
  getOdisha();
  getPunbjab();
  getRajasthan();
  getSikkim();
  getTamilNadu();
  getTelangana();
  getTripura();
  getUttarakhand();
  getUttarPradesh();
  getWestBengal();
  getDelhi();
  getAndamanandNicobar();
  getdadraandnagarhaveli();
  getJammuandKashmir();
  getLadakh();
  getLakshadweep();
  
}
createGeoJsonData();

var defaultStyle = {
  fillOpacity: 0.7,
  fillColor: "#3388ff",
  color: "#333",
  weight: 1,
};

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: false,
}).addTo(map);

var stateColorLayer = new L.LayerGroup();
stateColorLayer.addTo(map);

// var geoCord =

L.Control.geocoder().addTo(map);

function createStateLayer() {
  
  stateColorLayer.addLayer(andhra_map);
  stateColorLayer.addLayer(arunachal_map);
  stateColorLayer.addLayer(assam_map);
  stateColorLayer.addLayer(bihar_map);
  stateColorLayer.addLayer(chha_map);
  stateColorLayer.addLayer(goa_map);
  stateColorLayer.addLayer(gujarat_map);
  stateColorLayer.addLayer(haryana_map);
  stateColorLayer.addLayer(himachal_map);
  
  stateColorLayer.addLayer(jhar_map);
  stateColorLayer.addLayer(karna_map);
  stateColorLayer.addLayer(kerala_map);
  stateColorLayer.addLayer(madhyapradesh_map);
  stateColorLayer.addLayer(manipur_map);
  stateColorLayer.addLayer(megha_map);
  stateColorLayer.addLayer(mizoram_map);
  stateColorLayer.addLayer(nagaland_map);
  stateColorLayer.addLayer(odisha_map);
  stateColorLayer.addLayer(punb_map);
  stateColorLayer.addLayer(rajas_map);
  stateColorLayer.addLayer(sikkim_map);
  stateColorLayer.addLayer(tamil_map);
  stateColorLayer.addLayer(telan_map);
  stateColorLayer.addLayer(uttrakhand_map);
  stateColorLayer.addLayer(uttarPradesh_map);
  stateColorLayer.addLayer(westBengal_map);
  stateColorLayer.addLayer(maha_map);
  stateColorLayer.addLayer(delhi_map);
  stateColorLayer.addLayer(andamanandnicobar_map);
  stateColorLayer.addLayer(dadraandnagarhaveli_map);
  stateColorLayer.addLayer(jammuandakashmir_map);
  stateColorLayer.addLayer(ladakh_map);
  stateColorLayer.addLayer(lakshadweep_map);
}

function removeStateLayer() {
  
  stateColorLayer.removeLayer(andhra_map);
  stateColorLayer.removeLayer(arunachal_map);
  stateColorLayer.removeLayer(assam_map);
  stateColorLayer.removeLayer(bihar_map);
  stateColorLayer.removeLayer(chha_map);
  stateColorLayer.removeLayer(goa_map);
  stateColorLayer.removeLayer(gujarat_map);
  stateColorLayer.removeLayer(haryana_map);
  stateColorLayer.removeLayer(himachal_map);
  stateColorLayer.removeLayer(jhar_map);
  stateColorLayer.removeLayer(karna_map);
  stateColorLayer.removeLayer(kerala_map);
  stateColorLayer.removeLayer(madhyapradesh_map);
  stateColorLayer.removeLayer(manipur_map);
  stateColorLayer.removeLayer(megha_map);
  stateColorLayer.removeLayer(mizoram_map);
  stateColorLayer.removeLayer(nagaland_map);
  stateColorLayer.removeLayer(odisha_map);
  stateColorLayer.removeLayer(punb_map);
  stateColorLayer.removeLayer(rajas_map);
  stateColorLayer.removeLayer(sikkim_map);
  stateColorLayer.removeLayer(tamil_map);
  stateColorLayer.removeLayer(telan_map);
  stateColorLayer.removeLayer(uttrakhand_map);
  stateColorLayer.removeLayer(uttarPradesh_map);
  stateColorLayer.removeLayer(westBengal_map);
  stateColorLayer.removeLayer(maha_map);
  stateColorLayer.removeLayer(delhi_map);
  stateColorLayer.removeLayer(andamanandnicobar_map);
  stateColorLayer.removeLayer(dadraandnagarhaveli_map);
  stateColorLayer.removeLayer(jammuandakashmir_map);
  stateColorLayer.removeLayer(ladakh_map);
  stateColorLayer.removeLayer(lakshadweep_map);
}

var districtPointerLayer = new L.LayerGroup();
districtPointerLayer.addTo(map);

function districtCoordinate() {
  marker4 = L.marker([19.093412, 74.746855]); //Ahmednagar
  marker5 = L.marker([20.710576, 77.00373]); //Akola
  marker6 = L.marker([20.937346, 77.760249]); //Amravati
  marker7 = L.marker([19.885543, 75.333441]); //Sambhaji Nagar
  marker8 = L.marker([21.169245, 79.657152]); //Bhandara
  marker9 = L.marker([18.987824, 75.763809]); //Beed
  marker10 = L.marker([20.532223, 76.181689]); //Buldhana
  marker11 = L.marker([19.951685, 79.295823]); //Chandrapur
  marker13 = L.marker([20.90441, 74.781243]); //Dhule
  marker14 = L.marker([20.184794, 80.007887]); //Gadchiroli
  marker15 = L.marker([21.448734, 80.1972]); //Gondiya
  marker16 = L.marker([19.713154, 77.153409]); //Hingoli
  marker17 = L.marker([21.009559, 75.570044]); //Jalgaon
  marker18 = L.marker([19.848844, 75.901627]); //Jalna
  marker19 = L.marker([16.694394, 74.22406]); //Kohalpur
  marker20 = L.marker([18.401122, 76.576955]); //Latur
  marker21 = L.marker([18.987074, 72.830007]); //Mumbai
  marker22 = L.marker([19.054135, 72.832678]); //Mumbai(Suburban)
  marker23 = L.marker([21.148204, 79.096814]); //Nagpur
  marker24 = L.marker([19.159314, 77.313188]); //Nanded
  marker25 = L.marker([21.36675, 74.244736]); //Nandurbar
  marker26 = L.marker([20.006006, 73.795878]); //Nashik
  marker27 = L.marker([18.181663, 76.041686]); //Osmananbad
  marker28 = L.marker([19.268358, 76.777025]); //Parbhani
  marker30 = L.marker([18.646539, 72.875994]); //Raigad
  marker31 = L.marker([16.990597, 73.297537]); //Ratnagiri
  marker32 = L.marker([16.8542782, 74.5429002]); //Sangli
  marker33 = L.marker([17.690393, 74.010744]); //Satara
  marker34 = L.marker([16.107985, 73.714977]); //Sindhudurg
  marker35 = L.marker([17.672099, 75.907906]); //Solapur
  marker36 = L.marker([19.205931, 72.971198]); //Thane
  marker37 = L.marker([20.735221, 78.604456]); //Vardha
  marker38 = L.marker([20.108935, 77.142117]); //Washim
  marker39 = L.marker([20.3876, 78.131472]); //Yavatmal
  marker29 = L.marker([18.525994, 73.862602]); //Pune
  marker29.bindPopup("Welcome to PUNE ").openPopup();

}

function createDistrictLayer() {
  districtPointerLayer.addLayer(marker4);
  districtPointerLayer.addLayer(marker5);
  districtPointerLayer.addLayer(marker6);
  districtPointerLayer.addLayer(marker7);
  districtPointerLayer.addLayer(marker8);
  districtPointerLayer.addLayer(marker9);
  districtPointerLayer.addLayer(marker10);
  districtPointerLayer.addLayer(marker11);
  districtPointerLayer.addLayer(marker13);
  districtPointerLayer.addLayer(marker14);
  districtPointerLayer.addLayer(marker15);
  districtPointerLayer.addLayer(marker16);
  districtPointerLayer.addLayer(marker17);
  districtPointerLayer.addLayer(marker18);
  districtPointerLayer.addLayer(marker19);
  districtPointerLayer.addLayer(marker20);
  districtPointerLayer.addLayer(marker21);
  districtPointerLayer.addLayer(marker22);
  districtPointerLayer.addLayer(marker23);
  districtPointerLayer.addLayer(marker24);
  districtPointerLayer.addLayer(marker25);
  districtPointerLayer.addLayer(marker26);
  districtPointerLayer.addLayer(marker27);
  districtPointerLayer.addLayer(marker28);
  districtPointerLayer.addLayer(marker29);
  districtPointerLayer.addLayer(marker30);
  districtPointerLayer.addLayer(marker31);
  districtPointerLayer.addLayer(marker32);
  districtPointerLayer.addLayer(marker33);
  districtPointerLayer.addLayer(marker34);
  districtPointerLayer.addLayer(marker35);
  districtPointerLayer.addLayer(marker36);
  districtPointerLayer.addLayer(marker37);
  districtPointerLayer.addLayer(marker38);
  districtPointerLayer.addLayer(marker39);
}

function removeDistrictLayer() {
  districtPointerLayer.removeLayer(marker4);
  districtPointerLayer.removeLayer(marker5);
  districtPointerLayer.removeLayer(marker6);
  districtPointerLayer.removeLayer(marker7);
  districtPointerLayer.removeLayer(marker8);
  districtPointerLayer.removeLayer(marker9);
  districtPointerLayer.removeLayer(marker10);
  districtPointerLayer.removeLayer(marker11);
  districtPointerLayer.removeLayer(marker13);
  districtPointerLayer.removeLayer(marker14);
  districtPointerLayer.removeLayer(marker15);
  districtPointerLayer.removeLayer(marker16);
  districtPointerLayer.removeLayer(marker17);
  districtPointerLayer.removeLayer(marker18);
  districtPointerLayer.removeLayer(marker19);
  districtPointerLayer.removeLayer(marker20);
  districtPointerLayer.removeLayer(marker21);
  districtPointerLayer.removeLayer(marker22);
  districtPointerLayer.removeLayer(marker23);
  districtPointerLayer.removeLayer(marker24);
  districtPointerLayer.removeLayer(marker25);
  districtPointerLayer.removeLayer(marker26);
  districtPointerLayer.removeLayer(marker27);
  districtPointerLayer.removeLayer(marker28);
  districtPointerLayer.removeLayer(marker29);
  districtPointerLayer.removeLayer(marker30);
  districtPointerLayer.removeLayer(marker31);
  districtPointerLayer.removeLayer(marker32);
  districtPointerLayer.removeLayer(marker33);
  districtPointerLayer.removeLayer(marker34);
  districtPointerLayer.removeLayer(marker35);
  districtPointerLayer.removeLayer(marker36);
  districtPointerLayer.removeLayer(marker37);
  districtPointerLayer.removeLayer(marker38);
  districtPointerLayer.removeLayer(marker39);
}

let baner = {
  lat: 18.5599704,
  long: 73.7632012,
  counter: 11,
};
let vimanNagar = {
  lat: 18.5668967,
  long: 73.9071862,
  counter: 100,
};
let hadapar = {
  lat: 18.4972495,
  long: 73.8982188,
  counter: 22,
};
let alandi = {
  lat: 18.676903,
  long: 73.8728323,
  counter: 3,
};

let banerCityPlot1 = {
  lat: 18.5584495,
  long: 73.7848266,
  // counter: 11,
};

let banerCityPlot2 = {
  lat: 18.5602899,
  long: 73.7821876,
  // counter: 11,
};

let banerCityPlot3 = {
  lat: 18.5560089,
  long: 73.7839346,
  // counter: 11,
};

let banerCityPlot4 = {
  lat: 18.561157,
  long: 73.787161,
  // counter: 11,
};



var INDIA_DATA = [
  { y: 30, indexLabel: "IONET Infrastructure",name: "IONET Infrastructure", exploded: true, color:"#4284F4" },
  { y: 22, indexLabel: "Active IONET",name: "Active IONET", color:"#34A853" },
  { y: 60, indexLabel: "Active Vehicles", name: "Active Vehicles", color:"#FBBC05" },
  { y: 99, indexLabel: "No. of Vehicles that can Run", name: "No. of Vehicles that can Run", exploded: true, color: "#EA4335" },
]

var MAHARASHTRA_DATA = [
  { y: 11, indexLabel: "IONET Infrastructure", name: "IONET Infrastructure",exploded: true, color:"#4284F4" },
  { y: 9, indexLabel: "Active IONET",name: "Active IONET", color:"#34A853" },
  { y: 25, indexLabel: "Active Vehicles", name: "Active Vehicles", color:"#FBBC05" },
  { y: 55, indexLabel: "No. of Vehicles that can Run", name: "No. of Vehicles that can Run", exploded: true, color: "#EA4335" },
]

var DISTRICT_DATA = [
  { y: 7, indexLabel: "IONET Infrastructure", name: "IONET Infrastructure",exploded: true, color:"#4284F4" },
  { y: 5, indexLabel: "Active IONET",name: "Active IONET", color:"#34A853" },
  { y: 15, indexLabel: "Active Vehicles", name: "Active Vehicles", color:"#FBBC05" },
  { y: 40, indexLabel: "No. of Vehicles that can Run", name: "No. of Vehicles that can Run", exploded: true, color: "#EA4335" },
]

var TALUKA_DATA = [
  { y: 5, indexLabel: "IONET Infrastructure",name: "IONET Infrastructure", exploded: true, color:"#4284F4" },
  { y: 3, indexLabel: "Active IONET",name: "Active IONET", color:"#34A853" },
  { y: 12, indexLabel: "Active Vehicles", name: "Active Vehicles", color:"#FBBC05" },
  { y: 30, indexLabel: "No. of Vehicles that can Run", name: "No. of Vehicles that can Run", exploded: true, color: "#EA4335" },
]

var AREA_DATA = [
  { y: 2, indexLabel: "IONET Infrastructure",name: "IONET Infrastructure", exploded: true, color:"#4284F4" },
  { y: 2, indexLabel: "Active IONET",name: "Active IONET", color:"#34A853" },
  { y: 12, indexLabel: "Active Vehicles", name: "Active Vehicles", color:"#FBBC05" },
  { y: 20, indexLabel: "No. of Vehicles that can Run", name: "No. of Vehicles that can Run", exploded: true, color: "#EA4335" },
]


// var cityPointerLayer = new L.LayerGroup();
// cityPointerLayer.addTo(map);

// var cityArray = [baner, vimanNagar, hadapar, alandi];

// var plotPointMarker = [];

// function createCityLayer() {
//   console.log("adding city");
//   for (let i = 0; i < cityArray.length; i++) {
//     const lat = cityArray[i].lat;
//     const long = cityArray[i].long;
//     plotPointMarker[i] = L.marker([lat, long], {
//       icon: L.divIcon({
//         className: "number-icon",
//         html:
//           '<div class="back-num"><div class="marker-number" onclick()="hello()">' +
//           cityArray[i].counter +
//           "</div></div>",
//         iconSize: [30, 30],
//         iconAnchor: [15, 15],
//       }),
//     });
//     cityPointerLayer.addLayer(plotPointMarker[i]);
//   }
// }

// function removeCityLayer() {
//   for (let i = 0; i < cityArray.length; i++) {
//     cityPointerLayer.removeLayer(plotPointMarker[i]);
//   }
// }


// //Pie Chart
//   var load = function (dataPoints) {
//     var chart = new CanvasJS.Chart("chartContainer",
//     {
//       animationEnabled: true,
      
        
        
//       legend:{
//         horizontalAlign: "right",
//         verticalAlign: "top"
//       },
//       data: [
//       {
//         explodeOnClick: false,
//        indexLabelPlacement: "outside",
//        type: "pie",
//        showInLegend: true,
//        toolTipContent: "{indexLabel}: <strong>{y}%</strong>",
// 		indexLabel: "{indexLabel} - {y}%",
//        dataPoints: dataPoints
//      }
//      ],
     
//    });
  
//     chart.render();
//   }

//   load()

//   function explodePie (e) {
//     if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
//       e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
//     } else {
//       e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
//     }
//     e.chart.render();
  
//   }

var maxIi= 3000;
var maxE_Veh= 360000;
var maxEVM= 140;
var maxAIS= 360000;
var maxAV= 360000;

let inputArray = [1200,144000,100,250000,140000 ];
inputArray[0];

function calculator(maxValue,actualValue){
  let x = (actualValue *100)/maxValue;
  console.log("x - ",x); 
  return x;
}

function remainder(maxValue,actualValue){
  let z = 100 - calculator(maxValue,actualValue);
  console.log("z - ",z);
  return z;
}

function calculatorValue(maxValue,actualValue){
let value = maxValue-actualValue;
return value;
}


window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light1", //"light1", "dark1", "dark2"
    
    axisY:{
      gridThickness: 0,
      interval: 10,
      suffix: "%"
    },
    toolTip:{
      shared: true
    },
    data:[{
      type: "stackedBar100",
      toolTipContent: "{label}<br><b>{name}:</b> {w} (#percent%)",
     
      
      name: "Currently Active",
      dataPoints: [
        { y: calculator(maxIi,inputArray[0]), w: inputArray[0], label: "IONET Infrastructure",color: "#AC14FF" },
        { y: calculator(maxE_Veh,inputArray[1]),w: inputArray[1], label: "E- Vehicles",color: "#2F3C7E" },
        { y: calculator(maxEVM,inputArray[2]), w: inputArray[2],label: "EVMs" ,color: "#FF0230"},
        { y: calculator(maxAIS,inputArray[3]),w: inputArray[3],  label: "Active IONET Stations" ,color: "#69C22C"},
        { y: calculator(maxAV,inputArray[4]), w: inputArray[4], label: "Active Vehicles" ,color: "#1F66C2"}
      ]
      },
      {
        type: "stackedBar100",
        toolTipContent: "<b>Remaining:</b> #percent%<br><b>{name}:</b> {v}",
        
        
        name: "Total",
        dataPoints: [
          { y: remainder(maxIi, inputArray[0]), v: maxIi, label: "IONET Infrastructure", color: "#ABB6FF"},
          { y: remainder(maxE_Veh, inputArray[1]), v: maxE_Veh, label: "E- Vehicles", color: "#ABB6FF" },
          { y: remainder(maxEVM, inputArray[2]), v:maxEVM, label: "EVMs", color: "#ABB6FF" },
          { y: remainder(maxAIS, inputArray[3]), v: maxAIS, label: "Active IONET Stations", color: "#ABB6FF" },
          { y: remainder(maxAV, inputArray[4]), v:maxAV, label: "Active Vehicles", color: "#ABB6FF" }
        ]
      }, 
      ]
  });
  chart.render();
  
  }

//MIDPOINT-FINDER  
//   let _pointA,
//   _pointB,
//   _polyline,
//   markerA=null,
//   markerB=null;
  
//   map.on('click', (e) =>{
//       if(!_pointA){
//           _pointA = e.latlng;
//           markerA = L.marker(_pointA).addTo(map);
//       }
//       else if(!_pointB){
//           _pointB = e.latlng;
//           markerB = L.marker(_pointB).addTo(map);
  
          
//       let length = map.distance(_pointA,_pointB);
//       console.log("Point A :: ",_pointA);
//       console.log("Point A :: ",_pointB);
//       console.log(" Length :: ",length);
//       _plotMidpoint = (length/2).latlng;
//       console.log(" Plot :: ",_plotMidpoint);
//       //document.getElementById('length').innerHTML = length; 
  
//       var bounds = L.latLngBounds(_pointA,_pointB)
//       var center = bounds.getCenter();
//       var marker = L.marker(center).addTo(map);
//    } 
// })

let numberarray=[69,12,53,24,5,16,57,68,39,22,24,84,62,24];
var talukaPointerLayer = new L.LayerGroup();
talukaPointerLayer.addTo(map);

var tempMarkerOptions = {
  icon: L.divIcon({
    className: "number-icon",
    html: `<div class="num-marker-block"><div class="marker-with-number"><img src="../icon/pointer.png" class="pointer"></div><p class="pa"> ${"96"} </p></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  }),
};

function callTalukaMarker(param){
  var tempMarkerOptions = {
    icon: L.divIcon({
      className: "number-icon",
      html: `<div class="num-marker-block"><div class="marker-with-number"><img src="../icon/pointer.png" class="pointer"></div><p class="pa"> ${param} </p></div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    }),
  };
  return tempMarkerOptions;
}

// var talukaMarkerOption = L.icon({
//   iconUrl: 'logo.png',
//   iconSize: [25, 41],
//   // html: '<p>30</p>',
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41]
// });

function talukaCoordinates() {
  puneCity = L.marker(
    [18.516725920392943, 73.85683364344564],
    callTalukaMarker(numberarray[0])   // tempMarkerOptions
  );
  khed = L.marker([17.720412698735185, 73.3986479464395], callTalukaMarker(numberarray[1]));
  ambegaon = L.marker(
    [19.113141532671573, 73.73215975793835],
    callTalukaMarker(numberarray[2])
  );
  junnar = L.marker([19.203233385244506, 73.87440913932343], callTalukaMarker(numberarray[3]));
  shirur = L.marker([18.825097663817857, 74.37787051927316], callTalukaMarker(numberarray[4]));
  daund = L.marker([18.463512388033795, 74.58330759179957], callTalukaMarker(numberarray[5]));
  indapur = L.marker([18.11798886581777, 75.02351698912831], callTalukaMarker(numberarray[6]));
  baramati = L.marker(
    [18.179645668086614, 74.60878595388832],
    callTalukaMarker(numberarray[7])
  );
  purandhar = L.marker(
    [18.277320472506954, 73.96970729177563],
    callTalukaMarker(numberarray[8])
  );
  haveli = L.marker([18.631873583649902, 73.79918713721247], callTalukaMarker(numberarray[9]));
  bhor = L.marker([18.146200798035522, 73.84304866732006], callTalukaMarker(numberarray[10]));
  velhe = L.marker([18.29597330028324, 73.63804220567707], callTalukaMarker(numberarray[11]));
  mulshi = L.marker([18.500304934023543, 73.51374871279275], callTalukaMarker(numberarray[12]));
  maval = L.marker([18.755201993705825, 73.44477254714131], callTalukaMarker(numberarray[13]));

  // puneCity.setIcon(talukaMarkerOption);
  // khed.setIcon(talukaMarkerOption);
  // ambegaon.setIcon(talukaMarkerOption);
  // junnar.setIcon(talukaMarkerOption);
  // shirur.setIcon(talukaMarkerOption);
  // daund.setIcon(talukaMarkerOption);
  // indapur.setIcon(talukaMarkerOption);
  // baramati.setIcon(talukaMarkerOption);
  // purandhar.setIcon(talukaMarkerOption);
  // haveli.setIcon(talukaMarkerOption);
  // bhor.setIcon(talukaMarkerOption);
  // velhe.setIcon(talukaMarkerOption);
  // mulshi.setIcon(talukaMarkerOption);
  // maval.setIcon(talukaMarkerOption);
}

function createTalukaLayer() {
  talukaPointerLayer.addLayer(puneCity);
  talukaPointerLayer.addLayer(khed);
  talukaPointerLayer.addLayer(ambegaon);
  talukaPointerLayer.addLayer(junnar);
  talukaPointerLayer.addLayer(shirur);
  talukaPointerLayer.addLayer(daund);
  talukaPointerLayer.addLayer(indapur);
  talukaPointerLayer.addLayer(baramati);
  talukaPointerLayer.addLayer(purandhar);
  talukaPointerLayer.addLayer(haveli);
  talukaPointerLayer.addLayer(bhor);
  talukaPointerLayer.addLayer(velhe);
  talukaPointerLayer.addLayer(mulshi);
  talukaPointerLayer.addLayer(maval);
}

function removeTalukaLayer() {
  talukaPointerLayer.removeLayer(puneCity);
  talukaPointerLayer.removeLayer(khed);
  talukaPointerLayer.removeLayer(ambegaon);
  talukaPointerLayer.removeLayer(junnar);
  talukaPointerLayer.removeLayer(shirur);
  talukaPointerLayer.removeLayer(daund);
  talukaPointerLayer.removeLayer(indapur);
  talukaPointerLayer.removeLayer(baramati);
  talukaPointerLayer.removeLayer(purandhar);
  talukaPointerLayer.removeLayer(haveli);
  talukaPointerLayer.removeLayer(bhor);
  talukaPointerLayer.removeLayer(velhe);
  talukaPointerLayer.removeLayer(mulshi);
  talukaPointerLayer.removeLayer(maval);
}

var area1;
var area2;
var area3;
var area4;

var actual1;
var actual2;
var actual3;
var actual4;

var areaPointerLayer = new L.LayerGroup();
areaPointerLayer.addTo(map);

var areaMarkerOptions = {
  icon: L.divIcon({
    className: "number-icon",
    html:
      '<div class="back-num"><div class="marker-number" onclick()="hello()">' +
      12 +
      "</div></div>",
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  }),
};

function areaCoordinates() {
  area1 = L.marker([18.508685638671114, 73.8572342693554], areaMarkerOptions);
  area2 = L.marker([18.51784189711749, 73.86118248112282], areaMarkerOptions);
  area3 = L.marker([18.5071392000364, 73.8401968772293], areaMarkerOptions);
  area4 = L.marker([18.52008001912207, 73.85350063429767], areaMarkerOptions);
}

function createAreaLayer() {
  areaPointerLayer.addLayer(area1);
  areaPointerLayer.addLayer(area2);
  areaPointerLayer.addLayer(area3);
  areaPointerLayer.addLayer(area4);
}

function removeAreaLayer() {
  areaPointerLayer.removeLayer(area1);
  areaPointerLayer.removeLayer(area2);
  areaPointerLayer.removeLayer(area3);
  areaPointerLayer.removeLayer(area4);
}

var actualPointerLayer = new L.LayerGroup();
actualPointerLayer.addTo(map);

var iconOptionsOn = {
  iconUrl: "../icon/on.png",
  iconSize: [38, 45],
};

var iconOptionsOff = {
  iconUrl: "../icon/off.png",
  iconSize: [39, 45],
};

var customIconOn = L.icon(iconOptionsOn);
var customIconOff = L.icon(iconOptionsOff);

var actualMarkerOptionsOn = {
  title: "MyLocation",
  clickable: true,
  draggable: false,
  icon: customIconOn,
};

var actualMarkerOptionsOff = {
  title: "MyLocation",
  clickable: true,
  draggable: false,
  icon: customIconOff,
};

function actualPlotedLocation() {
  actual1 = L.marker(
    [18.506756337381056, 73.83966526879396],
    actualMarkerOptionsOn
  );
  actual2 = L.marker(
    [18.50667144578658, 73.84111866933874],
    actualMarkerOptionsOff
  );
  actual3 = L.marker(
    [18.50588744495379, 73.84025505452227],
    actualMarkerOptionsOn
  );
  actual4 = L.marker(
    [18.508685638671114, 73.8572342693554],
    actualMarkerOptionsOff
  );
}


if(window.innerWidth <576){
  document.getElementById("map").style.height="50vh";
}



function createActualPlotLayer() {
  actualPointerLayer.addLayer(actual1);
  actualPointerLayer.addLayer(actual2);
  actualPointerLayer.addLayer(actual3);
  actualPointerLayer.addLayer(actual4);
  
}



function removeActualPlotLayer() {
  actualPointerLayer.removeLayer(actual1);
  actualPointerLayer.removeLayer(actual2);
  actualPointerLayer.removeLayer(actual3);
  actualPointerLayer.removeLayer(actual4);
}
// // Adding popup to the marker
// actual1.bindPopup('This is Tutorialspoint').openPopup();
// actual1.addTo(map); // Adding marker to the map

// // Adding popup to the marker
// actual2.bindPopup('This is Tutorialspoint').openPopup();
// actual2.addTo(map); // Adding marker to the map
// // Adding popup to the marker
// actual3.bindPopup('This is Tutorialspoint').openPopup();
// actual3.addTo(map); // Adding marker to the map
// // Adding popup to the marker
// actual4.bindPopup('This is Tutorialspoint').openPopup();
// actual4.addTo(map); // Adding marker to the map

function makeWorldGraph(xValues, yValues, ledgend) {
  new CanvasJS.Chart("myChart", {
    title: {
      text: "IORD Network",
    },

    data: [
      {
        indexLabelPlacement: "outside",
        type: "pie",
        dataPoints: dataPoints,
      },
    ],
  });
  chart.render();

}

map.on("zoomend", function () {
  let zoomLevel = map.getZoom();
  console.log(" --->", zoomLevel);
  if (zoomLevel > 4 && zoomLevel < 7) {
    try {
      removeStateLayer();
    } catch (error) {}
    try {
      removeDistrictLayer();
    } catch (error) {}
    try {
      removeTalukaLayer();
    } catch (error) {}
    try {
      removeAreaLayer();
    } catch (error) {}

    createStateLayer();
    //load(INDIA_DATA);
    // makeWorldGraph(WORLD_X_VALUE, WORLD_Y_VALUE, WORLD_LEDGEND);
  } else if (zoomLevel > 6 && zoomLevel < 9) {
    // console.log("zoomLevel > 6 && zoomLevel < 9");
    try {
      removeStateLayer();
    } catch (error) {}
    try {
      removeDistrictLayer();
    } catch (error) {}
    try {
      removeTalukaLayer();
    } catch (error) {}
    try {
      removeAreaLayer();
    } catch (error) {}

    createStateLayer();
    //load(MAHARASHTRA_DATA);
    districtCoordinate();
    createDistrictLayer();
  } else if (zoomLevel > 8 && zoomLevel < 13) {
    // console.log("zoomLevel > 9 && zoomLevel < 13 ");
    try {
      removeStateLayer();
    } catch (error) {}
    try {
      removeDistrictLayer();
    } catch (error) {}
    try {
      removeTalukaLayer();
    } catch (error) {}
    try {
      removeAreaLayer();
    } catch (error) {}
    //load(DISTRICT_DATA);
    removeDistrictLayer();
    talukaCoordinates();
    createTalukaLayer();
    makeWorldGraph(STATE_X_VALUE, STATE_Y_VALUE, STATE_LEDGEND);
  } else if (zoomLevel >= 13 && zoomLevel <= 16) {
    // console.log("zoomLevel >= 14 && zoomLevel <=18");
    try {
      removeStateLayer();
    } catch (error) {}
    try {
      removeDistrictLayer();
    } catch (error) {}
    try {
      removeTalukaLayer();
    } catch (error) {}
    try {
      removeAreaLayer();
    } catch (error) {}
    try {
      removeActualPlotLayer();
    } catch (error) {}
    //load(TALUKA_DATA);
    removeTalukaLayer();
    areaCoordinates();
    createAreaLayer();
  } else if (zoomLevel >= 17 && zoomLevel <= 20) {
    try {
      removeStateLayer();
    } catch (error) {}
    try {
      removeDistrictLayer();
    } catch (error) {}
    try {
      removeTalukaLayer();
    } catch (error) {}
    try {
      removeAreaLayer();
    } catch (error) {}
    try {
      removeActualPlotLayer();
    } catch (error) {}
    //load(AREA_DATA);
    actualPlotedLocation();
    createActualPlotLayer();
  } else {
    try {
      removeStateLayer();
    } catch (error) {}
    try {
      removeDistrictLayer();
    } catch (error) {}
    try {
      removeTalukaLayer();
    } catch (error) {}
    try {
      removeAreaLayer();
    } catch (error) {}
    try {
      removeActualPlotLayer();
    } catch (error) {}
  }
});

function onMouseEvents() {}