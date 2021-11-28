let restaurant = {
  mainCourse: ["pasta", "burger", "pizza"],
  starters: ["barbeque", "grilled"],
  orederfood: function ({ mainCourse_item, starters_item }) {
    console.log(
      `Your order is ${this.mainCourse[mainCourse_item]} and ${this.starters[starters_item]}`
    );
  },
};
let myOrder = {
  mainCourse_item: 0,
  starters_item: 1,
};

restaurant.orederfood(myOrder);
