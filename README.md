# Online Code Editor  

Online Code Editor, React kütüphanesinde bulunan Monaco Editor ile geliştirilmiş bir projedir. İçerisinde kullanıcının Javascript ve Java özelinde kod geliştirebildiği, bu kodlar özelinde farklı Initial Code görüntülendiği, Reset butonu ile kodunu Initialize haline getirebildiği ve dilerse kodunu kopyalayabildiği bir code editörüdür.  

---

## Başlangıç  
Daha hızlı ve akıcı olduğundan Vite ile projeyi create ettim. Projenin çalışabilmesi için:  
1. `cd` komutu ile projenin içerisine giriyoruz.  
2. `npm install` ile node modules ekliyoruz.  
3. Ardından `npm run dev` komutu ile projemizi çalıştırılabilir hale getiriyoruz.  

---

## Kullanılan Packagelar  
- Monaco editor için `@monaco-editor/react` 4.6.0 versiyonu kullanılmıştır.  
- Reset butonunun iconu için `@fortawesome/free-solid-svg-icons` kullanılmıştır.  

---

## Proje Detayları  

### Proje Yapılandırması  
Bütün sourcelarımızın bulunduğu dosyalarımız **src** klasörünün altında toplanmaktadır:  

 
### Editor.jsx  
`Editor.jsx` dosyası projenin kilit dosyasıdır. `Dropdown`, `buttons` ve diğer export edilen fonksiyonlar bu dosyada importlanarak kullanılmaktadır.  

---

## Özellikler  

### Monaco Editörün Ana Yapılandırması  
- Öncelikle Monaco Editörümüz için yükseklik, genişlik ve temasını vererek ana hattını oluşturuyoruz.  
- Monaco Editorümüze language için default olarak `useState` ile Javascript'i tanımlıyoruz.  
- Dropdown'dan seçtiğimiz Java veya Javascript seçeneğine göre language'mizi `useState` ile güncelliyoruz.  
- Dolayısıyla tanımlarken `{language}` olarak tanımlıyoruz. Aynı şey code için de geçerli. Kaydedeceğimizden, resetleyeceğimizden code değerini güncel tutmamız gerektiği için `{code}` şeklinde ele alıyoruz.  

### Language ve Code Güncellemesi  
- Monaco Editor'ün ana hatlarını tanımladıktan sonra Dropdown'da language'in değişme durumunda `setLanguage` ile set edip ardından code'umuzu kaydediyoruz.  

### Reset Butonu ve Başlangıç Kodları  
- Reset butonunda ve en baştaki code tanımlamamız için `utils` klasöründeki `initializeCode` ile işlem yapıyoruz.  
- Burada kodun başlangıçtaki halinde nasıl bir görünümde olması gerektiğini tanımlıyoruz.  
- Hangi language kullanılıyorsa, ona göre başlangıç kodunun getirilmesini şu şekilde sağlıyoruz:  
  ```javascript
  setCode(initialCode[language]);

### CodesEditor Fonksiyonu

- `CodesEditor` fonksiyonunda, o dilde güncellediğimiz kodları tutuyoruz.  
- `onChange` ile bu işlemi yapıyor ve gerekli fonksiyona gönderiyoruz.  
- `handleEditorChange` fonksiyonunda, `onChange` eventindeki değişiklikleri tutarak `value`ya aktarıyor ve oradan yeni kodu tanımlıyoruz.  
- Ardından `handleChangeCode` fonksiyonu ile bu yeni kodu o dilde kaydediyoruz.  

---

### CopyButton

- Copy butonunda:  
  - Butona basıldığında yazılanları kaydediyor, 3 saniyeliğine “Copied” yazmasını ve sonra tekrardan "Copy" haline geri dönmesini sağlıyoruz.  
  - Bunun için `copyCode` fonksiyonunda şu şekilde çalışıyoruz:  
    ```javascript
    navigator.clipboard.writeText(code);
    ```  
  - `setCopied`'in defaultunu `false` olarak ayarlıyoruz. Copy durumu gerçekleştiğinde `true` değerine döndürüyoruz.  
  - Bu şekilde `true` ise "Copied", `false` ise "Copy" yazmasını sağlıyoruz.  
  - Sadece 3 saniyeliğine yapmak için şu kodu kullanıyoruz:  
    ```javascript
    setTimeout(() => setCopied(false), 3000);
    ```  
  - Böylece "Copied" yazısını yalnızca 3 saniyeliğine tutmuş oluyoruz.
 ---

### Görünüm:
  - <img width="848" alt="Code Editor Foto" src="https://github.com/user-attachments/assets/21cdef7b-eda8-4f9f-af17-4195706b063a">
