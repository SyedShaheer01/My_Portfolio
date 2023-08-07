var typed= new  Typed(".multiple-text",{
    strings:["Frontend Developer", "Web designer"],
    typeSpeed:80,
    backSpeed:80,
    backDelay:1000,
    loop: true
})


let btn=document.querySelector(".btn")

function load(){
    
    let screen=document.querySelector(".projects")
    
    // let edit=true
    
    if(btn){
        
        screen.innerHTML=`<div class="screen">
        <div class="work">
        <img src="./stop watch.png" alt="" width="300" height="150"></a>
        <div class="layer">
        <h3 style="color: white;"> Stop watch</h3>
        <p style="color: white;">watch.</p>
        <a href="https://syedshaheer01.github.io/stop-watch/" target="_blank"><i
        class="fa-solid fa-up-right-from-square"></i></a>
        
        </div>
        </div>


        <div class="work">
          
                <img src="./quiz app.png" alt="" width="300" height="150"></a>
                <div class="layer">
                    <h3 style="color: white;">Quiz app</h3>
                    <p style="color: white;">quiz.</p>
                <a href="https://syedshaheer01.github.io/quiz-app/" target="_blank"><i
                    class="fa-solid fa-up-right-from-square"></i></a>
                    
                </div>
                </div>
    
                <div class="work">
               
                    <img src="./weather app.png" alt="" width="300" height="150"></a>
                    <div class="layer">
                        <h3 style="color: white;">Weather app</h3>
                        <p style="color: white;">weather.</p>
                    <a href="https://syedshaheer01.github.io/weather_app/" target="_blank"><i
                        class="fa-solid fa-up-right-from-square"></i></a>
                        
                    </div>
                    </div>
                <div class="work">
                
                    <img src="./todo.png" alt="" width="300" height="150"></a>
                    <div class="layer">
                        <h3 style="color: white;">Todo app</h3>
                        <p style="color: white;">todo.</p>
                    <a href="https://syedshaheer01.github.io/todo-app/" target="_blank"><i
                        class="fa-solid fa-up-right-from-square"></i></a>
                        
                    </div>
                    </div>


        </div>
        
        

        <div class="screen">
        <div class="work">
           
                <img src="./news app.png" alt="" width="300" height="150"></a>
                <div class="layer">
                    <h3 style="color: white;">News app</h3>
                    <p style="color: white;">news.</p>
                <a href="https://syedshaheer01.github.io/news-app/" target="_blank"><i
                    class="fa-solid fa-up-right-from-square"></i></a>
                    
                </div>
                </div>
                    
    
                <div class="work">
            
                <img src="./sabroso.png" alt="" width="300" height="150"></a>
                <div class="layer">
                    <h3 style="color: white;">Sabroso Website</h3>
                    <p style="color: white;">sabroso.</p>
                <a href="https://syedshaheer01.github.io/sabroso-web/" target="_blank"><i
                    class="fa-solid fa-up-right-from-square"></i></a>
                    
                </div>
                </div>
                <div class="work">
                <img src="./landing page.png" alt="" width="300" height="150"></a>
                <div class="layer">
                    <h3 style="color: white;">Landing page</h3>
                    <p style="color: white;">page.</p>
                <a href="https://syedshaheer01.github.io/landing-page/" target="_blank"><i
                    class="fa-solid fa-up-right-from-square"></i></a>
                    
                </div>
                </div>
                <div class="work">
            
                <img src="./digital clock.png" alt="" width="300" height="150"></a>
                <div class="layer">
                    <h3 style="color: white;">Digital clock</h3>
                    <p style="color: white;">clock.</p>
                <a href="https://syedshaheer01.github.io/digital-clock/" target="_blank"><i
                    class="fa-solid fa-up-right-from-square"></i></a>
                    
                </div>
                </div>
        </div>
        
        `
        event.target.parentNode.childNodes[1].innerHTML="load more";
        screen.style.display="block"
        event.target.parentNode.childNodes[1].innerHTML="show less"
        
        btn=false
        
        
    }
    else{
        event.target.parentNode.childNodes[1].innerHTML="load more";
        
        
        screen.style.display="none"
        
            btn=true
        
        
    }
}