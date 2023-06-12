package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "matricula", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Matricula implements Serializable {
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_estudiante", nullable = false, length = 50)
    private String idEstudiante;
    @Basic
    @Column(name = "id_curso", nullable = false)
    private int idCurso;
    @Basic
    @Column(name = "ano_lectivo", nullable = false)
    private int anoLectivo;
}
