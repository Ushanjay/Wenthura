export class Inventory {

  private id: number;
  private invenName: string;
  private invenPrice: string;
  private invenCategory: string;
  private invenAvailability: string;
  private invenQuantity: number;

  public constructor(init?: Partial<Inventory>) {
    Object.assign(this, init);
  }
}
