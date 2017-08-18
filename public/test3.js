$(document).ready(() => {

    var obj,data;
    var disp = (i) =>{
            data=obj[i];
            $("#tab").append("<tr id='"+data.id+"'></tr>");
            $("#"+data.id).append("<td id='"+data.id+"'><input type='checkbox'/></td>");
            $("#"+data.id).append("<td>"+data.name+"</td>");
            $("#"+data.id).append("<td>"+data.place+"</td>");
            $("#"+data.id).append("<td>"+data.animal+"</td>");
            $("#"+data.id).append("<td>"+data.thing+"</td>");
           
    }
        
    
    var myFunct = () => {
        if(obj.length<21){
                $(".container").html("");
                $(".container").html("<h1>No more data found</h1>");
        }
        else
        {   
            var len;
            (obj.length<30) ? len=obj.length : len=30;
            var i= 20;
            obj.map(item => {
            (i++< len) ? disp(i) : console.log(i);
            });
            
            $("[type=checkbox]").on("change",() => {
                ($(this).prop("checked")) ? $(this).parent().parent().css("background-color","yellowgreen") :
                    $(this).parent().parent().css("background-color","white");      
            })
        }
    }
    $.ajax({
            method:'GET',
            url:"http://localhost:3000/getData",
            error:function(err){
                console.log(err);
            },
            success:function(object){
                obj = object;
                myFunct();
            }
        });
})