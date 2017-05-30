(function () {
    function Ma(a,b) {
        var Math=this;

        Math.sum=function () {
            return (a+b)};
        Math.sub=function () {
            return (a-b)};
        Math.mut=function () {
            return (a*b)};
        Math.div=function () {
            return (a/b)};
        }
    function Total() {
        var tot=this;
        var op=new Ma(4,2);
        tot.add=op.sum();
        tot.mi=op.sub();
        tot.po=op.mut();
        tot.by=op.div();
    }
    var result=new Total();
    console.log(result);
})()