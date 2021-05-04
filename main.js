menu_list_array=["Chicken Tandoori Pizza", "Veg Pizza", "Panner Tokka Pizza", "Deluxe Veg Pizza", "Chicken Pizza"];
function get_menu()
{
    var htmldata;
    htmldata="<ol class='menu_list_array'>"
    menu_list_array.sort();
    for(var i =0;i<menu_list_array.length;i++)
    {
        htmldata = htmldata+'<li>'+menu_list_array[i]
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item()
{
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<ol class='menu_list_array'>"
    for(var i =0;i<menu_list_array.length;i++)
    {
        htmldata = htmldata+'<li>'+menu_list_array[i]
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;

}