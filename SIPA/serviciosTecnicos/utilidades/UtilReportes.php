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

    public static function generarConvenio($args) {
        $args['datos'] = ['/@nombre/' => 'Anyela Salinas', '/@ciudad/' => 'Manizales', '/@cedula/' => '12345', '/@resolucion/' => '876543', '/@fecha/' => '12/12/2015'];
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