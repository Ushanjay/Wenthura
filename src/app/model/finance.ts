export class Finance {
  private id: number;
  private finDate: string;
  private finDescription: string;
  private finExpen: string;
  private finAmount: number;
  private finPrice: number;
  private finTPrice: number;

  public constructor(init?: Partial<Finance>) {
    Object.assign(this, init);
  }
}
