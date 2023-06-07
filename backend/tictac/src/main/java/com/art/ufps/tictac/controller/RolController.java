package com.art.ufps.tictac.controller;

import com.art.ufps.tictac.service.RolInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/rol")
public class RolController {
    private final RolInterface rolInterface;

    @Autowired
    public RolController(RolInterface rolInterface) {
        this.rolInterface = rolInterface;
    }
}
