var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'Thunderforest Transport',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.thunderforest.com/transport/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>,&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var lyr_OrthoImagery = new ol.layer.Image({
                            opacity: 1,
                            title: "Ortho_Imagery",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/OrthoImagery.png",
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [4267, 1546],
                                imageExtent: [-13600352.199441, 4505870.354879, -13599754.781266, 4506143.198443]
                            })
                        });var format_Features = new ol.format.GeoJSON();
var features_Features = format_Features.readFeatures(geojson_Features, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Features = new ol.source.Vector();
jsonSource_Features.addFeatures(features_Features);var lyr_Features = new ol.layer.Vector({
                source:jsonSource_Features, 
                style: style_Features,
                title: "Features"
            });

lyr_OrthoImagery.setVisible(true);lyr_Features.setVisible(true);
var layersList = [baseLayer,lyr_OrthoImagery,lyr_Features];
