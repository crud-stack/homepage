<template>
  <div>
    <b-container style="text-align: center; margin-top: 200px; margin-bottom: 100px;">
      <h2 class="pb-2 border-bottom">문의하기</h2>
      <span>아래의 연락처로 문의주시면 신속하게 답변드리도록 하겠습니다.</span>
      <b-row class="mt-5">
        <b-col cols="12">
          <table class="table">
            <thead>
            <tr>
              <th>유형</th>
              <th>연락처</th>
              <th>운영시간</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">고객센터</th>
              <td>02-336-7800</td>
              <td>10:00 ~ 18:00</td>
            </tr>
            <tr>
              <th scope="row">이메일</th>
              <td>manggo@crudsystem.com</td>
              <td>10:00 ~ 18:00</td>
            </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
    export default {
        name: 'Index',
    }
</script>
