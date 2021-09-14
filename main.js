menu_list_array = ["Margherita Pizza", " Neapolitan Pizza", " Veggie Pizza", " Pepperoni Pizza"];

function getmenu() {
    var htmldata;
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + menu_list_array[i] + '<br>'
    }
    document.getElementById("display_menu").innerHTML = htmldata;
}


function add_item() {
    var htmldata;
    var imgtags = '<img id="im1" src="https://cdn.pixabay.com/photo/2020/03/21/02/26/pizza-4952508_1280.jpg"/>'
    var item = document.getElementById("add_item").value;
    menu_list_array.sort();
    htmldata = ""
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + imgtags + menu_list_array[i] + '<br>';
    }
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top() {
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}