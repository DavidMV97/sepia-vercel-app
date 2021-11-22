function removeActive(items) {
    items.forEach(item => {
        item.classList.remove('active');
        item.classList.add('hide');
    });
}

function escapeRegExp(str) {
    return str.replace(/[^a-zA-Z ]/g, "")
        .split(" ").join("-")
        .toLowerCase();
}


export { removeActive, escapeRegExp };