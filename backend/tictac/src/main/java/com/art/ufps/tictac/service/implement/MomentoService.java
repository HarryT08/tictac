package com.art.ufps.tictac.service.implement;

import com.art.ufps.tictac.entity.Momento;
import com.art.ufps.tictac.repository.MomentoRepository;
import com.art.ufps.tictac.service.MomentoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MomentoService implements MomentoInterface {

    private final MomentoRepository momentoRepository;

    @Autowired
    public MomentoService(MomentoRepository momentoRepository){
        this.momentoRepository = momentoRepository;
    }

    public List<Momento> list(){
        return momentoRepository.findAll();
    }

    public void save(Momento momento){
        momentoRepository.save(momento);
    }

    public void delete(int id){
        momentoRepository.deleteById(id);
    }

    public Optional<Momento> getById(int id){
        return momentoRepository.findById(id);
    }

}