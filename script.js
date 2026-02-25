/**
 * HAMZAOUI FINITION - PROFESSIONAL JAVASCRIPT
 * Design & Renovation Company - Marrakech
 */

// ========================================
// TRANSLATIONS DATA
// ========================================
const translations = {
    en: {
        brand_name: "Finition",
        nav_home: "Home",
        nav_services: "Services",
        nav_projects: "Projects",
        nav_about: "About",
        nav_contact: "Contact",
        hero_subtitle: "Welcome to Hamzaoui Finition",
        hero_title: "Design. Renovation. Restructuring.",
        hero_desc: "Transform your space into extraordinary environments. Premium renovation and design services exclusively in Marrakech.",
        btn_quote: "Get a Quote",
        btn_projects: "Our Projects",
        feature_homes: "Homes",
        feature_apartments: "Apartments",
        feature_shops: "Shops",
        feature_offices: "Offices",
        services_subtitle: "What We Offer",
        services_title: "Our Services",
        service_1_title: "Interior Design",
        service_1_desc: "Modern and traditional Moroccan interior concepts tailored to your unique space and lifestyle preferences.",
        service_1_list1: "3D Design Visualization",
        service_1_list2: "Space Planning",
        service_1_list3: "Material Selection",
        service_2_title: "Renovation",
        service_2_desc: "Complete renovation services for houses, apartments, shops and offices with quality craftsmanship.",
        service_2_list1: "Full Renovation",
        service_2_list2: "Kitchen & Bath",
        service_2_list3: "Flooring & Painting",
        service_3_title: "Restructuring",
        service_3_desc: "Space optimization and structural redesign to maximize functionality and flow of your property.",
        service_3_list1: "Space Optimization",
        service_3_list2: "Structural Changes",
        service_3_list3: "Extensions",
        projects_subtitle: "Our Portfolio",
        projects_title: "Recent Projects in Marrakech",
        project_1_title: "Luxury Villa",
        project_1_desc: "Complete Renovation",
        project_2_title: "Modern Apartment",
        project_2_desc: "Interior Design",
        project_3_title: "Traditional Riad",
        project_3_desc: "Restructuring",
        project_4_title: "Commercial Shop",
        project_4_desc: "Design & Renovation",
        project_5_title: "Office Space",
        project_5_desc: "Full Renovation",
        project_6_title: "Residential Home",
        project_6_desc: "Interior Design",
        btn_start_project: "Start Your Project",
        about_subtitle: "About Us",
        about_title: "Crafting Beautiful Spaces in Marrakech",
        about_desc1: "Hamzaoui Finition is a premier Marrakech-based company specializing in high-quality design, renovation and restructuring services. With over 10 years of experience, we've transformed hundreds of residential and commercial spaces across the Red City.",
        about_desc2: "Our mission is to create elegant and functional environments that reflect our clients' unique personalities and needs. We combine traditional Moroccan craftsmanship with modern design principles to deliver exceptional results.",
        years_exp: "Years Experience",
        stat_projects: "Projects Completed",
        stat_clients: "Happy Clients",
        stat_team: "Team Members",
        contact_subtitle: "Get In Touch",
        contact_title: "Contact Us",
        contact_heading: "Let's Discuss Your Project",
        contact_desc: "Ready to transform your space? Contact us today for a free consultation and quote.",
        location_label: "Location",
        phone_label: "Phone",
        email_label: "Email",
        hours_label: "Working Hours",
        hours_value: "24/7",
        form_name: "Full Name",
        form_email: "Email Address",
        form_phone: "Phone Number",
        form_service_select: "Select Service Type",
        form_service_1: "Interior Design",
        form_service_2: "Renovation",
        form_service_3: "Restructuring",
        form_service_4: "Other",
        form_message: "Describe your project...",
        form_submit: "Send via WhatsApp",
        footer_desc: "Premium design, renovation and restructuring services in Marrakech. Transform your space with expertise and quality craftsmanship.",
        footer_links_title: "Quick Links",
        footer_services_title: "Our Services",
        footer_rights: "All rights reserved."
    },
    fr: {
        brand_name: "Finition",
        nav_home: "Accueil",
        nav_services: "Services",
        nav_projects: "Projets",
        nav_about: "À propos",
        nav_contact: "Contact",
        hero_subtitle: "Bienvenue chez Hamzaoui Finition",
        hero_title: "Design. Rénovation. Restructuration.",
        hero_desc: "Transformez votre espace en environnements extraordinaires. Services premium de rénovation et design exclusivement à Marrakech.",
        btn_quote: "Demander un devis",
        btn_projects: "Nos Projets",
        feature_homes: "Maisons",
        feature_apartments: "Appartements",
        feature_shops: "Boutiques",
        feature_offices: "Bureaux",
        services_subtitle: "Ce que nous offrons",
        services_title: "Nos Services",
        service_1_title: "Design Intérieur",
        service_1_desc: "Concepts d'intérieur modernes et traditionnels marocains adaptés à votre espace et vos préférences de style de vie.",
        service_1_list1: "Visualisation 3D",
        service_1_list2: "Planification d'espace",
        service_1_list3: "Sélection de matériaux",
        service_2_title: "Rénovation",
        service_2_desc: "Services complets de rénovation pour maisons, appartements, boutiques et bureaux avec un savoir-faire de qualité.",
        service_2_list1: "Rénovation complète",
        service_2_list2: "Cuisine & Salle de bain",
        service_2_list3: "Sol & Peinture",
        service_3_title: "Restructuration",
        service_3_desc: "Optimisation de l'espace et redesign structurel pour maximiser la fonctionnalité et le flux de votre propriété.",
        service_3_list1: "Optimisation de l'espace",
        service_3_list2: "Changements structurels",
        service_3_list3: "Extensions",
        projects_subtitle: "Notre Portfolio",
        projects_title: "Projets Récents à Marrakech",
        project_1_title: "Villa de Luxe",
        project_1_desc: "Rénovation Complète",
        project_2_title: "Appartement Moderne",
        project_2_desc: "Design Intérieur",
        project_3_title: "Riad Traditionnel",
        project_3_desc: "Restructuration",
        project_4_title: "Commerce",
        project_4_desc: "Design & Rénovation",
        project_5_title: "Espace de Bureau",
        project_5_desc: "Rénovation Complète",
        project_6_title: "Maison Résidentielle",
        project_6_desc: "Design Intérieur",
        btn_start_project: "Démarrer Votre Projet",
        about_subtitle: "À propos",
        about_title: "Créer de Beaux Espaces à Marrakech",
        about_desc1: "Hamzaoui Finition est une entreprise basée à Marrakech spécialisée dans les services de design, rénovation et restructuration de haute qualité. Avec plus de 10 ans d'expérience, nous avons transformé des centaines d'espaces résidentiels et commerciaux à travers la Ville Rouge.",
        about_desc2: "Notre mission est de créer des environnements élégants et fonctionnels qui reflètent les personnalités et les besoins uniques de nos clients. Nous combinons l'artisanat traditionnel marocain avec les principes de design modernes pour offrir des résultats exceptionnels.",
        years_exp: "Ans d'Expérience",
        stat_projects: "Projets Réalisés",
        stat_clients: "Clients Satisfaits",
        stat_team: "Membres de l'équipe",
        contact_subtitle: "Contactez-nous",
        contact_title: "Contactez-nous",
        contact_heading: "Discutons de Votre Projet",
        contact_desc: "Prêt à transformer votre espace? Contactez-nous aujourd'hui pour une consultation et un devis gratuits.",
        location_label: "Emplacement",
        phone_label: "Téléphone",
        email_label: "Email",
        hours_label: "Heures de Travail",
        hours_value: "24h/24",
        form_name: "Nom Complet",
        form_email: "Adresse Email",
        form_phone: "Numéro de Téléphone",
        form_service_select: "Sélectionner le Type de Service",
        form_service_1: "Design Intérieur",
        form_service_2: "Rénovation",
        form_service_3: "Restructuration",
        form_service_4: "Autre",
        form_message: "Décrivez votre projet...",
        form_submit: "Envoyer par WhatsApp",
        footer_desc: "Services premium de design, rénovation et restructuration à Marrakech. Transformez votre espace avec expertise et savoir-faire de qualité.",
        footer_links_title: "Liens Rapides",
        footer_services_title: "Nos Services",
        footer_rights: "Tous droits réservés."
    },
    ar: {
        brand_name: "حfinish",
        nav_home: "الرئيسية",
        nav_services: "الخدمات",
        nav_projects: "المشاريع",
        nav_about: "من نحن",
        nav_contact: "اتصل بنا",
        hero_subtitle: "مرحباً بكم في حمزاوي للترميم",
        hero_title: "التصميم. الترميم. إعادة الهيكلة.",
        hero_desc: "حوّل مساحتك إلى بيئات استثنائية. خدمات الترميم والتصميم المتميزة حصرياً في مراكش.",
        btn_quote: "احصل على عرض سعر",
        btn_projects: "مشاريعنا",
        feature_homes: "منازل",
        feature_apartments: "شقق",
        feature_shops: "محلات",
        feature_offices: "مكاتب",
        services_subtitle: "ما نقدمه",
        services_title: "خدماتنا",
        service_1_title: "التصميم الداخلي",
        service_1_desc: "مفاهيم التصميم الداخلي الحديثة والتقليدية المغربية المصممة خصيصاً لمساحتك وتفضيلات نمط حياتك.",
        service_1_list1: "تصور ثلاثي الأبعاد",
        service_1_list2: "تخطيط المساحة",
        service_1_list3: "اختيار المواد",
        service_2_title: "الترميم",
        service_2_desc: "خدمات الترميم الكاملة للمنازل والشقق والمحلات والمكاتب بحرفية عالية.",
        service_2_list1: "ترميم شامل",
        service_2_list2: "المطبخ والحمام",
        service_2_list3: "الأرضيات والدهانات",
        service_3_title: "إعادة الهيكلة",
        service_3_desc: "تحسين المساحة وإعادة التصميم الهيكلي لتعظيم وظائف وانسيابية ممتلكاتك.",
        service_3_list1: "تحسين المساحة",
        service_3_list2: "التغييرات الهيكلية",
        service_3_list3: "التمديدات",
        projects_subtitle: "مجموعتنا",
        projects_title: "المشاريع الأخيرة في مراكش",
        project_1_title: "فيلا فاخرة",
        project_1_desc: "ترميم كامل",
        project_2_title: "شقة عصرية",
        project_2_desc: "تصميم داخلي",
        project_3_title: "رياض تقليدي",
        project_3_desc: "إعادة هيكلة",
        project_4_title: "محل تجاري",
        project_4_desc: "تصميم وترميم",
        project_5_title: "مكتب",
        project_5_desc: "ترميم كامل",
        project_6_title: "منزل سكني",
        project_6_desc: "تصميم داخلي",
        btn_start_project: "ابدأ مشروعك",
        about_subtitle: "من نحن",
        about_title: "صناعة مساحات جميلة في مراكش",
        about_desc1: "شركة حمزاوي للترميم هي شركة مراكشية رائدة متخصصة في خدمات التصميم والترميم وإعادة الهيكلة عالية الجودة. مع أكثر من 10 سنوات من الخبرة، قمنا بتحويل مئات المساحات السكنية والتجارية في المدينة الحمراء.",
        about_desc2: "مهمتنا هي إنشاء بيئات أنيقة وعملية تعكس شخصيات واحتياجات عملائنا الفريدة. نحن نجمع بين الحرفية التقليدية المغربية ومبادئ التصميم الحديثة لتقديم نتائج استثنائية.",
        years_exp: "سنوات الخبرة",
        stat_projects: "مشاريع منفذة",
        stat_clients: "عملاء سعداء",
        stat_team: "أعضاء الفريق",
        contact_subtitle: "اتصل بنا",
        contact_title: "اتصل بنا",
        contact_heading: "لنتحدث عن مشروعك",
        contact_desc: "مستعد لتحويل مساحتك؟ تواصل معنا اليوم للحصول على استشارة مجانية وعروض أسعار.",
        location_label: "الموقع",
        phone_label: "الهاتف",
        email_label: "البريد الإلكتروني",
        hours_label: "ساعات العمل",
        hours_value: "24 ساعة / 7 أيام",
        form_name: "الاسم الكامل",
        form_email: "البريد الإلكتروني",
        form_phone: "رقم الهاتف",
        form_service_select: "اختر نوع الخدمة",
        form_service_1: "التصميم الداخلي",
        form_service_2: "الترميم",
        form_service_3: "إعادة الهيكلة",
        form_service_4: "أخرى",
        form_message: "صف مشروعك...",
        form_submit: "إرسال عبر واتساب",
        footer_desc: "خدمات التصميم والترميم وإعادة الهيكلة المتميزة في مراكش. حوّل مساحتك بخبرة وحرفية عالية.",
        footer_links_title: "روابط سريعة",
        footer_services_title: "خدماتنا",
        footer_rights: "جميع الحقوق محفوظة."
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'en';

// ========================================
// LANGUAGE SWITCHER
// ========================================
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute and direction
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update all placeholder translations
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLang);
    
    // Language button click handlers
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================
    const navbar = document.getElementById('navbar');
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
    
    // ========================================
    // MOBILE MENU TOGGLE
    // ========================================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // ========================================
    // SMOOTH SCROLLING
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // ACTIVE NAV LINK ON SCROLL
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // ========================================
    // SCROLL ANIMATIONS (AOS)
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
    
    // ========================================
    // PARALLAX EFFECT FOR HERO
    // ========================================
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        if (hero) {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        }
    });
    
    // ========================================
    // WHATSAPP FORM SUBMISSION
    // ========================================
    const whatsappForm = document.getElementById('whatsapp-form');
    
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('wa-name').value;
            const email = document.getElementById('wa-email').value;
            const phone = document.getElementById('wa-phone').value;
            const serviceType = document.getElementById('wa-service').value;
            const message = document.getElementById('wa-message').value;
            
            // WhatsApp number - user's entered phone number
            const userPhone = phone.replace(/[^0-9]/g, '');
            const whatsappNumber = '212660545229';
            
            // Get translated labels based on current language
            const labels = {
                en: {
                    name: 'Name',
                    email: 'Email',
                    phone: 'Phone',
                    service: 'Service',
                    details: 'Project Details',
                    title: 'New Project Request'
                },
                fr: {
                    name: 'Nom',
                    email: 'Email',
                    phone: 'Téléphone',
                    service: 'Service',
                    details: 'Détails du projet',
                    title: 'Nouvelle demande de projet'
                },
                ar: {
                    name: 'الاسم',
                    email: 'البريد الإلكتروني',
                    phone: 'رقم الهاتف',
                    service: 'الخدمة',
                    details: 'تفاصيل المشروع',
                    title: 'طلب مشروع جديد'
                }
            };
            
            const l = labels[currentLang] || labels.en;
            
            let whatsappMessage = `*${l.title}*%0A%0A`;
            whatsappMessage += `*${l.name}:* ${encodeURIComponent(name)}%0A`;
            whatsappMessage += `*${l.email}:* ${encodeURIComponent(email)}%0A`;
            whatsappMessage += `*${l.phone}:* ${encodeURIComponent(phone)}%0A`;
            whatsappMessage += `*${l.service}:* ${encodeURIComponent(serviceType)}%0A%0A`;
            whatsappMessage += `*${l.details}:*%0A${encodeURIComponent(message)}`;
            
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
            
            window.open(whatsappUrl, '_blank');
            
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                const sentText = currentLang === 'ar' ? 'تم الإرسال!' : currentLang === 'fr' ? 'Envoyé!' : 'Sent!';
                submitBtn.innerHTML = `<span><i class="fab fa-whatsapp"></i> ${sentText}</span>`;
                submitBtn.style.background = '#25D366';
                
                setTimeout(() => {
                    submitBtn.innerHTML = `<span>Send to WhatsApp <i class="fab fa-whatsapp"></i></span>`;
                    submitBtn.style.background = '';
                }, 3000);
            }
        });
        
        const formInputs = whatsappForm.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.borderColor = '#c19b6b';
            });
        });
    }
    
    // ========================================
    // PROJECT CARD HOVER EFFECTS
    // ========================================
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });
    
    // ========================================
    // SERVICE CARD ANIMATIONS
    // ========================================
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // ========================================
    // COUNTER ANIMATION FOR STATS
    // ========================================
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounters() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target + '+';
                }
            };
            
            updateCounter();
        });
    }
    
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }
    
    // ========================================
    // SCROLL TO TOP BUTTON
    // ========================================
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #c19b6b;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 20px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.background = '#a88252';
    });
    
    scrollBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.background = '#c19b6b';
    });
    
    // ========================================
    // LAZY LOADING FOR IMAGES
    // ========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ========================================
    // HEADER IMAGE CHECK & FALLBACK
    // ========================================
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const heroImage = new Image();
        heroImage.onerror = function() {
            heroSection.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
        };
        heroImage.src = '1 (8).jpeg';
    }
    
    console.log('✅ Hamzaoui Finition Website Loaded Successfully');
});

// ========================================
// ADDITIONAL UTILITY FUNCTIONS
// ========================================

function formatPhoneNumber(phone) {
    return phone.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, '+$1 $2 $3 $4');
}

document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.querySelector('.footer-bottom p:first-child');
    if (yearElement && yearElement.textContent.includes('2026')) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = yearElement.textContent.replace('2026', currentYear);
    }
});
