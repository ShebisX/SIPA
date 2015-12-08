<?php

class PracticaE {

    function add($argumentos) {
        extract($argumentos);
        error_log(print_r($argumentos, 1));

        //UtilConexion::$pdo->exec("INSERT INTO usuario VALUES ('$id','$nombre','$apellido','$telefono','$cuenta','$contrasena','$rol')");
//        
        $sql = "WITH Tipo as (
                   INSERT INTO practica(codigo, fecha_inicio, fecha_fin, salario,tipo,estudiante,docente,responsable,prorroga_id_prorroga)
                      VALUES ('$codigo', '$fecha_inicio', '$fecha_fin','$salario','Practica Externa','$estudiante','$docente','$responsable','$prorroga_id_prorroga') RETURNING codigo
                ) INSERT INTO practica_externa (id_practica,sucursal_id_sucursal) VALUES ((SELECT codigo FROM Tipo),'$sucursal_id_sucursal');";
        error_log($sql);
        UtilConexion::$pdo->exec($sql);

        echo UtilConexion::getEstado();
    }

    function edit($argumentos) {
        extract($argumentos);
        error_log(print_r($argumentos, 1));

        $sql = "UPDATE practica SET fecha_inicio='$fecha_inicio',fecha_fin='$fecha_fin', salario='$salario',estudiante='$estudiante',docente='$docente', responsable='$responsable', prorroga_id_prorroga='$prorroga_id_prorroga'
	WHERE codigo='$codigo'";


        error_log($sql);
        UtilConexion::$pdo->exec($sql);
        echo UtilConexion::getEstado();
    }

    function del($argumentos) {
        extract($argumentos);
        error_log(print_r($argumentos, 1));
        $sql = "DELETE FROM practica WHERE codigo = '$id'";
        UtilConexion::$pdo->exec($sql);

        error_log($sql);

        echo UtilConexion::getEstado();
    }

    function select($argumentos) {
        extract($argumentos);
        $where = UtilConexion::getWhere($argumentos); // Se construye la clausula WHERE
        $count = UtilConexion::$pdo->query("SELECT codigo FROM practica $where")->rowCount();
        // Calcula el total de páginas por consulta
        if ($count > 0) {
            $total_pages = ceil($count / $rows);
        } else {
            $total_pages = 0;
        }

        // Si por alguna razón página solicitada es mayor que total de páginas
        // Establecer a página solicitada total paginas  (¿por qué no al contrario?)
        if ($page > $total_pages) {
            $page = $total_pages;
        }

        // Calcular la posición de la fila inicial
        $start = $rows * $page - $rows;
        //  Si por alguna razón la posición inicial es negativo ponerlo a cero
        // Caso típico es que el usuario escriba cero para la página solicitada
        if ($start < 0) {
            $start = 0;
        }

        $respuesta = [
            'total' => $total_pages,
            'page' => $page,
            'records' => $count
        ];

        //$sql = "SELECT * FROM usuario $where ORDER BY $sidx $sord LIMIT $rows OFFSET $start";
        $sql = "SELECT practica.*, sucursal_id_sucursal FROM practica 
                inner join practica_externa on practica.codigo=practica_externa.id_practica
                $where ORDER BY $sidx $sord LIMIT $rows OFFSET $start";

        //echo($sql);
        foreach (UtilConexion::$pdo->query($sql) as $fila) {
            $respuesta['rows'][] = [
                'id' => $fila['codigo'],
                'cell' => [$fila['codigo'], $fila['fecha_inicio'], $fila['fecha_fin'], $fila['salario'], $fila['estudiante'], $fila['docente'], $fila['responsable'], $fila['prorroga_id_prorroga'], $fila['sucursal_id_sucursal']]
            ];
        }
        // Quite los comentarios para ver el array original y el array codificado en JSON
        // error_log(print_r($respuesta, TRUE));
        // error_log(print_r(json_encode($respuesta), TRUE));
        echo json_encode($respuesta);
        return $respuesta;
    }

}

?>