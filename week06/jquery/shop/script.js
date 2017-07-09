$(document).ready( function() {

  var products = [
        {
          "name": "Juice - Ocean Spray Cranberry",
          "price": 68,
          "image": "https://i5.walmartimages.com/asr/7e005b10-8b96-4ecb-815d-0043f20d74c8_1.b28b6ea931ceb30657ae47adcaa5551f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
        },
        {
          "name": "Rye Special Old",
          "price": 38,
          "image": "https://www.whiskyauctioneer.com/sites/default/files/IMG_4802_3.jpg"
        }, {
          "name": "Salmon - Atlantic, Skin On",
          "price": 92,
          "image":"https://thumb1.shutterstock.com/display_pic_with_logo/2615302/287243993/stock-photo-fresh-salmon-fillet-on-isolated-white-287243993.jpg"
        }, {
          "name": "Bar - Granola Trail Mix Fruit Nut",
          "price": 8
        }, {
          "name": "Flour - All Purpose",
          "price": 86,
          "image":'http://www.kingarthurflour.com/products/all-purpose-flour/images/ap-flour-hero.jpg'
        }, {
          "name": "Butter Sweet",
          "price": 93,
          "image": 'https://0bb8856ba8259ec33e3d-a40599a114f3a4c6d0979c3ffe0b2bf5.ssl.cf2.rackcdn.com/0075450085150_CL_hyvee_default_large.jpeg'
        }, {
          "name": "Sugar - Monocystal / Rock",
          "price": 98
        }, {
          "name": "Ocean Spray - Ruby Red",
          "price": 87,
          "image":'https://i5.walmartimages.com/asr/bff06943-6a51-4a83-bd14-d1a1d2600c80_1.53cafa323ec3c9d46f20261108b05925.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'
        }, {
          "name": "Mix Pina Colada",
          "price": 99,
          "image":'https://www.nestleprofessional.us/sites/g/files/gfb131/f/styles/product/public/media/sunsational-pina-colada-32oz-nestle-professional-food-service-380x380.png?itok=R0qpn6Kl'
        }, {
          "name": "Cookies - Oreo, 4 Pack",
          "price": 76
        }, {
          "name": "Mayonnaise",
          "price": 67
        }, {
          "name": "Turnip - White, Organic",
          "price": 80
        }, {
          "name": "Bread - Dark Rye",
          "price": 17
        }, {
          "name": "Noodles - Cellophane, Thin",
          "price": 8
        }, {
          "name": "Crab - Dungeness, Whole, live",
          "price": 47
        }, {
          "name": "Flour - Corn, Fine",
          "price": 40
        }, {
          "name": "Crab - Blue, Frozen",
          "price": 37
        }, {
          "name": "Wine - Conde De Valdemar",
          "price": 93
        }, {
          "name": "Wine - Winzer Krems Gruner",
          "price": 33
        }, {
          "name": "Fudge - Chocolate Fudge",
          "price": 25
        }];

        // var product = products[2].name;
        // var price = products[2].price + "$";
        // var productImg = products[2].image;

        // for (var i = 0; i < products.length; i++) {
        //     product = products[i].name;
        //     price = products[i].price + "$";
        //     //append product to container
        //     $('<h4>' + product + '</h4>').appendTo($(".shoppingcart div"));
        //     $('<span>' + price + '</span>').appendTo($(".shoppingcart div"));
        //     // $('<img src=' + productImg + '>').appendTo($(".productImg"));
        // }

        var container = $("#container");
           for (var i = 0; i < products.length; ++i) {
                 var name = products[i].name;
                 var price = products[i].price;
                 var image = products[i].image;
                 console.log(image);

                  $('<li>').html('<h4>' + name + '</h4>' + '<p>' + '$' + price + ".00" + '</p>' + '<img src=' + image + '>' + '<button>pressme</button>' ).appendTo('#container');
                //  $('<li>').html(name + price + '$').appendTo('#container');
                 //     $('<h4>' + product + '</h4>').appendTo($(".shoppingcart div"));

                //  $('<li>').html(name + ', ' + price + '$').appendTo('#container');
                //  $('<img src=' + productImg + '>').appendTo($(".productImg"));
            }
        // var calc =
        var sum = products[2].price; //this.price
        var total = $('#total').append(sum + '$');

        // $('span').wrap('<b>');
        // var newSpan = $('span').clone();
        // $('div').append(newSpan);

        $('li').click( function() {
            $(this).remove();
          });

        //scroll
        // $(window).scroll(function(event){
        //   console.log("yoyoy");
        //   console.log(window.pageXOffset);
        // });

        $(document).ready(function(){
          var animated = $('#animated');
          animated.animate({width:200, height:150}, 2000);
        })

//data cart
        // var cartProd - {
        //   name:"",
        //   price:325,
        //   qty:1
        // }
        //
        // var tr = $('<tr>');
        //
        // tr.data('prod',cartProd);
        // var object(this).data('prod');

      });
