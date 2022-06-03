var myVar;

        function myFunction() {
          myVar = setTimeout(showPage, 2000);
        }
        
        function showPage() {
            document.getElementById("content").style.display="block";
          document.getElementById("loader").style.display = "none";
        
        }

        function calcul(){
         
           
            if(document.getElementById("moy1").value.length==0 || document.getElementById("moy2").value.length==0  || (! document.getElementById("r1").checked && ! document.getElementById("r11").checked )  || (! document.getElementById("r2").checked && ! document.getElementById("r22").checked ) )
            {
                document.getElementById("error").style.display="block";
            }
            else{
                document.getElementById("error").style.display="none";
                if(document.getElementById("r1").checked && document.getElementById("r2").checked)
                document.getElementById("score").innerText="votre score est : "+
                ((3*document.getElementById("moy1").value+3*document.getElementById("moy2").value)/3+4)
                else if((document.getElementById("r1").checked && document.getElementById("r22").checked) || (document.getElementById("r11").checked && document.getElementById("r2").checked))
                document.getElementById("score").innerText="votre score est : "+((3*document.getElementById("moy1").value+3*document.getElementById("moy2").value)/3+3);
                else{
                    document.getElementById("score").innerText="votre score est : "+((3*document.getElementById("moy1").value+3*document.getElementById("moy2").value)/3+2); 
                }

            }
        }