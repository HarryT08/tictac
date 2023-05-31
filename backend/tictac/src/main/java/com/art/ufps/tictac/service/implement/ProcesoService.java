package com.art.ufps.tictac.service.implement;

import com.art.ufps.tictac.entity.Proceso;
import com.art.ufps.tictac.repository.ProcesoRepository;
import com.art.ufps.tictac.service.ProcesoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProcesoService implements ProcesoInterface {

    private final ProcesoRepository procesoRepository;

    @Autowired
    public ProcesoService(ProcesoRepository procesoRepository){
        this.procesoRepository = procesoRepository;
    }

    public List<Proceso> list(){
        return procesoRepository.findAll();
    }

    public void save(Proceso proceso){
        procesoRepository.save(proceso);
    }

    public void delete(int id){
        procesoRepository.deleteById(id);
    }

    public Optional<Proceso> getById(int id){
        return procesoRepository.findById(id);
    }
}
