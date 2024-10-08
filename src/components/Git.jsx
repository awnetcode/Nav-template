const Git = () =>{
    return (<>
        <div className="text">
        <h3>Tworzenie repozytorium Git i uploadowanie go na GitHub</h3>
            <p className="step">W terminalu wchodzimy do folderu w którym chcemy utworzyć repozytorium. </p>
            <div className="code-block">
            <code className="code-insert">cd Nazwa_folderu</code>
            </div>
            <p className="step">Repozytorium tworzymy komendą </p>
            <div className="code-block">
            <code className="code-insert">git init</code>
            </div>
            <p className="step">Do repozytorium należy dodać wszystkie pliki aby git śledził zmiany</p> 
            <div className="code-block">
            <code className="code-insert">git add .</code>
            </div>
            <p className="step">Następnie musimy podać ścieżkę do repozytorium zdalnego (uprzednio stworzonego na 
                GitHub).</p>
            <div className="code-block">
            <code className="code-insert">git remote add origin https://github.com/użytkownik/nazwa-repozytorium.git</code>
            </div> 
            <p className="step">Możemy sprawdzić jaką mamy lokalizację repozytorium zdalnego.</p>
            <div className="code-block">
            <code className="code-insert">git remote -v</code>
            </div>       
        </div>
    </>)
}

export default Git;