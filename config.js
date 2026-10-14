// 관리자 설정 파일. Firebase 콘솔 > 프로젝트 설정 > 내 앱 의 firebaseConfig 값. (README.md 참고)
window.APP_CONFIG = {
  title: "특별새벽기도회 드럼 배정표",
  startMonth: "2026-11",
  // 이름 → 사진 파일. photos/ 폴더에 넣고 여기에 한 줄 추가하면 그 이름으로 등록할 때 사진이 뜹니다.
  photos: {
    "심수정": "photos/simsujeong.jpg",
    "이충헌": "photos/leechungheon.jpg",
    "임완기": "photos/imwangi.jpg",
    "허승환": "photos/heoseunghwan.jpg",
    "허윤수": "photos/heoyunsu.jpg"
  },
  firebase: {
    apiKey: "AIzaSyB_GhF4ja7LLdQG_2eOwr0eMfydklvLuWs",
    authDomain: "early-morning-schedule.firebaseapp.com",
    databaseURL: "https://early-morning-schedule-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "early-morning-schedule",
    storageBucket: "early-morning-schedule.firebasestorage.app",
    messagingSenderId: "471321438634",
    appId: "1:471321438634:web:88c2e5ab075bd9f8ba63d3"
  }
};
