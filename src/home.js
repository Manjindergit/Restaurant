function functionOne ()
{
    let div=document.createElement('div');
    div.className='test';

    let h1=document.createElement('h1');
    h1.innerHTML='Welcome to the Restaurant';

    let h2=document.createElement('li');
    h2.innerHTML='This is a test site for a restaruat and it is used to test the webpack. All the features used in this sites are used to practise and refine skills, some of the text is AI generated as well.';

   div.append(h1, h2);

    return div;
}

export { functionOne };