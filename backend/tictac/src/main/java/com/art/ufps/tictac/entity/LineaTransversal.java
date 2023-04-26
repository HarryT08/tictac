package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "linea_transversal", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class LineaTransversal implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_linea")
    private int idLinea;

    @Column(name = "nombre")
    private String nombre;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LineaTransversal that = (LineaTransversal) o;
        return idLinea == that.idLinea && Objects.equals(nombre, that.nombre);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idLinea, nombre);
    }
}
