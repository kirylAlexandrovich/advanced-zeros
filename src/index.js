module.exports = function getZerosCount(number, base) {
    let result = number;
    for (let i = 2; i <= base; i++) {
        let a = 0;
        let b = 0;
        let c = number;

        while (base % i == 0) {
            a++;
            base = Math.floor(base / i);
        }
        
        while (c / i > 0) {
            const d = Math.floor(c / i);
            b += d;
            c = d;
        }

        if (result > b / a) {
            result = b / a;
        }
    }
    return Math.floor(result);
}