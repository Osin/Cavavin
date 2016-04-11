/**
 * Created by osin on 11/04/16.
 */
app.controller('MainCtrl', function() {
  this.wines = generateWines(20);
  this.headers = Object.keys(this.  wines[0]);
  this.order = 'id';
  this.changeOrder = function(order){
    this.order == order ? this.order = '-'+order : this.order = order;
    
  };
  this.isSortedASCColumn = function(column){
    if (column == this.order){
      return false;
    }
  };
  this.isSortedASCColumn = function(column){
    if (column == this.order){
      return true;
    }
  };
  this.isSortedDESCColumn = function(column){
    if (column == '-'+this.order){
      return true;
    }
  };
});