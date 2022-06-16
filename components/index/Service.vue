<template>
    <div>
        <h2 class="pb-2 border-bottom">사업 부분</h2>

        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div class="col">
                <div class="card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" :style="{'background-size':'cover','background-image' : 'url(https://contents.ssookssook.io/home/ssookmessage.jpg)'}">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">쑥 메세지</h2>
                        <ul class="d-flex list-unstyled mt-auto">
                            <li class="me-auto">
                                <span>기업 메세지 발송 시스템</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" :style="{'background-size':'cover','background-image' : 'url(https://contents.ssookssook.io/home/si.jpg)'}">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">시스템 통합</h2>
                        <ul class="d-flex list-unstyled mt-auto">
                            <li class="me-auto">
                                <span>시스템 구축 및 통합</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" :style="{'background-size':'cover','background-image' : 'url(https://contents.ssookssook.io/home/sm.jpg)'}">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                        <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">시스템 관리</h2>
                        <ul class="d-flex list-unstyled mt-auto">
                            <li class="me-auto">
                                <span>시스템 유지보수</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
