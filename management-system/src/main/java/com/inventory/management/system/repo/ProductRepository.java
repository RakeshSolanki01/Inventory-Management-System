package com.inventory.management.system.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inventory.management.system.entiry.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
