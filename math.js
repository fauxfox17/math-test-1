
module.exports = function(RED) {
    function math(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = msg.payload.tomath();
            node.send(msg);
        });
    }
    RED.nodes.registerType("math",math);
}    
msg.payload = {}
var x = Number(msg.payload)

module.export = function(MATH)
 {
    function math(_element) {
        function add(math) {
            var number1 = msg.math.getElementById('number1').value;
            var number2 = msg.math.getElementById('number2').value;
            msg.math.getElementById('MATH').innerHTML = parseInt(number1) + parseInt(number2);
        }

        function subtraction(math) {
            var number1 = msg.math.getElementById('number1').value;
            var number2 = msg.math.getElementById('number2').value;
            msg.math.getElementById('MATH').innerHTML = parseInt(number1) - parseInt(number2);
        }

        function multiply(math) {
            var number1 = msg.math.getElementById('number1').value;
            var number2 = msg.math.getElementById('number2').value;
            msg.math.getElementById('MATH').innerHTML = parseInt(number1) * parseInt(number2);
        }

        function divide(math) {
            var number1 = msg.math.getElementById('number1').value;
            var number2 = msg.math.getElementById('number2').value;
            msg.math.getElementById('MATH').innerHTML = parseInt(number1) / parseInt(number2);
        }

    }
}
return msg; 