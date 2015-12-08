<?php

class Convenio {

    function add($argumentos) {
        extract($argumentos);
        error_log(print_r($argumentos, 1));

        //UtilConexion::$pdo->exec("INSERT INTO usuario VALUES ('$id','$nombre','$apellido','$telefono','$cuenta','$contrasena','$rol')");
//        
        $sql = "INSERT INTO convenio VALUES('$id_convenio', '$fecha_inicio', '$fecha_fin', '$nit_empresa','$razon','$prorroga_id_prorroga');";
        error_log($sql);
        UtilConexion::$pdo->exec($sql);

        echo UtilConexion::getEstado();
    }

    function edit($argumentos) {
        extract($argumentos);
        error_log(print_r($argumentos, 1));
        $sql = "UPDATE convenio SET fecha_inicio='$fecha_inicio',fecha_fin='$fecha_fin', nit_empresa='$nit_empresa',razon='$razon'
	WHERE id_convenio='$id_convenio';";

        error_log($sql);
        UtilConexion::$pdo->exec($sql);
        echo UtilConexion::getEstado();
    }

    function del($argumentos) {
        extract($argumentos);
        error_log(print_r($argumentos, 1));
        $sql = "DELETE FROM convenio WHERE id_convenio='$id';";


        error_log($sql);
        UtilConexion::$pdo->exec($sql);
        echo UtilConexion::getEstado();
    }

    function select($argumentos) {
        extract($argumentos);
        $where = UtilConexion::getWhere($argumentos); // Se construye la clausula WHERE
        $count = UtilConexion::$pdo->query("SELECT id_convenio FROM convenio $where")->rowCount();
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

        $sql = "SELECT * FROM convenio $where ORDER BY $sidx $sord LIMIT $rows OFFSET $start";

        //echo($sql);
        foreach (UtilConexion::$pdo->query($sql) as $fila) {
            $respuesta['rows'][] = [
                'id' => $fila['id_convenio'],
                'cell' => [$fila['id_convenio'], $fila['fecha_inicio'], $fila['fecha_fin'], $fila['nit_empresa'], $fila['razon'], $fila['prorroga_id_prorroga']]
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