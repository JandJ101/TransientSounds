var getPack = {};

if (window.location.href.indexOf("github") > - 1) {
    getPack.url = `${window.location.origin}/TransientSounds/data/packs.json`;

} else {
    getPack.url = `${window.location.origin}/data/packs.json`;
}

$(document).ready(function(){
    axios({
        method: 'get',
        url: getPack.url,
      }).then(function(res){
            getPack.data = res.data;
            listPacks(res.data);
      });  
});

var listPacks = function (data) {
    var packs = $("#packs")[0];
    packs.innerHTML = "";
    
    fullHTML = "";

    for(i = 0; i < data.length; i++){
        fullHTML += 
        `
        <div class="card mb-3 shadow m-4">
            <div class="${data[i].free ? "" : "bg-second"} card-header text-center">
            <h4 class="my-0 font-weight-normal">${data[i].free ? "Free" : "Pro"}</h4>
            </div>
            <div class="imgContainer" style="background: url(${data[i].image});">
            </div>
            <div class="card-body">
            <h4 class="card-title">${data[i].name}</h4>
            <p class="card-text text-left">${data[i].description}</p>
            
            </div>
            <div class="card-footer text-muted">
            <p class="text-muted">${data[i].sampleNum} Samples For ${data[i].free ? "FREE" : "$" + data[i].price}</p>
            <a href="${data[i].gumroad}" target="_blank" class="btn btn-primary">GET NOW</a>
            </div>
        </div>
        `;
    }
    packs.innerHTML = fullHTML;

};
