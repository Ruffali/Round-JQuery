

// Class exercise START

// $().ready(function() {

//     $(window).scroll(function(){      
//         if(window.scrollY > 50){
//             $('.first').fadeIn(5000);  
//             $('.middle').fadeIn(8000);   
//             $('.last').fadeIn(10000);           
//         }                  
//     });
// });

// Class exercise END

// ===============================================================


$(document).ready(function(){
    divs = []

    $(window).mousemove(function(event){
        var left = event.pageX;
        var top = event.pageY;

        var x = Math.floor(Math.random()*100)+'px';
        var red = Math.floor(Math.random()*255);
        var green = Math.floor(Math.random()*255);
        var blue = Math.floor(Math.random()*255);

        if(divs.length >= 9){
        
        document.body.removeChild(divs[0]);  
        divs.shift();
        var fast = document.createElement('div');
        fast.classList.add('snakes');

        fast.style.background = 'rgb('+ red + ',' + green + ',' + blue + ')';
        fast.style.left = left + 'px';
        fast.style.top = top + 'px';
        document.body.appendChild(fast);

        divs.push(fast)
        }else if(divs.length < 11){

            var fast = document.createElement('div');
            fast.classList.add('snakes');
    
            fast.style.background = 'rgb('+ red + ',' + green + ',' + blue + ')';
            fast.style.left = left + 'px';
            fast.style.top = top + 'px';
            document.body.appendChild(fast);
            divs.push(fast)
       
        }
    
    })
    
})
