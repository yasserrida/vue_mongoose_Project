var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

$.get("/api/allusers", { }, function(response){ 
  var listuser = new Vue({
    el: '#listuser',
    data: {
      items: response
    }
  });
});


function delete_user(x){
  if (confirm("Voulez-vous supprimer ce Module ?")) {
      $.get( "/api/user/"+ x +"/delete", { }, function(response){ if(response = '1'){  } else{  }});
  }
}

