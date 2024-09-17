let os=document.getElementById(`os`)
function display(txt)
{
    os.value=os.value+txt;
}
function Clear()
{
    os.value="";
}
function del()
{
    os.value=os.value.slice(0,-1);
}

function calculate()
{
    os.value=eval(os.value);
}
function circle()
{
    let r=prompt(`enter the radius`)
    let res = 3.14*r*r ;
    alert(`the area of circle is ${res}`);
}
function sqr()
{
    let s=prompt('enter the side')
    let res = s*s ;
    alert(`the area of square is ${res}`);
}
function rec()
{
    let l=prompt('enter the length')
    let b=prompt(`enter the breadth`)
    let res = l*b ;
    alert(`the area of rectangle is ${res}`);
}
function tri()
{
    let b=prompt(`enter the base`)
    let h=prompt(`enter the height`)
    let res = 0.5*b*h;
    alert(`the area of triangle is ${res}`);
}
function cuboid()
{
    let l=prompt('enter the length')
    let b=prompt(`enter the breadth`)
    let h=prompt(`enter the height`)
    let res = l*b*h ;
    alert(`volume of cuboid is ${res}`);

}