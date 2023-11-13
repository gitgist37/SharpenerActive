var formTake = document.getElementById('demo');
var captureuL = document.getElementById('displayUsers');


//console.log(captureuL);


formTake.addEventListener('submit',copyData);

window.onload = function()
{
    axios.get("https://crudcrud.com/api/68d11cd7b7d74926be35f53c6d5e5882/abc")
    .then(value=>
        {
            console.log(value.data[2]);
            document.getElementById('displayUsers').innerHTML = 
            "Name:"+value.data[2]["Name"] + "Email:"+value.data[2]["Email"] + "Phone:"+value.data[2]["Phone"] + "Time:"+value.data[2]["Time"];
        })
    .catch(err=> console.log(err));    
};





function copyData(e)
{
    e.preventDefault();
    var userName = document.getElementById('Name').value;
    var userEmail = document.getElementById('Email').value;
    var userContact = document.getElementById('Phone').value;
    var time = document.getElementById('board').value;
    
    // let options = {
    //     method: 'post',
    //     url: 'https://crudcrud.com/api/c5ee0adad57b4447815c92a84b0a5abc/abc',
    //     headers: {
    //         Content_type:'application/json'
    //     }, 
    //     data: {
    //         'Name':userName,
    //         'Email':userEmail,
    //         'Phone':userContact,
    //         'Time':time
    //     }
    // }


    let myObj = {
            'Name':userName,
            'Email':userEmail,
            'Phone':userContact,
            'Time':time
    };

    // let data = {
    //     "name":"subham"
    // }

    axios.post('https://crudcrud.com/api/68d11cd7b7d74926be35f53c6d5e5882/abc',myObj )
    .then((value)=>
    {
        //console.log(value);
    //    document.getElementById('displayUsers').innerHTML = value.data["Name"];
    })
    .catch((err) => {
        console.log(err);
    });

    let key = new Date().toLocaleString();
    // var myObj_stringForm = JSON.stringify(myObj);
    // //console.log(myObj_serialized);


      //localStorage.setItem(key,myObj_stringForm);
      //console.log(localStorage);
    
    //  var showUser = document.createElement('li');
    //  showUser.textContent = "Name:" + userName + " Email:" + userEmail + " Contact-Number:" + userContact + " Time of Appointment:" + time;
    //  showUser.style.color = "white";
     

    //  var DeleteBanao = document.createElement('button');
    //  DeleteBanao.setAttribute('id','hatao');
    //  DeleteBanao.textContent = 'Remove';
    //  showUser.appendChild(DeleteBanao);

    //  var editBanao = document.createElement('button');
    //  editBanao.setAttribute('id','makechanges');
    //  editBanao.textContent = 'Edit';
    //  showUser.appendChild(editBanao);
     
    //  captureuL.appendChild(showUser);

    //  editBanao.addEventListener('click',editData);
    //  editBanao.myParam = key;

    //  //var removeItem = document.getElementById('hatao');
    //  DeleteBanao.addEventListener('click',removeData);
    //  DeleteBanao.myParam = key;

      


     document.getElementById('Name').value = "";
     document.getElementById('Email').value = "";
     document.getElementById('Phone').value = "";
     document.getElementById('board').value = "";

        

     
}

function removeData(e)
{
    e.preventDefault();
    //console.log(e.target.parentNode.value);
    e.target.parentNode.remove();
    localStorage.removeItem(e.target.myParam);
    
}

function editData(e)
{
    e.preventDefault();
    var taken = JSON.parse(localStorage.getItem(e.target.myParam));
    document.getElementById('Name').value = taken.Name;
    document.getElementById('Email').value = taken.Email;
    document.getElementById('Phone').value = taken.Phone;
    document.getElementById('board').value = taken.Time;

    e.target.parentNode.remove();
    localStorage.removeItem(e.target.myParam);

}


