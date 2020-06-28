
//Task 1
let tagLine = document.getElementById('tag-line');
let headings = document.querySelectorAll('.bg-main-content h2');
let collect = `${tagLine.innerText}\n-------------------------------------------\n`;

for (let i = 0; i < headings.length; i++)
{
	 
  collect+=headings[i].innerHTML+"\n";
}
alert(collect);

//Task 2
collect ="";
let tagLine1 = document.querySelectorAll(".box");
for (let n = 0; n < tagLine1.length; n++)
    {
            if (tagLine1[n]=13)
                {
                    collect+=tagLine1[13].innerText;  
                    n= tagLine1.length;
                }
    }
alert(collect);
