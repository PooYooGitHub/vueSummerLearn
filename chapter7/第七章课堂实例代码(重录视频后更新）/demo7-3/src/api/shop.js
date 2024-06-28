const data = [
  {
    id: 1,
    img: require("@/assets/img/phone1.webp"),
    name: "小米 Redmi 红米 Note 10 Pro",
    desc: "官方标配，月魄，6+128GB",
    price: 155.01,
    stock: 12,
  },
  {
    id: 2,
    img: require("@/assets/img/phone2.webp"),
    name: "小米Redmi红米10X 4G",
    desc: "官方标配，幻青，8+128GB",
    price: 255.02,
    stock: 2,
  },
  {
    id: 3,
    img: require("@/assets/img/phone3.webp"),
    name: "红米Note9 5G手机",
    desc: "官方标配，星纱，8+256GB",
    price: 355.03,
    stock: 1,
  }
]

export default {
  getGoodsList(callback) {
    setTimeout(() => callback(data), 100)
  }
}
