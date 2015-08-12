
var loc, minc, maxc, avgc;

var DonutShop = function(location, minavgcust, maxavgcust, avgdonutpercust){
  this.location = location;
  this.minavgcust = minavgcust;
  this.maxavgcust = maxavgcust;
  this.avgdonutpercust = avgdonutpercust;
  this.totalDonuts = 0;
  this.dailyDonuts = [];

  DonutShop.prototype.getDonutsPerHr = function(){
   return (Math.floor((Math.floor(Math.random() * (this.maxavgcust - this.minavgcust + 1)) + this.minavgcust) * this.avgdonutpercust));
  }

  DonutShop.prototype.totalDailyDonuts = function(){
    var x;
    for(i = 0; i < 11; i++){
      x = this.getDonutsPerHr();
      this.dailyDonuts.push(x);
      this.totalDonuts = this.totalDonuts + x;
    }
  }
}

var shopDowntown = new DonutShop("Downtown", 8, 43, 4.5);
var shopCapHill = new DonutShop("Capitol Hill", 4, 37, 2);
var shopSLU = new DonutShop("South Lake Union", 9, 23, 6.33);
var shopWedge = new DonutShop("Wedgewood", 2, 28, 1.25);
var shopBallard = new DonutShop("Ballard", 8, 58, 3.75);


shopDowntown.totalDailyDonuts();
shopCapHill.totalDailyDonuts();
shopSLU.totalDailyDonuts();
shopWedge.totalDailyDonuts();
shopBallard.totalDailyDonuts();

DonutShop.prototype.render = function(){

  var table = document.getElementById('donuts');
  var tableName = document.createElement('tr');
  tableName.innerHTML = this.location;
  table.appendChild(tableName);


  for(var i=0; i < this.dailyDonuts.length; i++){
    var td = document.createElement('td');
    td.innerHTML = this.dailyDonuts[i];
    tableName.appendChild(td);
  }

  var total = document.createElement('td');
  total.innerHTML = this.totalDonuts;
  tableName.appendChild(total);

}

var renderNew = function(){
  var loc = document.getElementById('Location').value;
  var minc = document.getElementById('minCust').value;
  var maxc = document.getElementById('maxCust').value;
  var avgc = document.getElementById('avgDonutCust').value;
  var newShop = new DonutShop(loc, minc, maxc, avgc);
  newShop.totalDailyDonuts();
  newShop.render();
}


var input = document.getElementById('nuShop');
input.addEventListener('click', renderNew);

shopDowntown.render();
shopCapHill.render();
shopSLU.render();
shopWedge.render();
shopBallard.render();
