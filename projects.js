var pol1 = document.getElementById("pol1");
var pol1Text = "This is a project I have been working on since the end of 2021. I am interested in finding evidence-based solutions to the big problems facing America. In each tab, you'll find policy proposals in each area of public policy."

pol1.addEventListener("mouseover", function(){pol1.title = pol1Text;});
pol1.addEventListener("mouseout", function(){pol1.title = "";});

var speech1 = document.getElementById("speech1");
var speech1Text = "As a part of my local Toastmasters club, someone gives a speech talking about someone inspiring. No one volunteered to give an inspiration that meeting, so I gave a speech on the spot. A friend of mine had passed away before the meeting. I reflect on the cruel nature of this existence, and how we should use that as motivation to make the world a better place."
pol1.addEventListener("mouseover", function(){speech1.title = speech1Text;});
pol1.addEventListener("mouseout", function(){speech1.title = "";});
