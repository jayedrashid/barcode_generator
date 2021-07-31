function barcodeGen() {

    var bar_data = document.querySelector('.bar-input').value;

    JsBarcode('#barcode', bar_data , {

        background : '#fff',

        color : '#000',

        height : 100,

        displayValue : false

    });

}
