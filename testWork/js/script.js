
function validate_form(){

   var name = document.forms["form"]["yourName"].value;
   var email = document.forms["form"]["email"].value;
   var adress1 = document.forms["form"]["adress1"].value;
   var adress2 = document.forms["form"]["adress2"].value;
   var zipcode = document.forms["form"]["zipcode"].value;


   if (yourName.length==0){	 
      document.getElementById("yourName").innerHTML="*������ ���� ����������� ��� ����������";
      return false;
   }

   if (email.length==0){
      document.getElementById("email").innerHTML="*������ ���� ����������� ��� ����������";
      return false;
   }

   at=email.indexOf("@");
   dot=email.indexOf(".");

   if (at<1 || dot <1){
      document.getElementById("email").innerHTML="*email ������ �� �����";
      return false;
   }

   
   if (adress1.length==0){
      document.getElementById("adress1").innerHTML="*������ ���� ����������� ��� ����������";
      return false;
   }

   if (adress2.length==0){
      document.getElementById("adress2").innerHTML="*������ ���� ����������� ��� ����������";
      return false;
   }
   
    if (zipcode.length==0){
      document.getElementById("zipcode").innerHTML="*������ ���� ����������� ��� ����������";
      return false;
   }
	
	
}

  
