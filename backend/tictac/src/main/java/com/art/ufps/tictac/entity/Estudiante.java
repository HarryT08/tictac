package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "estudiante", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Estudiante implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_estudiante;

    @OneToOne()
    @JoinColumn(name = "id_usuario", nullable = false)
    private Usuario usuario;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @OneToOne()
    @JoinColumn(name = "id_curso", nullable = false)
    private Curso curso;
    @Basic
    @Column(name = "codigo")
    private int codigo;
}
