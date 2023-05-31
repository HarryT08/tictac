package com.art.ufps.tictac.service.implement;

import com.art.ufps.tictac.entity.Docente;
import com.art.ufps.tictac.repository.DocenteRepository;
import com.art.ufps.tictac.service.DocenteInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DocenteService implements DocenteInterface {

    private final DocenteRepository docenteRepository;

    @Autowired
    public DocenteService(DocenteRepository docenteRepository){
        this.docenteRepository = docenteRepository;
    }

    public List<Docente> list(){
        return docenteRepository.findAll();
    }

    public void save(Docente docente){
        docenteRepository.save(docente);
    }

    public void delete(String id){
        docenteRepository.deleteById(id);
    }

    public Docente getDocente(String id){
        return docenteRepository.findById(id).orElse(null);
    }
}
