<?php

class UtilReportes {

    protected static $objPHPExcel;

    public static function crearLibro() {
        self::$objPHPExcel = new PHPExcel();
        $sheetIndex = self::$objPHPExcel->getIndex(self::$objPHPExcel->getSheetByName('Worksheet'));
        self::$objPHPExcel->removeSheetByIndex($sheetIndex);
    }

    public static function guardarLibro() {
        $objWriter = PHPExcel_IOFactory::createWriter(self::$objPHPExcel, 'Excel2007');
        $objWriter->save("Reportes.xlsx");
    }

    public static function abrirLibro() {
        if (file_exists("Reportes.xlsx")) {
            self::$objPHPExcel = PHPExcel_IOFactory::load("Reportes.xlsx");
        } else {
            self::crearLibro();
        }
    }

    public static function cerrarLibro() {
        self::guardarLibro();
        self::$objPHPExcel->disconnectWorksheets();
        //unset(self::$objPHPExcel);
    }

    /* public static function reporte() {

      self::crearLibro();
      $objWorksheet = self::$objPHPExcel->getSheetByName("Worksheet");
      $objWorksheet->setCellValueByColumnAndRow(1, 3, "Hola");
      //$objWorksheet->setCellValue("A3", 'mundo');
      self::guardarLibro();
      } */

    private static function getGeneralData() {
        extract($args);
        session_start();
        $user = $_SESSION['user'];
        $rol = $_SESSION['rol'];

        $sql = "SELECT u.nombre, u.apellido, u.telefono, u.direccion, t.* FROM $rol t JOIN Usuario u on u.cedula = t.cedula WHERE u.correo = '$user';";

        if ($rs = UtilConexion::$pdo->query($sql)) {
            $rs = $rs->fetch(PDO::FETCH_ASSOC);
            $rs['rol'] = $rol;
            /* $respuesta = '<h1>' . $rs['nombre'] . ' ' . $rs['apellido'] . '</h1>';
              foreach ($rs as $key => $value) {
              if ($key != 'nombre' && $key != 'apellido')
              $respuesta .= '<br><p><b>' . ucfirst(strtolower($key)) . ':</b> ' . ucfirst(strtolower($value)) . '</p>';
              } */
            $rs['data'] = self::getData($rol, $user);
            return $rs;
        } else
            echo UtilConexion::getEstado();
    }

    private static function getData($rol, $user) {
        $data = '';
        switch ($rol) {
            case 'estudiante': {
                    $sql = "SELECT p.* FROM practica p, estudiante e, usuario u "
                            . "WHERE u.correo = '$user' and u.cedula = e.cedula and p.estudiante = e.codigo;";
                    if ($rs = UtilConexion::$pdo->query($sql)) {
                        $rs = $rs->fetch(PDO::FETCH_ASSOC);
                        $data = 'inicio la práctica Nº ' . $rs['codigo'] . ' en la fecha ' . $rs['fecha_inicio'];
                    } else
                        echo UtilConexion::getEstado();
                    break;
                }
        }
        return $data;
    }

    public static function generarConvenio($args) {
        $datos = self::getGeneralData();
        $args['datos'] = ['/@nombre/' => $datos['nombre'], '/@apellido/' => $datos['apellido'], '/@cedula/' => $datos['cedula'], '/@rol/' => $datos['rol'], '/@data/' => $datos['data']]; //, '/@resolucion/' => '876543', '/@fecha/' => '12/12/2015'];
        $conv = self::generarDocumento($args);
        error_log($conv);
        echo json_encode($conv);
    }

    public static function generarDocumento($param) {
        extract($param);

        $plantilla = file_get_contents('../vista/html/' . $tipo . '.html');

        return preg_replace(array_keys($datos), array_values($datos), $plantilla);
    }

}

?>