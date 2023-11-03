
 const container=document.querySelector('#container');
function gridNxN (n) //makes n by n grid to container
{ 
    for(let i=0;i<n;i++)
   {const gridItem=document.createElement('div');
     container.append(gridItem);
     gridItem.classList.add("grid-items")
    //  gridItem.style.height='40px';
    //  gridItem.style.width='40px';
   
        for(let j=0;j<n;j++)
      {const gridItem2=document.createElement('div');
      gridItem.append(gridItem2);
      gridItem2.classList.add("grid-items");
      gridItem2.style.height='40px';
      gridItem2.style.width='40px';
      gridItem2.addEventListener('mouseover',function changeColorOnHover(){
    gridItem2.style.background='black'
      });
      gridItem2.addEventListener('mouseout', function handleMouseOut() {
        gridItem2.style.background='white'
      });
      }
    }

}
 gridNxN(16);
