function ans()
{
	rad=document.test.answer;
	var r = "";
	for( var i = 0; i < rad.length; ++i ) 
	if( rad[i].checked ) { r = rad[i].value; break; }
	if (i==rad.length) {return;}
	
	if (r==right[q_num]) {r_cnt++;answers[q_num]=1;}
	q_num++;
	if (q_num<all_cnt)
	{
		document.all.tags("td")["question"].innerText=str[q_num];
		document.all.tags("td")["count"].innerText='Вопрос '+(q_num+1)+' из '+all_cnt
                document.test.pic1.src="./01/1.gif";
                document.test.pic2.src="./01/2.gif";
                document.test.pic3.src="./01/3.gif";
                document.test.pic4.src="./01/4.gif";
		document.test.pic5.src="./01/5.gif";

		for( var i = 0; i < rad.length; ++i ) 
			rad[i].checked=false
		
	}
	else
	{
		test_end();
	}
       
}

function inittab()
{
document.all.tags("td")["question"].innerText=str[0];
document.all.tags("td")["count"].innerText='Вопрос '+(q_num+1)+' из '+all_cnt;
}

function test_end()
{
	document.cookie=answers;
	window.location=res_loc;		
}

function Timer() 
{
	window.setTimeout("Timer();",1000);
	time--;
	scnt=scnt+step;
	if (time<0)
	{
		ans();
		test_end();
	}	   
	else
	{
	   	var str="";
	   	for(var jj=1;jj<Math.floor(scnt);jj++)
	   		str=str+'<td bgColor=BLUE>&nbsp;</td>';
	   	for(var j=1;j<psize-jj+1;j++)
	       		str=str+'<td>&nbsp;</td>';

        	document.all.tags("td")["progress"].innerHTML='<table><tr><td>0</td>'+str+'<td>'+prg+'</td></tr></table>';	   
	}	
}