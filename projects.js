var pol1 = document.getElementById("pol1");
var pol1Text = "This is a project I have been working on since the end of 2021. I am interested in finding evidence-based solutions to the big problems facing America. In each tab, you'll find policy proposals in each area of public policy."

pol1.addEventListener("mouseover", function(){pol1.title = pol1Text;});
pol1.addEventListener("mouseout", function(){pol1.title = "";});


var speech1=document.getElementById("speech1");
var speech1Text = "As a part of my local Toastmasters club, someone gives a speech talking about someone inspiring. I delivered a speech on the spot. I reflect on the cruelty of human existence and how it can be a driver to make the world better."
speech1.addEventListener("mouseover", function(){speech1.title = speech1Text;});
speech1.addEventListener("mouseout", function(){speech1.title ="";});
