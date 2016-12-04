"use strict";
class MyTest {

    run(test) {
        var result = test();
        console.log(test.name, result[0] == result[1] ? 'ok' : 'fail:' + result);
    }

    eqArray(as, bs) {
        for(let i = 0; i < as.length; i++){
            if(as[i] !== bs[i]) return false;
        }
        return true;
    }
}

module.exports = MyTest;
