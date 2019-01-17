let genHTML = entry => {
    return 
    `<li>
        <span class="shopping-item">${entry}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
    </li>`;
};

let addItem = entry => {
    $('.shopping-list').append(genHTML(entry));
};

let checkToggle = entry => {
    entry.toggleClass('shopping-item__checked');
};

function main(){
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        let item = $(event.currentTarget)
            .find('#shopping-list-entry')
            .val();
        addItem(item);
        event.target.reset();
    });

    $('.shopping-item-toggle').click(function(event){
        let item = $(this)
            .closest('li')
            .find('.shopping-item');
        checkToggle(item);
    })
}

$(main());