/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let obj1 = {}

  for (let item of transactions) {
    if (!(item.category in obj1)) {
      obj1[item.category] = item.price
    } else {
      obj1[item.category] += item.price
    }
  }

  let final = []

  for (let item in obj1) {
    final.push({
      category: item,
      totalSpent: obj1[item]
    })
  }
  return final
}

module.exports = calculateTotalSpentByCategory