console.log($);


$.ajax({
    url: "https://swapi.co/api/people/?search=r2",
    context: document.body
  }).then(function(response) {
      console.log(response);
      
  })