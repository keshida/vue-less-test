<template>
  <div class="skeleton_C pagePosition">
    <div class="animate-2">
      <!--元素1-->
      <div class="item-1"></div>
      <!--元素2-->
      <div class="item-2"></div>
      <!--元素3-->
      <div class="item-3"></div>
    </div>
    <div class="animate-3">
    <!--运动模块1-->
    <div class="s-1">
        <div class="item-1"></div>
        <!--运动模块2-->
        <div class="s-2">
            <div class="item-2"></div>
            <!--运动模块3-->
            <div class="s-3">
                <div class="item-3"></div>
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {
    
  }
}
</script>
<style>
.item-1 {
  width: 26px;
  height: 80px;
  background-image: url('../../assets/images/csstest/16edf46e72482372.png');
  background-position: 0 0;
  background-size: 200px;
  background-repeat: no-repeat;
}
.item-2 {
  width: 145px;
  height: 207px;
  background-image: url('../../assets/images/csstest/16edf46e72482372.png');
  background-position: -27px 0;
  background-size: 200px;
  background-repeat: no-repeat;
}
.item-3 {
  width: 28px;
  height: 68px;
  background-image: url('../../assets/images/csstest/16edf46e72482372.png');
  background-position: -172px 0;
  background-size: 200px;
  background-repeat: no-repeat;
}

.animate-2 {
  width: 160px;
}
.animate-2 .item-1 {
    /* 设置margin是为了定位，使其部分重叠在一起 */
    margin-bottom: -8px;
    margin-left: 59px;
    position: relative;
    z-index: 1;
    animation: swing2-1 1s ease-in-out infinite;
    transform: rotate(-3deg);
    transform-origin: top center;
}
.animate-2 .item-2 {
    animation: swing2-2 1s ease-in-out infinite;
    transform: rotate(5deg);
    transform-origin: top center;
}
.animate-2 .item-3 {
    margin-top: -5px;
    margin-left: 57px;
    position: relative;
    animation: swing2-3 1s ease-in-out infinite;
    transform: rotate(-5deg);
    transform-origin: top center;
}
@keyframes swing2-1 {
    0% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg);}
    100% { transform: rotate(-3deg);}
}
@keyframes swing2-2 {
    0% { transform: rotate(5deg); }
    50% { transform: rotate(-5deg);}
    100% { transform: rotate(5deg);}
}
@keyframes swing2-3 {
    0% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg);}
    100% { transform: rotate(-5deg);}
}
.animate-3 .s-1 {
    animation: swing3-1 1s ease-in-out infinite;
    transform: rotate(-3deg);
    transform-origin: top center;
}
.animate-3 .s-2 {
    animation: swing3-2 1s ease-in-out infinite;
    transform: rotate(-5deg);
    transform-origin: top center;
}
.animate-3 .s-3 {
    animation: swing3-3 1s ease-in-out infinite;
    transform: rotate(-5deg);
    transform-origin: top center;
}
@keyframes swing3-1 {
    0% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg);}
    100% { transform: rotate(-3deg);}
}
@keyframes swing3-2 {
    0% { transform: rotate(5deg); }
    50% { transform: rotate(-5deg);}
    100% { transform: rotate(5deg);}
}
@keyframes swing3-3 {
    0% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg);}
    100% { transform: rotate(-5deg);}
}

</style>
