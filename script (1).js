(function(){
  var ids=["home","about","skills","projects","contact"];
  function show(){
    var h=(location.hash||"").replace("#","");
    if(ids.indexOf(h)<0) h="home";
    ids.forEach(function(id){document.getElementById(id).classList.toggle("on",id===h)});
    document.querySelectorAll("nav ul a").forEach(function(a){
      if(a.getAttribute("href")==="#"+h) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current");
    });
    window.scrollTo(0,0);
  }
  window.addEventListener("hashchange",show);
  show();
  document.getElementById("cf").addEventListener("submit",function(ev){
    ev.preventDefault();
    var n=document.getElementById("n").value,e=document.getElementById("e").value,m=document.getElementById("m").value;
    location.href="mailto:roshandtr133@gmail.com?subject="+encodeURIComponent("Portfolio message from "+n)+"&body="+encodeURIComponent(m+"\n\nReply to: "+e);
  });
})();
