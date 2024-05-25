    let  img1  = document.getElementById('img1')
	let  img2 = document.getElementById('img2')
	let  img3 = document.getElementById('img3')
	let  img4  = document.getElementById('img4')
	let  img5 = document.getElementById('img5')
	let  icon5 = document.getElementById('icon5')
	let  icon4 = document.getElementById('icon4')
	let  icon2 = document.getElementById('icon2')
	let  icon3 = document.getElementById('icon3')
	let  icon1 = document.getElementById('icon1')



	function p1()
	{
	  img1.style.visibility = "visible" 
	  img2.style.visibility =  "hidden"
	  img3 .style.visibility = "hidden"
	  img4.style.visibility = "hidden"  
	  img5.style.visibility = "hidden" 
	  icon5.style.transform = "rotate(0deg)" 
	  icon4.style.transform = "rotate(0deg)" 
	  icon2.style.transform = "rotate(0deg)" 
	  icon3 .style.transform = "rotate(0deg)"
	  icon1.style.transform = "rotate(-45deg)" 

	}
	function p2()
	{
	  img1.style.visibility = "hidden" 
	  img2.style.visibility =  "visible"
	  img3 .style.visibility = "hidden"
	  img4.style.visibility = "hidden"  
	  img5.style.visibility = "hidden" 
	  icon5.style.transform = "rotate(0deg)" 
	  icon4.style.transform = "rotate(0deg)" 
	  icon2.style.transform = "rotate(-45deg)" 
	  icon3 .style.transform = "rotate(0deg)"
	  icon1.style.transform = "rotate(0deg)" 
	}
	function p3()
	{
	  img1.style.visibility = "hidden" 
	  img2.style.visibility =  "hidden"
	  img3 .style.visibility = "visible"
	  img4.style.visibility = "hidden"  
	  img5.style.visibility = "hidden" 
	  icon5.style.transform = "rotate(0deg)" 
	  icon4.style.transform = "rotate(0deg)" 
	  icon2.style.transform = "rotate(0deg)" 
	  icon3 .style.transform = "rotate(-45deg)"
	  icon1.style.transform = "rotate(-0deg)" 

	}
	function p4()
	{
	  img1.style.visibility = "hidden" 
	  img2.style.visibility =  "hidden"
	  img3 .style.visibility = "hidden"
	  img4.style.visibility = "visible"  
	  img5.style.visibility = "hidden" 
	  icon5.style.transform = "rotate(0deg)" 
	  icon4.style.transform = "rotate(-45deg)" 
	  icon2.style.transform = "rotate(0deg)" 
	  icon3 .style.transform = "rotate(0deg)"
	  icon1.style.transform = "rotate(0deg)" 
	}
	function p5()
	{
	  img1.style.visibility = "hidden" 
	  img2.style.visibility =  "hidden"
	  img3 .style.visibility = "hidden"
	  img4.style.visibility = "hidden"  
	  img5.style.visibility = "visible" 
	  icon5.style.transform = "rotate(-45deg)" 
	  icon4.style.transform = "rotate(0deg)" 
	  icon2.style.transform = "rotate(0deg)" 
	  icon3 .style.transform = "rotate(0deg)"
	  icon1.style.transform = "rotate(0deg)" 
	}

	function back()
	{
	document.getElementById('para').style.display = "none";
	document.getElementById('backbtn').style.display = "none"
	document.getElementById('onbtn').style.display = "block"
	}
 	function on()
	{
	document.getElementById('para').style.display = "block";
	document.getElementById('backbtn').style.display = "block"
	document.getElementById('onbtn').style.display = "none"
	}
	function back()
	{
	document.getElementById('para').style.display = "none";
	document.getElementById('backbtn').style.display = "none"
	document.getElementById('onbtn').style.display = "block"
	}
	
  	let btn1 = document.getElementById('banner5')
	let btn2 = document.getElementById('banner6')
	let btn3 = document.getElementById('banner7')
	let btn4 = document.getElementById('banner8')

	function naturebtn()
	{
		 btn1.style.display = "block";
		 btn2.style.display = "none";
		 btn3.style.display = "none";
		 btn4.style.display = "none";
	}
	function trekingbtn()
	{
		 btn1.style.display = "none";
		 btn2.style.display = "block";
		 btn3.style.display = "none";
		 btn4.style.display = "none";
	}
	function mountainbtn()
	{
		 btn1.style.display = "none";
		 btn2.style.display = "none";
		 btn3.style.display = "block";
		 btn4.style.display = "none";
	}
	function climbingbtn()
	{
		 btn1.style.display = "none";
		 btn2.style.display = "none";
		 btn3.style.display = "none";
		 btn4.style.display = "block";
	}

	ScrollReveal({ 
    reset: true,
    distance :"60px",
    duration :2500,
    delay :400 
 });
    ScrollReveal().reveal('.banner1 h1, h2', { delay: 200 , origin:'top'});

    ScrollReveal().reveal('.banner3 .card1,.banner4-1,.card2', { opacity:0, scale:0.8 ,interval: 600  });
   ScrollReveal().reveal('.banner4-2,.card3', { opacity:0, scale:0.8 ,interval: 600   });
