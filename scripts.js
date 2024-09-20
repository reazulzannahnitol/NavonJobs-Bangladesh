// Get elements
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');
const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const closeNav = document.getElementById('closeNav');

// Open the mobile nav and show overlay
mobileNavToggle.addEventListener('click', function() {
    mobileNav.style.width = "250px"; // Open the sidebar
    overlay.style.display = "block"; // Show overlay
});

// Close the mobile nav and hide overlay
closeNav.addEventListener('click', function() {
    mobileNav.style.width = "0"; // Close the sidebar
    overlay.style.display = "none"; // Hide overlay
});

// Close the nav when clicking on the overlay
overlay.addEventListener('click', function() {
    mobileNav.style.width = "0"; // Close the sidebar
    overlay.style.display = "none"; // Hide overlay
});









       // Function to toggle sound
    function toggleSound() {
        var video = document.getElementById('myVideo');
        var soundButton = document.getElementById('soundToggleButton').querySelector('button');
        
        if (video.muted) {
            video.muted = false; // Unmute the video
            soundButton.textContent = '🔇'; // Change icon to sound off
        } else {
            video.muted = true; // Mute the video
            soundButton.textContent = '🔊'; // Change icon to sound on
        }
    }








const translations = {
    bn: {
        home: "হোম",
        country: "দেশ",
        about: "ন্যাভন জবস সম্পর্কে",
        testimonials: "টেস্টিমোনিয়াল",
        contact: "যোগাযোগ করুন",
        Slidermessage: "ন্যাভন জবস বাংলাদেশে আপনাকে স্বাগতম",
        servicesTitle: "ইউরোপের সেনজেন কান্ট্রি",
        service1Title: "রোমানিয়া",
        service1Text: "রোমানিয়া ইউরোপের অন্যতম আকর্ষণীয় গন্তব্য, যেখানে দক্ষ কর্মীদের জন্য রয়েছে প্রচুর সুযোগ। কাজের অনুমতি পেলে আপনি দেশটিতে বৈধভাবে কাজ করতে পারবেন এবং সামাজিক সুবিধা উপভোগ করতে পারবেন।",
        service2Title: "ক্রোয়েশিয়া",
        service2Text: "ক্রোয়েশিয়ার মনোরম প্রাকৃতিক সৌন্দর্যের পাশাপাশি কর্মসংস্থানের সুযোগও বাড়ছে। একটি ওয়ার্ক পারমিট পেয়ে আপনি পর্যটন ও নির্মাণ শিল্পে কাজ করার সুযোগ পাবেন, ইউরোপের অন্যতম আকর্ষণীয় গন্তব্য।",
        service3Title: "হাঙ্গেরি",
        service3Text: "হাঙ্গেরিতে কাজের সুযোগ বেড়েছে, বিশেষত নির্মাণ, উৎপাদন এবং প্রযুক্তি খাতে। ওয়ার্ক পারমিটের মাধ্যমে আপনি আইনত কাজ করতে এবং ভবিষ্যতে স্থায়ী বাসিন্দা হওয়ার সুযোগ পেতে পারেন।",
        servicesTitle: "ইউরোপের সেনজেন কান্ট্রি",
        service1Title: "রোমানিয়া",
        service1Text: "রোমানিয়া ইউরোপের অন্যতম আকর্ষণীয় গন্তব্য, যেখানে দক্ষ কর্মীদের জন্য রয়েছে প্রচুর সুযোগ। কাজের অনুমতি পেলে আপনি দেশটিতে বৈধভাবে কাজ করতে পারবেন এবং সামাজিক সুবিধা উপভোগ করতে পারবেন।",
        service2Title: "ক্রোয়েশিয়া",
        service2Text: "ক্রোয়েশিয়ার মনোরম প্রাকৃতিক সৌন্দর্যের পাশাপাশি কর্মসংস্থানের সুযোগও বাড়ছে। একটি ওয়ার্ক পারমিট পেয়ে আপনি পর্যটন ও নির্মাণ শিল্পে কাজ করার সুযোগ পাবেন, ইউরোপের অন্যতম আকর্ষণীয় গন্তব্য।",
        service3Title: "হাঙ্গেরি",
        service3Text: "হাঙ্গেরিতে কাজের সুযোগ বেড়েছে, বিশেষত নির্মাণ, উৎপাদন এবং প্রযুক্তি খাতে। ওয়ার্ক পারমিটের মাধ্যমে আপনি আইনত কাজ করতে এবং ভবিষ্যতে স্থায়ী বাসিন্দা হওয়ার সুযোগ পেতে পারেন।",
        testimonialsTitle: "ন্যাভন জবসের কর্মচারী এবং ক্লায়েন্টরা কি বলে",
        testimonial1Title: "জর্জিয়ানা মার্ট (সি.ই.ও)",
        testimonial1Text: "\"ন্যাভন জবস বাংলাদেশ অভিবাসন প্রক্রিয়া জুড়ে ব্যতিক্রমী সেবা এবং সহায়তা প্রদান করে।\"",
        testimonial2Title: "সাকসেসফুল ক্লায়েন্ট",
        testimonial2Text: "\"ন্যাভন জবস বাংলাদেশ-এর দলটি নতুন ইউরোপ দেশে সহজে আমাকে স্থানান্তর করেছে। তাদের ছাড়া আমি এটি করতে পারতাম না!\"",
        testimonial3Title: "রুবিনা দুবাই ব্রাঞ্চ থেকে",
        testimonial3Text: "\"পেশাদার এবং নিবেদিত পরিষেবা। আপনার অভিবাসন চাহিদার জন্য ন্যাভন জবস সব সময় আপনার পাশে আছে।\"",
        imageTextTitle: "বিদেশে কর্মী নিয়োগ - ইউরোপ কোম্পানির জন্য",
        imageTextParagraph1: "ন্যাভন জবস হল রোমানিয়ার একটি এশিয়ান এবং বিদেশী কর্মী নিয়োগ সংস্থা। আমরা এশিয়া এবং বিদেশে দক্ষ এবং অদক্ষ কর্মীদের খুঁজছেন এমন নিয়োগ সংস্থাগুলিকে সরবরাহ করি।",
        imageTextParagraph2: "সমস্ত এশিয়ান এবং বিদেশী কর্মী নিয়োগ প্রক্রিয়া বৈধ ভাবে সম্পন্ন করা হবে।।",
        imageTextParagraph3: "নিয়োগকর্তাদের সাথে নিরবিচ্ছিন্ন ভাবে সমস্ত কার্যকলাপ সম্পর্কে জানানো হবে যেন তারা সচেতন থাকে।",
        imageTextQuote: "\"জর্জিয়ানা মার্ট - ন্যাভন জবসের সি.ই.ও\"",
        teamTitle: "আমাদের টিম",
        galleryTitle: "গ্যালারি",
        contactTitle: "আমাদের মেসেজ দিন",
        officeLocationTitle: "প্রত্যেক দেশের ন্যাভন জবসের লোকেশন",
        bangladeshTitle: "বাংলাদেশ",
        romaniaTitle: "রোমানিয়া",
        uaeTitle: "সংযুক্ত আরব আমিরাত (দুবাই)",
        sriLankaTitle: "শ্রীলংকা",

        
    },
    en: {
        home: "Home",
        country: "Country",
        about: "About Navon Jobs",
        testimonials: "Testimonials",
        contact: "Contact Us",
        Slidermessage: "Welcome to Navon Jobs Bangladesh",
        servicesTitle: "European Schengen Countries",
        service1Title: "Romania",
        service1Text: "Romania is one of the most attractive destinations in Europe, offering plenty of opportunities for skilled workers. With a work permit, you can work legally in the country and enjoy social benefits.",
        service2Title: "Croatia",
        service2Text: "Croatia's picturesque natural beauty is complemented by growing employment opportunities. By obtaining a work permit, you can work in the tourism and construction industries in one of Europe’s most attractive destinations.",
        service3Title: "Hungary",
        service3Text: "Job opportunities in Hungary have increased, especially in construction, manufacturing, and technology sectors. A work permit allows you to work legally and opens the door to becoming a permanent resident in the future.",
        servicesTitle: "European Schengen Countries",
        service1Title: "Romania",
        service1Text: "Romania is one of the most attractive destinations in Europe, offering plenty of opportunities for skilled workers. With a work permit, you can work legally in the country and enjoy social benefits.",
        service2Title: "Croatia",
        service2Text: "Croatia's picturesque natural beauty is complemented by growing employment opportunities. By obtaining a work permit, you can work in the tourism and construction industries in one of Europe’s most attractive destinations.",
        service3Title: "Hungary",
        service3Text: "Job opportunities in Hungary have increased, especially in construction, manufacturing, and technology sectors. A work permit allows you to work legally and opens the door to becoming a permanent resident in the future.",
        testimonialsTitle: "What Navon Jobs Employees and Clients Says",
        testimonial1Title: "Georgiana Mart (CEO)",
        testimonial1Text: "\"Navon Jobs Bangladesh provides exceptional service and support throughout the immigration process.\"",
        testimonial2Title: "Successful Client",
        testimonial2Text: "\"The team at Navon Jobs Bangladesh seamlessly transferred me to a new European country. I couldn't have done it without them!\"",
        testimonial3Title: "Rubina from Dubai Branch",
        testimonial3Text: "\"Professional and dedicated service. Navon Jobs is always there for your immigration needs.\"",
        imageTextTitle: "Overseas Recruitment - For European Companies",
        imageTextParagraph1: "Navon Jobs is an Asian and foreign worker recruitment agency in Romania. We provide agencies looking for skilled and unskilled workers in Asia and abroad.",
        imageTextParagraph2: "All Asian and foreign worker recruitment processes will be completed legally.",
        imageTextParagraph3: "Employers will be kept informed of all activities seamlessly to ensure they remain aware.",
        imageTextQuote: "\"Georgiana Mart - CEO of Navon Jobs\"",
        teamTitle: "Our Team",
        galleryTitle: "Gallery Of Clients",
        contactTitle: "Give Us Message",
        officeLocationTitle: "Office Locations of All Branches in Each Country",
        bangladeshTitle: "Bangladesh",
        romaniaTitle: "Romania",
        uaeTitle: "UAE (Dubai)",
        sriLankaTitle: "Sri Lanka",
    }
};

