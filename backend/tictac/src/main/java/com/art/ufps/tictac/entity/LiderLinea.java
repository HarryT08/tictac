package com.art.ufps.tictac.entity;

import com.art.ufps.tictac.dto.ClaveCompuesta;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Table(name = "lider_linea", schema = "bd_tictac", catalog = "")
@Getter
@Setter
@IdClass(ClaveCompuesta.class)
public class LiderLinea implements Serializable {
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_docente", nullable = false, length = 50)
    private String idDocente;
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
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
