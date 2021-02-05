angular.module("myApp")

// languageSec
.controller("appCtrl",function($scope,$rootScope){
$rootScope.ev = function(event){
    event.preventDefault()
}

    $rootScope.navbar=[
        {
            home:"HOME",store:"STORE",contact:"CONTACT US",brand:"WEEKO STORE"
        },
        {
            home:"الرئيسية",store:"المتجر",contact:"تواصل معنا",brand:"متجر ويكو"
        }
    ]

    $rootScope.footer=[
        {
            text:"© 2020 Copyright:"
        }, {
            text:"© جميع الحقوق محفوظه 2020"
        }
      
    ]
    $rootScope.home=[
        {
            head:"About Us",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, porro veritatis ipsam quis quaerat sequi! Impedit aperiam voluptatem ipsum officia quia, tempore amet ab quam voluptatibus ratione blanditiis modi quidem!"
        ,button:"Read More"},

        {
            head:"من نحن ",content:"هذا نص تجريبي لاختبار شكل و حجم النصوص و طريقة عرضها في هذا المكان و حجم و لون الخط حيث يتم التحكم في هذا النص وامكانية تغييرة في اي وقت عن طريق ادارة الموقع"  
              ,button:"اقراء المزيد"},
    ]

    $rootScope.survice=[
        {
            head:"What We Do ?" , content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, porro veritatis ipsam quis quaerat sequi! Impedit aperiam voluptatem ipsum officia quia, tempore amet ab quam voluptatibus ratione blanditiis modi quidem!"
        ,serv:["Mobile Service","Web Design","Graphic Design"]
        },
        {
            head:"ماذا نقدم ؟" , content:"هذا نص تجريبي لاختبار شكل و حجم النصوص و طريقة عرضها في هذا المكان و حجم و لون الخط حيث يتم التحكم في هذا النص وامكانية تغييرة في اي وقت عن طريق ادارة الموقع"  
            ,serv:["خدمات الموبايل","تصميم المواقع","تصميم الجرافيك"]
        }

    
    ]

    $rootScope.jump=[
        {
            head:"What Our Client Says" , content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, porro veritatis ipsam quis quaerat sequi! Impedit aperiam voluptatem ipsum officia quia, tempore amet ab quam voluptatibus ratione blanditiis modi quidem!"
       ,button:"view more" },
        {
            head:" ماذا يقول عملاؤنا ؟ " , content:"هذا نص تجريبي لاختبار شكل و حجم النصوص و طريقة عرضها في هذا المكان و حجم و لون الخط حيث يتم التحكم في هذا النص وامكانية تغييرة في اي وقت عن طريق ادارة الموقع"
            ,button:"رؤيه المزيد" 
        }

    
    ]

    $rootScope.product=[
        {
            title:"Our Product",tags:["phones","cars","laptops","weeko"]
        },
        {
            title:"منتجاتنا",tags:["هواتف","سيارات","لابتوب","اكسسوارات"]
        }
    ]

    $rootScope.sideNav=[
        {
            title:"Category",dropTi:["Phones","laptops","Chairs","Cars"],dropIe:["NEW","USED"]
        },
        {
            title:"الاقسام",dropTi:["هواتف","لابتوب","اكسسوارات","سيارات"],dropIe:["جديد","مستعمل"]
        }
    ]
    $rootScope.storeProduct = [
        {
            cart:"Add To Cart" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, porro veritatis ipsam "
            ,price:"Price"
        },
        {
            cart:"اضف الي السله" ,  desc:"هذا نص تجريبي لاختبار شكل و حجم النصوص و طريقة عرضها في هذا المكان و حجم و لون الخط حيث يتم التحكم في هذا النص وامكانية تغييرة في اي وقت عن طريق ادارة الموقع"
        ,price:"السعر"
        }

    ]

    $rootScope.contact=[
        {
            head:"Contact Us",text:"Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you."
        ,input:["Your Name","Your Email","Subject","Your Message"],btn:"SEND",loc:"AL-KALAKLAH ST. 15",phone:"+249 125 803 725",email:"amnnn80@gmail.com"
        },
        {
            head:"تواصل معنا",text:"هل لديك اسئله ؟ من فضلك لا تتردد بالاتصال بنا مباشرة . سيعود فريقنا اليك في غضون ساعات لمساعدتك"
        ,input:["الاسم","الايميل","المادة","رسالتك"],btn:"ارسال",loc:"الكلاكله القبه شارع 15",phone:"+249 125 803 725",email:"amnnn80@gmail.com"
        }
    ]

    


    $rootScope.langInd = 0
    $rootScope.darkMode = ""
    $rootScope.lable = true
})
