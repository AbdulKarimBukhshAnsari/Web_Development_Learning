// List for storing the bag items
let bag_items_product;
// making variables for the bag summary 
let total_original_amount = 0 ;
let total_discount_amount = 0;
// the final bill
let final_bill  = 0 ;
onload();
function onload() {
  get_item();
  display_items();
  bag_summary();
}

// this is to remove the item from the from the bag 
function remove_item(itemID){
  // will find the index of the pointed element
  let index = bag_items.indexOf(itemID);
  // will delete the element
  bag_items.splice(index,1);
  // will update the bag-product-list
   // will save the list of bag items in local storage
   save_bag_items();
   // will update the bag icon
   show_content();
   // to update the bag summary as well 
   bag_summary();
  get_item();
  // will reload the page 
  onload();
 
}

function display_items() {
  let container = document.querySelector(".bag-items-container");
  let innerHTMLbag = ``;
  // if there is no item in the list then it will surely return the blank html 
  if (bag_items.length == 0) {
    container.innerHTML = innerHTMLbag;
    return;
  }
  bag_items_product.forEach((element) => {
    innerHTMLbag += ` <div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="${element.image}">
            </div>
            <div class="item-right-part">
              <div class="company">${element.company}</div>
              <div class="item-name">${element.item_name}</div>
              <div class="price-container">
                <span class="current-price">${element.current_price}</span>
                <span class="original-price">${element.original_price}</span>
                <span class="discount-percentage">(${element.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">14 days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">10 Oct 2023</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="remove_item(${element.id});">X</div>
          </div>`;
  });
  container.innerHTML = innerHTMLbag;
}

function get_item() {
  bag_items_product = bag_items.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == itemId) {
        return items[i];
      }
    }
  });
}

// function for showing the bag summary 
function bag_summary(){
 total_original_amount = 0 ;
 total_discount_amount = 0;
  let price_header = document.querySelector('.price-header');
  let total_amount_conatainer = document.querySelector('.price-item-value');
  let discount_amount_container = document.querySelector('.priceDetail-base-discount ');
  let final_bill_container = document.querySelector('.final-price');
  price_header.innerHTML = `PRICE DETAILS (${bag_items.length} Items )`;
  if(bag_items_product.length!=0){
    bag_items_product.forEach(bag_item => {
      total_original_amount+= bag_item.original_price;
      total_discount_amount += (bag_item.original_price - bag_item.current_price); 
    });
  }
  if(bag_items_product.length==0){
    final_bill = (total_original_amount - total_discount_amount ) ;
  }
  else{
  final_bill = (total_original_amount - total_discount_amount ) + 99 ;
  }
  total_amount_conatainer.innerHTML = `RS ${total_original_amount}`;
  discount_amount_container.innerHTML = `RS -${total_discount_amount}`;
  final_bill_container.innerHTML = `RS ${final_bill}`;
}


