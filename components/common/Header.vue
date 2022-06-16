<template>
    <div>
        <header class="d-flex flex-wrap align-items-center sticky-top justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
        style="position: fixed; width: 100%; z-index: 2000; top:0; left:0; right:0; background: white;"
        >
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" style="padding-left:200px;">
<!--                <img :src="require(`@/assets/logo.png`)" width="40" height="32" alt="">-->
                <span style="padding:10px;">크루드시스템</span>
            </a>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><router-link to="/" class="nav-link px-3 link-secondary">크루드시스템</router-link></li>
                <li><router-link to="/ssook" class="nav-link px-3 link-secondary">쑥 메세지</router-link></li>
<!--                <li><a href="#" class="nav-link px-3 link-secondary">헬프데스크</a></li>-->
                <li><router-link to="/question" class="nav-link px-3 link-secondary">문의하기</router-link></li>
            </ul>

            <div class="col-md-3 text-end">
                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" @click="onClickRedirect()" class="nav-link px-2 link-secondary">API 문서</a></li>
<!--                    <li><a href="#" class="nav-link px-2 link-secondary">회원가입</a></li>-->
<!--                    <li><a href="#" class="nav-link px-2 link-secondary">로그인</a></li>-->
                </ul>
            </div>

        </header>
    </div>
</template>

<script>
    export default {
        name: '',
        methods:{
            onClickRedirect(){
                window.open("https://document.ssookssook.io")
            }
        }
    }
</script>
