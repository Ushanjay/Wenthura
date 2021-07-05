package net.wenthura.wenthura.model;

import javax.persistence.*;

@Entity
@Table(name = "vehicle")

public class Vehicle {
    private long id;
    private String vehOName;
    private String vehAddress;
    private String vehCon;
    private String vehDriver;
    private String vehNumber;
    private String vehType;
    private String vehModel;
    private String vehPrice;
    private String vehAvailability;

       public Vehicle() {}


     public Vehicle(long id, String vehOName, String vehAddress, String vehCon, String vehDriver, String vehNumber, String vehType, String vehModel, String vehPrice, String vehAvailability) {
        this.id = id;
        this.vehOName = vehOName;
        this.vehAddress = vehAddress;
        this.vehCon = vehCon;
        this.vehDriver = vehDriver;
        this.vehNumber = vehNumber;
        this.vehType = vehType;
        this.vehModel = vehModel;
        this.vehPrice = vehPrice;
        this.vehAvailability = vehAvailability;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "veh_number", nullable = false)
    public String getVehNumber() {
        return vehNumber;
    }

    public void setVehNumber(String vehNumber) {
        this.vehNumber = vehNumber;
    }

    @Column(name = "veh_type", nullable = false)
    public String getVehType() {
        return vehType;
    }

    public void setVehType(String vehType) {
        this.vehType = vehType;
    }

    @Column(name = "veh_model", nullable = false)
    public String getVehModel() {
        return vehModel;
    }

    public void setVehModel(String vehModel) {
        this.vehModel = vehModel;
    }

    @Column(name = "veh_price", nullable = false)
    public String getVehPrice() {
        return vehPrice;
    }

    public void setVehPrice(String vehPrice) {
        this.vehPrice = vehPrice;
    }

    @Column(name = "veh_availability", nullable = false)
    public String getvehAvailability() {
        return vehAvailability;
    }

    public void setvehAvailability(String vehAvailability) {
        this.vehAvailability = vehAvailability;
    }


    @Column(name = "veh_OName", nullable = false)
    public String getVehOName() {
        return vehOName;
    }

    public void setVehOName(String vehOName) {
        this.vehOName = vehOName;
    }

    @Column(name = "veh_address", nullable = false)
    public String getVehAddress() {
        return vehAddress;
    }

    public void setVehAddress(String vehAddress) {
        this.vehAddress = vehAddress;
    }

    @Column(name = "veh_con", nullable = false)
    public String getVehCon() {
        return vehCon;
    }

    public void setVehCon(String vehCon) {
        this.vehCon = vehCon;
    }

    @Column(name = "veh_driver", nullable = false)
    public String getVehDriver() {
        return vehDriver;
    }

    public void setVehDriver(String vehDriver) {
        this.vehDriver = vehDriver;
    }

    @Override
    public String toString() {
        return "Vehicle{" +
                "id=" + id +
                ", vehOName='" + vehOName + '\'' +
                ", vehAddress='" + vehAddress + '\'' +
                ", vehCon='" + vehCon + '\'' +
                ", vehDriver='" + vehDriver + '\'' +
                ", vehNumber='" + vehNumber + '\'' +
                ", vehType='" + vehType + '\'' +
                ", vehModel='" + vehModel + '\'' +
                ", vehPrice='" + vehPrice + '\'' +
                ", vehAvailability='" + vehAvailability + '\'' +
                '}';
    }
}








































