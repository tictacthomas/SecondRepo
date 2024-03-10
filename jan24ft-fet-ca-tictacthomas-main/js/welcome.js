 $(document).ready(function(){
            $("#liveToastBtn").click(function(){
                $("#liveToast").toast("show");
            });
        });


    

        $(document).ready(function(){
            $("#boredBtn").click(function(){
               

                var request = new XMLHttpRequest();

                request.open("get", "http://www.boredapi.com/api/activity/");
                
                request.onload = function() {
                   var response = request.response
                   var Data = JSON.parse(response);
                   console.log(Data);

                }
                
                request.send()
                ;});
            });