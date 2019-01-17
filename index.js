
let checkToggle = entry => {
    entry.toggleClass('shopping-item__checked');
};

function main(){
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault(); 
        let item = $(this).find("#shopping-list-entry").val(); 
        $('.shopping-list').append(    
        `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
        </li>`);
    });

    $('.shopping-item-toggle').click(function(event){
        let item = $(this)
            .closest('li')
            .find('.shopping-item');
        checkToggle(item);
    })

    $('.shopping-item-delete').click(function(event){
        let item = $(this)
            .closest('li');
        console.log(item); 
        item.remove();    
    })
}

$(main());