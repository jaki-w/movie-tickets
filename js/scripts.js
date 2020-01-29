function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.receipt = function() {
  var total;
  if ($("option").attr("class" == "new-release")) {
    total = 14
  } else if ($("option").attr("class" == "standard")) {
    total = 12
  }
  if (this.time == "early-bird") {
    total = total - 4
  }
  else if (this.time == "matinee") {
    total = total - 2
  }
  else if (this.time == "prime-time") {
    total = total
  }
  else (this.age <= 12 || this.age >= 65) {
    total = total - 4
  }
  return total;
}
