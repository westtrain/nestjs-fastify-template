# nestjs-fastify-template

## Stack

- HTTP server: Fastify
- Framework: NestJS
- Database: MongoDB
- Object Data Modeling: Mongoose
- Language: TypeScript, JavaScript

## Directory structure
```
my-app/
├── src/
│ ├── app.module.ts # 애플리케이션의 루트 모듈
│ ├── main.ts # 애플리케이션의 엔트리 포인트
│ ├── user/ # 사용자(User) 관련 모듈
│ │ ├── user.module.ts # 사용자 모듈 정의
│ │ ├── user.controller.ts # 사용자 컨트롤러 정의
│ │ ├── user.service.ts # 사용자 서비스 정의
│ │ ├── user.repository.ts # 사용자 리포지토리 정의
│ │ ├── user.schema.ts # 사용자 MongoDB 스키마 정의
│ ├── coupon/ # 쿠폰 관련 모듈 (예시)
│ │ ├── coupon.module.ts # 쿠폰 모듈 정의
│ │ ├── coupon.controller.ts # 쿠폰 컨트롤러 정의
│ │ ├── coupon.service.ts # 쿠폰 서비스 정의
│ │ ├── coupon.repository.ts # 쿠폰 리포지토리 정의
│ │ ├── coupon.schema.ts # 쿠폰 MongoDB 스키마 정의
│ ├── infra/ # 환경 설정 관련
│ │ ├── database.module.ts # 데이터베이스 모듈 및 설정
│ ├── request/ # 외부 서비스 호출 로직 관련
│ │ ├── scooter.service.ts # Scooter 서버 호출 로직
│ ├── common/ # 공통 유틸 및 인터셉터 등
│ │ ├── util/
│ │ │ ├── calculateTime.ts # 시간 계산 유틸
│ │ ├── interceptors/
│ │ ├── filters/
├── node_modules/ # NPM 패키지
├── package.json # 프로젝트 종속성 및 스크립트 정의
├── tsconfig.json # TypeScript 설정 파일
└── README.md # 프로젝트 설명 파일
```
## 각 모듈 내에서 컨틀롤러 위치

위 구조에서 컨트롤러들은 각 기능별 모듈 디렉토리에 위치합니다. 예를 들어, 사용자 관련 컨트롤러는 src/user/user.controller.ts에 위치하게 됩니다.

- user.controller.ts: 사용자 관련 HTTP 요청을 처리하는 컨트롤러입니다.
- user.service.ts: 비즈니스 로직을 처리하는 서비스입니다.
- user.repository.ts: 데이터베이스와 상호작용하는 리포지토리입니다.
- user.schema.ts: MongoDB의 사용자 스키마 정의입니다.
- user.module.ts: 위의 구성 요소들을 묶어주는 NestJS 모듈입니다.

## NestJS의 모듈 시스템 활용

NestJS에서는 모듈 시스템을 사용하여 관련된 컨트롤러, 서비스, 리포지토리 등을 그룹화합니다. 이렇게 하면 코드의 구조가 명확해지고, 새로운 개발자가 프로젝트에 참여하더라도 쉽게 이해할 수 있습니다.
