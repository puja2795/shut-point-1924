
import { navbar , locateDiv, navbarFunc, cartDiv, showCartItems} from "../component/navbar.js"
import {footerDiv, optionalFooter} from "../component/footer.js";

let navbarDiv = document.getElementById("navbar");
navbarDiv.innerHTML = navbar();
navbarDiv.style.backgroundColor = 'black';
document.getElementById("location-menu").innerHTML = locateDiv();
document.getElementById("cart").innerHTML = cartDiv();
navbarFunc();




showCartItems();

document.getElementById("footer-div").innerHTML = footerDiv();
document.getElementById("optional-container").innerHTML = optionalFooter();

const Library_data=[
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/00504b6d-fa0d-47cf-8cae-8f1f61cdc171",
        heading:"One Rep at a time",
        des:"Join podcast host, Deepak Gopalakrishnan aka Chuck, in his quest to build a fitness habit for life. Tune in every weekday for invigorating discussions on curated..",
        pack:"9 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/00a5f2c0-5e37-45fb-b869-f880d17d5763",
        heading:"Covid Recovery",
        des:"It's time to say goodbye to the physical and mental stress brought upon by this virus. This program focuses on bringing stability back into the body through gentle..",
        pack:"3 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/8e929664-cd36-4b5d-8c6c-ca135c678a84",
        heading:"Running Programs",
        des:"Running Programs",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/f5e214b7-243b-4fec-b821-8e6400d49213",
        heading:"5 Minute Meditations",
        des:"Panic? Anxiety? We have you all covered with these short 5 minute meditations. Dive in!",
        pack:"14 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/2688cb1e-3533-484e-b2dc-e83017199315.jpg",
        heading:"Meditation - Foundation",
        des:"Get started with meditation! This series will guide you through the basic skills of meditation and help you explore mindfulness.",
        pack:"6 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/936125f4-ffc8-4e52-943b-efe9d068b758",
        heading:"Sleep Stories",
        des:"Say goodbye to sleepless nights! Created by Dr.Shyam Bhat, these stories will help you relax to drift into a peaceful and deep sleep.",
        pack:"2 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/54117647-b2c9-4800-9370-18fb650fe4ba",
        heading:"Yoga- Pranayama",
        des:"This Pranayama series contains breath practices which have the potential to effect the gross body.",
        pack:"4 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/c86a5d9a-e631-4f51-83eb-5231a27335ac.jpg",
        heading:"Focus Meditation",
        des:"It's the present that matters! Created by Dr.Shyam Bhat, this meditation series will help you bring your attention to the present moment..",
        pack:"4 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/e93f2cc8-7572-4559-ba11-6642e9dc98f5.jpg",
        heading:"Stress Reduction Meditation",
        des:"Say no to stress with this series! The various packs created by Dr. Shyam Bhat will help you manage stressful thoughts and feel more relaxed.",
        pack:"8 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/8acb1c22-4cde-45ae-b2f9-14042fdd408c.jpg",
        heading:"Beat the Stress Program",
        des:"Say no to stress with this series! The various packs will help you manage stressful thoughts and feel more relaxed.",
        pack:"3 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/5992b24c-f970-4beb-a4fe-8f0e265b67d9",
        heading:"30 Minutes Pranayama",
        des:"This will be a half an hour audio-led Pranayama class by Divya Rolla. Breath is life. Most people breathe using a small portion..",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/94cf3985-f59e-48b3-88b3-fb1fef54d39a",
        heading:"30 Minutes Yoga Nidra",
        des:"This will be a half an hour audio-led Yoga NIdra class by Divya Rolla. Yoga Nidra is a powerful practise which has a profound effect..",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/b1bc9e1e-22f2-4e93-90ed-73703dcc973d",
        heading:"Yoga for Relaxation and Stress Relief",
        des:"A series which will guide you through asana, pranayama and savasana addressing the body, mind and breath",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/3f6bf321-5c8d-4f12-adbf-5dd60b4f3fec",
        heading:"Difficult Emotions",
        des:"This pack by Prasiddha Ramarao addresses the fact that strong emotions do not have to be scary. Emotions often tell us that we need to take..",
        pack:" Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_163,c_fit/dpr_2/image/diy/83a5a31b-68f8-4acd-b6ff-d7bb8430ecd5",
        heading:"Meditation for Kids",
        des:"This series led by Prasiddha Ramarao would serve as a wonderful start for your child's meditation journey. The language is simple and..",
        pack:"4 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_163,c_fit/dpr_2/image/diy/3d8bf8ac-64bf-4fc0-80b0-dc64ba6a831e",
        heading:"Relationship Healing",
        des:"This meditation pack on Relationships created by Spiritual Coach ModMonk Anshul will take you on a journey of bonding with yourself and will..",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_163,c_fit/dpr_2/image/diy/110efd79-97f2-4bda-95f5-694b1284794a",
        heading:"Falling into Sleep",
        des:"If you've been struggling to catch some shut eye lately, meditating before bed might help. Insomnia is an unhealthy condition that plagues..",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_163,c_fit/dpr_2/image/diy/a5748b24-ddea-429e-8dea-51fa60c258c6",
        heading:"Mindfulness in Daily Life",
        des:"Mindfulness is the energy of being aware and awake to the present moment. It is the continuous practice of touching life deeply in every..",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_163,c_fit/dpr_2/image/diy/95593272-76b9-4776-bd98-23934db3fc1b",
        heading:"Saying Yes to Life",
        des:"The meditation sessions in this pack helps us take a closer look at our default responses to life's invitations for growth. Saying “yes” to life..",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_163,c_fit/dpr_2/image/diy/43078998-5c3c-4608-beac-e3eeece27695",
        heading:"The Confidence Series",
        des:"These sessions, curated by Shobhit Raj, will help you build confidence and self-esteem in various aspects of life using breath, introspection..",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_163,c_fit/dpr_2/image/diy/92999294-93a8-434d-af21-034185207cae.jpg",
        heading:"Sleep Meditation",
        des:"Say goodbye to sleepless nights! Created by Dr.Shyam Bhat, this series will help you relax to drift into a peaceful and deep sleep.",
        pack:"12 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_163,c_fit/dpr_2/image/diy/fd1f3e15-a293-4b81-83ac-f2578158f9b9",
        heading:"Sleep Stories for Kids",
        des:"Meditation pack specially design for kids led by Prasiddha Ramarao comprises wonderful stories that will excite them, relax them and delight them.",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_163,c_fit/dpr_2/image/diy/57ee03e5-6515-4892-9729-718edbc7505f",
        heading:"7 days of Happiness",
        des:"Spiritual coach ModMonk Anshul guides you through a beautiful journey of creating and enhancing your inner peace and happiness. Being happy..",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_163,c_fit/dpr_2/image/diy/a0f88a6f-5f57-49a5-926e-fc485241edbb",
        heading:"Everyday Short Meditations",
        des:"Short meditations sessions for everyday well being. These specially curated sessions by Shobhit Raj will help you with variety of issues including..",
        pack:"9 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/206bf7fd-de2b-4ab8-9783-6b94acbab483.jpg",
        heading:"Meditation - Yoga Nidra",
        des:"This series uses the pre-meditative practices of Yoga Nidra to help deepen relaxation. You are bound to wake up refreshed!",
        pack:"4 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/e7978bea-1f1d-484a-89ed-83f29b64714a",
        heading:"Yoga Nidra by Shobhit Raj",
        des:"Join Shobhit Raj for a 45-minute audio guided Yoga Nidra, a powerful practice which holds the key to inner transformation.",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/5964450b-e7d3-468a-8217-9dec24b0be93.jpg",
        heading:"Music for Mindfulness",
        des:"Music for the mind! Stress, sleep or focus, let music cover it all.",
        pack:"3 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/5c301b30-9fb3-434e-bdfb-47d15e240b47",
        heading:"Walking Meditation",
        des:"A guide to walking mindfully, transforming the simple act of walking by staying present in the moment- created by Dr Shyam Bhat",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/2e8dffed-4d9c-4eed-9bad-f5b577ab1fef",
        heading:"Breathing Practices",
        des:"Join Shobhit Raj for a 45-minute audio guided Pranayama, in a holistic session of joint warmup, spinal activation, Pranayama practise or breath..",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/3aadf32b-c5a4-422a-b648-fa715eb409ed.jpg",
        heading:"Yoga - Endurance",
        des:"This pack is a capsulated practice to building physical endurance through a flow-based approach to yoga asanas. One will see improved physical and..",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/7fc199ea-0457-4d03-bd93-add35aa3a64c",
        heading:"Happiness by Nithya Shanti",
        des:"A meditation series by Nithya Shanti on the small yet significant aspects of life. This series will help in appreciating the joy derived..",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/2cdc62b3-b120-4544-a55e-5b6ce5025c64",
        heading:"A Guide to Meditation (Hindi)",
        des:"This series by Anvita Dixit focuses on the foundational Meditation techniques of breath awareness, body consciousness and Visualisation.",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/3778c07f-310c-4d01-8a4c-89f190351799",
        heading:"Emotional health in a global crisis",
        des:"The world is facing an unprecedented situation and we are all feeling the effects on our emotional health. In these sessions, Dr. Shyam shares..",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/f6c83a0c-40d8-45fb-8fcc-75a79f33acd2.jpg",
        heading:"Meditation - Intermediate",
        des:"Created by Dr.Shyam Bhat, these meditations are your next step  after the foundation series! Learn to handle distractions and mind wandering..",
        pack:"4 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/687e2fdb-5302-43d9-b63e-01bcf8655b79.jpg",
        heading:"Meditation - Relationships",
        des:"Created by Dr.Shyam Bhat, these guided meditations will enhance and renew your relationships, and help you heal from a breakup, by connecting with..",
        pack:"4 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/290574a7-00fc-4e3b-84bd-9da98c01d385",
        heading:"Personal Growth",
        des:"Learn to love yourself! Jump right in to discover the power of self esteem with meditation, created by Dr.Shyam Bhat.",
        pack:"2 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/9122b134-13f2-4acd-b35b-ab3f3016b8c4.jpg",
        heading:"Practice Gratitude",
        des:"The mother of all emotions! Created by Dr.Shyam Bhat, this series will help you develop gratitude and thankfulness in your life",
        pack:"2 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/c4a9c1d1-4f01-42a5-8654-9b6155c04586",
        heading:"Practice Meditation - Advanced",
        des:"Continue your practice of meditation with less guidance and more silence. Best done after completion of the Foundation and Intermediate series..",
        pack:"1 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/cd4b0b6e-9c90-4903-a1ce-be9e717296c2",
        heading:"Inner Peace",
        des:"Find Inner Peace with this series",
        pack:"9 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/0c6ad2b5-39e9-44b1-9a63-60982f07a84a",
        heading:"Self Care",
        des:"Care for yourself with this series",
        pack:"14 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/08a94d73-51ee-4d25-9481-f457854ef808",
        heading:"Breath & Relaxation",
        des:"Focus on your Breath and Relax with this series",
        pack:"6 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/b972e214-a48f-4272-a1cb-cf46b67b8ebc",
        heading:"Guided Meditation Programs",
        des:"Guided Meditation Program  you to jump start",
        pack:"10 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/9d7b53f3-6c74-490d-b087-501cbf875a0b",
        heading:"Short Meditation Programs",
        des:"Short Meditation Programs",
        pack:"5 Packs"
    },
    {
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/26778218-30a6-499e-84b3-4b21535139d1",
        heading:"Yoga Asanas",
        des:"Browse our extensive yoga asana library, with a vast collection of postures with clear instructions on how to get into it, how to safely get out of it..",
        pack:"5 Packs"
    }
]

const get_data= async()=>{
    try{
        let res= await fetch("http://localhost:3000/Library")
        let data= await res.json()
        // console.log(data)
        append_library(data)
    }
    catch(err){
        append_library(Library_data)
        console.log(err)
    }
    
    
}
get_data()

const append_library=(data)=>{
    let container=document.getElementById("container")
    data.forEach((el) => {
        let div=document.createElement("div")
        div.className="card"
        let detail=document.createElement("div")
        detail.className="content"
        let img_div=document.createElement("div")
        img_div.className="img_div"

        let image=document.createElement("img")
        image.src=el.image;

        let heading=document.createElement("h2")
        heading.innerText=el.heading;

        let des=document.createElement("p")
        des.innerText=el.des;

        let pack=document.createElement("h4")
        pack.innerText=el.pack;
        img_div.append(image)
        detail.append(heading,des,pack)
        div.append(img_div,detail)
        container.append(div)
    });

}