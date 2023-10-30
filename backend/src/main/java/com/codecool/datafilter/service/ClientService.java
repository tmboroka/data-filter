package com.codecool.datafilter.service;

import com.codecool.datafilter.controller.dto.newClientDTO;
import com.codecool.datafilter.dao.ClientDAO;
import com.codecool.datafilter.dao.model.Client;
import org.springframework.stereotype.Service;

@Service
public class ClientService {

    private final ClientDAO clientDAO;

    public ClientService(ClientDAO clientDAO) {
        this.clientDAO = clientDAO;
    }

    public Client getClientByUsername(String name) {
        return clientDAO.getClientByUsername(name);
    }

    public void addNewClient(newClientDTO client){
        Client newClient = Client.builder()
                .username(client.username())
                .password(client.password())
                .build();
        clientDAO.save(newClient);
    }
}
