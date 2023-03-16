const body = document.body

document.getElementsByTagName('h1')[0].remove()

const h1 = document.createElement('h1')
body.append(h1)
h1.innerText = "Lab7 Assignment"
h1.style.color="blue"

hr = document.createElement('hr')
document.body.appendChild(hr)

const h2 = document.createElement('h2')
body.append(h2)
h2.innerText = "Task"
h2.style.color="red"

const p1 = document.createElement('p1')
body.append(p1)
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <strong>only</strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
p1.style.color="black"


colors_span = ["green","purple","green","purple","green","purple"];
colors_li = ["green","purple","green", "purple","green","purple"];
let data = ["find elements in the DOM (<strong>5 points</strong>); ", "create/add/remove elements (<strong>5 points</strong>); ", "change content of the elements (<strong>5 points</strong>); ", "change styles of the elements (<strong>5 points</strong>); ", "change attributes of the elements (<strong>5 points</strong>);", "change classes of the elements (<strong>5 points</strong>). "];
      let ul = document.createElement("ul");
      let i = 0;
      for (let user of data) {
         let li = document.createElement('li');
         li.style.color=colors_li [i];
         htmlContent = user + "<span style='font-weight:bold;color:" + colors_span[i] + "'> </span>"
         console.log (htmlContent)
         li.innerHTML = htmlContent;
         //li.innerText = user;
         i+=1;
         
         ul.appendChild(li);
      }
      document.body.appendChild(ul);


hr = document.createElement('hr')
document.body.appendChild(hr)

const h3 = document.createElement('h3')
body.append(h3)
h3.innerText = "Submission"
h3.style.color="red"
h3.style.fontSize= '24px';
h3.style.marginTop='20.20px';
h3.style.marginBottom='20px';

const p2 = document.createElement('p2')
body.append(p2)
p2.innerText = "To submit your work, follow these instructions:"
p2.style.color="black"


colors_span1 = ["green","purple","green","purple","green","purple", "green"];
colors_li1 = ["green","purple","green", "purple","green","purple", "green"];
let names = ["Create a new repository on Github, named <strong>lab7</strong> (<strong>1 point</strong>).", 
"Clone this repository to your local machine and work inside it. ", 
'Create a new HTML file, called <strong>index.html</strong>, which has only one &lt;h1&gt;  tag with "Hello, World!" message (<strong>1 point</strong>).', 
"Create a new JavaScript file, called <strong>main.js</strong>, which must contain your program (assignment) described above (<strong>1 point</strong>). ", 
"Link this <strong>main.js</strong> file to your <strong>index.html</strong> file (Note: place your script at the end of the <strong>body</strong> section). ", 
"Write a JavaScript program in <strong>main.js</strong> to make your <strong>index.html</strong> look identical to this HTML file (<strong>5 points</strong>). ", 
"After you finish your work, submit it to the Github (<strong>2 points</strong>)."];
      let ul1 = document.createElement("ul");
      let c = 0;
      for (let name of names) {
         let li9 = document.createElement('li');
         li9.style.color=colors_li1 [c];
         htmlContent1 = name + "<span style='font-weight:bold;color:" + colors_span1[c] + "'> </span>"
         console.log (htmlContent1)
         li9.innerHTML = htmlContent1;
         //li.innerText = user;
         c+=1;
         
         ul1.appendChild(li9);
      }
      document.body.appendChild(ul1);


hr = document.createElement('hr');
document.body.appendChild(hr);



