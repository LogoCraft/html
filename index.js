import React, { useState, useEffect } from 'react';

// Header Component
const Header = ({ toggleMobileMenu }) => (
    <header className="bg-blue-900 shadow-lg py-4 px-6 md:px-12">
        <nav className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-3xl font-extrabold text-yellow-400 rounded-lg p-2 transition duration-300 hover:text-yellow-300">Masroxx</a>
            <div className="hidden md:flex space-x-8">
                <a href="#haqqimizda" className="text-blue-200 hover:text-white text-lg font-medium transition duration-300">Haqqımızda</a>
                <a href="#xidmetler" className="text-blue-200 hover:text-white text-lg font-medium transition duration-300">Xidmətlər</a>
                <a href="#fürsətlər" className="text-blue-200 hover:text-white text-lg font-medium transition duration-300">Fürsətlər</a>
                <a href="#əlaqə" className="text-blue-200 hover:text-white text-lg font-medium transition duration-300">Əlaqə</a>
            </div>
            <button onClick={toggleMobileMenu} className="md:hidden text-blue-200 hover:text-white focus:outline-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </nav>
        <div id="mobile-menu" className="md:hidden hidden mt-4 space-y-4 text-center">
            <a href="#haqqimizda" className="block text-blue-200 hover:text-white text-lg font-medium py-2 transition duration-300">Haqqımızda</a>
            <a href="#xidmetler" className="block text-blue-200 hover:text-white text-lg font-medium py-2 transition duration-300">Xidmətlər</a>
            <a href="#fürsətlər" className="block text-blue-200 hover:text-white text-lg font-medium py-2 transition duration-300">Fürsətlər</a>
            <a href="#əlaqə" className="block text-blue-200 hover:text-white text-lg font-medium py-2 transition duration-300">Əlaqə</a>
        </div>
    </header>
);

// Hero Component
const Hero = () => (
    <section className="relative h-screen flex items-center justify-center text-center px-4 bg-gradient-to-br from-blue-950 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative z-10 max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg">
                Masroxx-a Xoş Gəlmisiniz!
            </h2>
            <p className="text-xl md:text-2xl text-blue-200 mb-10">
                Yenilikçi həllər və bənzərsiz təcrübələr üçün doğru ünvan.
            </p>
            <a href="#haqqimizda" className="inline-block bg-yellow-500 text-blue-900 font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-105">
                Kəşf Etməyə Başla
            </a>
        </div>
    </section>
);

// About Component
const About = () => (
    <section id="haqqimizda" className="py-16 px-4 md:px-12 bg-blue-900">
        <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">Haqqımızda</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-lg text-blue-100 leading-relaxed">
                    <p className="mb-4">
                        Masroxx olaraq, rəqəmsal dünyada fərq yaratmağı hədəfləyən ehtiraslı bir komandayıq. Hər layihəyə yenilikçi bir baxış bucağı ilə yanaşır, müştərilərimizə xüsusi və effektiv həllər təqdim edirik. Məqsədimiz, gözləntiləri aşaraq qalıcı dəyərlər yaratmaqdır.
                    </p>
                    <p>
                        İllərin təcrübəsi və dinamik quruluşumuzla, texnologiyanın təqdim etdiyi bütün imkanlardan istifadə edərək xəyallarınızı gerçəkləşdiririk. Masroxx, sadəcə bir ad deyil, eyni zamanda keyfiyyət və etibarın simvoludur.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img src="https://placehold.co/400x300/1A237E/FFFFFF?text=Haqqimizda" alt="Haqqımızda Şəkli" className="rounded-xl shadow-2xl transition duration-500 ease-in-out transform hover:scale-105" />
                </div>
            </div>
        </div>
    </section>
);

