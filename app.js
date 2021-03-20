
var $ = jQuery;
$(document).ready(function(){
   $("#app").html("Loading....");
   var url = 'https://www.amazon.com/dp/B07FJ8DDPX'
   var walmartUrl = 'https://www.walmart.com/ip/Lenovo-Legion-5-Laptop-17-FHD-Intel-Core-i7-10750H-16GB-RAM-1TB-HDD-256GB-SSD-NVIDIA-GeForce-GTX-1660Ti-Phantom-Black-Windows-10-81Y80057US/386954936?wpa_bd=&wpa_pg_seller_id=F55CDC31AB754BB68FE0B39041159D63&wpa_ref_id=wpaqs:sdFYMh8An-p6BYDijAUGH-YrRW2Waui-q3ns6tN8yQxIYPgQAsp6jmUmkwzZFwGZ9YYJoTUwhNTE3zkULQJUA5vtpUoQWVDqfsKjz5J8qwIYHbzI-DGX5AzCiHRTxNa93aFZCMVRxXNGYPCn89XFvYwgr1pzyM3WBh6RH8v3T75BwWhh6ZQX2HEd2ebbdlLwlNjY_3WoYkVJIUxhnI3EXQ&wpa_tag=&wpa_aux_info=&wpa_pos=2&wpa_plmt=1145x1145_T-C-IG_TI_1-6_HL-INGRID-GRID-NY&wpa_aduid=b681afae-91be-4470-accb-797ff1f60c6e&wpa_pg=browse&wpa_pg_id=3944_3951_1089430_1230091_1094888&wpa_st=__searchterms__&wpa_tax=3944_3951_1089430_1230091_1094888&wpa_bucket=__bkt__'
   $.get( url, function( response ) {
      var parsed = $.parseHTML(response);
      productTitle = $(parsed).find("#productTitle").text();
      $("#app").html( productTitle );
   });
   $.get( walmartUrl, function( response ) {
      var parsed = $.parseHTML(response);
      productTitle = $(parsed).find(".prod-ProductTitle").text();
      $("#app2").html( productTitle );
   });
});