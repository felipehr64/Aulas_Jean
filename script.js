var card = '<div class="card" style="width:400px"><img class="card-img-top" src="img_avatar1.png" alt="Card image"><div class="card-body">  <h4 class="card-title">John Doe</h4> <p class="card-text">Some example text.</p> <a href="#" class="btn btn-primary">See Profile</a> </div> </div>';

var vardadiv = document.getElementById("conteudo");

var divs ='';
for (i = 0; i < 100; i++) {
    divs +=card;
}

vardadiv.innerHTML = divs;

