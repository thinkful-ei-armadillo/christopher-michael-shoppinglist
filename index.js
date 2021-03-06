
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

    $('ul').on('click', '.shopping-item-toggle',function(event){
        let item = $(this)
            .closest('li')
            .find('.shopping-item');
        checkToggle(item);
    });

    $('ul').on('click', '.shopping-item-delete',function(event){
        let item = $(this)
            .closest('li');
        item.remove();    
    });
}

$(main());