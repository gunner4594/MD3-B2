let money = 10000;
const buyCar = (car) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve ('Can buy '+ car);
            } else {
                reject ('Do not enough money');
            }
        }, 1000)
    })
}
money = 10001
const promise = buyCar('Fadil');
promise
    .then(result => {
        console.log(result);
    })
    .catch(result => {
        console.log(result);
    })
