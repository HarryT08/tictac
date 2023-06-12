package com.art.ufps.tictac.utils;

import com.art.ufps.tictac.dto.DatosDocentes;
import com.art.ufps.tictac.dto.DatosEstudiantes;
import com.art.ufps.tictac.dto.ExcelEstudianteDto;
import com.art.ufps.tictac.dto.ExcelPersonDto;
import com.art.ufps.tictac.entity.*;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;

@Component
public class CargarExcels {


    public DatosDocentes cargarDocentes(InputStream file) {
        DatosDocentes datosDocentes = new DatosDocentes();
        List<Persona> personas = new ArrayList<>();
        List<Docente> docentes = new ArrayList<>();
        List<LiderLinea> lideres = new ArrayList<>();
        List<ExcelPersonDto> excelPersons = new ArrayList<>();

        try {
            // Leer el archivo Excel
            XSSFWorkbook workbook = new XSSFWorkbook(file);
            XSSFSheet sheet = workbook.getSheetAt(0); // Obtener la primera hoja
            Iterator<Row> rowIterator = sheet.iterator();

            int filaActual = 1;
            int lastRowNum = sheet.getLastRowNum();
            int usedRows = 0;

            for (int i = 0; i <= lastRowNum; i++) {
                Row row = sheet.getRow(i);
                if (row != null && row.getCell(0) != null) { // Verificar si la primera celda de la fila no es nula
                    usedRows++;
                }
                else {
                    break;
                }
            }

            // Recorrer las filas del archivo Excel y obtener los datos de las personas
            while (filaActual != usedRows) {
                Row row = rowIterator.next();
                if (filaActual == 1) {
                    row = rowIterator.next();
                }
                ExcelPersonDto excelPersonDto = new ExcelPersonDto();
                excelPersonDto.setCedula(String.valueOf((int) row.getCell(0).getNumericCellValue()));
                excelPersonDto.setNombre(row.getCell(1).getStringCellValue());
                excelPersonDto.setApellido(row.getCell(2).getStringCellValue());
                excelPersonDto.setPassword(String.valueOf((int) row.getCell(3).getNumericCellValue()));

                java.util.Date fechaExcel = row.getCell(4).getDateCellValue();//llega 1-abr.-2005
                //java.util.Date fecha = input.parse(fechaExcel);
                //String fechaSql = String.valueOf(output.parse(String.valueOf(fecha)));
                excelPersonDto.setFechaNacimiento(fechaExcel);

                excelPersonDto.setCodigo(String.valueOf((int) row.getCell(5).getNumericCellValue()));
                //excelPersonDto.obtenerRol((int) row.getCell(6).getNumericCellValue());
                excelPersonDto.setRol((int) row.getCell(6).getNumericCellValue());
                excelPersonDto.setIdInstitucion((int) row.getCell(7).getNumericCellValue());

                excelPersonDto.setIdLinea((int) row.getCell(8).getNumericCellValue());
                excelPersonDto.setEsLider((int) row.getCell(9).getNumericCellValue());

                excelPersons.add(excelPersonDto);
                filaActual++;
            }
            file.close();

            // Insertar los datos en la base de datos
            //personas = new ArrayList<>();
            //docentes = new ArrayList<>();
            //lideres = new ArrayList<>();
            for (ExcelPersonDto excelPersonDto : excelPersons) {
                Persona persona = new Persona();
                Docente docente = new Docente();
                LiderLinea liderLinea = new LiderLinea();

                PasswordEncoderGenerator passwordEncoderGenerator = new PasswordEncoderGenerator();

                persona.setCedula(excelPersonDto.getCedula());
                persona.setNombre(excelPersonDto.getNombre());
                persona.setApellido(excelPersonDto.getApellido());
                persona.setPassword(passwordEncoderGenerator.encoder(excelPersonDto.getPassword()));

                SimpleDateFormat input = new SimpleDateFormat("dd-MMM-yyyy", new Locale("es"));
                SimpleDateFormat output = new SimpleDateFormat("yyyy-MM-dd");
                java.util.Date fechaNormal = excelPersonDto.getFechaNacimiento();
                String fechaNormalString = input.format(fechaNormal);
                java.util.Date fecha = input.parse(fechaNormalString);
                java.sql.Date fechaSql = new java.sql.Date(fecha.getTime());
                persona.setFechaNacimiento(fechaSql);
                persona.setCodigo(excelPersonDto.getCodigo());

                //persona.setRol(excelPersonDto.getRol());
                //rol.setIdRol(excelPersonDto.getRol());
                Rol rol = new Rol();
                if (excelPersonDto.getRol() == 2){
                    rol.setNombre("Lider PPT");
                    rol.setIdRol(2);
                    persona.setRol(rol);
                }else if(excelPersonDto.getRol() == 3){
                    rol.setNombre("Docente");
                    rol.setIdRol(3);
                    persona.setRol(rol);
                }else if(excelPersonDto.getRol() == 4){
                    rol.setNombre("Estudiante");
                    rol.setIdRol(4);
                    persona.setRol(rol);
                }
                persona.setIdInstitucion(excelPersonDto.getIdInstitucion());
                personas.add(persona);

                docente.setIdDocente(persona.getCedula());
                docentes.add(docente);

                liderLinea.setIdDocente(docente.getIdDocente());
                liderLinea.setIdLinea(excelPersonDto.getIdLinea());
                liderLinea.setEsLider((byte) excelPersonDto.getEsLider());
                liderLinea.setFechaInicio(fechaSql);
                lideres.add(liderLinea);

            }

            datosDocentes.setListaPersonas(personas);
            datosDocentes.setListaDocentes(docentes);
            datosDocentes.setListaLideres(lideres);

        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }

        return datosDocentes;
    }

