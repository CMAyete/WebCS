var now=new Date();var current_year=now.getFullYear();var next_year=current_year+1;var target_date=new Date("February 28, 2014 20:00:00");var days;var $days=document.getElementById("d");function update(){var b=new Date().getTime();var a=(target_date-b)/1000;days=parseInt(a/86400);$days.innerHTML=pad(days,2)}update();setInterval(update,1000);function pad(a,b){var c=a+"";while(c.length<b){c="0"+c}return c};