/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let ans=[];
  let temp=[];
  for (let i=0;i<transactions.length;i++){
    let current=transactions[i];
    if(!temp[current.category]){
      temp[current.category]=current.price;
    }
    else{
      temp[current.category]+=current.price;
    }
  }
  //Referred
  for(let category in temp){
      ans.push({category:category,totalSpent:temp[category]});
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;