package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "lider_linea", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class LiderLinea {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_docente", nullable = false, length = 50)
    private String idDocente;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_linea", nullable = false)
    private int idLinea;
    @Basic
    @Column(name = "esLider", nullable = false)
    private byte esLider;
    @Basic
    @Column(name = "fecha_inicio", nullable = false)
    private Date fechaInicio;
}
