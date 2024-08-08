const Create = () => {
    return (
        <>
        <div className="text">
        <h3>Tworzenie strony w React + Vite:</h3>
        <h4 className="steps">
            <p className="step">W terminalu wchodzimy do folderu z projektem </p>
            <code className="code-insert">cd Nazwa_folderu</code>
            <p className="step">Projekt tworzymy komendą </p>
            <code className="code-insert">create vite@latest</code>
            <p className="step">Kreator zada nam kilka pytań: o nazwę projektu, framework i język programowania. Po zakończeniu będziemy mieli folder o nazwie takiej jaką podaliśmy przy tworzeniu, a w środku podstawową strukturę plików.</p>
            <p>Przechodzimy do tego folderu za pomocą terminala i instalujemy npm.</p>
            <code className="code-insert">npm install</code>
            <p>Ostatnim krokiem jest uruchomienie projektu w przeglądarce.</p>
            <code className="code-insert">npm run dev</code>
            <p>Uruchamia nam się serwer na localhost na porcie 5173. Należy otworzyć go w przeglądarce przytrzymując ctrl i klikajac myszką w link w terminalu. Od tej pory każde zapisanie zmian w pliku spowoduje aktualizację tego co widać w przeglądarce.</p>
        </h4>
        </div>
     
        </>

    );
  };
  
  export default Create;