// Services Component
const Services = () => (
    <section id="xidmetler" className="py-16 px-4 md:px-12 bg-blue-950">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">Xidmətlərimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-blue-800 p-8 rounded-xl shadow-xl border border-blue-700 hover:border-yellow-500 transition duration-300 ease-in-out transform hover:-translate-y-2">
                    <div className="text-yellow-400 text-5xl mb-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code mx-auto"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4 text-center">Veb İnkişaf</h3>
                    <p className="text-blue-200 text-center">
                        Müasir və istifadəçi dostu veb-saytlar və tətbiqlər hazırlayırıq. Xəyalınızdakı rəqəmsal varlığı birlikdə quraq.
                    </p>
                </div>
                <div className="bg-blue-800 p-8 rounded-xl shadow-xl border border-blue-700 hover:border-yellow-500 transition duration-300 ease-in-out transform hover:-translate-y-2">
                    <div className="text-yellow-400 text-5xl mb-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette mx-auto"><circle cx="12" cy="12" r="10"/><path d="M16.5 7.5L10 14L8.5 12.5L15 6"/><path d="M18 13V17"/><path d="M14 18H10"/><path d="M7 12H6"/><path d="M12 7V6"/></svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4 text-center">Qrafik Dizayn</h3>
                    <p className="text-blue-200 text-center">
                        Brendiniz üçün orijinal və təsirli vizual kimliklər, loqolar və marketinq materialları dizayn edirik.
                    </p>
                </div>
                <div className="bg-blue-800 p-8 rounded-xl shadow-xl border border-blue-700 hover:border-yellow-500 transition duration-300 ease-in-out transform hover:-translate-y-2">
                    <div className="text-yellow-400 text-5xl mb-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-megaphone mx-auto"><path d="m3 11 18-8-2 2-7 7"/><path d="m7 16 4 4 4-4"/><path d="m21 15v4"/><path d="m17 19v4"/><path d="m13 19v4"/></svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4 text-center">Rəqəmsal Marketinq</h3>
                    <p className="text-blue-200 text-center">
                        Rəqəmsal strategiyalarla brendinizin görünürlüyünü artırır, hədəf auditoriyanıza çatmanızı təmin edirik.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

// Opportunities Component
const Opportunities = () => (
    <section id="fürsətlər" className="py-16 px-4 md:px-12 bg-blue-900">
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">Xüsusi Fürsətlər və Kampaniyalar</h2>
            <div className="bg-blue-800 p-8 rounded-xl shadow-xl border border-blue-700 flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="md:w-1/2">
                    <img src="https://placehold.co/400x250/1A237E/FFFFFF?text=Etibarli+Xidmet" alt="Etibarlı Xidmət Reklamı" className="rounded-lg shadow-lg w-full h-auto" />
                </div>
                <div className="md:w-1/2 text-left">
                    <h3 className="text-3xl font-bold text-white mb-4">Ucuz və Etibarlı Həllər!</h3>
                    <p className="text-blue-200 text-lg mb-4">
                        Masroxx olaraq, büdcənizə uyğun, keyfiyyətli və etibarlı xidmətlər təqdim edirik. Layihələrinizdə xərc səmərəliliyini və məlumat təhlükəsizliyini ön planda tutaraq, ən yaxşı nəticələri əldə etməyinizi təmin edirik.
                    </p>
                    <p className="text-blue-200 text-lg">
                        İndi əlaqə saxlayın və sizə özəl fürsətləri qaçırmayın!
                    </p>
                    <a href="#əlaqə" className="inline-block mt-6 bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full text-lg shadow-md hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-105">
                        Təklif Alın
                    </a>
                </div>
            </div>
        </div>
    </section>
);

// Contact Component
const Contact = () => {
    const [formStatus, setFormStatus] = useState('');
    const [statusClass, setStatusClass] = useState('mt-4 text-center font-semibold');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const submitButton = form.querySelector('#submit-button');

        submitButton.disabled = true;
        setFormStatus('Mesajınız göndərilir...');
        setStatusClass('mt-4 text-center font-semibold text-blue-300');

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('Mesajınız uğurla göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.');
                setStatusClass('mt-4 text-center font-semibold text-green-400');
                form.reset();
            } else {
                const data = await response.json();
                if (data.errors) {
                    setFormStatus('Xəta baş verdi: ' + data.errors.map(error => error.message).join(', '));
                } else {
                    setFormStatus('Mesaj göndərilərkən xəta baş verdi. Zəhmət olmasa, yenidən cəhd edin.');
                }
                setStatusClass('mt-4 text-center font-semibold text-red-400');
            }
        } catch (error) {
            setFormStatus('Şəbəkə xətası baş verdi. İnternet bağlantınızı yoxlayın və ya yenidən cəhd edin.');
            setStatusClass('mt-4 text-center font-semibold text-red-400');
        } finally {
            submitButton.disabled = false;
        }
    };

    return (
        <section id="əlaqə" className="py-16 px-4 md:px-12 bg-blue-950">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">Bizimlə Əlaqə Saxlayın</h2>
                <div className="bg-blue-800 p-8 rounded-xl shadow-xl border border-blue-700">
                    <form id="contact-form" action="https://formspree.io/f/manbnnze" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-blue-200 text-lg font-medium mb-2">Adınız Soyadınız</label>
                            <input type="text" id="name" name="name" className="w-full px-5 py-3 rounded-lg bg-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300" placeholder="Adınız" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-blue-200 text-lg font-medium mb-2">E-poçt Ünvanınız</label>
                            <input type="email" id="email" name="email" className="w-full px-5 py-3 rounded-lg bg-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300" placeholder="e-poçt@nümunə.com" required />
                        </div>
                        <div className="text-blue-200 text-lg font-medium">
                            E-poçt: <a href="mailto:elay.memmedli.03@mail.ru" className="text-yellow-400 hover:underline">elay.memmedli.03@mail.ru</a>
                        </div>
                        <div className="text-blue-200 text-lg font-medium">
                            Telefon: <a href="tel:+994707841414" className="text-yellow-400 hover:underline">(+994) 70-784-14-14</a>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-blue-200 text-lg font-medium mb-2">Mesajınız</label>
                            <textarea id="message" name="message" rows="6" className="w-full px-5 py-3 rounded-lg bg-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300" placeholder="Mesajınızı bura yazın..." required></textarea>
                        </div>
                        <button type="submit" id="submit-button" className="w-full bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-full text-lg shadow-md hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-105">
                            Mesaj Göndər
                        </button>
                        <div id="form-status" className={statusClass}>{formStatus}</div>
                    </form>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => (
    <footer className="bg-blue-900 py-8 px-4 md:px-12 text-center text-blue-300 text-sm">
        <div className="container mx-auto">
            <p>&copy; 2025 Masroxx. Bütün Hüquqlar Qorunur.</p>
            <div className="mt-4 space-x-4">
                <a href="#" className="hover:text-white transition duration-300">Məxfilik Siyasəti</a>
                <a href="#" className="hover:text-white transition duration-300">İstifadə Şərtləri</a>
            </div>
        </div>
    </footer>
);

// Main App Component
const App = () => {
    // Autentifikasiya ilə bağlı bütün state-lər və useEffect-lər silindi
    // İstifadəçi yoxlaması və yüklənmə ekranı artıq yoxdur

    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
    };

    // Əsas məzmun həmişə görünür
    return (
        <div id="main-content">
            <Header toggleMobileMenu={toggleMobileMenu} />
            <Hero />
            <About />
            <Services />
            <Opportunities />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
