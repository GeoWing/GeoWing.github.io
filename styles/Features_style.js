var size = 0;
var categories_Features = {"": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(255,255,255,0.08)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3})
    })],
"Curb_Impervious": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.08)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3})
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(146,160,171,0.08)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2})
    })],
"Curb_Road": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.08)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3})
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(68,170,28,0.08)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3})
    })],
"Fence": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(255,255,55,0.08)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2})
    })],
"Gutter": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(76,38,0,0.08)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3})
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(248,196,6,0.08)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3})
    })],
"Impervious_concrete": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(121,183,194,0.08)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0})
    })],
"Imperviuos_asphalt": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(99,89,164,0.08)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0})
    })],
"Rail": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(94,255,7,0.08)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2})
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(255,255,255,0.08)", lineDash: [1,5], lineCap: 'round', lineJoin: 'round', width: 2})
    })],
"Retaining_Wall": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(255,190,70,0.08)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3})
    })],
"Road_barrier": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.08)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2})
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(38,21,219,0.08)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2})
    })],
"Road_paved": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(200,21,176,0.08)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4})
    })],
"Trail": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.08)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2})
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(219,56,154,0.08)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2})
    })]};
var styleCache_Features={}
var style_Features = function(feature, resolution){
    var value = feature.get("Name");
    var style = categories_Features[value];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Features[key]){
        var text = new ol.style.Text({
              font: '10.725px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_Features[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Features[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};