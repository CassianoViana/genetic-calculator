"use strict";
class MyTest {

    run(test) {
        var result = test();
        console.log(test.name, result[0] == result[1] ? 'ok' : 'fail:' + result);
    } 
}

module.exports = MyTest;
