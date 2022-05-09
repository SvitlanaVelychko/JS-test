const counter = function () {
    return (this.i += 1);
};

const counter1 = counter.bind({ i: 0 });
(counter1());
//console.log(counter1());