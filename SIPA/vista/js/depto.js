
$(function () {

    crearTablaDepartamentos();

    function crearTablaDepartamentos() {

        jQuery("#tablaDepto").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'Departamento',
                oper: 'select'
            },
            colNames: ['ID', 'NOMBRE DEL DEPARTAMENTO', 'BLOQUE'],
            colModel: [
                {name: 'id', index: 'id', width: 55, align: 'center', editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'nombre', index: 'nombre', width: 500, editable: true, editrules: {required: true}, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'bloque', index: 'bloque', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }}
            ],
            rowNum: 100,
            width: 700,
            rowList: [50, 150, 1000],
            pager: '#pTablaDepto',
            sortname: 'id',
            viewrecords: true,
            sortorder: "asc",
            caption: "Gestión de departamentos",
            multiselect: false,
            editurl: "controlador/fachada.php?clase=Departamento",
            loadError: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }

        }).jqGrid('navGrid', '#pTablaDepto', {
            refresh: true,
            edit: true,
            add: true,
            del: true,
            search: true
        },
        {   // Antes de enviar a Departamento->edit(...) se agrega un POST
            modal:true, jqModal:true,
            width:500,
            beforeSubmit: function(postdata) {
//              acceder a los datos de la fila seleccionada:
//              var fila = $(this).getRowData($(this).getGridParam("selrow"));

//              agregar un parámetro a los datos enviados (ej. el ID introducido en el formulario de edición)
                postdata.idNuevo = $('#id').val();
                return[true, ''];
            },
            afterSubmit: function (response, postdata) {
                var respuesta = jQuery.parseJSON(response.responseText);
                return [respuesta.ok, respuesta.mensaje, ''];
            }
        },
        {   // Antes de enviar a Departamento->add(...) se agrega un POST
            modal:true, jqModal:true,
            width:500,
            afterSubmit: function (response, postdata) {
                var respuesta = jQuery.parseJSON(response.responseText);
                return [respuesta.ok, respuesta.mensaje, ''];
            }
        },
        {   modal:true, jqModal:true,
            width:300,
            afterSubmit: function (response, postdata) {
                var respuesta = jQuery.parseJSON(response.responseText);
                return [respuesta.ok, respuesta.mensaje, ''];
            }
        },
        {multipleSearch:true, multipleGroup:true}
    )};


});