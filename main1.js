let demo = document.querySelector("#demo");
let string = `/*你好，我是一名前端新人
*接下来我要加样式了
*我要加的样式是*/
body{
    color:red;
}
/*在页面上画一个会动的太极图
*首先准备一个div,圆形的（这个div的位置是事先写好的）
*/
div#taiji{
  border: 1px solid black;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
/*太极八卦分阴阳,左白右黑，使用背景渐变*/
div#taiji{
  background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%);
}
/*
使用伪元素添加太极的阳鱼和阴鱼*/
div#taiji::before{
  content:'';
  display:block;
  width:100px;
  height:100px;
  border:1px solid red;
  background:white;
  position:absolute;
  top:0;
  left:50%;
  transform:translateX(-50%);
  border-radius:50%;
}
div#taiji::after{
  content:'';
  display:block;
  width:100px;
  height:100px;
  border:1px solid red;
  background:black;
  position:absolute;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  border-radius:50%;
}
/*同理使用渐变来为阴阳鱼加眼睛*/
div#taiji::before{
  background: radial-gradient(circle, rgba(0,0,0,1) 0%,rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
  border:none;
}
div#taiji::after{
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
border:none;
}
`;
//string = string.replace("\n", "<br>"); //这样写只会替换第一个回车，回车的ascii码是10，\n。
//string = string.replace(/\n/g, "<br>"); //要用正则表达式，全局匹配

let string2 = "";

let n = 0;
//demo.innerHTML = string.substring(0, n);

//加样式
let sty = document.querySelector("#sty");

let step = () => {
  setTimeout(() => {
    if (n >= string.length) {
      return;
    }
    step();
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }

    demo.innerHTML = string2;
    sty.innerHTML = string.substring(0, n);
    window.scrollTo(0, 9999);
    demo.scrollTo(0, 9999);
    n = n + 1;
    //step();//这个step放在demo.innerHTML的上方下方都可以！！！
  }, 20);
  //step();//如果加在这个地方，爆栈11435！！！注意上一节讲函数的时候，关于调用栈，举递归的例子的时候有说过！！！加在这个地方，程序不停的执行step()函数，不到1秒钟，就能执行11435次，然后将n的值直接从1跳到11435!!!就像如果不在第8行加step(),而是在下面调用的时候，调用4次step()函数，n的值不是依次从1变，而是在1秒钟，直接从1变到4。
};

step();
//step();
//step();
