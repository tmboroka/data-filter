package com.codecool.datafilter.service;

import com.codecool.datafilter.dao.DataDAO;
import com.codecool.datafilter.dao.model.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DataService {

    private DataDAO dataDAO;

    @Autowired
    public DataService(DataDAO dataDAO) {
        this.dataDAO = dataDAO;
    }

    public List<Data> getAllData() {
        return dataDAO.findAll();
    }
}
