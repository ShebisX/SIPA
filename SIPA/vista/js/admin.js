$(function () {

    //$("#btnUsuario").on("click", crearTablaUsuario);
    $("#btnDocente").on("click", crearTablaDocente);
    $("#btnEstudiante").on("click", crearTablaEstudiante);
    $("#btnResponsable").on("click", crearTablaResponsable);
    $("#btnRepresentante").on("click", crearTablaRepresentante);
    $("#btnDirector").on("click", crearTablaDirector);

    $("#btnDocConvenio").on("click", function () {
        $.post("controlador/fachada.php", {
            clase: 'UtilReporConvenio',
            oper: 'abrirHoja'
        }, function (data) {
            console.log(data);
        }, 'json');
    });

    $("#btnDocPractica").on("click", function () {
        $.post("controlador/fachada.php", {
            clase: 'UtilReporPractica',
            oper: 'abrirHoja'
        }, function (data) {
            console.log(data);
        }, 'json');
    });

    /*  function crearTablaUsuario() {
     
     jQuery("#tablaUsuario").jqGrid({
     url: 'controlador/fachada.php',
     datatype: "json",
     mtype: 'POST',
     postData: {
     clase: 'usuario',
     oper: 'select'
     },
     colNames: ['CEDULA', 'NOMBRE', 'APELLIDO', 'TELEFONO', 'CONTRASE&Ntilde;A', 'ROL', 'CORREO', 'DIRECCION'],
     colModel: [
     {name: 'cedula', index: 'cedula', width: 55, align: 'center', editable: true, editoptions: {size: 37,
     dataInit: function (elemento) {
     $(elemento).width(282)
     }
     }},
     {name: 'nombre', index: 'nombre', width: 500, editable: true, editoptions: {size: 37,
     dataInit: function (elemento) {
     $(elemento).width(282)
     }
     }},
     {name: 'apellido', index: 'apellido', width: 500, editable: true, editoptions: {size: 37,
     dataInit: function (elemento) {
     $(elemento).width(282)
     }
     }},
     {name: 'telefono', index: 'telefono', width: 500, editable: true, editoptions: {size: 37,
     dataInit: function (elemento) {
     $(elemento).width(282)
     }
     }},
     {name: 'contrasena', index: 'contrasena', width: 500, editable: true, editoptions: {size: 37,
     dataInit: function (elemento) {
     $(elemento).width(282)
     }
     }},
     {name: 'rol', index: 'rol', width: 500, editable: true, editoptions: {size: 37,
     dataInit: function (elemento) {
     $(elemento).width(282)
     }
     }},
     {name: 'correo', index: 'correo', width: 500, editable: true, editoptions: {size: 37,
     dataInit: function (elemento) {
     $(elemento).width(282)
     }
     }},
     {name: 'direccion', index: 'direccion', width: 500, editable: true, editoptions: {size: 37,
     dataInit: function (elemento) {
     $(elemento).width(282)
     }
     }},
     ],
     rowNum: 100,
     width: 700,
     rowList: [50, 150, 1000],
     pager: '#pTablaUsuario',
     sortname: 'nit',
     viewrecords: true,
     sortorder: "asc",
     caption: "GestiÃ³n de Usuarios",
     multiselect: false,
     editurl: "controlador/fachada.php?clase=usuario",
     loadError: function (jqXHR, textStatus, errorThrown) {
     alert(jqXHR.responseText);
     }
     
     }).jqGrid('navGrid', '#pTablaUsuario', {
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
     postdata.cedulaNueva = $('#cedula').val();
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
     };*/

    function crearTablaDocente() {

        jQuery("#tablaDocente").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'Docente',
                oper: 'select'
            },
            colNames: ['CEDULA', 'NOMBRE', 'APELLIDO', 'TELEFONO', 'CONTRASE&Ntilde;A', 'CORREO', 'DIRECCION', 'COD_DOCENTE', 'DEPENDENCIA'],
            colModel: [
                {name: 'cedula', index: 'cedula', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'nombre', index: 'nombre', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'apellido', index: 'apellido', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'telefono', index: 'telefono', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'contrasena', index: 'contrasena', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'correo', index: 'correo', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'direccion', index: 'direccion', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'cod_docente', index: 'cod_docente', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'dependencia', index: 'dependencia', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
            ],
            rowNum: 100,
            width: 700,
            rowList: [50, 150, 1000],
            pager: '#pTablaDocente',
            sortname: 'nit',
            viewrecords: true,
            sortorder: "asc",
            caption: "Gesti&oacute;n de Docentes",
            multiselect: false,
            editurl: "controlador/fachada.php?clase=Docente",
            loadError: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }

        }).jqGrid('navGrid', '#pTablaDocente', {
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
                postdata.cedulaNueva = $('#cedula').val();
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


    function crearTablaEstudiante() {

        jQuery("#tablaEstudiante").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'Estudiante',
                oper: 'select'
            },
            colNames: ['CEDULA', 'NOMBRE', 'APELLIDO', 'TELEFONO', 'CONTRASE&Ntilde;A', 'CORREO', 'DIRECCION', 'CODIGO'],
            colModel: [
                {name: 'cedula', index: 'cedula', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'nombre', index: 'nombre', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'apellido', index: 'apellido', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'telefono', index: 'telefono', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'contrasena', index: 'contrasena', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'correo', index: 'correo', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'direccion', index: 'direccion', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'codigo', index: 'codigo', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
            ],
            rowNum: 100,
            width: 700,
            rowList: [50, 150, 1000],
            pager: '#pTablaEstudiante',
            sortname: 'nit',
            viewrecords: true,
            sortorder: "asc",
            caption: "Gesti&oacute;n de Estudiantes",
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
        {// Antes de enviar a Departamento->edit(...) se agrega un POST
            modal: true, jqModal: true,
            width: 500,
            beforeSubmit: function (postdata) {
//              acceder a los datos de la fila seleccionada:
//              var fila = $(this).getRowData($(this).getGridParam("selrow"));

//              agregar un parÃ¡metro a los datos enviados (ej. el ID introducido en el formulario de ediciÃ³n)
                postdata.cedulaNueva = $('#cedula').val();
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
    };


    function crearTablaResponsable() {

        jQuery("#tablaResponsable").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'Responsable_practica',
                oper: 'select'
            },
            colNames: ['CEDULA', 'NOMBRE', 'APELLIDO', 'TELEFONO', 'CONTRASE&Ntilde;A', 'CORREO', 'DIRECCION', 'COD_RESPONSABLE', 'CARGO'],
            colModel: [
                {name: 'cedula', index: 'cedula', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'nombre', index: 'nombre', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'apellido', index: 'apellido', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'telefono', index: 'telefono', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'contrasena', index: 'contrasena', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'correo', index: 'correo', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'direccion', index: 'direccion', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'cod_responsable', index: 'cod_responsable', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'cargo', index: 'cargo', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
            ],
            rowNum: 100,
            width: 700,
            rowList: [50, 150, 1000],
            pager: '#pTablaResponsable',
            sortname: 'nit',
            viewrecords: true,
            sortorder: "asc",
            caption: "Gesti&oacute;n de Responsable_Practica",
            multiselect: false,
            editurl: "controlador/fachada.php?clase=Responsable_practica",
            loadError: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }

        }).jqGrid('navGrid', '#pTablaResponsable', {
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
                postdata.cedulaNueva = $('#cedula').val();
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

    function crearTablaRepresentante() {

        jQuery("#tablaRepresentante").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'Representante_empresarial',
                oper: 'select'
            },
            colNames: ['CEDULA', 'NOMBRE', 'APELLIDO', 'TELEFONO', 'CONTRASE&Ntilde;A', 'CORREO', 'DIRECCION', 'COD_REPRESENTANTE', 'CARGO', 'EMPRESA'],
            colModel: [
                {name: 'cedula', index: 'cedula', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'nombre', index: 'nombre', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'apellido', index: 'apellido', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'telefono', index: 'telefono', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'contrasena', index: 'contrasena', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'correo', index: 'correo', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'direccion', index: 'direccion', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'cod_representante', index: 'cod_representante', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'cargo', index: 'cargo', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'empresa', index: 'empresa', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
            ],
            rowNum: 100,
            width: 700,
            rowList: [50, 150, 1000],
            pager: '#pTablaRepresentante',
            sortname: 'nit',
            viewrecords: true,
            sortorder: "asc",
            caption: "Gesti&oacute;n de Representante_Empresarial",
            multiselect: false,
            editurl: "controlador/fachada.php?clase=Representante_empresarial",
            loadError: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }

        }).jqGrid('navGrid', '#pTablaRepresentante', {
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
                postdata.cedulaNueva = $('#cedula').val();
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
    };
    
    function crearTablaDirector() {

        jQuery("#tablaDirector").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'Director_programa',
                oper: 'select'
            },
            colNames: ['CEDULA', 'NOMBRE', 'APELLIDO', 'TELEFONO', 'CONTRASE&Ntilde;A', 'CORREO', 'DIRECCION', 'COD_DIRECTOR','PROGRAMA'],
            colModel: [
                {name: 'cedula', index: 'cedula', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'nombre', index: 'nombre', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'apellido', index: 'apellido', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'telefono', index: 'telefono', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'contrasena', index: 'contrasena', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'correo', index: 'correo', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'direccion', index: 'direccion', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'cod_director', index: 'cod_director', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                  {name: 'programa', index: 'programa', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
            ],
            rowNum: 100,
            width: 700,
            rowList: [50, 150, 1000],
            pager: '#pTablaDirector',
            sortname: 'nit',
            viewrecords: true,
            sortorder: "asc",
            caption: "Gesti&oacute;n de Director Programa",
            multiselect: false,
            editurl: "controlador/fachada.php?clase=Director_programa",
            loadError: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }

        }).jqGrid('navGrid', '#pTablaDirector', {
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
                postdata.cedulaNueva = $('#cedula').val();
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
    };

});

