function isEmpty(value) {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value !== 'object') {
        return false;
    }

    if (Array.isArray(value)) {
        return value.length === 0 || value.every(isEmpty);
    }

    if (typeof value === 'object') {
        return Object.keys(value).length === 0 || Object.values(value).every(isEmpty);
    }

    return false;

}

console.log(isEmpty(null)); // 출력: true

console.log(isEmpty({})); // 출력: true

console.log(isEmpty(0)); // 출력: false

console.log(isEmpty(false)); // 출력: false

console.log(isEmpty([{}, {a:[]}])); // 출력: true

console.log(isEmpty({a: null, b: ''})); // 출력: true