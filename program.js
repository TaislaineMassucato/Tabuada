function tabuada(){
    var num = document.getElementById('ivalor')
    var tab = document.getElementById('seltab')
    if(num.value.lenght == 0){
        window.alert('Digite um número,please')
    }else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
}