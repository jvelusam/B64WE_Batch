let section = document.createElement('section');
section.setAttribute('id','header');

let div = document.createElement('div');
div.setAttribute('class','text-center');
section.appendChild(div);

let image = document.createElement('img');
image.setAttribute('src','ss');
image.setAttribute('alt','ss');
div.appendChild(image);
document.body.append(section);
