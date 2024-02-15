let nod = [];
let don;

$(".add").click(function() {
    don =$(".picture-url").val();
    nod.push(don);
    $(".gallery").append("<img src='" + don + "'>");
});

$(".remove").click(function(){
    $("img:last").remove();
});