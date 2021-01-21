<template>
  <div class="Battery_C">
    <button @click="vibrationc">vibration</button>
    <button @click="bluetooth">bluetooth</button>
    <template v-if="device">
      <p>Device name: {{ device.name }}</p>
      <p>Device id: {{ device.id }}</p>
      <p>Is Connected: {{ device.connected }}</p>
    </template>
    <p>Payment Request API：为商家和用户提供一致的支付体验。</p>
    <p>Touch Events：提供相对底层的 API，可用于支持特定于应用程序的多点触控交互，如双指手势。</p>
    <p>Page Visibility：提供可供监视的事件，以了解文档何时可见或隐藏。</p>
    <p>Channel Messaging API：另一种在浏览上下文中发送消息的好方法。然而，与广播不同的是，它是一对一地发送信息。</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      device: null
    }
  },
  created () {},
  mounted () {
    this.init();
  },
  methods: {
    init() {
      navigator.getBattery().then(battery => {
        console.log('Battery charging? ' + (battery.charging ? 'Yes' : 'No'));
        console.log('Battery level: ' + battery.level * 100 + '%');
        console.log('Battery charging time: ' + battery.chargingTime + ' seconds');
        console.log('Battery discharging time: ' + battery.dischargingTime + ' seconds');
        // handle the charging change event
        battery.addEventListener('chargingchange', function () {
          console.log('Battery charging? ' + (battery.charging ? 'Yes' : 'No'));
        });
        // handle charge level change
        battery.addEventListener('levelchange', function () {
          console.log('Battery level: ' + battery.level * 100 + '%');
        });
        // handle charging time change
        battery.addEventListener('chargingtimechange', function () {
          console.log( 'Battery charging time: ' + battery.chargingTime + ' seconds');
        });
        // handle discharging time change
        battery.addEventListener('dischargingtimechange', function () {
          console.log('Battery discharging time: ' + battery.dischargingTime + ' seconds');
        });
      });
      const connection = navigator.connection;

      console.log(`Network Type: ${connection.effectiveType}`);
      console.log(`Round Trip Time(rtt): ${connection.rtt}`);
      // console.log(`Bandwidth estimate(in MBPS): ${connection.downlink}`);
      // console.log(`Max Bandwidth estimate(in MBPS): ${connection.downlink}`);
      console.log(`Save data enabled: ${connection.saveData}`);
      // console.log(`Device Connection Type: ${connection.effectiveType}`);
    },
    vibrationc() {
      navigator.vibrate(2000);
      // if (start) {
      //   navigator.vibrate(2000);
      // } else {
      //   navigator.vibrate(0);
      // }
    },
    bluetooth() {
      navigator.bluetooth.requestDevice({
        acceptAllDevices: true
      }).then(device => {
        this.device = device
        // setDeviceName(device.name);
        // setDeviceId(device.id)
        // setDeviceConnected(device.connected);
      }).catch(err => {
        console.log(err);
        // setError(true);
      })
    }
  }
}
</script>

<style>
</style>
