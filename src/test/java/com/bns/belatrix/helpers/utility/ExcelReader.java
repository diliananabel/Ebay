package com.bns.belatrix.helpers.utility;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

// utilidad para leer una hoja dentro de un archivo excel.
// guarda la dataLogin como una lista de hashmaps donde los key son los nombres de las columnas del excel.
public class ExcelReader {

    public static List<HashMap<String, String>> data(String rutaRelativaExcel, String nombreHoja) throws Throwable {

        List<HashMap<String, String>> mydata = new ArrayList<>();

        FileInputStream fs = null;

        try {

            fs = new FileInputStream(FileHelper.getProjectFolder() + rutaRelativaExcel);

            XSSFWorkbook workbook = new XSSFWorkbook(fs);
            XSSFSheet sheet = workbook.getSheet(nombreHoja);

            Row headerRow = sheet.getRow(0);

            int nroFilas = sheet.getPhysicalNumberOfRows();
            int nroColumnas = headerRow.getPhysicalNumberOfCells();

            for (int i = 1; i < nroFilas; i++) {

                Row currentRow = sheet.getRow(i);

                if (currentRow == null) continue;

                HashMap<String, String> currentHash = new HashMap<>();

                for (int j = 0; j < nroColumnas; j++) {

                    Cell currentCell = currentRow.getCell(j);

                    // NOTA: solo considera a las celdas del tipo string, cualquier otro caso lo pone como cadena vacía
                    if (currentCell != null && currentCell.getCellTypeEnum().equals(CellType.STRING)) {

                        currentHash.put(
                                StringUtils.trimToEmpty(headerRow.getCell(j).getStringCellValue()),
                                StringUtils.trimToEmpty(currentCell.getStringCellValue()));
                    } else {

                        currentHash.put(
                                StringUtils.trimToEmpty(headerRow.getCell(j).getStringCellValue()),
                                StringUtils.EMPTY);
                    }
                }

                mydata.add(currentHash);
            }


        } catch (Exception e) {

            System.out.println("[ERROR] No se pudo leer el archivo excel: " + e.getMessage());
            throw e;

        } finally {

            IOUtils.closeQuietly(fs);
        }

        return mydata;
    }
}