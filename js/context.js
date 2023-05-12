(() => {
    var a = 7;

    // var anonymus = {
    // a: 7,
    // test: function() { },
    // b: function () { },
    // this: undefined,
    // parent: window,
    // }

    function test() {
        console.log(a);

        // var test = {
    // this: undefined,
    // parent: anonymus,
    // }
    }

    function b() {
        var a = 10;

        test();

        // var b = {
    // a: 10,
    // this: undefined,
    // parent: anonymus,
    // }
    }

    b();
})();

// const bob = {
//     name: 'Bob',
//     showName(...args) {
//         console.log(args);

//         console.log(this);
//     }
// }

// class LinkComponent {
//     constructor() {
//         this.linksCount = 0;

//         this.increaseLinksCount = this.increaseLinksCount.bind(this);

//         $0.addEventListener('click', this.increaseLinksCount);
//     }

//     increaseLinksCount() {
//         this.linksCount++;
//         console.log(this);
//     }

//     getLinksCount() {
//         console.log(this.linksCount);
//     }
// }

// class LinkComponent {
//     constructor() {
//         this.linksCount = 0;

//         $0.addEventListener('click', () => this.increaseLinksCount());
//     }

//     increaseLinksCount() {
//         this.linksCount++;
//         console.log(this);
//     }

//     getLinksCount() {
//         console.log(this.linksCount);
//     }
// }

// const bill = {
//     name: 'Bill',
//     getName: Blob.getName,
// }

// bill.getName()

// const bob = {
//     name: 'Bob',
// }

// const showName = () => {
//     console.log(this);
//     console.log(bob.name);
// }