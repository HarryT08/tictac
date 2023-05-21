package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "persona", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Persona {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "cedula", nullable = false, length = 50)
    private String cedula;
    @Basic
    @Column(name = "nombre", nullable = false, length = 200)
    private String nombre;
    @Basic
    @Column(name = "apellido", nullable = false, length = 200)
    private String apellido;
    @Basic
    @Column(name = "password", nullable = false, length = 200)
    private String password;
    @Basic
    @Column(name = "fecha_nacimiento", nullable = false)
    private Date fechaNacimiento;
    @Basic
    @Column(name = "codigo", nullable = false, length = 30)
    private String codigo;
    @Basic
    @Column(name = "id_rol", nullable = false)
    private int idRol;
    @Basic
    @Column(name = "id_institucion", nullable = false)
    private int idInstitucion;
}
