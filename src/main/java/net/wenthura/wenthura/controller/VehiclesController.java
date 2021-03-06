package net.wenthura.wenthura.controller;

import net.wenthura.wenthura.exception.ResourceNotFoundException;
import net.wenthura.wenthura.model.Vehicles;
import net.wenthura.wenthura.repository.VehiclesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "vehicle")
public class VehiclesController {

    private byte[] bytes;

    @Autowired
    private VehiclesRepository vehiclesRepository;

    @GetMapping("/get")
    public List<Vehicles> getCars() {
        return vehiclesRepository.findAll();
    }

    @PostMapping("/upload")
    public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        this.bytes = file.getBytes();
    }

    @PostMapping("/add")
    public void createCar(@RequestBody Vehicles vehicles) throws IOException {
        vehicles.setPicByte(this.bytes);
        vehiclesRepository.save(vehicles);
        this.bytes = null;
    }


    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteVehicle(@PathVariable(value = "id") Long vehicleId)
            throws ResourceNotFoundException {
        Vehicles vehicles = vehiclesRepository.findById(vehicleId)
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle not found for this id :: " + vehicleId));
        vehiclesRepository.delete(vehicles);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }


    @PutMapping("/update")
    public void updateCar(@RequestBody Vehicles vehicles) {
        vehiclesRepository.save(vehicles);
    }
//
//	@PutMapping("/update")
//	public ResponseEntity<Vendor> updateBook(@PathVariable(value = "id") Long vendorId,
//												@Valid @RequestBody Vendor vendorDetails) throws ResourceNotFoundException {
//		Vendor vendor = vendorRepository.findById(vendorId)
//				.orElseThrow(() -> new ResourceNotFoundException("Vehicle not found for this id :: " + vendorId));
//
//
//		vendor.setAuthor(vendorDetails.getAuthor());
//		vendor.setName(vendorDetails.getName());
//		vendor.setPrice(vendorDetails.getPrice());
//
//		final Vendor updatedVendor = vendorRepository.save(vendor);
//		return ResponseEntity.ok(updatedVendor);
//	}
}
