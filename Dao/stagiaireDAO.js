var stagiaireService = require("../service/stagiaireService");
var db = require("../database/db");

var  stagiaireDAO  = function() {

}

stagiaireDAO.prototype = Object.create(stagiaireService.prototype);



stagiaireDAO.prototype.addStagiaire = function(data,callback) {

    var stagiaire = new db.stagiaireModel({

        nom : data.nom,
        prenom : data.prenom,
        email : data.email,
        age : data.age,
        cin : data.cin,
        dateNaissance : data.dateNaissance,
        lieuNaissance: data.lieuNaissance,
        specialite: data.specialite,
        diplome: data.diplome,
        tele:data.tele,
        email:data.email
    });


    stagiaire.save(callback);
}

stagiaireDAO.prototype.findAll = function(callback) {


    db.stagiaireModel.find({},callback);

}




stagiaireDAO.prototype.updateStagiaire = function(data,callback) {

    db.stagiaireModel.findOne({_id:data.id},function(err,stagiaire) {

        if(err) callback(err,null);
        else  {

            stagiaire.nom = data.nom;
            stagiaire.prenom = data.prenom;
            stagiaire.age = data.age;
            db.stagiaireModel.cin=data.cin;
            stagiaire.email = data.email;
            stagiaire.dateNaissance = data.dateNaissance;
            lieuNaissance= data.lieuNaissance;
            specialite= data.specialite;
            diplome= data.diplome;
            tele=data.tele;
            email=data.email;

            stagiaire.save(callback);

        }

    });
}

stagiaireDAO.prototype.deleteStagiaire = function(id,callback) {

    //db.stagiaireModel.findOneAndRemove({_id:id},callback);

    db.stagiaireModel.findOne({_id:id},function(err,stagiaire) {

        if(err) callback(err,null);
        else stagiaire.remove(callback)

    });

}
stagiaireDAO.prototype.findById = function(id,callback) {

    db.stagiaireModel.findOne({_id:id},callback);

}

stagiaireDAO.prototype.findBySpecialite = function(specialite,callback) {

    db.stagiaireModel.find({_specialite:specialite},callback);

}




module.exports = new stagiaireDAO();

