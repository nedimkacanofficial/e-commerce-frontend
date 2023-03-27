export class Product {
  constructor(private _sku: number,
              private _name: string,
              private _description: string,
              private _unitPrice: number,
              private _imageUrl: string,
              private _active: boolean,
              private _unitsInStock: number,
              private _dateCreated: Date,
              private _lastUpdated: Date) {

              }

  get sku(): number {
    return this._sku;
  }
  set sku(value: number) {
    this._sku = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get unitPrice(): number {
    return this._unitPrice;
  }
  set unitPrice(value: number) {
    this._unitPrice = value;
  }
  get imageUrl(): string {
    return this._imageUrl;
  }
  set imageUrl(value: string) {
    this._imageUrl = value;
  }
  get active(): boolean {
    return this._active;
  }
  set active(value: boolean) {
    this._active = value;
  }
  get unitsInStock(): number {
    return this._unitsInStock;
  }
  set unitsInStock(value: number) {
    this._unitsInStock = value;
  }
  get dateCreated(): Date {
    return this._dateCreated;
  }
  set dateCreated(value: Date) {
    this._dateCreated = value;
  }
  get lastUpdated(): Date {
    return this._lastUpdated;
  }
  set lastUpdated(value: Date) {
    this._lastUpdated = value;
  }

  toString(): string {
    return `Product: sku=${this.sku}, name=${this.name}, description=${this.description}, unitPrice=${this.unitPrice}, imageUrl=${this.imageUrl}, active=${this.active}, unitsInStock=${this.unitsInStock}, dateCreated=${this.dateCreated}, lastUpdated=${this.lastUpdated}`;
  }
}
