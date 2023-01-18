
function handealProduct( product, isIncress){
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if(isIncress==true){
       productNewCount = productCount + 1;
    }
    if(isIncress==false && productCount>1){
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    // productTotal =  productNewCount * 59;
     let productTotal = 0;
    if(product=='phone'){
      productTotal = productNewCount * 1219;
    }
    if(product=='case'){
        productTotal = productNewCount * 59;
    }

    document.getElementById(product + "-total").innerText ="$" + productTotal;
    totalCalculator();
}

function totalCalculator(){
    
    const phoneCount = getInputValue('phone');
    const caseCount  = getInputValue('case');
    
    const totalprice = phoneCount * 1219 + caseCount * 69;

    document.getElementById('total-price').innerText = '$' + totalprice;

    const tax = Math.round(totalprice *0.1);
    document.getElementById('tax').innerText ='$'+tax;

    let grandTotal = totalprice + tax;
    document.getElementById("grand-total").innerText='$'+ grandTotal;
}

function getInputValue(product){
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    return productCount;
}

