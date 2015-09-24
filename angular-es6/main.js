'use strict';

(function(){
    let app = angular.module('app',[]);

    app.controller('TestController', $http => {
        "ngInject";
        $http.get('http://sncr01wbingsqa1.ncr.int.ec.gc.ca/arcgis/rest/services/data_donnees/3c2ed0da-6bac-4c92-9056-2716d5787ab7/MapServer/0?f=pjson');
    });

    app.controller('AnotherController', function ($http) {
        $http.get('http://sncr01wbingsqa1.ncr.int.ec.gc.ca/arcgis/rest/services/data_donnees/3c2ed0da-6bac-4c92-9056-2716d5787ab7/MapServer/0?f=pjson');
    });

}());
