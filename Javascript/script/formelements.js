function txtWrite()
{
    var txt1;
    txt1 = document.getElementById("txt1").value; // html tarafındaki txt1 elementinin içeriğini okuyorum.
    document.getElementById("sonuc1").innerHTML = txt1; // html tarafındaki sonuc1 id
}
function txtArttir()
{
    var deger;
    deger = parseInt(document.getElementById("txt2").value);
    deger++;
    document.getElementById("txt2").value = deger;
  
}
function txtAzalt()
{
    var deger;
    deger = parseInt(document.getElementById("txt2").value);
    deger--;
    document.getElementById("txt2").value = deger;
}
function tabloCiz()
{
    //var table = document.createElement("table");
    //var t = document.createTextNode("");
    //table.appendChild(t);
    //document.getElementById("sonuc2").appendChild(table);

    
    document.getElementById("sonuc2").innerHTML = "<table style='width:200px;background-color: gainsboro;'><tr><td>1</td><td>2</td></tr ><tr><td>3</td><td>4</td></tr></table>";

}
function Carp()
{
    var s1, s2, sonuc;
    s1 = parseInt(document.getElementById("txt3").value); // parseInt olmasa da çalışıyor ama garantiye almak için yazıyoruz.
    s2 =parseInt(document.getElementById("txt4").value);
    sonuc = s1 * s2;
    document.getElementById("txt5").value = sonuc;

}
function Bol()
{
    var s1, s2, sonuc;
    s1 = parseInt(document.getElementById("txt6").value);
    s2 = parseInt(document.getElementById("txt7").value);
    if (s1 != 0 && s2 != 0)
    {
        sonuc = s1 / s2;
    }
    document.getElementById("txt8").value = sonuc;
    
}