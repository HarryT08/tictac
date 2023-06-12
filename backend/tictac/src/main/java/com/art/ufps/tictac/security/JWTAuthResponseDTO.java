package com.art.ufps.tictac.security;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JWTAuthResponseDTO {

    private String token;
    private String tipoDeToken = "Bearer";
    private String nombre;
    private String apellido;
    private String documento;
    private String rol;

    public JWTAuthResponseDTO(String token) {
        super();
        this.token = token;
    }

    public JWTAuthResponseDTO(String token, String nombre, String apellido, String documento, String rol) {
        this.token = token;
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.rol = rol;
    }
}
