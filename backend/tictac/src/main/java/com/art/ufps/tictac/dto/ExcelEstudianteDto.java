package com.art.ufps.tictac.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ExcelEstudianteDto {

    //Datos de persona
    String cedula;
    String nombre;
    String apellido;
    String password;
    Date fechaNacimiento;
    String codigo;
    int rol;
    int idInstitucion;

    //Datos de matricula
    int id_curso;
    int ano_lectivo;
}
