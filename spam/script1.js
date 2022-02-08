function get_rad(rad)
{
	var r = "";
	for( var i = 0; i < rad.length; ++i ) 
	if( rad[i].checked ) { r = rad[i].value; break; }
	if (i==rad.length) 
		{
		return -1;
		}
	return r;
}

function ans()
{
	var r;
	var te=1;
	ja=0;
	for(var i = 0; i < 5; i++ ) 
		{
		r = get_rad(eval('document.test.ans'+(i+1)));
                if (r==-1) {answers[ja++]=0;te=0;}
		else
		   {
		        if (r==eval('right'+(q_num+1)+'['+i+']')) answers[ja++]=1;
			else answers[ja++]=0;
		   }
		}
	if (te==1) test_end();
}


function inittab()
{
document.all.tags("td")["quest1"].innerHTML=q1[0];
document.all.tags("td")["quest2"].innerHTML=q1[1];
document.all.tags("td")["quest3"].innerHTML=q1[2];
document.all.tags("td")["quest4"].innerHTML=q1[3];
document.all.tags("td")["quest5"].innerHTML=q1[4];
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