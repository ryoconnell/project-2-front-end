$(function(){
  var sa = "http://localhost:3000";
  $("#contact-create").on("click", function(){
    $.ajax({
    url: sa + '/contacts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + simpleStorage.get('token')
    },
    data: {
      contact: {
        name: $("#name").val(),
        email: $("#email").val(),
        pet_name: ($("#pet-name").val())
      }
    }
    }).done(function(data){
      console.log("Created Contact!");
    }).fail(function(data){
      console.error(data);
    });
  });


$("#contact-update").on('click', function(){
  $.ajax({
    url: sa + '/contacts' + $("#contact-id").val(),
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + simpleStorage.get('token')
    },
    data: {
      contact: {
        name: $("#name").val(),
        email: $("#email").val(),
        pet_name: ($("#pet-name").val())
      }
    }
  }).done(function(data){
    console.log("Updated Contact!");
  }).fail(function(data){
    console.error(data);
  });
});

  $("#contact-destroy").on('click', function(){
  $.ajax({
    url: sa + '/contacts' + $("#contact").val(),
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + simpleStorage.get('token')
    },
  }).done(function(data){
    console.log("Deleted Contact!");
  }).fail(function(data){
    console.error(data);
  });
});

  $("#pet-create").on("click", function(){
    $.ajax({
    url: sa + '/pets',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + simpleStorage.get('token')
    },
    data: {
      pet: {
        name: $("#name").val(),
        species: $("#species").val(),
        color: ($("#color").val())
      }
    }
  }).done(function(data){
    console.log("Created Pet!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#pet-update").on('click', function(){
  $.ajax({
    url: sa + '/pets' + $("#pet-id").val(),
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + simpleStorage.get('token')
    },
    data: {
      pet: {
        name: $("#name").val(),
        species: $("#species").val(),
        color: ($("#color").val())
      }
    }
  }).done(function(data){
    console.log("Updated Pet!");
  }).fail(function(data){
    console.error(data);
  });
});

  $("#pet-destroy").on('click', function(){
  $.ajax({
    url: sa + '/pets' + $("#pet").val(),
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + simpleStorage.get('token')
    },
  }).done(function(data){
    console.log("Deleted Pet!");
  }).fail(function(data){
    console.error(data);
  });
});

  $("#location-create").on("click", function(e){
    $.ajax({
    url: sa + '/locations',
    method: 'POST',
    dataType: 'json',
    headers: {
      Authorization: 'Token token=' + simpleStorage.get('token')
    },
    data: {
      location: {
        number: parseInt($("#number").val(), 10),
        street: $("#street").val(),
        city: ($("#city").val())
      }
    }
  }).done(function(data){
    console.log("Created Location!");
  }).fail(function(data){
    console.error(data);
  });
});

$('#login-button').on('click', function(e){
  e.preventDefault();
  console.log($('#email').val());
  console.log($('#pwd').val())
  $.ajax({
    url: sa + '/login',
    method: 'POST',
    dataType: 'json',
    data: {
      user: {
        email: $('#email').val(),
        password: $('#pwd').val()
      }
    }
  }).done(function(data){
    console.log(data)
    simpleStorage.set('token', data.token);
  }).fail(function(data){
    console.log('not great');
  });
});

$('#register-button').on('click', function(e){
  e.preventDefault();
  $.ajax({
    url: sa + '/register',
    method: 'POST',
    dataType: 'json',
    data: {
      user: {
        name: $('#name').val(),
        email: $('#register-email').val(),
        username: $('#username').val(),
        password: $('#register-pwd').val()
      }
    }
  }).done(function(data){
    console.log(data)
    simpleStorage.set('token', data.token);
  }).fail(function(data){
    console.log('not great');
  });
});

$("#location-update").on('click', function(){
  console.log($("#location-id").val());
  console.log( $("#street").val());
  console.log($("#city").val());
  $.ajax({
    url: sa + '/locations' + $("#location-id").val(),
    method: 'PATCH',
    dataType: 'json',
    headers: {
      Authorization: 'Token token=' + simpleStorage.get('token')
    },
    data: {
      location: {
        number: parseInt($("#number").val(), 10),
        street: $("#street").val(),
        city: ($("#city").val())
      }
    }
  }).done(function(data){
    console.log("Updated Location!");
  }).fail(function(data){
    console.error(data);
  });
});

  $("#location-destroy").on('click', function(){
  $.ajax({
    url: sa + '/locations' + $("#location").val(),
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + simpleStorage.get('token')
    }
    }).done(function(data){
      console.log("Deleted Location!");
    }).fail(function(data){
      console.error(data);
    });
  });
});
