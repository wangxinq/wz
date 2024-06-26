Object.defineProperty(navigator, 'userAgent', {value: 'Windows',writable: false});
var num = document.getElementById("tempGrid").rows.length-1
console.log('共'+num+'门课')
var i=1;
var timer = setInterval(() => {
    if(i == num+1) {
        console.log('评价结束')
        clearInterval(timer)
    }else{
        console.log('开始评第'+i+'门课')
        var body = document.getElementById(i++)
        if(body!=null)  body.click();
        setTimeout(() => {
            var radios = document.getElementsByClassName('radio-pjf');
            var j=0;
            var r=Math.floor(Math.random()*5)+3;
            [...radios].forEach((item) => {
                if(r==j){
                    if(item.getAttribute("data-dyf")=="4") {
                        item.checked = true
                        j++
                    }
                }else{
                    if(item.getAttribute("data-dyf")=="5") {
                        item.checked = true
                        j++
                    }
                }
            })
            document.getElementById('btn_xspj_bc').click()
            document.getElementById('btn_xspj_tj').click()
            document.getElementById('btn_ok').click()
            console.log('第'+(i-1)+'门课已提交')  
        },3000)
    }
},6000)
