
	var links= new Array();
	var description = new Array();
	
	
(function() { 

var allLinks = document.links; //get all links from the page

var count=0;
	
regex = /.*(http:\/\/trailers.apple.com\/movies\/.+\.mov).*/;   //regex for all mov files	

	
for(i=0;i<= allLinks.length;i++)
	{
		if(regex.test(allLinks[i]))  //check if he links match regex
			{			
			
				var tlr_link =allLinks[i].href.split(".mov");  //remove everything after the mov part..			
				
				var result  = tlr_link[0].split("_");  //split by _ to get the trailer type
				
				for(j=1;j<result.length-1;j++)
					result[0]=result[0]+"_"+result[j];  //rejoin to fix if there were any _ in between 

				links[count] = result[0];		 //store it in links aray				
				
				result[result.length-1] =result[result.length-1].replace("h.",""); 
				result[result.length-1] =result[result.length-1].replace("h","");				
				
				description[count]= result[result.length-1]; //store the description
				
				links[count] = links[count] + "_h" + result[result.length-1] + ".mov";  //rebuild a new string 			
				
				count++;
			
			}	
	}
	
	dowlnloadlist = document.createElement("div");


var style = "display: block; background-color: #A8CFFF; "+
    "position: fixed; width: 50px; height: auto; " +
    "right: 10px; bottom: 10px; z-index: 500;"+
    "opacity: 0.6;border:2px solid #AAAAAA;" ;
   
	
dowlnloadlist.setAttribute("style", style);
var content = '<ul style="list-style: none;">';

for(i=0;i< links.length;i++)
{
	
	content = content +  '<a href="'+links[i]+'" style="color:#333333;font-size:10px;font-weight:bold;" ><li style="padding-left:5px;border-top:1px solid #D0E6FF;border-bottom:1px solid #62A9FF;">'+description[i]+'</li></a>';
}

content = content +   '</ul>';


dowlnloadlist.innerHTML = content;

if(count>0)  //only if links are found show the content
	document.body.insertBefore(dowlnloadlist,document.body.firstChild);
	

})();

// I know... my code i bad... i'm not  javascript programmer   and also  the above part was done in a hurry.. I'm open to advice/suggestions mail me haden213 (at) gmail (dot) com

