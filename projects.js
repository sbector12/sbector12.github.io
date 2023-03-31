var pol1 = document.getElementById("pol1");
var pol1Text = "This is a project I have been working on since the end of 2021. I am interested in finding evidence-based solutions to the big problems facing America. In each tab, you'll find policy proposals in each area of public policy."

pol1.addEventListener("mouseover", function(){pol1.title = pol1Text;});
pol1.addEventListener("mouseout", function(){pol1.title = "";});
