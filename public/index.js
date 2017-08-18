$(document).ready(function () {
    
    $("button[name=add]").on("click", function () {
        if($("[name=name]").val().length != 0 && $("[name=place]").val().length != 0 && $("[name=animal]").val().length != 0 && $("[name=thing]").val().length != 0) {
            var name = $("[name=name]").val();
            var place = $("[name=place]").val();
            var animal = $("[name=animal]").val();
            var thing = $("[name=thing]").val();
            
            $.ajax({
                method:'POST',
                data: {
                    "name": name,
                    "place": place,
                    "animal": animal,
                    "thing": thing
                },
                url:"http://localhost:3000/setData",
                error:function(err){
                    console.log(err);
                },
                success:function(){
                    alert("data added.");
                    location.reload(true);
                }
            });
        }
    })
    
    $("button[name=delete]").on("click", function () {
        var selected = $("[type=checkbox]:checked");
        var del="";
        if(selected.length > 0 && selected.length == 1) {
            del += "="+$(selected[0]).parent().attr("id");
        } else if (selected.length > 1) {
            del += "in(";
            for(i=0 ; i<selected.length ; i++) {
                if(i != selected.length-1)
                    del += $(selected[i]).parent().attr("id")+",";
                else 
                    del += $(selected[i]).parent().attr("id")+")";
            }
        }
        
        $.ajax({
                method:'POST',
                data: {
                    "id" :del
                },
                url:"http://localhost:3000/delData",
                error:function(err){
                    console.log(err);
                },
                success:function(){
                    alert("data deleted.");
                    location.reload(true);
                }
            });
    })
    
    $("button[name=update]").on("click",function(){
        var selected = $("[type=checkbox]:checked");
        if(selected.length != 0 && selected.length == 1){
            var name = $("[name=name]").val();
            var place = $("[name=place]").val();
            var animal = $("[name=animal]").val();
            var thing = $("[name=thing]").val();
            var id = selected.parent().attr("id");
            
            if(name.length == 0) {
                name = $(selected.parent().siblings()[0]).text();
            }
            if(place.length == 0) {
                place = $(selected.parent().siblings()[1]).text();
            }
            if(animal.length == 0) {
                animal = $(selected.parent().siblings()[2]).text();
            }
            if(thing.length == 0) {
                thing = $(selected.parent().siblings()[3]).text();
            }
            $.ajax({
                method:'POST',
                data: {
                    "name":name,
                    "place":place,
                    "animal":animal,
                    "thing":thing,
                    "id":id
                },
                url:"http://localhost:3000/updateData",
                error:function(err){
                    console.log(err);
                },
                success:function(){
                    alert("data updated.");
                    location.reload(true);
                }
                
            });
        }
    })
})