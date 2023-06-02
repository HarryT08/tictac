package com.art.ufps.tictac.service.implement;

import com.art.ufps.tictac.entity.Estudiante;
import com.art.ufps.tictac.repository.EstudianteRepository;
import com.art.ufps.tictac.service.EstudianteInterface;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstudianteService implements EstudianteInterface {

    private final EstudianteRepository estudianteRepository;

    public EstudianteService(EstudianteRepository  estudianteRepository){
        this.estudianteRepository = estudianteRepository;
    }

    public List<Estudiante> list(){
        return estudianteRepository.findAll();
    }
    public void save(Estudiante estudiante){
        estudianteRepository.save(estudiante);
    }
    public void delete(String id){
        estudianteRepository.deleteById(id);
    }
    public Estudiante getEstudiante(String id){
        return estudianteRepository.findById(id).orElse(null);
    }
}
