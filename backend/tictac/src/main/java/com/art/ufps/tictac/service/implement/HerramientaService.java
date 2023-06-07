package com.art.ufps.tictac.service.implement;

import com.art.ufps.tictac.entity.Herramienta;
import com.art.ufps.tictac.repository.HerramientaRepository;
import com.art.ufps.tictac.service.HerramientaInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HerramientaService implements HerramientaInterface {

    private final HerramientaRepository herramientaRepository;

    @Autowired
    public HerramientaService(HerramientaRepository herramientaRepository){
        this.herramientaRepository = herramientaRepository;
    }

    public List<Herramienta> list(){
        return herramientaRepository.findAll();
    }

    public void save(Herramienta herramienta){
        herramientaRepository.save(herramienta);
    }

    public void delete(int id){
        herramientaRepository.deleteById(id);
    }

    public Optional<Herramienta> getById(int id){
        return herramientaRepository.findById(id);
    }

    public Optional<Herramienta> getByNombre(String nombre){
        return herramientaRepository.findByNombreHerramienta(nombre);
    }

    public boolean existById(int id){
        return herramientaRepository.existsById(id);
    }

    public boolean existByNombre(String nombreHerramienta){
        return herramientaRepository.existsByNombreHerramienta(nombreHerramienta);
    }

}



