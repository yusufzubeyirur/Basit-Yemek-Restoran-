import "./styles.css";
/* Challenge: 

Bu web sayfası, HTML öğeleri vanilla JS ile DOM'a eklenerek oluşturulmuştur. Göreviniz JS'yi React JSX'e dönüştürmek ve React ile sayfaya render etmek. İşte istediğimiz şeyler: 

        1. Sayfa, JSX ile yazılmış diğer fonksiyonel bileşenlerden ve elementlerden oluşan tek bir fonksiyonel React bileşeni tarafından render edilmelidir.
        
        2. Sonuç, mevcut sayfadan farklı olmamalıdır (bonus challenge yapmadığınız sürece).
        
        3. Mevcut JS'nin tamamı sonunda silinmelidir. 
        
        4. Kod modüler ve iyi organize edilmiş olmalıdır.
*/

function Header() {
  return (
    <header>
      <div className="button-container">
        <button>Menu</button>
        <button>Hakkında</button>
        <button>Saatler & Lokasyon</button>
      </div>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h1 className="logo-container">Basit Yemekler Restoranı</h1>
      <p className="info-container">
        Basit insanlar için basit yemekler yapıyoruz. Sandviç ister misiniz?
        Tamamdır. Goralı? Hemen geliyor. Ateşte kavrulmuş kuşkonmaz börekleri
        ile yerel kaynaklı balla sırlanmış haşlanmış somon yumurtası? Hadi
        oradan. Caddenin karşısındaki Fantezi Yemek Kafe'yi deneyin.
      </p>
      <div class="image-container">
        <div class="image-wrapper">
          <img class="hot-dog" src="images/hotdogs.jpg" alt="Hot Dog" />
        </div>
        <div class="image-wrapper">
          <img src="images/sandwich.jpg" alt="Sandwich" />
        </div>
        <div class="image-wrapper">
          <img src="images/hamburger.jpg" alt="hamburger" />
        </div>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        Made by
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          Coding Company
        </a>
        ™.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
