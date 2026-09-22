# 특별새벽기도회 드럼 배정표

카톡방 링크 하나로 누구나 들어와 가능한 날짜에 이름을 등록/삭제하는 실시간 달력.
GitHub Pages(정적 사이트) + Firebase Realtime Database(무료) 조합. 로그인·앱 설치 필요 없음.

## 최초 1회 설정 (관리자, 약 5분)

1. https://console.firebase.google.com 접속 → **프로젝트 추가** (이름 아무거나, 애널리틱스는 끄기)
2. 왼쪽 메뉴 **빌드 → Realtime Database → 데이터베이스 만들기**
   - 위치: `asia-southeast1` (싱가포르) 추천
   - 보안 규칙: **테스트 모드로 시작** → 사용 설정
3. Realtime Database 화면의 **규칙** 탭 → 내용을 이 저장소의 `database.rules.json` 내용으로 통째로 바꾸고 **게시**
   (테스트 모드 규칙은 30일 뒤 자동으로 잠기므로 꼭 교체)
4. 왼쪽 위 톱니바퀴 → **프로젝트 설정 → 내 앱 → 앱 추가 → 웹(</>)**
   - 닉네임 아무거나, "Firebase 호스팅" 체크 안 함 → 앱 등록
   - 나오는 `firebaseConfig`의 값(apiKey, authDomain, databaseURL, projectId, appId)을 `config.js`에 붙여 넣기
   - `databaseURL`이 안 보이면 Realtime Database 화면 상단의 `https://....firebasedatabase.app` 주소를 복사
5. `config.js` 저장 후 커밋/푸시 → 1~2분 뒤 사이트에 반영

## 사용
- 상단에 이름 입력 → 날짜 칸 **+ 등록**
- 이름 옆 ✕ 로 삭제 (남의 등록은 확인 창이 뜸)
- 다른 사람 화면에도 새로고침 없이 즉시 반영
- 제목/기본 월은 `config.js`의 `title`, `startMonth`로 변경
