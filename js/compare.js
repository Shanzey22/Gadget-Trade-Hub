for(var i=1; i<product.length; i++ ){
        document.getElementById("select1").innerHTML += `
        <option value="${i}">${product[i].title}</option>
        `;
        document.getElementById("select2").innerHTML += `
        <option value="${i}">${product[i].title}</option>
        `;
    }
    function item1(a){
        var select2 = document.getElementById("select2").value;
        if(a!=select2){
            document.getElementById("img1").src=product[a].image;
            document.getElementById("price1").innerHTML=product[a].price;
            document.getElementById("brand1").innerHTML=product[a].brand;
            document.getElementById("desc1").innerHTML=product[a].discription;
        }
        else{
            document.getElementById("img1").src=product[0].image;
            document.getElementById("price1").innerHTML="N/A";
            document.getElementById("brand1").innerHTML="N/A";
            document.getElementById("desc1").innerHTML="N/A";
        }
        
    }
    function item2(a){
        var select1 = document.getElementById("select1").value;
        if(a!=select1){
            document.getElementById("img2").src=product[a].image;
            document.getElementById("price2").innerHTML=product[a].price;
            document.getElementById("brand2").innerHTML=product[a].brand;
            document.getElementById("desc2").innerHTML=product[a].discription;
        }
        else{
            document.getElementById("img2").src=product[0].image;
            document.getElementById("price2").innerHTML="N/A";
            document.getElementById("brand2").innerHTML="N/A";
            document.getElementById("desc2").innerHTML="N/A";
        }
    }
    