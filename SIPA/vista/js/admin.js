$(function(){
    
    $("#btnUsuario").on("click",crearTablaUsuario);
    $("#btnDocente").on("click",crearTablaDocente);
    //$("#btnDependencia").on("click",crearTablaDependencia);
    
    function crearTablaUsuario(){
        
      jQuery("#tablaUsuario").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'usuario',
                oper: 'select'
            },
            colNames: ['ID', 'NOMBRE','APELLIDO','TELEFONO','CUENTA','CONTRASE&Ntilde;A','ROL'],
            colModel: [
                {name: 'id', index: 'id', width: 55, align: 'center', editable: true, editoptions: {size: 37,
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
                {name: 'cuenta', index: 'cuenta', width: 500, editable: true, editoptions: {size: 37,
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
        {   // Antes de enviar a Departamento->edit(...) se agrega un POST
            modal:true, jqModal:true,
            width:500,
            beforeSubmit: function(postdata) {
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
    
    function crearTablaDocente(){
        
      jQuery("#tablaUsuario").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'Docente',
                oper: 'select'
            },
            colNames: ['ID', 'NOMBRE','APELLIDO','TELEFONO','CUENTA','CONTRASE&Ntilde;A','COD_DOCENTE','DEPENDENCIA'],
            colModel: [
                {name: 'id', index: 'id', width: 55, align: 'center', editable: true, editoptions: {size: 37,
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
                {name: 'cuenta', index: 'cuenta', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'contrasena', index: 'contrasena', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
               
                {name: 'cod_docente', index: 'cod_docente', width: 500, editable: true, editoptions: {size: 37,
                        dataInit: function (elemento) {
                            $(elemento).width(282)
                        }
                    }},
                {name: 'departamento', index: 'departamento', width: 500, editable: true, editoptions: {size: 37,
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
            caption: "Gesti&oacute;n de Docentes",
            multiselect: false,
            editurl: "controlador/fachada.php?clase=Docente",
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
        {   // Antes de enviar a Departamento->edit(...) se agrega un POST
            modal:true, jqModal:true,
            width:500,
            beforeSubmit: function(postdata) {
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

