package com.codecool.datafilter.dao;

import com.codecool.datafilter.dao.model.Data;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DataDAO extends JpaRepository<Data, Long> {
}
