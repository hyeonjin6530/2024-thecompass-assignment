function isEmpty(value) {
    if (value === null || value === undefined) {
        return console.log(true);
    }

    if (typeof value !== 'object') {
        return console.log(false);
    }

    if (Array.isArray(value)) {
        const result = value.length === 0 || value.every(isEmpty);
        return console.log(result);
    }

    if (typeof value === 'object') {
        const result = Object.keys(value).length === 0 || Object.values(value).every(isEmpty);
        return console.log(result);
    }

    return console.log(false);

}

isEmpty(null); // 출력: true

isEmpty({}); // 출력: true

isEmpty(0); // 출력: false

isEmpty(false); // 출력: false

isEmpty([{}, {a:[]}]); // 출력: true

isEmpty({a: null, b: ''}); // 출력: true