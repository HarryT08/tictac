package com.art.ufps.tictac.security;

import com.art.ufps.tictac.excepciones.BlogAppException;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.Date;
import java.util.Properties;


//@Configuration
//@PropertySource(value = "classpath:application.properties")
@Component
public class JwtTokenProvider {

    //@Value("${app.jwtSecret}")
    private String jwtSecret;

    //@Value("${app.jwtExpirationMilliseconds}")
    private int jwtExpirationInMS;

    public JwtTokenProvider() {
        ClassLoader classLoader = JwtTokenProvider.class.getClassLoader();

        try (InputStream inputStream = classLoader.getResourceAsStream("application.properties")) {
            Properties properties = new Properties();
            properties.load(inputStream);

            jwtSecret = properties.getProperty("app.jwtSecret");
            jwtExpirationInMS = Integer.parseInt(properties.getProperty("app.jwtExpirationMilliseconds"));

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public String generarToken(Authentication authentication){
        String documento = authentication.getName();
        Date fechaActual = new Date();
        Date fechaExpiracion = new Date(fechaActual.getTime() + jwtExpirationInMS);

        String token = Jwts.builder().setSubject(documento)
                .setIssuedAt(new Date())
                .setExpiration(fechaExpiracion)
                .signWith(SignatureAlgorithm.HS512, jwtSecret).compact();
        return token;
    }

    public String obtenerDocumentoJWT(String token){
        Claims claims = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody();
        return claims.getSubject();
    }

    public Boolean validarToken(String token){
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
            return true;
        }
        catch (SignatureException ex){
            throw new BlogAppException(HttpStatus.BAD_REQUEST, "Firma JWT no valida");
        }
        catch (MalformedJwtException ex){
            throw new BlogAppException(HttpStatus.BAD_REQUEST, "Token JWT no valido");
        }
        catch (ExpiredJwtException ex){
            throw new BlogAppException(HttpStatus.BAD_REQUEST, "Token JWT caducado");
        }
        catch (UnsupportedJwtException ex){
            throw new BlogAppException(HttpStatus.BAD_REQUEST, "Token JWT no compatible");
        }
        catch (IllegalArgumentException ex){
            throw new BlogAppException(HttpStatus.BAD_REQUEST, "La cadena claims JWT esta vacia");
        }
    }

    public static void main(String[] args) {
        JwtTokenProvider jwtTokenProvider = new JwtTokenProvider();
        boolean a = jwtTokenProvider.validarToken("eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTUxODk4IiwiaWF0IjoxNjg2NDIxNzY0LCJleHAiOjE2ODY0MjUzNjR9.fTopeWTayW659qbbg2ua_ld1TFO--JtCm9wJOQ2LaVYrV2s0xJK9PzjcBPwYEWc96nPFJIxj1hRqN7SJZVFZ6A");
        System.out.println(a);
    }
}
