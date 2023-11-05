
 const button=document.querySelector("#new-grid");
 const container=document.querySelector('#container');
 const reset=document.querySelector('#reset');
function createNewgrid (n) //makes n by n grid to container
{ if(n<101)
    {
        let gridItemSize=960/n;
    for(let i=0;i<n;i++)
   {const gridItem=document.createElement('div');
     container.append(gridItem);
     gridItem.classList.add("grid-items")
   
   
        for(let j=0;j<n;j++)
      {const gridItem2=document.createElement('div');
      gridItem.append(gridItem2);
      gridItem2.classList.add("grid-items");
       gridItem2.style.height=gridItemSize+'px';
       gridItem2.style.width=gridItemSize+'px';
   
      gridItem2.addEventListener('mouseover',function changeColorOnHover(){
    gridItem2.style.background='black'
      });
      gridItem2.addEventListener('click', function handleMouseOut() {
        gridItem2.style.background='white'
      });
      }
    }
    }
}
function clear(){ //clear nxn grid
    while(container.firstChild)
    container.removeChild(container.firstChild);
}
 createNewgrid(16);
 button.addEventListener('click',()=>{
    clear();
createNewgrid(prompt("enter the NxN grid size you want until 100")) 
});

//let numb = document.getElementById("myDIV").childElementCount;
reset.addEventListener('click',()=>{
    let num=container.childElementCount;
    clear();
   createNewgrid(num);
});
