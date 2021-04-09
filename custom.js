jQuery(document).ready(function($)
{

    //You may use vanilla JS, I just chose jquery

$('.openmodale').click(function (e) {
    e.preventDefault();
    $('.modale').addClass('opened');
});
$('.closemodale').click(function (e) {
    e.preventDefault();
    $('.modale').removeClass('opened');
});

var array;


    getData();
    AddRecord();
   
    function getData()
    {
        $.ajax({
            type: "get",
            url: "https://usman-recipes.herokuapp.com/api/products",
            beforeSend:function()
            {
             $('.main-data').append('<p class="loading">Loading.....</p>');
            },
            success: function (response) {
             $('.main-data').html('');
             console.log(response);
             for(var i=0;i<response.length;i++)
             {
                  $('.main-data').append('<div class="record"><div class="button-group"><div class="button edit-button">Edit</div><div class="button del-button">Delete</div></div> <p class="id">'+response[i]._id+'</p>   <li class="name record-list">'+response[i].name+'</li>    <li class="color record-list">'+response[i].color+'</li>    <li class="dep record-list">'+response[i].department+'</li>    <li class="desc record-list">'+response[i].description+'</li>    <li class="price record-list">'+response[i].price+'</li></div>');
             }
     
             $('.del-button').click(function()
             {
                 var id=$(this).closest('.record').find('.id').html();
                 console.log(id);
                 deleteRecord(id,$(this));
             });

             $('.button.edit-button').click(function()
             {
                var name=$(this).closest('.record').find('.name.record-list').html();
                var color=$(this).closest('.record').find('.color.record-list').html();
                var department=$(this).closest('.record').find('.dep.record-list').html();
                var description=$(this).closest('.record').find('.desc.record-list').html();
                var price=$(this).closest('.record').find('.price.record-list').html();
                var id=$(this).closest('.record').find('.id').html();

                var array=[name,color,department,description,price];

                console.log(id);

                editRecord(id,array);
               
             });

             $('.btn.btn-big.openmodale').click(function()
             {
                AddRecord();
             });
                
            }
        });
    }

   

   function deleteRecord(id,ele)
   {
    $.ajax({
        type: "DELETE",
        url: "https://usman-recipes.herokuapp.com/api/products/" +id,
        beforeSend:function()
        {
         
        },
        success: function (response) {
         alert("Record Deleted");
            ele.parent().parent().remove();
            getData();
        }
    });
   }


   function AddRecord()
   {
    $('#btn_ingresar').off().click(function()
    {
    var name=$('.name-field.input').val();
    var color=$('.color-field.input').val();
    var department=$('.dep-field.input').val();
    var description=$('.desc-field.input').val();
    var price=$('.price-field.input').val();

    $.ajax({
        type: "POST",
        url: "https://usman-recipes.herokuapp.com/api/products/",
        data:{color:color,department:department,price:price,name:name,description:description},
        beforeSend:function()
        {
         console.log(name,color,department,description,price);
        },
        success: function (response) {
        alert("Record Added");
        getData();
        }
    });
    });    
   }

   function editRecord(id,nanu)
   {
    $('.modale').addClass('opened');

    $('.name-field.input').val(nanu[0]);
    $('.color-field.input').val(nanu[1]);
    $('.dep-field.input').val(nanu[2]);
  $('.desc-field.input').val(nanu[3]);
   $('.price-field.input').val(nanu[4]);
    $('#btn_ingresar').off().click(function()
    {
        
    var name=$('.name-field.input').val();
    var color=$('.color-field.input').val();
    var department=$('.dep-field.input').val();
    var description=$('.desc-field.input').val();
    var price=$('.price-field.input').val();

    $.ajax({
        type: "PUT",
        url: "https://usman-recipes.herokuapp.com/api/products/"+id,
        data:{color:color,department:department,price:price,name:name,description:description,_id:id},
        beforeSend:function()
        {
         
        },
        success: function (response) {
        alert("Record Edited");
        getData();
        }
    });

    });

   }




});