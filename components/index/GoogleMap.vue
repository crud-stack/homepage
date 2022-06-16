<template>
    <div>
        <h2 class="pb-2 border-bottom">찾아오시는 길</h2>
        <b-row class="align-items-stretch g-4 py-5">
        <GMap
                :center='center'
                :zoom='15'
                style='width:100%;  height: 400px;'
        >
            <GMapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    @click="center=m.position"
            />
        </GMap>
        <p>주소: 04071 서울특별시 마포구 독막로 10 (성지빌딩) 509호</p>
        </b-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                center: { lat: 37.548568366369665, lng: 126.9144655426645 },
                currentPlace: null,
                markers: [{position:{lat:37.548568366369665, lng:126.9144655426645}}],
                places: [],
            }
        },
    };
</script>
