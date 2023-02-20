function contactPage ()
{
    let div=document.createElement('div');
    div.className='test';

    let h1=document.createElement('h1');
    h1.innerHTML='Contact Us';

    let h2=document.createElement('li');
    h2.innerHTML='Email:restaurant@yahoo.com<br>Phone Number: 123-456-7890</br>Address: 1234 Main Street, City, State, Zip Code</br>Hours: 11:00am - 9:00pm<br>';

   div.append(h1, h2);

    return div;
}

export { contactPage };