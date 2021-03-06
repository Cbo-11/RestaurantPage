import contactDetails from './Contact.js';
import createMenu from './Menu.js';

var content = document.getElementById('content');

var Details = () => {
    content.innerHTML = ''
    var cont = document.createElement("div");
    cont.classList.add( "container-xxl", "my-md-4", "bd-layout");
    var main = document.createElement("main");
    main.classList.add( "bd-main", "order-1");

    var container = document.createElement("div");
    container.classList.add( "container-sm","bio-details","overflow-auto",'rounded-3');
    //container.setAttribute("id", "bio-details");
    var detailsDiv = document.createElement("div");
    detailsDiv.classList.add("details-text");
    var title = document.createElement("h2");
    title.classList.add("title");
    title.innerHTML = 'Snacks on Snacks'
    var p1 = document.createElement("p");
    p1.classList.add( 'about');
    p1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta diam nec convallis viverra. Duis iaculis nibh ac urna consectetur, at mollis ex accumsan. Curabitur iaculis magna ut eros fermentum dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque dapibus fermentum vestibulum. Sed quam urna, tincidunt sit amet magna sed, cursus efficitur lorem. Cras ultrices feugiat erat in consectetur. In sed odio sed neque blandit placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque sem metus, accumsan et luctus ut, placerat ut diam. Quisque nisl metus, placerat eget augue sed, fermentum euismod tortor. Nam nec tempor risus, ac semper purus. Phasellus volutpat, erat eu tristique bibendum, ipsum tortor mollis turpis, vitae elementum risus enim ut dolor. Cras ornare mauris ut orci molestie blandit. Integer laoreet tortor nisi, non convallis eros dictum sit amet. Quisque diam mauris, fringilla quis dignissim vitae, malesuada sit amet ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare, nulla lobortis placerat finibus, orci massa rhoncus orci, a sodales augue massa vitae tellus. Aliquam sed nulla ut ipsum blandit feugiat. Aliquam erat volutpat. Nam euismod mollis felis non hendrerit."
    var p2 = document.createElement("p");
    p2.classList.add( 'about');
    p2.innerHTML = "Mauris eu nunc magna. Suspendisse maximus leo et ipsum consectetur, vitae feugiat nisl porttitor. Ut id euismod tortor. Aliquam eget posuere turpis. Etiam congue tortor eu metus faucibus iaculis. In lobortis, diam eget fermentum imperdiet, elit est ornare elit, a varius risus orci eget leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Etiam rutrum id augue ac aliquam. Fusce ultrices mattis turpis eget ultricies. Curabitur dignissim eros nec leo accumsan, laoreet ornare ante efficitur. Vivamus tellus lectus, gravida blandit bibendum vel, vestibulum at velit. Suspendisse potenti. Suspendisse magna ex, vehicula eu velit id, pulvinar porttitor nisl. Cras non est risus. Duis magna ante, tempus a lacinia a, vulputate ut erat. Aliquam a nisi sit amet odio ullamcorper facilisis. Donec fringilla, leo a volutpat consectetur, elit enim maximus erat, ac lacinia dui magna ac massa. Fusce volutpat, ligula id imperdiet sodales, libero orci suscipit neque, eget imperdiet lectus diam sit amet elit. Vestibulum semper nisi nisl, et mollis ligula ultricies at. Donec sollicitudin dictum mauris ac efficitur. In rutrum pulvinar velit id dictum. Nullam sagittis, ex at faucibus egestas, nulla dui ornare massa, quis convallis arcu leo id eros. Donec vitae sapien lacus. Suspendisse lobortis lorem nibh, at euismod ipsum varius at. Quisque aliquam ligula id suscipit egestas. Sed ullamcorper pellentesque augue, nec interdum nibh porta porttitor. Maecenas in congue massa. Nulla a nulla sed elit viverra rhoncus vitae non risus. Nulla congue nibh nec est lobortis feugiat. Fusce eleifend mauris a posuere ullamcorper. Pellentesque sit amet egestas massa. Cras ullamcorper, elit eget dignissim ultrices, eros purus laoreet felis, aliquet dapibus justo enim ac arcu. Fusce at elit viverra, lobortis dui et, pharetra urna. "  
              
    container.appendChild(detailsDiv);
    detailsDiv.appendChild(title);
    detailsDiv.appendChild(p1);
    detailsDiv.appendChild(p2);
    main.appendChild(container)
    cont.appendChild(main);
    content.appendChild(cont);
};

const home = document.getElementById('homeBtn');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

document.onload =  Details();
home.addEventListener('click' , Details)
menu.addEventListener('click',createMenu)
contact.addEventListener('click',contactDetails)