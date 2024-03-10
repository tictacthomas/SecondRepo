

let new_code =`
<tr><td scope="col">OS</td>
    <td scope="col"><i style="color:DodgerBlue" class="bi bi-microsoft"></i></td>
    <td scope="col">My opperating system of choise is windows</td>
    <td scope="col">Windows 11</td>
    <td scope="col"><img src="./img/Table/win11.avif"" alt="windows 11" class="imgs" style="width: 120px;" /></td>
    </tr>
 
  <tr  class = "odd"><td scope="col">GMS</td>
    <td scope="col"><i style="color:green" class="bi bi-xbox"></i></td>
    <td scope="col">I like to play videogames</td>
    <td scope="col">Games like: Hades, Chess and Phasmophobia</td>
    <td scope="col"><img src="./img/Table/Hades.jpg"" alt="hades" class="imgs" style="width: 120px;" /></td>
  </tr>

  <tr><td scope="col">DRW</td>
  <td scope="col"><i class="bi bi-pencil-fill"></i></td>
  <td scope="col">I also like to draw</td>
  <td scope="col">I mostly draw abstract art</td>
  <td scope="col"><img src="./img/Table/art.jpg" alt="art" class="imgs" style="width: 120px;" /></td>
</tr>

  <tr class = "odd" ><td scope="col">SMR</td>
    <td scope="col"><i  style="color:orange" class="bi bi-sun-fill"></i></td>
    <td scope="col">I like summer the most</td>
    <td scope="col">Summer in Norway: May to June</td>
    <td scope="col"><img src="./img/Table/summer.jpg" alt="summer" class="imgs" style="width: 120px;" /></td>
    </tr>

  <tr><td scope="col">TRV </td>
    <td scope="col"><i style="color:gray" class="bi bi-airplane-engines-fill"></i></td>
    <td scope="col">I love to travel</td>
    <td scope="col">I want to go t  o Australia one day</td>
    <td scope="col"><img src="./img/Table/aust.png" alt="australia" class="imgs" style="width: 120px;" /></td>
    </tr>

  `;








document.body.onload = addElement;




function addElement() {

document.getElementById("personalTable").innerHTML += new_code;





$('body').on('click', '.imgs', function () {

  var w = window.open("_blank");

  w.document.write(this.outerHTML);

  


});



   ($("#personalTable tr").eq(0)).attr("class","odd");
  
   $('body').on('mouseover',".odd", function () {

    $(this).css("color","blue")

    
  });

  
  $('body').on('mouseleave',".odd", function () {

    $(this).css("color","black")

    
  });







}   
