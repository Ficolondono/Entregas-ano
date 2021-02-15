var vnombres=["Diego","Maria","Jorge","Ana"];
    console.log(vnombres);


  var elimina=function()
{
  var i=0;
  var resultado=document.getElementById("resultado").value;
  var ultimo=vnombres.length-1; 

  while(i<vnombres.length)
  {
    if(resultado==vnombres[i])
    {
      var ultimo=vnombres[ultimo];
      vnombres[ultimo]=vnombres[i];
      vnombres[i]=ultimo;
      vnombres.pop();
      console.log(vnombres);
      i=vnombres.length;
      document.getElementById("ejecusion").value="Eliminado con éxito";
      document.getElementById("resultado").value="";
    }
    else
    {
      i=i+1;
      if (resultado!=vnombres[i])
      {
        document.getElementById("ejecusion").value=resultado+" no está en el vector";
      }
    }
  }
}

var ingreso=function()
{
  var nombreingresa=document.getElementById("ingresa").value;
  vnombres.push(nombreingresa);
  console.log(vnombres);
  document.getElementById("ingresa").value="";
}