import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);

function AnimatedSphere() {
  const mesh = useRef();
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.cos(time / 4) * 0.2;
    mesh.current.rotation.y = Math.sin(time / 2) * 0.2;
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={mesh} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#f43f5e"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function Scene3D() {
  return (
    <div className="canvas-container">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#fb7185" />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}

const translations = {
  en: {
    subtitle: "Welcome to",
    title: "Oasis Grill",
    heroDesc: "A culinary journey through international flavors. Experience the true essence of fine dining in every bite.",
    heroBtn: "Discover Our Menu",
    heritageSubtitle: "Our Roots",
    heritageTitle: "Our Story",
    heritageDesc: "Born from a passion for great food, Oasis Grill brings together the best flavors from around the world.\n\nEvery dish is prepared with the finest ingredients and served with genuine warmth.",
    menuSubtitle: "Culinary Masterpieces",
    menuTitle: "The Menu",
    menuDesc: "A curated selection of our finest offerings, prepared daily by our master chefs.",
    infoSubtitle: "Join Us",
    infoTitle: "Visit Oasis Grill",
    locTitle: "Location",
    locDesc: "123 Fake Street\nFake City, FC 12345",
    locLink: "View on Google Maps",
    hoursTitle: "Hours",
    hoursDesc: "Saturday - Wednesday\n12:00 PM - 12:00 AM\n\nThursday - Friday\n12:00 PM - 1:00 AM",
    contactTitle: "Contact & Vibe",
    contactDesc: "Phone: (555) 123-4567\nFamily Friendly\nPremium Atmosphere",
    dirBtn: "Get Directions",
    footer: "© 2026 Oasis Grill. All rights reserved.",
    navHome: "Home",
    navStory: "Our Story",
    navMenu: "Menu",
    navInfo: "Info",
    menuData: [
      {
        category: "Main Courses",
        items: [
          { name: "Classic Cheeseburger", price: "$15", desc: "Juicy beef patty with melted cheddar, lettuce, tomato, and our signature sauce." },
          { name: "Grilled Salmon", price: "$22", desc: "Fresh Atlantic salmon grilled to perfection, served with seasonal vegetables." },
          { name: "Mushroom Risotto", price: "$18", desc: "Creamy arborio rice with wild mushrooms and parmesan cheese." }
        ]
      },
      {
        category: "Starters",
        items: [
          { name: "Caesar Salad", price: "$10", desc: "Crisp romaine lettuce, garlic croutons, and parmesan cheese with Caesar dressing." },
          { name: "Crispy Calamari", price: "$12", desc: "Lightly fried calamari rings served with marinara sauce." },
          { name: "Garlic Bread", price: "$8", desc: "Toasted baguette slices with garlic butter and herbs." }
        ]
      },
      {
        category: "Desserts & Drinks",
        items: [
          { name: "Chocolate Lava Cake", price: "$9", desc: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream." },
          { name: "New York Cheesecake", price: "$8", desc: "Classic creamy cheesecake with a graham cracker crust." },
          { name: "Fresh Lemonade", price: "$4", desc: "Freshly squeezed lemons with a touch of mint." }
        ]
      }
    ]
  },
  ar: {
    subtitle: "مرحباً بكم في",
    title: "مشاوي الواحة",
    heroDesc: "رحلة طهي عبر النكهات العالمية. استمتع بجوهر الطعام الفاخر في كل قضمة.",
    heroBtn: "اكتشف قائمة الطعام",
    heritageSubtitle: "جذورنا",
    heritageTitle: "قصتنا",
    heritageDesc: "وُلد مطعم مشاوي الواحة من الشغف بالطعام الرائع، ويجمع بين أفضل النكهات من جميع أنحاء العالم.\n\nكل طبق محضر بأجود المكونات ويقدم بدفء حقيقي.",
    menuSubtitle: "روائع الطهي",
    menuTitle: "قائمة الطعام",
    menuDesc: "مجموعة مختارة بعناية من أفضل أطباقنا، يتم تحضيرها يومياً بواسطة أمهر الطهاة.",
    infoSubtitle: "انضم إلينا",
    infoTitle: "تفضل بزيارة مشاوي الواحة",
    locTitle: "الموقع",
    locDesc: "١٢٣ شارع وهمي\nمدينة وهمية، ١٢٣٤٥",
    locLink: "عرض على خرائط جوجل",
    hoursTitle: "ساعات العمل",
    hoursDesc: "السبت - الأربعاء\n12:00 مساءً - 12:00 صباحاً\n\nالخميس - الجمعة\n12:00 مساءً - 1:00 صباحاً",
    contactTitle: "التواصل والأجواء",
    contactDesc: "الهاتف: (٥٥٥) ١٢٣-٤٥٦٧\nمناسب للعائلات\nأجواء راقية",
    dirBtn: "احصل على الاتجاهات",
    footer: "© 2026 مطعم مشاوي الواحة. جميع الحقوق محفوظة.",
    navHome: "الرئيسية",
    navStory: "قصتنا",
    navMenu: "قائمة الطعام",
    navInfo: "معلومات",
    menuData: [
      {
        category: "الأطباق الرئيسية",
        items: [
          { name: "تشيز برجر كلاسيك", price: "١٥ دولار", desc: "شريحة لحم بقري طرية مع جبن الشيدر الذائب والخس والطماطم وصلصتنا الخاصة." },
          { name: "سلمون مشوي", price: "٢٢ دولار", desc: "سلمون أطلسي طازج مشوي يقدم مع الخضار الموسمية." },
          { name: "ريزوتو الفطر", price: "١٨ دولار", desc: "أرز أربوريو كريمي مع الفطر البري وجبن البارميزان." }
        ]
      },
      {
        category: "المقبلات",
        items: [
          { name: "سلطة سيزر", price: "١٠ دولار", desc: "خس رومين مقرمش، خبز محمص بالثوم وجبن البارميزان مع تتبيلة السيزر." },
          { name: "كلماري مقرمش", price: "١٢ دولار", desc: "حلقات الكلماري المقلية الخفيفة تقدم مع صلصة المارينارا." },
          { name: "خبز بالثوم", price: "٨ دولار", desc: "شرائح الرغيف الفرنسي المحمصة مع زبدة الثوم والأعشاب." }
        ]
      },
      {
        category: "الحلويات والمشروبات",
        items: [
          { name: "كيكة الشوكولاتة البركانية", price: "٩ دولار", desc: "كيكة شوكولاتة دافئة مع قلب منصهر تقدم مع آيس كريم الفانيليا." },
          { name: "تشيز كيك نيويورك", price: "٨ دولار", desc: "تشيز كيك كريمي كلاسيكي مع قاعدة من بسكويت غراهام." },
          { name: "عصير ليمون طازج", price: "٤ دولار", desc: "ليمون معصور طازج مع لمسة من النعناع." }
        ]
      }
    ]
  }
};


function App() {
  const [lang, setLang] = useState('en');
  const containerRef = useRef();

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
    // Give a small delay to let React render the DOM changes before recalculating triggers
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

  useEffect(() => {
    const sections = gsap.utils.toArray('section');

    sections.forEach((section) => {
      const elements = section.querySelectorAll('.title, .subtitle, .description, .btn, .heritage-image-wrapper, .info-container');
      const menuCards = section.querySelectorAll('.menu-card');

      if (elements.length > 0) {
        gsap.to(elements, {
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        });
      }

      if (menuCards.length > 0) {
         gsap.to(menuCards, {
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)"
        });
      }
    });

    // Initial floating animation for icons
    gsap.to('.f-icon', {
      y: "random(-15, 15)",
      x: "random(-15, 15)",
      rotation: "random(-15, 15)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 1,
        from: "random"
      }
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 60;
      const yPos = (clientY / window.innerHeight - 0.5) * 60;
      
      gsap.to('.f-icon', {
        x: (i) => xPos * (i % 2 === 0 ? 1 : -1) * (i + 1) * 0.45,
        y: (i) => yPos * (i % 2 === 0 ? -1 : 1) * (i + 1) * 0.45,
        rotate: (i) => (xPos + yPos) * 0.25 * (i + 1),
        duration: 1.2,
        ease: "power2.out",
        overwrite: "auto"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [lang]); // Re-run animations when language changes and unmount old ones

  const t = translations[lang];

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Scene3D />
      <div className="bg-overlay">

        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
      </div>

      <nav className="floating-nav">
        <a href="#hero" className="nav-item">{t.navHome}</a>
        <a href="#heritage" className="nav-item">{t.navStory}</a>
        <a href="#menu" className="nav-item">{t.navMenu}</a>
        <a href="#info" className="nav-item">{t.navInfo}</a>
        <a href="#info" className="nav-item loc-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </a>
      </nav>

      <div className="floating-icons">
        <div className="f-icon" style={{ top: '15%', left: '10%' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M12 15c3.314 0 6-2.686 6-6V4H6v5c0 3.314 2.686 6 6 6zM6 4h12M12 15v5M9 20h6"/></svg>
        </div>
        <div className="f-icon" style={{ top: '45%', left: '85%' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6z"/></svg>
        </div>
        <div className="f-icon" style={{ top: '75%', left: '15%' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8M2 20h20M12 11v6M9 11v6M15 11v6"/></svg>
        </div>
        <div className="f-icon" style={{ top: '25%', left: '80%' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        </div>
        <div className="f-icon" style={{ top: '60%', left: '5%' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
        </div>
        <div className="f-icon" style={{ top: '85%', left: '70%' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><circle cx="12" cy="12" r="10"/><path d="M12 8l-4 4 4 4 4-4z"/></svg>
        </div>
      </div>
      
      <button className="lang-toggle" onClick={toggleLang}>
        {lang === 'en' ? 'عربي' : 'English'}
      </button>

      <div className="scroll-container" ref={containerRef}>
        
        <section id="hero" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop")' }}>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h2 className="subtitle">{t.subtitle}</h2>
            <h1 className="title">{t.title}</h1>
            <p className="description hero-desc">
              {t.heroDesc}
            </p>

            <a href="#menu" className="btn">{t.heroBtn}</a>
          </div>
        </section>

        <section id="heritage">
          <div className="heritage-content">
            <h2 className="subtitle">{t.heritageSubtitle}</h2>
            <h1 className="title">{t.heritageTitle}</h1>
            <p className="description" style={{ whiteSpace: 'pre-line' }}>
              {t.heritageDesc}
            </p>
          </div>
          <div className="heritage-images">
            <div className="heritage-image-wrapper">
               <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" alt="Delicious Gourmet Dish" className="heritage-img" />
            </div>
            <div className="heritage-image-wrapper secondary">
               <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop" alt="Restaurant Interior" className="heritage-img" />
            </div>
          </div>
        </section>

        <section id="menu">
          <h2 className="subtitle">{t.menuSubtitle}</h2>
          <h1 className="title">{t.menuTitle}</h1>
          <p className="description" style={{ margin: '0 auto' }}>
            {t.menuDesc}
          </p>
          
          <div className="menu-grid">
            {t.menuData.map((category, idx) => (
              <div className="menu-card" key={idx}>
                <h3 className="menu-category-title">{category.category}</h3>
                {category.items.map((item, i) => (
                  <div className="menu-item" key={i}>
                    <div className="menu-item-header">
                      <span className="menu-item-name">{item.name}</span>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                    <p className="menu-item-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="info">
          <h2 className="subtitle">{t.infoSubtitle}</h2>
          <h1 className="title">{t.infoTitle}</h1>
          
          <div className="info-container">
            <div className="info-block">
              <div className="info-icon">📍</div>
              <h3 className="info-title">{t.locTitle}</h3>
              <p className="info-text">
                {t.locDesc}<br/>
                <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-gold)', marginTop: '0.5rem', display: 'inline-block' }}>{t.locLink}</a>
              </p>
            </div>
            
            <div className="info-block">
              <div className="info-icon">🕒</div>
              <h3 className="info-title">{t.hoursTitle}</h3>
              <p className="info-text">
                {t.hoursDesc}
              </p>
            </div>

            <div className="info-block">
              <div className="info-icon">📞</div>
              <h3 className="info-title">{t.contactTitle}</h3>
              <p className="info-text">
                {t.contactDesc}
              </p>
            </div>
          </div>

          <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="btn" style={{ marginTop: '4rem' }}>{t.dirBtn}</a>
          
          <footer className="footer">
            <p style={{ color: '#888', fontSize: '0.9rem' }}>{t.footer}</p>
          </footer>
        </section>

      </div>
    </div>
  );
}

export default App;
