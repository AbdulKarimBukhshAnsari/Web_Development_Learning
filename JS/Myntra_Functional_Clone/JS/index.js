// Showing all the item
 // show content of the bag 
display_items();
// Making list for the bag items in which we add all the ids of items
let bag_items =  JSON.parse(localStorage.getItem('bag-count')) || [];

function save_bag_items(){
    localStorage.setItem('bag-count',JSON.stringify(bag_items));
}


show_content();
function add_items(itemID){
    bag_items.push(itemID);
    console.log(bag_items);
    localStorage.setItem('bag-count',JSON.stringify(bag_items));
}

// To display the item this will ietrate through each and every object of the object items to show the items , you can show any much elelment you want 
function display_items(){
    let items_container = document.querySelector('.items-container');
    if(!items_container) {
        return;
    }
    items.forEach(function(item){
        items_container.innerHTML +=`<div class="item-container">
                    <div class="product-image">
                        <img src="${item.image}" >
                    </div>
                    <div class="rating">
                        ${item.rating.stars} ⭐ | ${item.rating.count}
                    </div>
                    <div class="company-name">
                        ${item.company}
                    </div>
                    <div class="product-detail">
                        ${item.item_name}
                    </div>
                    <div class="price">
                        <span>${item.current_price}</span> <span>${item.original_price}</span> <span>(${item.discount_percentage} % OFF)</span>
                    </div>
                    <button class="bag-btn" onclick='add_items(${item.id}) ; show_content()  ;  ' >Add to Bag</button>
                </div>`;

    });
}

// make the function to increase or decrease the cart item
// To show the result of the bag button 

function show_content(){
    // If the count will be zero then it will not show the count which is now zero
    let bag_count = document.querySelector('.bag-item-count'); 
    if(bag_items.length===0){
        bag_count.classList.add("hidden");
    }
    else{
        bag_count.classList.remove('hidden');

        bag_count.innerHTML = bag_items.length;
    }   
}




