package com.art.ufps.tictac.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ExcelPersonDto {

    //Datos de persona
    String cedula;
    String nombre;
    String apellido;
    String password;
    Date fechaNacimiento;
    String codigo;
    int rol;
    int idInstitucion;

    //Datos de docente solo el id

    //Datos lider_linea solo para los que sean lideres
    int idLinea;
    int esLider;



}
