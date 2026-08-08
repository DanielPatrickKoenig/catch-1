function generateUUID () {
    return [...new Array(3).keys()]
        .map(() => `${Math.random().toString().split('.').join()}`)
        .join('-');
}

export { generateUUID };