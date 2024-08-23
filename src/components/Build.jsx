/* eslint-disable react/no-unescaped-entities */
const Build = () => {
return(
    <div className="text">
        <h3>Generowanie plików strony</h3>
        <p className="step">Do tej pory pracowaliśmy na naszej plikacji lokalnie w trybie developerskim. Aby wrzucić ją do internetu jako statyczną stronę potrzebujemy plików HTML i JS ponieważ takie pliki rozumie przeglądarka.</p>
        <p className="step">Najpierw kończymy proces developerski klikając w terminalu ctrl+c</p>
        <p className="step">Następnie wpisujemy</p>
        <div className="code-block">
    <code className="code-insert">npm run build</code>
        </div> 
        <p className="step">W naszym głównym folderze pojawi sie folder dist, wewnątrz którego znajdzie się plik "index.html", obrazek z ikoną i podfolder "assets". W "assets" znajdzie się plik .css i .js</p>

    </div>
)
}

export default Build;