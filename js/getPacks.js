var getPack = {};

getPack.url = `${window.location.origin}/data/packs.json`

$(document).ready(function(){
    axios({
        method: 'get',
        url: getPack.url,
      }).then(function(res){
            getPack.data = res.data;
            listPacks(res.data);
            console.log(res.data)
      });  
});

var listPacks = function (data) {
    var packs = $("#packs")[0];
    packs.innerHTML = "";
    
    fullHTML = ""

    for(i = 0; i < data.length; i++){
        fullHTML += 
        `
        <div class="card mb-4 shadow-sm" style="width: 18rem;">
            <div class="${data[i].free ? "" : "bg-second"} card-header text-center">
            <h4 class="my-0 font-weight-normal">${data[i].free ? "Free" : "Pro"}</h4>
            </div>
            <img src="${data[i].image}" class="card-img-top" alt="${data[i].name}">
            <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
            <p class="card-text">${data[i].description}</p>
            <a href="${data[i].gumroad}" target="_blank" class="btn btn-primary">BUY NOW</a>
            </div>
        </div>
        `;
    }
    packs.innerHTML = fullHTML;

};
