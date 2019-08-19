var pizzaPrice=0;
  var pizzaPriceSize=0;
  function setPrice(x){
    document.getElementById("price").innerHTML = x;
  }
  function togglePizza(x){
    if (x==1){
      pizzaPrice = parseInt(document.getElementById("pizza1").value);
      document.getElementById("topping1").disabled = false;
      document.getElementById("topping2").disabled = false;
      document.getElementById("topping3").disabled = false;
      document.getElementById("topping4").disabled = false;
      document.getElementById("topping5").disabled = true; 
      document.getElementById("topping6").disabled = true;
      document.getElementById("topping7").disabled = true;
      document.getElementById("topping8").disabled = false;
      document.getElementById("topping9").disabled = true;
      document.getElementById("topping10").disabled = true;
      document.getElementById("topping11").disabled = false;
      document.getElementById("topping12").disabled = true; 
      document.getElementById("sizeM").checked = true;
      setPrice(pizzaPrice);
    }
    if (x==2){
       pizzaPrice = parseInt(document.getElementById("pizza2").value);
      document.getElementById("topping1").disabled = true;
      document.getElementById("topping2").disabled = false;
      document.getElementById("topping3").disabled = false;
      document.getElementById("topping4").disabled = false;
      document.getElementById("topping5").disabled = false; 
      document.getElementById("topping6").disabled = false;
      document.getElementById("topping7").disabled = false;
      document.getElementById("topping8").disabled = true;
      document.getElementById("topping9").disabled = false;
      document.getElementById("topping10").disabled = true;
      document.getElementById("topping11").disabled = false;
      document.getElementById("topping12").disabled = true;
      document.getElementById("sizeM").checked = true;
      setPrice(pizzaPrice); 
    }
    if (x==3){
      pizzaPrice = parseInt(document.getElementById("pizza3").value);
      document.getElementById("topping1").disabled = true;
      document.getElementById("topping2").disabled = false;
      document.getElementById("topping3").disabled = false;
      document.getElementById("topping4").disabled = false;
      document.getElementById("topping5").disabled = true; 
      document.getElementById("topping6").disabled = true;
      document.getElementById("topping7").disabled = true;
      document.getElementById("topping8").disabled = false;
      document.getElementById("topping9").disabled = false;
      document.getElementById("topping10").disabled = false;
      document.getElementById("topping11").disabled = false;
      document.getElementById("topping12").disabled = false; 
      document.getElementById("sizeM").checked = true;
      setPrice(pizzaPrice);
    }

  }
  function toggleSize(x) {
    var m=pizzaPrice;
      if (document.getElementById("sizeS").checked) {
        pizzaPriceSize=m-x;
        setPrice(m-x);
      }if(document.getElementById("sizeL").checked) {
        pizzaPriceSize=m+x;
        setPrice(m+x);
      }if(document.getElementById("sizeM").checked){
        pizzaPriceSize=m;
        setPrice(m);
      }
    }

    function toggleTopping(x){
     var m = parseInt(document.getElementById("price").innerHTML);
     var value = parseInt(document.getElementsByClassName("topping")[x].value)
       if(document.getElementsByClassName("topping")[x].checked==true){
          setPrice(m+value)
        }else{setPrice(m-value)}
    } 