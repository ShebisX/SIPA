$(function () {

    $("#btnCerrar").on("click", function () {
        $.post("controlador/fachada.php", {
            clase: 'Usuario',
            oper: 'cerrarSesion'
        }, function (data) {
            location.reload();
        }, 'json');
    });

    //$("#btnUsuario").on("click", crearTablaUsuario);
    $("#btnDocente").on("click", crearTablaDocente);
    $("#btnEstudiante").on("click", crearTablaEstudiante);
    $("#btnResponsable").on("click", crearTablaResponsable);
    $("#btnRepresentante").on("click", crearTablaRepresentante);
    $("#btnDirector").on("click", crearTablaDirector);
    $("#btnEmpresa").on("click", crearTablaEmpresa);
    $("#btnConvenio").on("click", crearTablaConvenio);
    $("#btnProrroga").on("click", crearTablaProrroga);
    $("#btnSucursal").on("click", crearTablaSucursal);
    $("#btnTelefonoSucursal").on("click", crearTablaTelefonoSucursal);
    $("#btnDependencia").on("click", crearTablaDependencia);
    $("#btnLocalidad").on("click", crearTablaLocalidad);
    $("#btnPracticaI").on("click", crearTablaPracticaI);
    $("#btnPracticaE").on("click", crearTablaPracticaE);

    $("#btnDocConvenio").on("click", function () {

        $.post("controlador/fachada.php", {
            clase: 'UtilReporConvenio',
            oper: 'abrirHoja'
        }, function (data) {
            //console.log(data);
        }, 'json');
    });

    $("#btnDocPracticas").on("click", function () {
        $.post("controlador/fachada.php", {
            clase: 'UtilReporPracticaI',
            oper: 'abrirHoja'
        }, function (data) {
            console.log(data);
        }, 'json');

        $.post("controlador/fachada.php", {
            clase: 'UtilReporPracticaE',
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
                        //cosole.log(respuesta);
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
            colNames: ['CEDULA', 'NOMBRE', 'APELLIDO', 'TELEFONO', 'CONTRASE&Ntilde;A', 'CORREO', 'DIRECCION', 'CODIGO', 'PROGRAMA'],
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
                {name: 'programa', index: 'programa', width: 500, editable: true, editoptions: {size: 37,
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
                        console.log(respuesta);
                        return [respuesta.ok, respuesta.mensaje, ''];
                    }
                },
                {multipleSearch: true, multipleGroup: true}

        )
    }
    ;


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

    function crearTablaDirector() {

        jQuery("#tablaDirector").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'Director_programa',
                oper: 'select'
            },
            colNames: ['CEDULA', 'NOMBRE', 'APELLIDO', 'TELEFONO', 'CONTRASE&Ntilde;A', 'CORREO', 'DIRECCION', 'COD_DIRECTOR', 'PROGRAMA'],
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
    function crearTablaEmpresa() {

        jQuery("#tablaEmpresa").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'Empresa',
                oper: 'select'
            },
            colNames: ['NIT', 'NOMBRE', 'TIPO', 'RAZON_SOCIAL'],
            colModel: [
                {name: 'nit', index: 'nit', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'nombre', index: 'nombre', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'tipo', index: 'tipo', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'razon_social', index: 'razon_social', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
            ],
            rowNum: 100,
            width: 700,
            rowList: [50, 150, 1000],
            pager: '#pTablaEmpresa',
            sortname: 'nit',
            viewrecords: true,
            sortorder: "asc",
            caption: "Gesti&oacute;n de Empresa",
            multiselect: false,
            editurl: "controlador/fachada.php?clase=Empresa",
            loadError: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }

        }).jqGrid('navGrid', '#pTablaEmpresa', {
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

    function crearTablaConvenio() {
        //alert('holaaaaaa');
        jQuery("#tablaConvenio").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'Convenio',
                oper: 'select'
            },
            colNames: ['ID_CONVENIO', 'FECHA_INICIO', 'FECHA_FIN', 'NIT_EMPRESA', 'RAZON', 'ID_PRORROGA'],
            colModel: [
                {name: 'id_convenio', index: 'id_convenio', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'fecha_inicio', index: 'fecha_incio', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'fecha_fin', index: 'fecha_fin', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'nit_empresa', index: 'nit_empresa', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'razon', index: 'razon', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'prorroga_id_prorroga', index: 'prorroga_id_prorroga', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
            ],
            rowNum: 100,
            width: 700,
            rowList: [50, 150, 1000],
            pager: '#pTablaConvenio',
            sortname: 'nit',
            viewrecords: true,
            sortorder: "asc",
            caption: "Gesti&oacute;n de Convenio",
            multiselect: false,
            editurl: "controlador/fachada.php?clase=Convenio",
            loadError: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }

        }).jqGrid('navGrid', '#pTablaConvenio', {
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

    function crearTablaProrroga() {
        //alert('holaaaaaa');

        jQuery("#tablaProrroga").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'Prorroga',
                oper: 'select'
            },
            colNames: ['ID_PRORROGA', 'NOMBRE_CONVENIO', 'FECHA_INICIO', 'FECHA_FIN'],
            colModel: [
                {name: 'id_prorroga', index: 'id_prorroga', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'nombre_convenio', index: 'nombre_convenio', width: 500, editable: true, editoptions: {size: 37,
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
            ],
            rowNum: 100,
            width: 700,
            rowList: [50, 150, 1000],
            pager: '#pTablaProrroga',
            sortname: 'nit',
            viewrecords: true,
            sortorder: "asc",
            caption: "Gesti&oacute;n de Prorroga",
            multiselect: false,
            editurl: "controlador/fachada.php?clase=Prorroga",
            loadError: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }

        }).jqGrid('navGrid', '#pTablaProrroga', {
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


    function crearTablaSucursal() {
        jqGridLocalidad = jQuery('#tablaSucursal').jqGrid({
            url:'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'Sucursal',
                oper:'select'
            },
            colNames:['ID_SUCURSAL', 'NOMBRE', 'DIRECCION', 'NIT_EMPRESA','LOCALIDAD'],
            colModel:[
                {name: 'id_sucursal', index: 'id_sucursal', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'nombre', index: 'nombre', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'direccion', index: 'direccion', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'nit_empresa', index: 'nit_empresa', width: 500, editable: true, edittype:'select', 
                    editoptions: {
                        dataInit: function (elemento) {
                            $(elemento).width(292)}, 
                            dataUrl:'controlador/fachada.php?clase=Localidad&oper=getSelectNIT',
                    }
                },
                {name:'localidad', index:'localidad', hidden: false, width:200, editable:true, edittype:'select',
                    editoptions: {
                        dataInit: function(elemento) {
                            $(elemento).width(292)}, 
                            dataUrl:'controlador/fachada.php?clase=Localidad&oper=getSelect',
        
                    }
                }
            ],

            rowNum:200,
            width:700,
            rowList:[200, 700, 1300],
            pager: '#pTablaSucursal',
            sortname: 'nit',
            viewrecords: true,
            sortorder: "asc",
            caption:"Gesti&oacute;n de Sucursal",
            multiselect: false,
            editurl: "controlador/fachada.php?clase=Sucursal",
            /*onSelectRow: function(id) {
                localidad = id
                datosLocalidad = jQuery(jqGridLocalidad).getRowData(localidad);   // Recuperar los datos de la fila seleccionada
                
            }*/
            loadError: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }
            
        }).jqGrid('navGrid', '#pTablaSucursal', {
                refresh: true,
                edit: true,
                add: true,
                del: true,
                search: true
            }, 
            {   // Antes de enviar a obj->edit(...) se agrega un POST
                modal:true, jqModal:true,
                width:465,
            },
            {   // Antes de enviar a obj->add(...) se agrega un POST
                modal:true, jqModal:true,
                width:465,
                afterShowForm: function() {
                    //$('localidad').val(localidad);
                },
            },
            {modal:true, jqModal:true,
                width:300
            },
            {multipleSearch:true, multipleGroup:true}
        )
    };


    function crearTablaDependencia() {
        //alert('holaaaaaa');

        jQuery("#tablaDependencia").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'Dependencia',
                oper: 'select'
            },
            colNames: ['ID_DEPENDENCIA', 'DESCRIPCION', 'NOMBRE', 'PERTENECE A DEPENDENCIA'],
            colModel: [
                {name: 'id_dependencia', index: 'id_dependencia', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'descripcion', index: 'descripcion', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'nombre', index: 'nombre', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'pertenece_dependencia', index: 'pertenece_dependencia', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
            ],
            rowNum: 100,
            width: 700,
            rowList: [50, 150, 1000],
            pager: '#pTablaDependencia',
            sortname: 'nit',
            viewrecords: true,
            sortorder: "asc",
            caption: "Gesti&oacute;n de Dependencia",
            multiselect: false,
            editurl: "controlador/fachada.php?clase=Dependencia",
            loadError: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }

        }).jqGrid('navGrid', '#pTablaDependencia', {
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

    function crearTablaLocalidad() {
        //alert('holaaaaaa');

        jQuery("#tablaLocalidad").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'Localidad',
                oper: 'select'
            },
            colNames: ['CODIGO', 'NOMBRE'],
            colModel: [
                {name: 'cod', index: 'cod', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'nombre', index: 'nombre', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
            ],
            rowNum: 100,
            width: 700,
            rowList: [50, 150, 1000],
            pager: '#pTablaLocalidad',
            sortname: 'nit',
            viewrecords: true,
            sortorder: "asc",
            caption: "Gesti&oacute;n de Localidad",
            multiselect: false,
            editurl: "controlador/fachada.php?clase=Localidad",
            loadError: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }

        }).jqGrid('navGrid', '#pTablaLocalidad', {
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

    function crearTablaPracticaI() {
        //alert('holaaaaaa');

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
        //alert('holaaaaaa');

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


    function crearTablaTelefonoSucursal() {
        //alert('holaaaaaa');

        jQuery("#tablaTelefonoSucursal").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'Telefono_sucursal',
                oper: 'select'
            },
            colNames: ['ID_SUCURSAL', 'TELEFONO'],
            colModel: [
                {name: 'id_sucursal', index: 'id_sucursal', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'telefono', index: 'telefono', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
            ],
            rowNum: 100,
            width: 700,
            rowList: [50, 150, 1000],
            pager: '#pTablaTelefonoSucursal',
            sortname: 'nit',
            viewrecords: true,
            sortorder: "asc",
            caption: "Gesti&oacute;n de Sucursal",
            multiselect: false,
            editurl: "controlador/fachada.php?clase=Telefono_sucursal",
            loadError: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }

        }).jqGrid('navGrid', '#pTablaTelefonoSucursal', {
            refresh: true,
            edit: false,
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

