
$(function() {

        $("#localSub_error_message").hide();
        $("#act_error_message").hide();
        $("#actFrom_error_message").hide();
        $("#actTo_error_message").hide();

        var error_code = false;
        var error_act = false;
        var error_actFrom = false;
        var error_actTo = false;
//========== CREATING FUNCTION USING JQUERY =========================		
		 $("#sub_code").focusout(function(){
            check_subcode();
        });
        $("#act").focusout(function() {
            check_act();
        });
        $("#date_f").focusout(function() {
            check_actFrom();
        });
        $("#date_t").focusout(function() {
            check_actTo();
        });
		
		//============= validate substation code =================
		
         function check_subcode() {
            var pattern = /sco[1-9]/;
            var code = $("#sub_code").val();
			var code_length = $("#sub_code").val().length;
            if (pattern.test(code) &&  code_length > 7){
                $("#localSub_error_message").hide();
                $("#sub_code").css("border-bottom","2px solid #34F458");
            } else {
                $("#localSub_error_message").html(" start with sco and max length is 7");
                $("#localSub_error_message").show();
                $("#sub_code").css("border-bottom","2px solid #F90A0A");
                error_code = true;
            }
        }
//=============== validate Active status ======================

           function check_act() {
            
            var type = $("#act").val();
            if ( type !== '') {
                $("#act_error_message").hide();
                $("#act").css("border-bottom","2px solid #34F458");
            } else {
                $("#act_error_message").html("should enter active status");
                $("#act_error_message").show();
                $("#act").css("border-bottom","2px solid #F90A0A");
                error_act = true;
            }
        }		
//============== vallidate  active from ======================================
        function check_actFrom() {
            
            var type = $("#date_f").val();
            if ( type !== '') {
                $("#actFrom_error_message").hide();
                $("#date_f").css("border-bottom","2px solid #34F458");
            } else {
                $("#actFrom_error_message").html("should enter date");
                $("#actFrom_error_message").show();
                $("#date_f").css("border-bottom","2px solid #F90A0A");
                error_actFrom = true;
            }
        }
//============== validate active To ================		
		
	     function check_actTo() {
            
            var type = $("#date_t").val();
            if ( type !== '') {
                $("#actTo_error_message").hide();
                $("#date_t").css("border-bottom","2px solid #34F458");
            } else {
                $("#actTo_error_message").html("should enter date");
                $("#actTo_error_message").show();
                $("#date_t").css("border-bottom","2px solid #F90A0A");
                error_actTo = true;
            }
        }
//=====================date picker =====================
		
		 $(document).ready(function() {
          
            $(function() {
                $( "#date_f" ).datepicker();
            });
			
			$(function() {
                $( "#date_t" ).datepicker();
            });
        })
		
// ===================get function ========================

        function getLocalSubStation(subCode, active, activeFrom,activeTo)
{

var substationCode = subcode;
var actF = activeFrom;
var actT = activeTo;
var activeStatus = "";
switch (active)
 {
case "1":
 activeStatus = "Active is True";
 break;
case "2":
 activeStatus = "Active is false";
 break;
 }
var localSubstation = "";
 localSubstation += "<div class=\"localSubstation card bg-light m-2\"
 style=\"max-width: 10rem; float: left;\">";
 localSubstation += "<div class=\"card-body\">";
 localSubstation +=  substationCode + ",";
 localSubstation += "<br>";
 localSubstation += activeStatus + " active";
 localSubstation += "<br>";
 localSubstation +=  actF + ",";
 localSubstation += "<br>";
 localSubstation +=  actT + ",";
 localSubstation += "</div>";
 localSubstation += "<input type=\"button\" value=\"Remove\"
 class=\"btn btn-danger remove\">";
 localSubstation += "</div>";
return localSubstation;
}
		
// =====================validate submit button ==================

         $("#localSub_form").submit(function() {
            error_code = false;
            error_act = false;
            error_actFrom = false;
            error_actTo = false;

            error_code();
            error_act();
            error_actFrom();
            error_actTo();

            if (error_code === false && error_act === false && error_actFrom === false && error_actTo === false ) {
                 // If valid----------------------
var localSub = getLocalSubStation(
 
 $("#sub_code").val());
 $("#act").val());
 $("#date_f").val());
 $("#date_t").val());
 
 $("#colSubstaion").append(localSub);

 $("#localSub_form")[0].reset();
                return true;
            } else {
                alert("Please Fill the form Correctly");
                return false;
            }


        });
	});	


