function validate(){
    let uname = document.getElementById('uname');
    let pasw = document.getElementById('pasw');
    console.log(uname,pasw)
};

function reset(){
    var inputs = document.querySelectorAll('#notDone');
    for (var i =0; i< inputs.length; i++){
        inputs[i].checked = false
    }
    console.log("this is working")
    counter = 0;
    }
var tt,tc,tic = 0;

$(document).ready(function(){
    $.getJSON(
        "https://jsonplaceholder.typicode.com/todos",
        function(data){
            $.each(data, function(key, value){
                tt = data.length;
                if (value.completed == true){
                    tc++;
                    $("#showjson").append(
                        $("#showjson").append(
                            $(document.createElement("input")).attr({
                                checked :true,
                                type: "checkbox",
                                disabled : true,
                            })
                        )
                        .append("<label style = 'text-decoration:line-through; color:green; user-select:none;' class='mx-2'>" + " "+ value.title + "</label>"+ " <br>"));
                }
                else{
                    tic++;
                    $("#showjson").append(
                        $("#showjson").append(
                            $(document.createElement("input")).attr({
                                type: "checkbox",
                                onchange: "validate(this);",
                                id : "notDone"
                            })
                        )
                        .append("<label class='mx-2'>" + value.title + "</label>"+ " <br>"));
                        
                    }
                
            });
        })  

});

counter = 0;
function validate(v){
    if (v.checked){
        counter++;
    } else{
        counter--;
    }
    var check = new Promise((resolve, reject)=>{
        if (counter == 5){
            resolve();
            counter = 0;
        } else{
            reject(counter);
        }
    })
    .then(()=>{
        setTimeout(()=>{
            alert("You have completed 5 tasks!");
        },100)
        
    }).catch((a)=>{
        })
};
