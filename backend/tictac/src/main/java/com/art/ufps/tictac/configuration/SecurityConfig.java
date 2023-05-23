package com.art.ufps.tictac.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter { //Extends para sobreescribir metodos de seguridad
 
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .authorizeRequests()
      .antMatchers("/api/persona/**").hasAnyRole("ADMIN", "COORDINADOR")
      .antMatchers("/student/**").hasAnyRole("ESTUDIANTE")
      //.anyRequest().authenticated() // --> Esto seria que para todas las rutas se requiere autenticacion, pero algunas rutas no lo necesitan
      .and()
      .httpBasic();
  }
  
  @Autowired
  public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
    String encoded = passwordEncoder().encode("pass");
    auth.inMemoryAuthentication().withUser("admin").password(encoded).roles("ADMIN","COORDINADOR");
  }
  
  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}
