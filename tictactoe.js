 var flag = 0;
		 var count = 0;
		 var track = new Array(9);
		 var back = new Array(9);
		 //track and back are flag arrays,used to declare winner
		 //track[] keeps track of horizontal id's
		 //back[] keeps track of vertical id's
		function execute(obj,i,j)
		{
			if(flag == 0)
			{
				flag = 1;
				track[i]=1;
				back[j]=1
				obj.style.backgroundColor = "#000000";
				obj.style.pointerEvents = 'none';
			}

			else if(flag == 1)
			{
				flag = 0;
				track[i]=2;
				back[j]=2;
				obj.style.backgroundColor = "#ff0000";
				obj.style.pointerEvents = 'none';
			}
			count++;
			//checking And Declaring winner
			for(var k=0;k<9;k+=3)
			{
				if(track[k]==1 && track[k+1]==1 && track[k+2]==1 || back[k]==1 && back[k+1]==1 && back[k+2]==1)
				{
					alert("Player-1 wins");
					location.reload();
					return;
				}
				else if(track[k]==2 && track[k+1]==2 && track[k+2]==2 || back[k]==2 && back[k+1]==2 && back[k+2]==2)
				{
					alert("Player-2 wins");
					location.reload();
					return;
				}
			}
			if(track[0]==1 && track[4]==1 && track[8]==1 || back[0]==1 && back[4]==1 && back[8]==1)
				{
					alert("Player-1 wins");
					location.reload();
					return;
				}
			else if(track[0]==2 && track[4]==2 && track[8]==2 || back[0]==2 && back[4]==2 && back[8]==2)
				{
					alert("Player-2 wins");
					location.reload();
					return;
				}
			if(track[2]==1 && track[4]==1 && track[6]==1 || back[2]==1 && back[4]==1 && back[6]==1)
				{	
					alert("Player-1 wins");
					location.reload();
					return;
				}
			else if(track[2]==2 && track[4]==2 && track[6]==2 || back[2]==2 && back[4]==2 && back[6]==2)
				{
					alert("Player-2 wins");
					location.reload();
					return;
				}
			if(count==9)
			{
				alert("DRAW");
				location.reload();
			}
		}