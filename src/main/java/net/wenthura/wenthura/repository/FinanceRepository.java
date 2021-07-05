package net.wenthura.wenthura.repository;


import net.wenthura.wenthura.model.Finance;
import net.wenthura.wenthura.model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FinanceRepository extends JpaRepository<Finance, Long> {
}
