# 프론트엔드: 프로젝트 관리 대시보드

## 🍥목표
- React를 사용하여 프로젝트와 태스크를 관리할 수 있는 대시보드 구현

## 🍥기능 요구 사항
1. **프로젝트 관리**

   - [x] **프로젝트 목록 보기**: 모든 프로젝트를 리스트 형태로 표시합니다.
   - [x] **프로젝트 상세 보기**: 선택한 프로젝트의 세부 정보와 해당 프로젝트에 속한 태스크 목록을 볼 수 있습니다.
   - [x] **프로젝트 생성 및 삭제**: 새로운 프로젝트를 생성하고, 필요 시 삭제할 수 있는 UI를 제공합니다.

2. **태스크 관리**

   - [x] **태스크 목록 보기**: 선택된 프로젝트의 모든 태스크를 목록으로 표시합니다.
   - [x] **태스크 생성 및 수정**: 프로젝트에 새로운 태스크를 추가하고, 기존 태스크를 수정할 수 있습니다.
   - [x] **태스크 상태 업데이트**: 태스크의 상태(예: 진행 중, 완료)를 업데이트할 수 있습니다.
   - [x] **태스크 삭제**: 필요 시 특정 태스크를 삭제할 수 있습니다.

3. **정렬 및 필터링**

   - [x] **우선순위에 따른 정렬**: 태스크 목록을 우선순위나 마감일을 기준으로 정렬합니다.
   - [x] **상태별 필터링**: "진행 중" 또는 "완료" 상태에 따라 태스크를 필터링하여 보여줍니다.

4. **시각적 알림**
   - [x] **마감 기한 경과**: 마감일이 지난 태스크는 시각적으로 강조합니다.
   - [x] **마감일 임박**: 마감일이 3일 이내로 다가온 태스크 또한 시각적으로 강조합니다(기한 경과와 달라야함).
