package com.codecool.datafilter.dao;

import com.codecool.datafilter.dao.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientDAO extends JpaRepository<Client, Long> {
    Client getClientByUsername(String name);
}