    public DatosEstudiantes cargarEstudiantes(InputStream file) {
        DatosEstudiantes datosestudiantes = new DatosEstudiantes();
        List<Persona> personas = new ArrayList<>();
        List<Estudiante> estudiantes = new ArrayList<>();
        List<Matricula> matriculas = new ArrayList<>();
        List<ExcelEstudianteDto> excelEstudianteDtos = new ArrayList<>();
        try {
            // Leer el archivo Excel
            XSSFWorkbook workbook = new XSSFWorkbook(file);
            XSSFSheet sheet = workbook.getSheetAt(0); // Obtener la primera hoja
            Iterator<Row> rowIterator = sheet.iterator();

            List<ExcelPersonDto> excelPersons = new ArrayList<>();
            int filaActual = 1;

            int lastRowNum = sheet.getLastRowNum();
            int usedRows = 0;
            for (int i = 0; i <= lastRowNum; i++) {
                Row row = sheet.getRow(i);
                if (row != null && row.getCell(0) != null) { // Verificar si la primera celda de la fila no es nula
                    usedRows++;
                }
                else {
                    break;
                }
            }

            // Recorrer las filas del archivo Excel y obtener los datos de las personas
            while (filaActual != usedRows) {
                Row row = rowIterator.next();
                if (filaActual == 1) {
                    row = rowIterator.next();
                }
                ExcelEstudianteDto excelEstudianteDto = new ExcelEstudianteDto();
                excelEstudianteDto.setCedula(String.valueOf((int) row.getCell(0).getNumericCellValue()));
                excelEstudianteDto.setNombre(row.getCell(1).getStringCellValue());
                excelEstudianteDto.setApellido(row.getCell(2).getStringCellValue());
                excelEstudianteDto.setPassword(String.valueOf((int) row.getCell(3).getNumericCellValue()));

                java.util.Date fechaExcel = row.getCell(4).getDateCellValue();//llega 1-abr.-2005
                //java.util.Date fecha = input.parse(fechaExcel);
                //String fechaSql = String.valueOf(output.parse(String.valueOf(fecha)));
                excelEstudianteDto.setFechaNacimiento(fechaExcel);

                excelEstudianteDto.setCodigo(String.valueOf((int) row.getCell(5).getNumericCellValue()));
                //excelPersonDto.obtenerRol((int) row.getCell(6).getNumericCellValue());
                excelEstudianteDto.setRol((int) row.getCell(6).getNumericCellValue());
                excelEstudianteDto.setIdInstitucion((int) row.getCell(7).getNumericCellValue());

                excelEstudianteDto.setId_curso((int) row.getCell(8).getNumericCellValue());
                excelEstudianteDto.setAno_lectivo((int) row.getCell(9).getNumericCellValue());

                excelEstudianteDtos.add(excelEstudianteDto);
                filaActual++;
            }
            file.close();

            // Insertar los datos en la base de datos
            for (ExcelEstudianteDto excelEstudianteDto : excelEstudianteDtos) {
                Persona persona = new Persona();
                Estudiante estudiante = new Estudiante();
                Matricula matricula = new Matricula();
                PasswordEncoderGenerator passwordEncoderGenerator = new PasswordEncoderGenerator();

                persona.setCedula(excelEstudianteDto.getCedula());
                persona.setNombre(excelEstudianteDto.getNombre());
                persona.setApellido(excelEstudianteDto.getApellido());
                persona.setPassword(passwordEncoderGenerator.encoder(excelEstudianteDto.getPassword()));

                SimpleDateFormat input = new SimpleDateFormat("dd-MMM-yyyy", new Locale("es"));
                SimpleDateFormat output = new SimpleDateFormat("yyyy-MM-dd");
                java.util.Date fechaNormal = excelEstudianteDto.getFechaNacimiento();
                String fechaNormalString = input.format(fechaNormal);
                java.util.Date fecha = input.parse(fechaNormalString);
                java.sql.Date fechaSql = new java.sql.Date(fecha.getTime());
                persona.setFechaNacimiento(fechaSql);
                persona.setCodigo(excelEstudianteDto.getCodigo());

                //persona.setRol(excelPersonDto.getRol());
                //rol.setIdRol(excelPersonDto.getRol());
                Rol rol = new Rol();
                if (excelEstudianteDto.getRol() == 2){
                    rol.setNombre("Lider PPT");
                    rol.setIdRol(2);
                    persona.setRol(rol);
                }else if(excelEstudianteDto.getRol() == 3){
                    rol.setNombre("Docente");
                    rol.setIdRol(3);
                    persona.setRol(rol);
                }else if(excelEstudianteDto.getRol() == 4){
                    rol.setNombre("Estudiante");
                    rol.setIdRol(4);
                    persona.setRol(rol);
                }
                persona.setIdInstitucion(excelEstudianteDto.getIdInstitucion());
                personas.add(persona);

                estudiante.setIdEstudiante(persona.getCedula());
                estudiantes.add(estudiante);

                matricula.setIdEstudiante(estudiante.getIdEstudiante());
                matricula.setIdCurso(excelEstudianteDto.getId_curso());
                matricula.setAnoLectivo(excelEstudianteDto.getAno_lectivo());
                matriculas.add(matricula);
            }
            datosestudiantes.setListaPersonas(personas);
            datosestudiantes.setListaEstudiantes(estudiantes);
            datosestudiantes.setListaMatriculas(matriculas);

        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
        return datosestudiantes;
    }

}
