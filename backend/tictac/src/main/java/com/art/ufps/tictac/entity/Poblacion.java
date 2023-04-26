package com.art.ufps.tictac.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.context.properties.ConstructorBinding;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "poblacion", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Poblacion implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_poblacion")
    private int idPoblacion;

    @Column(name = "nombre")
    private String nombre;


    public Poblacion() {}
    public Poblacion(String nombre) {
        this.nombre = nombre;
    }

}
