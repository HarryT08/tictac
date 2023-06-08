package com.art.ufps.tictac.configuration;

import com.art.ufps.tictac.security.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter { //Extends para sobreescribir metodos de seguridad

  private final CustomUserDetailsService customUserDetailsService;
  @Autowired
  public SecurityConfig(CustomUserDetailsService customUserDetailsService){
    this.customUserDetailsService = customUserDetailsService;
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
 
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
            .csrf().disable()
            .authorizeRequests()
            .antMatchers("/api/**").hasAnyAuthority("Admin", "Lider", "Docente")
            .antMatchers("/menu-estudiantes/**").hasAuthority("Estudiante")
            //.anyRequest()
            //.authenticated() // --> Esto seria que para todas las rutas se requiere autenticacion, pero algunas rutas no lo necesitan
            .and()
            .formLogin().loginPage("/login/estudiantes/primaria-secundaria").defaultSuccessUrl("/menu-estudiantes")
            .and().logout().permitAll()
            .and()
            .httpBasic();

  }

  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
  }
  @Override
  @Bean
  public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
  }
}
