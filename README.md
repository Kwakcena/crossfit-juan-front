# 크로스핏 주안 예약자 현황

이 프로젝트는 크로스핏 주안 회원들이 몇시에 수업을 신청했는지 볼 수 있는 사이트 입니다.

![vllo](https://user-images.githubusercontent.com/45390172/227924888-e331dd7d-1323-4691-aba6-c79ab3140dff.GIF)

## 개발한 이유

크로스핏 주안 체육관은 수업 예약을 네이버 댓글로 합니다. (ex. 1900 곽형조 6962)

`[수업 시간] [이름] [번호 뒷자리]` 의 형식으로 예약을 하고 있는데, 이를 관리하는 코치님이 수작업으로 종합하여 네이버 댓글로 예약 현황을 업데이트 합니다.

이를 편하게 관리하실 수 있도록 버튼 한 번으로 수업 예약자를 볼 수 있도록 만들었습니다.

## 보안할 점
- 현재는 누구나 접속해서 확인할 수 있는데, 네이버 로그인 기능을 추가하여 카페에 가입 한 회원들만 확인할 수 있도록 합니다.
- `Next.js` 마이그레이션 작업이 진행 중입니다.
- `Prettier` 를 통해 크롤링 하는 과정에서 현재는 제 계정을 사용하도록 되어 있는데, 네이버 로그인 기능이 추가되면 로그인 한 사용자의 계정으로 크롤링합니다.
- 크롤링 방식의 속도를 늘리는 방법을 고민중입니다.

## 사용한 기술

### Front-end
- Typescript
- React
- Redux, Redux toolkit
- Webpack
- Jest
- PWA
- AWS amplify

### Back-end
- Node.js
- Express
- Prettier
- Jest
- EC2, Docker (CI/CD)
