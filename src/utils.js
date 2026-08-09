function generateUUID () {
    return [...new Array(3).keys()]
        .map(() => `${Math.random().toString().split('.').join()}`)
        .join('-');
}

function processPointerEvent(e){
    return e.touches && e.touches.length
        ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
        : { x: e.clientX, y: e.clientY };
}

export { generateUUID, processPointerEvent };