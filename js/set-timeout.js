// *10(10)*

(() => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => console.log(i), 0);
    }
})();


//Solution1
for (let i = 0; i < 10; i++) {
        //sync
    setTimeout(() => {
        //async
        console.log(i)
    }, 0);
    }


//Solution2

for (var i = 0; i < 10; i++) {
    setTimeout((a) => console.log(a), 0, i);
};


//Solution3

for (var i = 0; i < 10; i++) {
    const func = () => {
        var val = i;
        setTimeout(() => console.log(val), 0);
    }

    func();
};