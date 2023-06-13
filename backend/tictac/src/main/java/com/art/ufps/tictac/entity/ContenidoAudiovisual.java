package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "contenido_audiovisual", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class ContenidoAudiovisual implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_contenido", nullable = false)
    private int idContenido;
    @Basic
    @Column(name = "nombre_contenido", nullable = true, length = 255)
    private String nombreContenido;
    @Basic
    @Column(name = "visibilidad", nullable = true)
    private Byte visibilidad;
    @Basic
    @Column(name = "docente_autor", nullable = false, length = 50)
    private String docenteAutor;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinTable(name = "recurso_contenido",
            joinColumns = @JoinColumn(name = "id_contenido"),
            inverseJoinColumns = @JoinColumn(name = "id_recurso"))
    private Recurso recurso;

    public int getIdContenido() {
        return idContenido;
    }

    public void setIdContenido(int idContenido) {
        this.idContenido = idContenido;
    }

    public String getNombreContenido() {
        return nombreContenido;
    }

    public void setNombreContenido(String nombreContenido) {
        this.nombreContenido = nombreContenido;
    }

    public Byte getVisibilidad() {
        return visibilidad;
    }

    public void setVisibilidad(Byte visibilidad) {
        this.visibilidad = visibilidad;
    }

    public String getDocenteAutor() {
        return docenteAutor;
    }

    public void setDocenteAutor(String docenteAutor) {
        this.docenteAutor = docenteAutor;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ContenidoAudiovisual that = (ContenidoAudiovisual) o;
        return idContenido == that.idContenido && Objects.equals(nombreContenido, that.nombreContenido) && Objects.equals(visibilidad, that.visibilidad) && Objects.equals(docenteAutor, that.docenteAutor);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idContenido, nombreContenido, visibilidad, docenteAutor);
    }
}
