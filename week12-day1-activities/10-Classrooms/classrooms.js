const Student = require("./student");
  this.name = name;
  this.subject = subject;
  this.GPA = GPA;

  this.addCastMember = function(gender, name, role) {
    this.cast.push(new CastMember(gender, name, role));
  };

module.exports = Movie;
