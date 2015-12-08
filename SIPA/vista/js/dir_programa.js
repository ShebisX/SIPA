$(function () {
    perfil();

    $('#perfil').on('click', function () {
        perfil();
    });

    $('#practica').on('click', function () {
        $('#contenido').html('<table id="tablaPracticaI"></table><div id="pTablaPracticaI"></div><table id="tablaPracticaE"></table><div id="pTablaPracticaE"></div>');
        crearTablaPracticaI();
        crearTablaPracticaE();
    });

    $('#comentarios').on('click', function () {
        $.post("controlador/fachada.php", {
            clase: 'Director_programa',    
            oper: 'comentarios'
        }, function (data) {
            //console.log(data);
            $('#contenido').html(data);
            //location.reload();
        }, 'json');
    });

    $('#reportes').on('click', function () {

    });

    $('#cambiarContrasena').on('click', function () {
        $('#contenido').load('vista/html/cambioClave.html');
    });

    $("#cerrarSesion").on('click', function () {
        console.log("Si");
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

    function crearTablaPracticaI() {
        jQuery("#tablaPracticaI").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'PracticaI',
                oper: 'select'
            },
            colNames: ['CODIGO', 'FECHA_INICIO', 'FECHA_FIN', 'SALARIO', 'ESTUDIANTE', 'DOCENTE', 'RESPONSABLE', 'ID_PRORROGA', 'ID_DEPENDENCIA'],
            colModel: [
                {name: 'codigo', index: 'codigo', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'fecha_inicio', index: 'fecha_inicio', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'fecha_fin', index: 'fecha_fin', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'salario', index: 'salario', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'estudiante', index: 'estudiante', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'docente', index: 'docente', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'responsable', index: 'responsable', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'prorroga_id_prorroga', index: 'prorroga_id_prorroga', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'id_dependencia', index: 'id_dependencia', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
            ],
            rowNum: 100,
            width: 700,
            rowList: [50, 150, 1000],
            pager: '#pTablaPracticaI',
            sortname: 'nit',
            viewrecords: true,
            sortorder: "asc",
            caption: "Gesti&oacute;n de Practica Interna",
            multiselect: false,
            editurl: "controlador/fachada.php?clase=PracticaI",
            loadError: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }

        }).jqGrid('navGrid', '#pTablaPracticaI', {
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
    }
    ;

    function crearTablaPracticaE() {
        jQuery("#tablaPracticaE").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'PracticaE',
                oper: 'select'
            },
            colNames: ['CODIGO', 'FECHA_INICIO', 'FECHA_FIN', 'SALARIO', 'ESTUDIANTE', 'DOCENTE', 'RESPONSABLE', 'ID_PRORROGA', 'ID_SUCURSAL'],
            colModel: [
                {name: 'codigo', index: 'codigo', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'fecha_inicio', index: 'fecha_inicio', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'fecha_fin', index: 'fecha_fin', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'salario', index: 'salario', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'estudiante', index: 'estudiante', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'docente', index: 'docente', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'responsable', index: 'responsable', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'prorroga_id_prorroga', index: 'prorroga_id_prorroga', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'sucursal_id_sucursal', index: 'sucursal_id_sucursal', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
            ],
            rowNum: 100,
            width: 700,
            rowList: [50, 150, 1000],
            pager: '#pTablaPracticaE',
            sortname: 'nit',
            viewrecords: true,
            sortorder: "asc",
            caption: "Gesti&oacute;n de Practica Externa",
            multiselect: false,
            editurl: "controlador/fachada.php?clase=PracticaE",
            loadError: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }

        }).jqGrid('navGrid', '#pTablaPracticaE', {
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
    }
    ;
});
