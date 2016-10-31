'use strict';

/**
 * @ngdoc function
 * @name flammabilityApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flammabilityApp
 */
angular.module('flammabilityApp')
  .controller('MainCtrl', function ($scope) {
    var WMS_SERVER = 'http://hydrograph.flowmatters.com.au';


    $scope.bounds = {
      northEast: {
          lat: -0,
          lng: 175
      },
      southWest: {
        lat: -55,
        lng: 90
      }
    };

    $scope.year = 2015;
    $scope.tiles = [
      'h27v11',
      'h27v12',
      'h28v11',
      'h28v12',
      'h28v13',
      'h29v10',
      'h29v11',
      'h29v12',
      'h29v13',
      'h30v10',
      'h30v11',
      'h30v12',
      'h31v10',
      'h31v11',
      'h31v12',
      'h32v10',
      'h32v11',
    ];

    $scope.layers={
      overlays:{
        mask: {
          name: 'Ocean Mask',
          url: WMS_SERVER + '/public/wms?',
          type: 'wms',
          visible: true,
          layerParams: {
            version: '1.1.1',
            format: 'image/png',
            layers: 'public:water_polygons_simple25',
            transparent: true,
            showOnSelector: false,
            zIndex:100,
            tiled:true
          }
        }
      }
    };

    $scope.tiles.forEach(function(tile){
      $scope.layers.overlays['fmc_'+tile] = {
        name: 'Fuel Moisture Conent',
        url: 'http://dapds00.nci.org.au/thredds/wms/ub8/au/FMC/wgs84/WGS84.MCD43A4.'+$scope.year+'.'+tile+'.005.LFMC.nc?',
        type: 'wms',
        visible: true,
        layerParams:{
          version: '1.3.0',
          format: 'image/png',
          layers:'lfmc_mean',
          colorscalerange:'0,250',
          abovemaxcolor:'extend',
          transparent:true
        }
      };
    });
  });
