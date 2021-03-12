var createMenu = () => {

        var content = document.getElementById('content')
        content.innerHTML = ''
        var menu = [['Burger - £13 ','details details blah blah blah'],['Chicken Wings - £9.50 ','Ingredients, details and such'],['Pizza - £8' ,'Topping 1 , Topping 2, topping 3'], ['Fish and Chips - £12.00','Fish and chips, what more info do you need!'],['Hand-Cut Fries with Smoked Aioli - £6','Lorem ipsum menu item details'],['Nachos - £9','Lorem ipsum menu item details'],['Burrito - £12','Lorem ipsum menu item details']]
    
        var cont = document.createElement("div");
        cont.classList.add( "container-xxl", "my-md-4", "bd-layout");
        var main = document.createElement("main");
        main.classList.add( "bd-main", "order-1");
    
        var container = document.createElement("div");
        container.classList.add( "container-sm","menu-details","overflow-auto",'rounded-3');
        //container.setAttribute("id", "bio-details");
        var detailsDiv = document.createElement("div");
        detailsDiv.classList.add("details-text");
        var title = document.createElement("h2");
        title.classList.add("title");
        title.innerHTML = 'Menu'
    
        detailsDiv.appendChild(title);
        container.appendChild(detailsDiv);
        main.appendChild(container)
        cont.appendChild(main);
    
        menu.forEach(items => {
            var div = document.createElement('div');
            div.classList.add('menu-item','mt-5','border-top');
    
            items.forEach(item => {
                var p = document.createElement("p");
                p.classList.add('contact-item');
                p.innerHTML = item;
                div.appendChild(p);
            })
            detailsDiv.appendChild(div);
        });
    
        content.appendChild(cont);
    
    };

export default createMenu;