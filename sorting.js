const countSort = function (a, k) {

    const c = new Array(k + 1).fill(0);
    const size = a.length;
    const b = new Array(size);

    for (let i = 0; i < size; i++) {
        c[a[i]] = c[a[i]] + 1;
    }
    for (let i = 1; i < c.length; i++) {
        c[i] = c[i] + c[i - 1];
    }
    for (let i = size - 1; i >= 0; i--) {
        b[c[a[i]] - 1] = a[i];
        c[a[i]] = c[a[i]] - 1;
    }
    console.log(b);
}

countSort([1, 4, 3, 0, 0, 5, 2, 2], 5);