var  isNavVisible=false;
function shownav()
 {
 if(isNavVisible== false)
 {
     document.getElementById('nav').style.height="200px";
     isNavVisible=true;
 }
     else
     {
         document.getElementById('nav').style.height="0px";
         isNavVisible=false;
     }

       }
       //jquery for button hide and show for know more
$(document).ready(function()
{
    $(".p1").hover(function(){
        $(".un-btn").css("display","inline-block")
      },(function(){
        $(".un-btn").css("display","none")
      }));
    });
    $(document).ready(function()
{
    $(".p2").hover(function(){
        $(".gr-btn").css("display","inline-block")
      },(function(){
        $(".gr-btn").css("display","none")
      }));
    });
    $(document).ready(function()
{
    $(".p3").hover(function(){
        $(".do-btn").css("display","inline-block")
      },(function(){
        $(".do-btn").css("display","none")
      }));
    });
    //end of hover effect on know more on programs

    //jquery for about img sliding 
    $(document).ready(function()
{
    $(".about-parent").hover(function()
    {
      $(".about-img").animate(
          {
            height:'280px',
            width:'46%',
            opacity:'0.7',
            
          },(function()
          {
            $(".about-img").animate(
                {
                  height:'350px',
                  width:'50%',
                  opacity:'1',
                })
             
          }));
    
      });

});
//about button
$(document).ready(function()
{
   
    $(".about-parent").mouseover(function(){
        $(".about-btn").css("display","inline-block")
      
      });
      $(".about-parent").mouseout(function(){
        $(".about-btn").css("display","none")
      
      });
      
});
//social media icons section
// $(document).ready(function()
// {
//   $(".icon").hover(function()
//   {
 
   
//     $(".icon").animate(
//       {
//         width:'5%',
      
//       },function(){
//       $(".icon").animate(
//         {
//           width:'100%',
//         })
//         });
//          });
//          });
       
$(document).ready(function() {
  $(".double-arrow").click(function () {
$( ".icon" ).toggle({
     duration: 2000,

 });

});  
});

