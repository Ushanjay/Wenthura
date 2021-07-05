package net.wenthura.wenthura.controller;

import net.wenthura.wenthura.exception.ResourceNotFoundException;
import net.wenthura.wenthura.model.Finance;
import net.wenthura.wenthura.model.Inventory;
import net.wenthura.wenthura.repository.FinanceRepository;
import net.wenthura.wenthura.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/fin")
public class FinanceController {
    @Autowired
    private FinanceRepository financeRepository;

    @GetMapping("/finance/all")
    public List<Finance> getAllFinance(){
        return financeRepository.findAll();
    }

    @GetMapping("/finance/{id}")
    public ResponseEntity<Finance> getFinanceById(@PathVariable(value = "id") Long financeId)
            throws ResourceNotFoundException {
        Finance finance = financeRepository.findById(financeId)
                .orElseThrow(() -> new ResourceNotFoundException("Finance not found for this id :: " + financeId));
        return ResponseEntity.ok().body(finance);
    }

    @PostMapping("/finance")
    public Finance createFinance(@Valid @RequestBody Finance finance) {

        return financeRepository.save(finance);
    }

    @PutMapping("/finance/{id}")
    public ResponseEntity<Finance> updateFinance(@PathVariable(value = "id") Long financeId,
                                                     @Valid @RequestBody Finance financeDetails) throws ResourceNotFoundException {
        Finance finance = financeRepository.findById(financeId)
                .orElseThrow(() -> new ResourceNotFoundException("Finance not found for this id :: " + financeId));

        finance.setFinDate(financeDetails.getFinDate());
        finance.setFinDescription(financeDetails.getFinDescription());
        finance.setFinExpen(financeDetails.getFinExpen());
        finance.setFinAmount(financeDetails.getFinAmount());
        finance.setFinPrice(financeDetails.getFinPrice());
        finance.setFinTPrice(financeDetails.getFinTPrice());
        final Finance updatedFinance = financeRepository.save(finance);
        return ResponseEntity.ok(updatedFinance);
    }

    @DeleteMapping("/finance/{id}")
    public Map<String, Boolean> deleteFinance(@PathVariable(value = "id") Long financeId)
            throws ResourceNotFoundException {
        Finance finance = financeRepository.findById(financeId)
                .orElseThrow(() -> new ResourceNotFoundException("Finance not found for this id :: " + financeId));

        financeRepository.delete(finance);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
