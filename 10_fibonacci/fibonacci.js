const fibonacci = function(a) {
    if (a < 0)
        return "OOPS";
    if (typeof(a) == 'string')
        a = parseInt(a);

    let p = 0;
    let c = 1;
    for (let i = 1; i < a; i++) {
        let aux = c;
        c = p + c;
        p = aux;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
