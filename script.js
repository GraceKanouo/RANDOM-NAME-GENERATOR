
var firstName = ["Grace", "Chris", "Sandra", "Lynn","Carla", "Michelle", "Elena", "Ivette", "Bertina", "Erika", "Sabrina", "Lysette", "Anna", "Rosa", "Amina", "Nana", "Marie", "Prudence", "sonia", "Uriellle", "Kadafi", "Gislene", "Gislain", "Arnold", "Christopher", "Frank", "Erwann", "Rodel", "Valdez", "Arnold", "Christian", "Pepa", "Gires", "Lyam", "Yann", "Eleoanor", "Daisy", "Indira", "Jeodelle", "Archange", "Kevin", "Joyce"];
var lastName =["Lepond", "Lalouch", "Plateau", "brödchen", "Marilui", "Kana", "Kaboum", "Keya","Amou", "Amina", "Aboumboum", "Atangana", "Etage", "Michael", "niederbröker", "Lang", "Jäger", "Metal", "Malla", "Talla", "Ifou", "Kumar", "Thakur", "Abdulah", "Varma", "Mbarga", "Abena", "Louisa", "Thierry", "Mballa", "Nganou", "Nlanche", "Blanche", "Madefo", "Nkanka", "Eliminator", "Eloge", "Fopa"];

function getName() {
 var randomName = firstName[Math.floor(Math.random() * firstName.length)] + ' ' + lastName[Math.floor(Math.random() * lastName.length)];
 return randomName; 
}

function nameQty() {
    var userQty = document.querySelector('.qty').value;
    document.querySelector('.nameBox').innerHTML = '' ;
    if(userQty > 10) {
      document.querySelector('.nameBox').innerHTML = 'ONLY 10 NAMES CAN BE GENERATED' ; 
    }else {
      for (var i = 0; i < userQty; i++) {
        document.querySelector('.nameBox').innerHTML += getName() + '<br>'  ; 
      }  
    }

}