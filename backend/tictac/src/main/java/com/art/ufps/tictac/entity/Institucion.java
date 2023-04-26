package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "institucion", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Institucion implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_institucion")
    private int idInstitucion;

    @ManyToOne()
    @JoinColumn(name = "id_direccion", nullable = false)
    private Direccion direccion;

    @Column(name = "nombre")
    private String nombre;
}
