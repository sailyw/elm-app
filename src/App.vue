<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  created() {
    this.getLocation();
  },
  methods: {
    getLocation() {
      const self = this;
      // eslint-disable-next-line no-undef
      AMap.plugin("AMap.Geolocation", function() {
        // eslint-disable-next-line no-undef
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
        });

        geolocation.getCurrentPosition();
        // eslint-disable-next-line no-undef
        AMap.event.addListener(geolocation, "complete", onComplete);
        // eslint-disable-next-line no-undef
        AMap.event.addListener(geolocation, "error", onError);

        function onComplete(data) {
          // data是具体的定位信息 精准定位 pc端有可能出问题
          console.log(data);
        }

        function onError() {
          // 定位出错 非精准定位
          // console.log(data)
          self.getLngLatLocation();
        }
      });
    },
    // ip定位获取城市
    getLngLatLocation() {
      // eslint-disable-next-line no-undef
      AMap.plugin("AMap.CitySearch", function() {
        // eslint-disable-next-line no-undef
        var citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function(status, result) {
          if (status === "complete" && result.info === "OK") {
            // 查询成功，result即为当前所在城市信息
            console.log(result);
            // 逆向地理编码
            // eslint-disable-next-line no-undef
            AMap.plugin("AMap.Geocoder", function() {
              // eslint-disable-next-line no-undef
              var geocoder = new AMap.Geocoder({
                // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                // 获取当前所在编码
                city: result.adcode,
              });
              // 分解当前经纬度
              var lnglat = result.rectangle.split(";")[0].split(",");

              geocoder.getAddress(lnglat, function(status, data) {
                if (status === "complete" && data.info === "OK") {
                  // result为对应的地理位置详细信息
                  console.log(data)
                }
              });
            });
          }
        });
      });
    },
  },
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-size: 14px;
  background: #f1f1f1;
}
</style>
