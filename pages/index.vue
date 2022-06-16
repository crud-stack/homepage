<template>
  <div>
    <b-container>
      <section style="text-align: center; margin-top: 200px; margin-bottom: 100px;">
        <h6 id="basic-usage1" class="bv-no-focus-ring lead">
          <span class="bd-content-title">(주) 크루드 시스템<a class="anchorjs-link" href="#basic-usage" aria-labelledby="basic-usage"></a></span>
        </h6>
        <h4 class="">
          기업과 고객을 쉽게 연결하는<br/><strong style="font-weight: 900">IT 서비스 기업</strong>
        </h4>
      </section>
    </b-container>
    <b-container>
      <Slider/>
    </b-container>
    <div class="b-margin"></div>
    <b-container class="px-4 py-5">
      <Service/>
    </b-container>
    <div class="b-margin"></div>
    <b-container class="px-4 py-5">
      <Customer/>
    </b-container>
    <b-container class="px-4 py-5">
      <GoogleMap/>
    </b-container>
  </div>
</template>

<style>
  .b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 0.5em 1.5em rgb(0 0 0 / 10%), inset 0 0.125em 0.5em rgb(0 0 0 / 15%);
  }
  .b-margin{
    margin-top: 100px;
  }
</style>

<script>
    import Slider from '../components/index/Slider.vue'
    import Service from '../components/index/Service.vue'
    import Customer from '../components/index/Customer.vue'
    import GoogleMap from '../components/index/GoogleMap.vue'
    export default {
        name: 'index',
        components: {
            Slider,
            Customer,
            Service,
            GoogleMap
        },
    }
</script>
