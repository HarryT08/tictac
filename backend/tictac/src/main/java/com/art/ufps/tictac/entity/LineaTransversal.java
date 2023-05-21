package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "linea_transversal", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class LineaTransversal {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_linea", nullable = false)
    private int idLinea;
    @Basic
    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;
}
