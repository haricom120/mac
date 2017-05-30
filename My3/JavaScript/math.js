(function () {
    function Math(a,b) {
        var Calc = this;

        Calc.sum = function () {
            return (a + b);
        };
        Calc.sub = function () {
            return (a - b);
        };
        Calc.multi = function () {
            return (a * b);
        };
        Calc.div = function () {
            return (a / b);
        };
    }
        function Total(){
            var final=this;
            var opp=new Math(6,10);
            final.add=opp.sum();
            final.min=opp.sub();
            final.pr=opp.multi();
            final.vide=opp.div();
        }

    var result=new Total();
    console.log(result);
})()





