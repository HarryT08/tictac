package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "recurso_proceso", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class RecursoProceso implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_recurso", nullable = false)
    private int idRecurso;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_proceso", nullable = false)
    private int idProceso;
}
