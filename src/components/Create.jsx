const Create = () => {
    return (
        <>
        <div className="text">
        <h3>Tworzenie strony w React + Vite:</h3>
        <h4 className="steps"></h4>
            <p className="step">W terminalu wchodzimy do folderu w którym chcemy umieścić projekt. </p>
            <div className="code-block">
            <code className="code-insert">cd Nazwa_folderu</code>
            </div>
            <p className="step">Projekt tworzymy komendą </p>
            <div className="code-block">
            <code className="code-insert">create vite@latest</code>
            </div>
            <p className="step">Kreator zada nam kilka pytań: o nazwę projektu, framework i język programowania. Po zakończeniu będziemy mieli folder o nazwie takiej jaką podaliśmy przy tworzeniu, a w środku podstawową strukturę plików.
            Przechodzimy do tego folderu za pomocą terminala i instalujemy npm.</p> 
            <div className="code-block">
            <code className="code-insert">npm install</code>
            </div>
            <p className="step">Ostatnim krokiem jest uruchomienie projektu w przeglądarce.</p>
            <div className="code-block">
            <code className="code-insert">npm run dev</code>
            </div>
            <p className="step">Uruchamia nam się serwer na localhost na porcie 5173. Należy otworzyć go w przeglądarce przytrzymując ctrl i klikajac myszką w link w terminalu. Od tej pory każde zapisanie zmian w pliku spowoduje aktualizację tego co widać w przeglądarce.</p>
        </div>
     
        </>

    );
  };
  
  export default Create;