document.getElementById('bdflag').addEventListener('click', function() {
    translatePage('bn');
});

document.getElementById('usaFlag').addEventListener('click', function() {
    translatePage('en');
});

function translatePage(lang) {
    document.querySelector('.nav-link[href="#slider"]').textContent = translations[lang].home;
    document.querySelector('.nav-link[href="#services"]').textContent = translations[lang].country;
    document.querySelector('.nav-link[href="#company-profile"]').textContent = translations[lang].about;
    document.querySelector('.nav-link[href="#testimonials"]').textContent = translations[lang].testimonials;
    document.querySelector('.nav-link[href="#contact"]').textContent = translations[lang].contact;

        // Translating mobile navigation links
        document.querySelector('#mobileNav a[href="#slider"]').textContent = translations[lang].home;
        document.querySelector('#mobileNav a[href="#services"]').textContent = translations[lang].country;
        document.querySelector('#mobileNav a[href="#company-profile"]').textContent = translations[lang].about;
        document.querySelector('#mobileNav a[href="#testimonials"]').textContent = translations[lang].testimonials;
        document.querySelector('#mobileNav a[href="#contact"]').textContent = translations[lang].contact;

        //Translating slider message
        document.querySelector('#slider .welcome').textContent = translations[lang].Slidermessage;

        // Translating services section
    document.querySelector('#services h2').textContent = translations[lang].servicesTitle;
    document.querySelector('#services .col-md-4:nth-child(1) .card-title').textContent = translations[lang].service1Title;
    document.querySelector('#services .col-md-4:nth-child(1) .card-text').textContent = translations[lang].service1Text;
    document.querySelector('#services .col-md-4:nth-child(2) .card-title').textContent = translations[lang].service2Title;
    document.querySelector('#services .col-md-4:nth-child(2) .card-text').textContent = translations[lang].service2Text;
    document.querySelector('#services .col-md-4:nth-child(3) .card-title').textContent = translations[lang].service3Title;
    document.querySelector('#services .col-md-4:nth-child(3) .card-text').textContent = translations[lang].service3Text;

    // Translating testimonials section
    document.querySelector('#testimonials h2').textContent = translations[lang].testimonialsTitle;
    document.querySelector('#testimonials .col-md-4:nth-child(1) .card-title').textContent = translations[lang].testimonial1Title;
    document.querySelector('#testimonials .col-md-4:nth-child(1) .card-text').textContent = translations[lang].testimonial1Text;
    document.querySelector('#testimonials .col-md-4:nth-child(2) .card-title').textContent = translations[lang].testimonial2Title;
    document.querySelector('#testimonials .col-md-4:nth-child(2) .card-text').textContent = translations[lang].testimonial2Text;
    document.querySelector('#testimonials .col-md-4:nth-child(3) .card-title').textContent = translations[lang].testimonial3Title;
    document.querySelector('#testimonials .col-md-4:nth-child(3) .card-text').textContent = translations[lang].testimonial3Text;

       // Translating Image and Text Section
       document.querySelector('#image-text-section h2').textContent = translations[lang].imageTextTitle;
       document.querySelector('#image-text-section p:nth-child(2)').textContent = translations[lang].imageTextParagraph1;
       document.querySelector('#image-text-section p:nth-child(3)').textContent = translations[lang].imageTextParagraph2;
       document.querySelector('#image-text-section p:nth-child(4)').textContent = translations[lang].imageTextParagraph3;
       document.querySelector('#image-text-section h2:last-of-type').textContent = translations[lang].imageTextQuote;

        // Translating the Team Section Title
    document.querySelector('#team .section-title.text-center.mb-5').textContent = translations[lang].teamTitle;

     // Translating the Gallery Section Title
     document.querySelector('#gallery .section-title.text-center.mb-5').textContent = translations[lang].galleryTitle ;

       // Translating the Give us message section
       document.querySelector('#contact .text-center').textContent = translations[lang].contactTitle;



    //Translating Office location section
       document.querySelector('.aa').textContent = translations[lang].officeLocationTitle;


       document.querySelector('#office-location .mt-3 .bd ').textContent = translations[lang].bangladeshTitle;
       document.querySelector('#office-location .mt-3 .rom ').textContent = translations[lang].romaniaTitle;
       document.querySelector('#office-location .mt-3 .uae ').textContent = translations[lang].uaeTitle;
       document.querySelector('#office-location .mt-3 .sri ').textContent = translations[lang].sriLankaTitle;
    

}





