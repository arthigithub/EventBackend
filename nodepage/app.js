var app=angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider.when("/expert",{
    controller:"myController",
    templateUrl:"experts.html"
  }).when("/gallery",{
    templateUrl:"gallery.html"

  }).when("/aboutus",{
    controller:"myController",
    templateUrl:"aboutus.html"
  })

});
app.controller("myController",function($scope,$http){
    $http.get("http://localhost:3000/").then(function(response){
        $scope.datas=response.data;

    });
    $scope.giveFeedback=function(){
      let feedback={
        email:$scope.email,
        comment:$scope.comment
        }



        $http.post("http://localhost:3000/feedback",feedback).then(function(response){
            console.log(response.data);
            $scope.msg=response.data;
            email=scope.email:;
            comment=$scope.comment:;
        })

    }

    $scope.giveBilling=function(){
      let billing={
        firstname:$scope.firstname,
        email:$scope.email,
        address:$scope.address,
        city:$scope.city,
        state:$scope.state,
        zip:$scope.zip
        }

          $http.post("http://localhost:3000/billing",billing).then(function(response){
            console.log(response.data);
            $scope.msg=response.data;
            firstname=scope.firstname:;
            email:scope.email.;
            address:scope.address.;
            city:scope.city.;
            state:scope.state.;
            zip:scope.zip.;
        })

    }


$scope.givePayment=function(){
  let payment={
    cardname:$scope.cardname,
    credit_card_no:$scope.credit_card_no,
    exp_month:$scope.exp_month,
    exp_year:$scope.exp_year,
    cvv:$scope.cvv
    }

      $http.post("http://localhost:3000/payment",payment).then(function(response){
        console.log(response.data);
        $scope.msg=response.data;
        cardname=scope.cardname.;
        credit_card_no:scope.credit_card_no.;
        exp_month:scope.exp_month.;
        exp_year:scope.exp_year.;
        cvv:scope.cvv.;
    })

}


$scope.giveLogin=function(){
  let index={
    username:$scope.username,
    password:$scope.password
    }

      $http.post("http://localhost:3000/index",index).then(function(response){
        console.log(response.data);
        $scope.msg=response.data;
        username=scope.username.;
        password:scope.password.;
          })

}

$scope.giveRegistration=function(){
  let Registration={
    name:$scope.name,
    email:$scope.email,
    phone:$scope.phone,
    password:$scope.password,
    cpassword:$scope.cpassword

    }

      $http.post("http://localhost:3000/registration",Registration).then(function(response){
        console.log(response.data);
        $scope.msg=response.data;
        name=scope.name.;
        email=scope.email.;
        phone=scope.phone.;
        password=scope.password.;
        cpassword=scope.cpassword.;
          })

}

});
