var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_kuzhalmannam_2 = new ol.format.GeoJSON();
var features_kuzhalmannam_2 = format_kuzhalmannam_2.readFeatures(json_kuzhalmannam_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kuzhalmannam_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kuzhalmannam_2.addFeatures(features_kuzhalmannam_2);
var lyr_kuzhalmannam_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kuzhalmannam_2, 
                style: style_kuzhalmannam_2,
                popuplayertitle: 'kuzhalmannam',
                interactive: true,
    title: 'kuzhalmannam<br />\
    <img src="styles/legend/kuzhalmannam_2_0.png" /> AALINGAL<br />\
    <img src="styles/legend/kuzhalmannam_2_1.png" /> CHANTHAPURA<br />\
    <img src="styles/legend/kuzhalmannam_2_2.png" /> CHARAPARAMBU<br />\
    <img src="styles/legend/kuzhalmannam_2_3.png" /> CHITHALI<br />\
    <img src="styles/legend/kuzhalmannam_2_4.png" /> KALAPPETTY<br />\
    <img src="styles/legend/kuzhalmannam_2_5.png" /> KALLENKONAM<br />\
    <img src="styles/legend/kuzhalmannam_2_6.png" /> KANNANUR<br />\
    <img src="styles/legend/kuzhalmannam_2_7.png" /> KARINJAMTHODI<br />\
    <img src="styles/legend/kuzhalmannam_2_8.png" /> KULAVANMUKKU<br />\
    <img src="styles/legend/kuzhalmannam_2_9.png" /> MANJADI<br />\
    <img src="styles/legend/kuzhalmannam_2_10.png" /> MANNAM<br />\
    <img src="styles/legend/kuzhalmannam_2_11.png" /> MANNIRADU<br />\
    <img src="styles/legend/kuzhalmannam_2_12.png" /> PERUMKUNNAM<br />\
    <img src="styles/legend/kuzhalmannam_2_13.png" /> POOPLIKAD<br />\
    <img src="styles/legend/kuzhalmannam_2_14.png" /> PULLUPARA<br />\
    <img src="styles/legend/kuzhalmannam_2_15.png" /> PUTHANTHARA<br />\
    <img src="styles/legend/kuzhalmannam_2_16.png" /> PUTHUCODE<br />\
    <img src="styles/legend/kuzhalmannam_2_17.png" /> THEKKINKADU<br />\
    <img src="styles/legend/kuzhalmannam_2_18.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_kuzhalmannam_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_kuzhalmannam_2];
lyr_kuzhalmannam_2.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_kuzhalmannam_2.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_kuzhalmannam_2.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_kuzhalmannam_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});