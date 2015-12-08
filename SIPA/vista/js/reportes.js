$(function () {
    $('#btnImprimir').on('click', function () {
        //window.print();

        var ficha = $('#divConstancia');
        var ventimp = window.open(' ', 'popimpr');
        ventimp.document.write(ficha.html());
        ventimp.document.close();
        ventimp.print();
        ventimp.close();
    });
});