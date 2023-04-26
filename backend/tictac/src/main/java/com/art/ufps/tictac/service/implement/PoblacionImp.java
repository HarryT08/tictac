package com.art.ufps.tictac.service.implement;

import com.art.ufps.tictac.entity.Poblacion;
import com.art.ufps.tictac.repository.PoblacionRepository;
import com.art.ufps.tictac.service.PoblacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PoblacionImp implements PoblacionService {

    private final PoblacionRepository poblacionRepository;

    @Autowired
    public PoblacionImp(PoblacionRepository poblacionRepository){
        this.poblacionRepository = poblacionRepository;
    }

    public Optional<Poblacion> getById(int id){
        return poblacionRepository.findById(id);
    }

    public Optional<Poblacion> getByNombre(String nombre){
        return poblacionRepository.findByNombre(nombre);
    }

    public boolean existById(int id){
        return poblacionRepository.existsById(id);
    }

    public boolean existByNombre(String nombre){
        return poblacionRepository.existsByNombre(nombre);
    }

    public List<Poblacion> list(){
        return poblacionRepository.findAll();
    }

    public void save(Poblacion poblacion){
        poblacionRepository.save(poblacion);
    }

    public void delete(int id){ poblacionRepository.deleteById(id); }
}
