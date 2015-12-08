$(document).ready(function () {
    perfil();

    $('#perfil').on('click', function () {
        perfil();
    });

    $('#practica').on('click', function () {
        $('#contenido').load('vista/html/docente_practicas.html');
    });

    $('#comentarios').on('click', function () {
        $('#contenido').html('<table id="tablaComentarios"></table><div id="pTablaComentarios"></div>');

        jQuery("#tablaComentarios").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'Comentarios',
                oper: 'select'
            },
            colNames: ['CODIGO', 'PRACTICA', 'COMENTARIO', 'REALIZADO POR(ID USUARIO)'],
            colModel: [
                {name: 'cod', index: 'cod', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'practica_fk', index: 'practica_fk', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'comentario', index: 'comentario', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'usuario_fk', index: 'usuario_fk', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
            ],
            rowNum: 100,
            width: 700,
            rowList: [50, 150, 1000],
            pager: '#pTablaComentarios',
            sortname: 'cod',
            viewrecords: true,
            sortorder: "asc",
            caption: "Gesti&oacute;n de Comentarios",
            multiselect: false,
            editurl: "controlador/fachada.php?clase=Comentarios",
            loadError: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }

        }).jqGrid('navGrid', '#pTablaComentarios', {
            refresh: true,
            edit: true,
            add: true,
            del: true,
            search: true
        },
                {// Antes de enviar a Departamento->edit(...) se agrega un POST
                    modal: true, jqModal: true,
                    width: 500,
                    beforeSubmit: function (postdata) {
//              acceder a los datos de la fila seleccionada:
//              var fila = $(this).getRowData($(this).getGridParam("selrow"));

//              agregar un parÃ¡metro a los datos enviados (ej. el ID introducido en el formulario de ediciÃ³n)
                        postdata.idNuevo = $('#id').val();
                        return[true, ''];
                    },
                    afterSubmit: function (response, postdata) {
                        var respuesta = jQuery.parseJSON(response.responseText);
                        return [respuesta.ok, respuesta.mensaje, ''];
                    }
                },
                {// Antes de enviar a Departamento->add(...) se agrega un POST
                    modal: true, jqModal: true,
                    width: 500,
                    afterSubmit: function (response, postdata) {
                        var respuesta = jQuery.parseJSON(response.responseText);
                        return [respuesta.ok, respuesta.mensaje, ''];
                    }
                },
                {modal: true, jqModal: true,
                    width: 300,
                    afterSubmit: function (response, postdata) {
                        var respuesta = jQuery.parseJSON(response.responseText);
                        return [respuesta.ok, respuesta.mensaje, ''];
                    }
                },
                {multipleSearch: true, multipleGroup: true}

        )
    });

    $('#reportes').on('click', function () {

    });

    $('#cambiarContrasena').on('click', function () {
        $('#contenido').load('vista/html/cambioClave.html');
    });

    $("#cerrarSesion").on('click', function () {
        $.post("controlador/fachada.php", {
            clase: 'Usuario',
            oper: 'cerrarSesion'
        }, function (data) {
            location.reload();
        }, 'json');
    });

    function perfil() {
        $.post("controlador/fachada.php", {
            clase: 'Usuario',
            oper: 'perfil',
        }, function (data) {
            //console.log(data);
            $("#contenido").html(data);
        }, 'json');
    }
});
