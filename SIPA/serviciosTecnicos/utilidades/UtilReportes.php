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
}

?>