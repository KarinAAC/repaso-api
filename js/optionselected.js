'use strict'
function selected() {

  showMember($('#selected').val());
}
function showMember(people) {
  console.log(people);
  $.getJSON("https://swapi.co/api/people/"+people, function (response){

    var member = $("<div></div>");
    var nameMember = $("<p></p>");
    nameMember.text("hi, mu name is"+response.name);
    member.append(nameMember);
    $("#root").append(member);
  });
}
