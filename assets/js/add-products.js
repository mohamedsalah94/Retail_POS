let max = 0;
let quanQt = 0;
quanQt = +1;
$("#add-products").click(function() {


    $("[id^=buy_product_]").each(function() {
        if (parseInt(this.id.split('_')[2]) > max) {
            max = parseInt(this.id.split('_')[2]);
        }
    });
    max += 1;
    $("#sidebar").append(`



    <div class="product d-flex px-3 " id="buy_product_` + max + `">

    <div class="product-image">
        <img class="img-products" src="assets/img/products/Mask Group 1@2x.png" alt="">
    </div>
    <div class="disc product-details">
        <a href="" class="name" data-toggle="modal" data-target="#myModalRight">Andora Full Sleeve Pullover</a>
        <div class="size">Small</div>

    </div>
    <div class="quan-salary">
        <div class="quant">
            <span class="minus" id=" minus_` + max + `">
                <i class="fas fa-minus"></i>
            </span>
            <span class="qt qt_` + max + `">1</span>
            <span class="plus" id="plus_` + max + `">
                <i class="fas fa-plus"></i>
            </span>
        </div>
        <div class="mt-1">
            <h4 class="price">
                2.29$
            </h4>
            <h4 class="pu pu_` + max + `"> 2.29</h4>

        </div>
    </div>
    <div>
        <div class="op">
            <span class="remove" id="remove_` + max + `">
                <i class="fas fa-times "></i>
            </span>
        </div>
    </div>
</div>

   `)
    jQuery("#myModalRight").modal("hide");
    sum();
});


$("#sidebar").on('click', "[id^=remove_]", function() {
    let id = $(this).attr('id');
    $('#' + id).parent().parent().parent().remove();
    sum();
});

$("#sidebar").on('click', "[id^=remove_]", function() {});


$(document).on('click', '.plus', function() {

    for (let i = 0; i < products.length; i++) {
        let elem = products[i];
        let pu = elem.querySelector(".pu").innerText;

        let qtquan = ".qt_" + quanQt;
        elem.querySelector(qtquan).innerText++;
        elem.querySelector(".price").innerText =
            pu * elem.querySelector(".qt").innerText + "$";
        sum();
    }
});


$(document).on('click', '.minus', function() {
    for (let i = 0; i < products.length; i++) {
        let elem = products[i];
        let pu = elem.querySelector(".pu").innerText;

        if (elem.querySelector(".qt").innerText > 0) {
            elem.querySelector(".qt").innerText--;
            elem.querySelector(".price").innerText =
                pu * elem.querySelector(".qt").innerText + "$";
            sum();
        }


    }
});