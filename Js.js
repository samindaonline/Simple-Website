function validateTP()
{
    var tp;
    tp=document.getElementById("txtTp").value;

    if(tp=="")
    {
        document.getElementById("divTpMessage").innerHTML="";
        document.getElementById("tpTick").innerHTML="";
        document.getElementById("txtTp").style.backgroundColor = "#FFffff"
    }
        
    else
    {
        if(isNaN(tp)==false)
        {
            if(tp.length==10)
            {
                if(tp.substring(0,1)=="0")
                {
                    document.getElementById("divTpMessage").innerHTML="";
                    document.getElementById("tpTick").innerHTML="/";
                    document.getElementById("txtTp").style.backgroundColor = "#FFffff"
                }
                    
                else
                {
                    document.getElementById("divTpMessage").innerHTML="*Number is not valid";
                    document.getElementById("txtTp").style.backgroundColor = "#FFCCCC"
                    document.getElementById("tpTick").innerHTML="<span style='color:red;font-family: icons;'>*</span>";
                }
                      
            }
            else
            {
                document.getElementById("divTpMessage").innerHTML="*Number is not valid";
                document.getElementById("tpTick").innerHTML="<span style='color:red;font-family: icons;'>*</span>";
                document.getElementById("txtTp").style.backgroundColor = "#FFCCCC"
            }
                  
        }
        else
        {
            document.getElementById("divTpMessage").innerHTML="*Number is not valid";
            document.getElementById("tpTick").innerHTML="<span style='color:red;font-family: icons;'>*</span>";
            document.getElementById("txtTp").style.backgroundColor = "#FFCCCC"
        }
              
    }
    return false
}

function validateName()
{
    
    var name;
    var letters = /^[A-Za-z\s.]+$/;
    name=document.getElementById("txtName").value
    if(name=="")
    {
        document.getElementById("divNameMessage").innerHTML="";
        document.getElementById("nameTick").innerHTML="";
        document.getElementById("txtName").style.backgroundColor = "#ffffff" 
    }
    else
    {
        if(name.match(letters))
        {
            document.getElementById("divNameMessage").innerHTML="";
            document.getElementById("nameTick").innerHTML="/";
            document.getElementById("txtName").style.backgroundColor = "#ffffff" 
        }   
        else
        {
            document.getElementById("divNameMessage").innerHTML="*Letters only";
            document.getElementById("nameTick").innerHTML="<span style='color:red;font-family: icons;'>*</span>";
            document.getElementById("txtName").style.backgroundColor = "#ffcccc" 
        }
            
    }
    
}

function validateEmail(){
    var email;
    var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    email=document.getElementById("txtEmail").value;
    if(email=="")
    {
        document.getElementById("divEmailMessage").innerHTML=""; 
        document.getElementById("emailTick").innerHTML="";
        document.getElementById("txtEmail").style.backgroundColor = "#ffffff" 
    } 
    else
    {
        if(email.match(format))
            {
                document.getElementById("divEmailMessage").innerHTML=""; 
                document.getElementById("emailTick").innerHTML="/";
                document.getElementById("txtEmail").style.backgroundColor = "#ffffff"
            }
        else
        {
            document.getElementById("divEmailMessage").innerHTML="*Please enter valid email";
            document.getElementById("emailTick").innerHTML="<span style='color:red;font-family: icons;'>*</span>";
            document.getElementById("txtEmail").style.backgroundColor = "#ffcccc"
        }
             
    }
     
}   

function emptyErrors(){
    document.getElementById("divEmailMessage").innerHTML=""; 
    document.getElementById("divNameMessage").innerHTML=""; 
    document.getElementById("divTpMessage").innerHTML="";
    document.getElementById("nameTick").innerHTML="";
    document.getElementById("tpTick").innerHTML="";
    document.getElementById("emailTick").innerHTML="";
}

function someFunction()
{
    validateName();
    validateTP();
    validateEmail();
    return false
}