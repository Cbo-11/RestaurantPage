var contactDetails = ()=> {
    var content = document.getElementById('content')
    content.innerHTML = ''
    var contacts = [['Phone: ','738163 892649'],['Visit: ','1762 Tasty treats drive','Big city','Postcode 389'],['Email: ','hello@snacksonsnacks.net']]

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
    title.innerHTML = 'Contact'

    detailsDiv.appendChild(title);
    container.appendChild(detailsDiv);
    main.appendChild(container)
    cont.appendChild(main);

    contacts.forEach(contact => {
        var div = document.createElement('div');
        div.classList.add('menu-item','mt-5','border-top');

        contact.forEach(c => {
            var p = document.createElement("p");
            p.classList.add('contact-item','gap-3');
            p.innerHTML = c;
            div.appendChild(p);
        })
        detailsDiv.appendChild(div);
    });

    content.appendChild(cont);

};

export default contactDetails