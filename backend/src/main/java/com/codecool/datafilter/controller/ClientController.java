package com.codecool.datafilter.controller;

import com.codecool.datafilter.controller.dto.newClientDTO;
import com.codecool.datafilter.dao.model.Client;
import com.codecool.datafilter.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/client")
public class ClientController {
    private ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService){
        this.clientService = clientService;
    }

    @PostMapping
    public ResponseEntity addNewClient(@RequestBody newClientDTO clientDTO){
        clientService.addNewClient(clientDTO);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{name}")
    public Client getClientByUsername(@PathVariable String name) {
        return clientService.getClientByUsername(name);
    }
}
