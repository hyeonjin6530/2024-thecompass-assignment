# 비어있나요?
## 문제 설명
요구사항에 맞게 **주어진 값이 비어있는지 확인 하는 `isEmpty()` 함수**를 작성

## 요구사항

- [ ] 객체의 모든 속성 값이 비어있거나, 속성 자체가 없으면 비어있다고 간주합니다.
- [ ] 배열의 모든 요소가 비어있으면 비어있다고 간주합니다.
- [ ] 원시 타입은 비어있지 않다고 간주합니다.
- [ ] 빈 문자열은 비어있다고 간주합니다.
- [ ] `null`과 `undefined`는 비어있다고 간주합니다.
    - `null`과 `undefined`를 제외한 falsey value는 비어있지 않습니다. 비어있는 경우에만 `true`를 반환하고, 그외에는 `false`를 반환하세요.

## 입출력 예시

```jsx
isEmpty(null) // 출력: true
isEmpty({}) // 출력: true
isEmpty(0) // 출력: false
isEmpty(false) // 출력: false
isEmpty([{}, {a:[]}]) // 출력: true
isEmpty({a: null, b: ''}) // 출력: true
```