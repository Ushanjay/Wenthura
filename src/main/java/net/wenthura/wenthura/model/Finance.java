package net.wenthura.wenthura.model;

import javax.persistence.*;

@Entity
@Table(name = "finance")

public class Finance {

    private long id;
    private String finDate;
    private String finDescription;
    private String finExpen;
    private long finAmount;
    private long finPrice;
    private long finTPrice;

    public Finance() {}


    public Finance(long id, String finDate, String finDescription, String finExpen, long finAmount, long finPrice, long finTPrice) {
        this.id = id;
        this.finDate = finDate;
        this.finDescription = finDescription;
        this.finExpen = finExpen;
        this.finAmount = finAmount;
        this.finPrice = finPrice;
        this.finTPrice = finTPrice;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "fin_date", nullable = false)
    public String getFinDate() {
        return finDate;
    }

    public void setFinDate(String finDate) {
        this.finDate = finDate;
    }

    @Column(name = "fin_description", nullable = false)
    public String getFinDescription() {
        return finDescription;
    }

    public void setFinDescription(String finDescription) {
        this.finDescription = finDescription;
    }

    @Column(name = "fin_expen", nullable = false)
    public String getFinExpen() {
        return finExpen;
    }

    public void setFinExpen(String finExpen) {
        this.finExpen = finExpen;
    }

    @Column(name = "fin_amount", nullable = false)
    public long getFinAmount() {
        return finAmount;
    }

    public void setFinAmount(long finAmount) {
        this.finAmount = finAmount;
    }

    @Column(name = "fin_price", nullable = false)
    public long getFinPrice() {
        return finPrice;
    }

    public void setFinPrice(long finPrice) {
        this.finPrice = finPrice;
    }

    @Column(name = "fin_tprice", nullable = false)
    public long getFinTPrice() {
        return finTPrice;
    }

    public void setFinTPrice(long finTPrice) {
        this.finTPrice = finTPrice;
    }

    @Override
    public String toString() {
        return "Finance{" +
                "id=" + id +
                ", finDate='" + finDate + '\'' +
                ", finDescription='" + finDescription + '\'' +
                ", finExpen='" + finExpen + '\'' +
                ", finAmount='" + finAmount + '\'' +
                ", finPrice='" + finPrice + '\'' +
                ", finTPrice='" + finTPrice + '\'' +
                '}';
    }
}
