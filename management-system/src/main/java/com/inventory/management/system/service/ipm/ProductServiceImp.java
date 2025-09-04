package com.inventory.management.system.service.ipm;

import java.util.List;

import org.springframework.stereotype.Service;
import com.inventory.management.system.entiry.Product;
import com.inventory.management.system.repo.ProductRepository;
import com.inventory.management.system.service.ProductService;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ProductServiceImp implements ProductService {

	
	private final ProductRepository repo;

	@Override
	public Product addProduct(Product product) {
		repo.save(product);
		return product;
	}

	@Override
	public List<Product> getAllProduct() {
		
		return repo.findAll();
	}

	@Override
	public Product updateProductQuantity(Long id, int quantity) {
	    Product product = repo.findById(id)
	                          .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
	    product.setQuantity(quantity);
	    return repo.save(product);
	}


	@Override
	public void deleteProductById(Long id) {
		
		repo.deleteById(id);
		
	}

}
