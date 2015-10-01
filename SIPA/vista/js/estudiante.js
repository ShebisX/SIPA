
$(function () {

    crearTablaEstudiante();

    function crearTablaEstudiante() {

        jQuery("#tablaEstudiante").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'Estudiante',
                oper: 'select'
            },
            colNames: ['CODIGO ESTUDIANTE', 'ID', 'LOCALIDAD','PRACTICA'],
            colModel: [

                {name: 'cod_estudiante', index: 'cod_estudiante', width: 500, editable: true, editrules: {required: true}, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'usuario_id', index: 'usuario_id', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},

                {name: 'localidad_id_localidad', index: 'localidad_id_localidad', width: 55, align: 'center', editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'practica_id_practica', index: 'practica_id_practica', width: 500, editable: true, editrules: {required: true}, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }}
            ],
            rowNum: 100,
            width: 700,
            rowList: [50, 150, 1000],
            pager: '#pTablaEstudiante',
            sortname: 'cod_estudiante',
            viewrecords: true,
            sortorder: "asc",
            caption: "Gestión de Estudiantes",
            multiselect: false,
            editurl: "controlador/fachada.php?clase=Estudiante",
            loadError: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }

        }).jqGrid('navGrid', '#pTablaEstudiante', {
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
                postdata.cod_estudianteNuevo = $('#cod_estudiante').val();
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