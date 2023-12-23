        function lable_create(ele_name,attr_name,attr_value,content){
        var ele = document.createElement(ele_name);
        ele.setAttribute(attr_name,attr_value);
        ele.innerHTML = content;
        return ele;
    }

    function create_BR(){
        var ele = document.createElement("br");
        return ele;
    }

    function create_Input(input,att_name,att_value,ele_id){
        var ele = document.createElement(input);
        ele.setAttribute(att_name,att_value);
        ele.id = ele_id;
        return ele;
    }

    var lblFirstName = lable_create("lable","for","firstName","firstName");
    var fnbr = create_BR();
    var firstName = create_Input("input","type","text","firstName")
    var fnbr2 = create_BR();


    var lblMiddleName = lable_create("lable","for","middleName","middleName");
    var mnbr = create_BR();
    var middleName = create_Input("input","type","text","middleName")
    var mnbr2 = create_BR();

    var lbllastName = lable_create("lable","for","lastName","lastName");
    var lnbr = create_BR();
    var lastName = create_Input("input","type","text","lastName")
    var lnbr2 = create_BR();

    var lblemail = lable_create("lable","for","email","Email");
    var emailbr = create_BR();
    var email = create_Input("input","type","email","email")
    var emailbr2 = create_BR();

    var lblPassword = lable_create("lable","for","password","password");
    var passwordbr = create_BR();
    var password = create_Input("input","type","password","password")
    var passwordbr2 = create_BR();

    var lblPhoneNumber = lable_create("lable","for","phoneNumber","phoneNumber");
    var phnbr = create_BR();
    var phoneNumber = create_Input("input","type","number","phoneNumber")
    var phnbr2 = create_BR();




    document.body.append(lblFirstName,fnbr,firstName,fnbr2,lblMiddleName,mnbr,middleName,mnbr2,lbllastName,lnbr,lastName,lnbr2,lblemail,emailbr,email,emailbr2,lblPassword,passwordbr,password,passwordbr2,lblPhoneNumber,phnbr,phoneNumber,phnbr2);
