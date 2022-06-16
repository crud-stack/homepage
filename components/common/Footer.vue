<template>
    <div class="container">
        <div class="footer row py-5 my-5 border-top">
          <div class="col-sm-4 __middle">
              <div class="mr1"><img :src="require('@/static/logo.png')" width="30px;" class="mr-1" alt="">
                <strong style="font-size: 1rem;">(주)크루드시스템</strong>
              </div>
              <div class="mr1">04071 서울 마포구 독막로 10 (성지빌딩) 509호</div>
              <div class="mr1">사업자등록번호 : 379-87-01037</div>
              <div class="mr1">대표이사: 강민구</div>
              <div class="mr1">개인정보 보호책임: 강민구</div>
          </div>
          <div class="col-sm-4 __middle">
            <div class="mr1"><strong style="font-size: 1rem;">고객지원</strong></div>
            <div class="mr1">Mail. manggo@crudsystem.com</div>
            <div class="mr1">Tel. 02-336-7800</div>
            <div class="mr1">Fax. 02-336-7822</div>
          </div>
          <div class="col-sm-4 __middle">
            <div class="mr1"><router-link to="/terms/use" class="link-secondary"><strong style="font-size: 1rem;">이용약관</strong></router-link></div>
            <div class="mr1"><router-link to="/terms/private" class="link-secondary"><strong style="font-size: 1rem;">개인정보 처리방침</strong></router-link></div>
          </div>
        </div>
    </div>
</template>

<style>
    .mr1{
        margin-right: 10px;
    }
    .mr5{
        margin-right: 20px;
    }
    @media (max-width: 576px) {
      .__middle{
        margin-top: 30px;
      }
    }
    .__middle{
      font-size: 14px;
    }
</style>
