package com.codecool.datafilter.controller;

import com.codecool.datafilter.dao.model.Data;
import com.codecool.datafilter.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/data")
public class DataController {
    
    private DataService dataService;

    @Autowired
    public DataController(DataService dataService){
        this.dataService = dataService;
    }

    @GetMapping
    public List<Data> getAllData(){
        return dataService.getAllData();
    }
}
