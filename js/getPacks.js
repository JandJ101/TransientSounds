var getPack = {};

getPack.url = "https://api.gumroad.com/v2/products"
getPack.access_token = " 24675761580d0d599399457c7f03aeb81d745da3d193c4b0dfb74c3591dbf97f"

// axios.get(getPack.url, {
//       access_token = "3ce79a8ad2a8d300b607de5abb325711aa896612ae4b09c19ab7c5de64b3a8c8",
//   }).then(
//     function (res){
//         console.log(res)
//     }
// )


axios({
    method: 'get',
    url: getPack.url,
    headers: {}, 
    data: `access_token=${getPack.access_token}`
  }).then(function(res){
        console.log(res);
  });