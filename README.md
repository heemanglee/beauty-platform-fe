# beauty-platform-fe

## 기술 스택

- **Framework / Build**: React 18, TypeScript, Vite
- **Routing**: React Router
- **Server State**: TanStack Query
- **Client State**: Zustand
- **Forms / Validation**: React Hook Form, Zod
- **Styling**: Tailwind CSS
- **UI Utilities**: Radix UI, class-variance-authority, lucide-react
- **Testing**: Vitest, React Testing Library, Playwright
- **Quality**: ESLint

## 실행 / 빌드 / 테스트 명령어

### 의존성 설치

```bash
npm install
```

### 로컬 개발 서버 실행

```bash
npm run dev
```

### 프로덕션 빌드

```bash
npm run build
```

### 타입 검사

```bash
npm run typecheck
```

### 린트

```bash
npm run lint
```

### 단위 테스트 실행

```bash
npm run test
```

Vitest를 watch 모드로 실행합니다.

### 단위 테스트 1회 실행

```bash
npm run test:run
```

### E2E 테스트 실행

```bash
npm run test:e2e
```

Playwright 브라우저가 없으면 먼저 아래를 실행하세요.

```bash
npx playwright install chromium
```

## 프로젝트 구조

```text
src/
  app/         # router, provider, layout, route guard
  features/    # auth, catalog, admin, seller, orders
  components/  # shared UI / common components
  lib/         # api client, utils
  store/       # zustand store
  test/        # unit/component tests
tests/e2e/     # Playwright tests
docs/          # PRD 및 마일스톤 문서
```

## 환경 변수

`.env.example`를 복사해서 `.env`를 생성하세요.

```bash
cp .env.example .env
```

- `VITE_API_BASE_URL`: 백엔드 API 기본 주소
