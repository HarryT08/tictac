package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "proyecto_aula_estudiante", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class ProyectoAulaEstudiante implements Serializable {
    @Id
    @ManyToOne()
    @JoinColumn(name = "id_proyecto", nullable = false)
    private ProyectoAula proyecto;
    @Id
    @ManyToOne()
    @JoinColumns({
            @JoinColumn(name= "id_estudiante", nullable = false),
            @JoinColumn(name= "id_usuario", nullable = false)
    })
    private Estudiante estudiante;
}
