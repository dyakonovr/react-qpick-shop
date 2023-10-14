interface IPromoCodesObject {
  [name: string]: string | number
}

export default interface IDatabaseState {
  data: object,
  promoCodes: IPromoCodesObject
} 