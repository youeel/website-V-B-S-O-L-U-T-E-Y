function myFunction() {
  setTimeout(function () {
    const preloader = document.querySelector('#loaging img');
    preloader.style.display = 'none';
  }, 3400);
}

$('.logo a').animate(
  {
    left: '24px',
  },
  10000
);

window.addEventListener('scroll', function () {
  if (window.scrollY > 350) {
    document.querySelector('#nav-menu').style.opacity = 0.8;
    document.querySelector('.logo a').style.color = '#d8a005';
    document.querySelector('.header').style.backgroundColor = '#2f363e';
    document.querySelector('.header').style.position = 'fixed';
  } else {
    document.querySelector('#nav-menu').style.opacity = 1;
    document.querySelector('.header').style.backgroundColor = '#282f33';
    document.querySelector('.logo a').style.color = '#58d3cb';
  }
});

$('.nav a').on('click', function (event) {
  
  if (this.hash !== '') {
    event.preventDefault();
    var hash = this.hash;
    $('html , body').animate({ scrollTop: $(hash).offset().top - 100 }, 1200);

  }

  

});



 




$('.kora a').on('click', function () {
  
  if (this.hash == '' ) {
    
    $("html , body").animate({ scrollTop: $("#home").offset().top - 10 }, 4200)
  }})


const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

// +++++++++++++++++++++++++++++++++++++++++++++++

showMenu('nav-check', 'nav-menu');

const home_section = document.querySelector('.home-section');

const fashionTl = gsap.timeline();

fashionTl
  .from(home_section, {
    duration: 5.9,
    y: -200,
    height: 0,
    opacity: 0,
    ease: 'power3.inOut',
  })

  // ++++++++++++++++++++++++++++++++++++
  // ++++++++++++++++++++++++++++++++++++
  // ++++++++++++++++++++++++++++++++++++
  // ++++++++++++++++++++++++++++++++++++

  .from('.nav a', {
    delay: 0.6,
    y: -100,
    height: 0,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: {
      amount: 0.5,
    },
  })
  .from('.home-img-inner img', {
    delay: 0.6,
    y: 500,
    top: -300,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  })

  .from(
    [
      '.home-course .h',
      '.home-course .c',
      '.home-course .r',
      '.home-course .j',
    ],
    {
      delay: 0.09,
      x: 100,
      height: 0,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: {
        amount: 0.2,
      },
    }
  )

  .from(['.home-text h1', '.home-text h2'], {
    delay: 0.1,
    y: 100,
    left: -200,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: {
      amount: 0.2,
    },
  })
  .from('.btn', {
    delay: 0.1,
    x: -200,
    left: -200,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: {
      amount: 0.2,
    },
  });

//  ++++++++++++++++++++ scroll +++++++++++++++++
window.addEventListener('scroll', function () {
  if (window.scrollY > 330) {
    let kora = document.querySelector('.kora');
    kora.style.display = 'block';
  }
});
window.addEventListener('scroll', function () {
  if (window.scrollY < 330) {
    let kora = document.querySelector('.kora');
    kora.style.display = 'none';
  }
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 280) {
    $('.item1').animate(
      {
        left: '0',
        opacity: '1',
      },
      900
    );
    $('.item2').animate(
      {
        top: '0',
        opacity: '1',
      },
      900
    );
    $('.item3').animate(
      {
        right: '0',
        opacity: '1',
      },
      900
    );
  }
});
window.addEventListener('scroll', function () {
  if (window.scrollY > 720) {
    $('.ani').animate(
      {
        left: '0',
        opacity: '1',
      },
      900
    );
    $('.ani_2').animate(
      {
        right: '0',
        opacity: '1',
      },
      900
    );
  }
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 1320) {
    $('.facts-item_1').animate(
      {
        right: '0',
        opacity: '1',
      },
      900
    );
    $('.facts-item_2').animate(
      {
        right: '0',
        opacity: '1',
      },
      2000
    );
  }
});


window.addEventListener('scroll', function () {
  if (window.scrollY > 1820) {


    $('.blea').animate(
      {
        left: '0',
      },
      50
    );

    $('.blea_2').animate(
      {
        right: '0',
      },
      30
    );

  }
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 2620) {
    $('.contact-form').animate(
      {
        right: '0',
      },
      800
    );

    $('.contact-img').animate(
      {
        left: '0',
        transform: '(60deg)',
      },
      800
    );
  }
});

const course_item = document.querySelectorAll('.row .course-item');

function blor() {
  course_item.forEach((n) => n.classList.add('blor'));
  this.classList.remove('blor');
}

course_item.forEach((n) => n.addEventListener('mouseover', blor));

// +++++++++++++++++++ from +++++++++++++++++++

const namee = document.forms['form']['name'];
const email = document.getElementById('E-email');
const Phone = document.getElementById('Phone');

email.addEventListener('textInput', email_Verify);
Phone.addEventListener('textInput', Phone_Verify);

const Phone_error = document.queryCommandEnabled('Phone_error');
const error_e = document.queryCommandEnabled('E_error');

function validated() {
  if (email.value.length < 9) {
    email.style.border = '3px solid red  ';
    $('#E_error').css('display', 'block');
    // error_e.style.display = "block" ;
    error_name.focus();
    return false;
  }
  if (Phone.value.length < 8) {
    Phone_error.style.border = '3px solid red  ';
    Phone_error.style.display = 'block';

    return false;
  }
}

function email_Verify() {
  if (email.value.length >= 8) {
    email.style.border = '2px solid springgreen';
    error_e.style.display = 'none';
    return true;
  }
}

function Phone_Verify() {
  if (Phone.value.length >= 5) {
    Phoner.style.border = '2px solid springgreen';
    Phone_error.style.display = 'none';
    return true;
  }
}
