<template>
    <div class="container">
        <footer class="row row-cols-5 py-5 my-5 border-top" style="font-size: 14px">
            <b-col cols="12" lg="12" md="12" sm="12" xl="12">
                <div class="felx d-flex mb-3">
                    <div class="mr5"><img :src="require('@/static/logo.png')" width="40px;" alt=""></div>
                    <div class="mr1"><router-link to="/terms/use" class="link-secondary">이용약관</router-link></div>
                    <div class="mr1"><router-link to="/terms/private" class="link-secondary">개인정보 처리방침</router-link></div>
                </div>
            </b-col>
            <b-col cols="12" lg="12" md="12" sm="12" xl="12">
                <div class="felx d-flex">
                    <div class="mr1"><strong>(주)크루드시스템</strong></div>
                    <div class="mr1">04071 서울 마포구 독막로 10 (성지빌딩) 509호</div>
                    <div class="mr1">사업자등록번호 : 379-87-01037</div>
                    <div class="mr1">대표이사: 강민구</div>
                </div>
            </b-col>
            <b-col cols="12" lg="12" md="12" sm="12" xl="12">
                <div class="felx d-flex">
                    <div class="mr1"><strong>고객지원</strong></div>
                    <div class="mr1">manggo@crudsystem.co.kr</div>
                    <div class="mr1">Tel. 02-336-7800</div>
                    <div class="mr1">Fax. 02-336-7822</div>
                    <div class="mr1">개인정보 보호책임 강민구</div>
                </div>
            </b-col>
            <b-col cols="12" lg="12" md="12" sm="12" xl="12">
                <div class="felx d-flex">
                    Copyright © 2022 Crud System Inc. All rights reserved.
                </div>
            </b-col>

<!--            <div class="col-12">-->

<!--                <h5>(주) 크루드시스템</h5>-->
<!--                <p>-->
<!--                    <span>대표자명: 강민구</span> <br/>-->
<!--                    <span>사업자번호: 379-87-01037</span> <br/>-->
<!--                    <span>Tel: 02-336-7800 | Fax: 02-336-7822</span> <br/>-->
<!--                    <span>Address: 04071 서울 마포구 독막로 10 (성지빌딩) 509호</span> <br/>-->
<!--                    <span>Email: crudsystem@crudsystsem.co.kr</span>-->
<!--                </p>-->
<!--            </div>-->
        </footer>
    </div>
</template>

<style>
    .mr1{
        margin-right: 10px;
    }
    .mr5{
        margin-right: 20px;
    }

</style>
