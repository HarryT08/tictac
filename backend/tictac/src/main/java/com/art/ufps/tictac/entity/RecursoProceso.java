package com.art.ufps.tictac.entity;

import com.art.ufps.tictac.dto.ClaveCompuesta;
import com.art.ufps.tictac.dto.ClaveRecursoProceso;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "recurso_proceso", schema = "bd_tictac", catalog = "")
@Getter
@Setter
@IdClass(ClaveRecursoProceso.class)
public class RecursoProceso implements Serializable {
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_recurso", nullable = false)
    private int idRecurso;
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_proceso", nullable = false)
    private int idProceso;
}
