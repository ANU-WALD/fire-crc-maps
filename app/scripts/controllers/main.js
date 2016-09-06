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
        },  //overlays.mask
        fmc: {
          name: 'Fuel Moisture Conent',
//          url: 'http://dapds00.nci.org.au/thredds/wms/ub8/au/FMC/MCD43A4.A2014329.h29v13.005.2014347051300_LFMC.nc?',
//          url: 'http://localhost:8080/thredds/wms/wald/ROI_Reprojected_Mosaic_LFMC_2015321.nc?',
          url: 'http://dapds00.nci.org.au/thredds/wms/ub8/au/FMC-testing/ROI_Reprojected_Mosaic_LFMC_2015321.nc?',
          // service=WMS&version=1.3.0&request=GetCapabilities
          type: 'wms',
          visible: true,
          layerParams:{
            version: '1.3.0',
            format: 'image/png',
            layers:'Band1',
            colorscalerange:'0,350',
            transparent:true
          }
        }
      }
    }
  });
