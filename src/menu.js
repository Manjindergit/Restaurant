function menuPage ()
{
    let div=document.createElement('div');
    div.className='test';

    let h1=document.createElement('h1');
    h1.innerHTML='Menu Items';

    let ul=document.createElement('ul');
    for(let i=0;i<10;i++)
    {
        let li=document.createElement('li');
        li.innerHTML='Item '+i;
        ul.appendChild(li);
    }


   div.append(h1, ul);

    return div;
}

export { menuPage };