package com.art.ufps.tictac.security;

import com.art.ufps.tictac.entity.Persona;
import com.art.ufps.tictac.entity.Rol;
import com.art.ufps.tictac.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final PersonaRepository personaRepository;
    @Autowired
    public CustomUserDetailsService(PersonaRepository personaRepository){
        this.personaRepository = personaRepository;
    }
    @Override
    public UserDetails loadUserByUsername(String cedula) throws UsernameNotFoundException {
        Persona persona = personaRepository.findByCedula(cedula)
            .orElseThrow(() -> new UsernameNotFoundException("Usuario no encotrado"));

        return new User(persona.getCedula(), persona.getPassword(), setRoles(persona.getRol()));
    }

    public UserDetails userData(String cedula) throws UsernameNotFoundException {
        Persona persona = personaRepository.findByCedula(cedula)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encotrado"));

        return new User(persona.getCedula(), persona.getPassword(), setRoles(persona.getRol()));
    }

    private Collection<? extends GrantedAuthority> setRoles(Rol rol){
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority(rol.getNombre()));
        return authorities;
    }
}
