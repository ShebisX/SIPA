$(function(){
    
    $("#btnDocente").on("click",crearTablaDocente);
    
    function crearTablaDocente(){
        
      jQuery("#tablaDocente").jqGrid({
            url: 'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'Docente',
                oper: 'select'
            },
            colNames: ['ID', 'NOMBRE','APELLIDO','TELEFONO','CUENTA','CONTRASEÑA','ROL'],
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
            caption: "Gestión de Usuarios",
            multiselect: false,
            editurl: "controlador/fachada.php?clase=Usuarios",
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




