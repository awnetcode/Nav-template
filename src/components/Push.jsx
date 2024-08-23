const Push = () =>{
    return (
<>
<div className="text">
    <h3>Zapisywanie wersji plików na GitHub</h3>
    <p className="step">Jeśli tworzylismy nowe pliki włączamy śledzenie ich przez git</p>
    <div className="code-block">
    <code className="code-insert">git add .</code>
    </div>    
    <p className="step">Po modyfikacji plików zmiany zapisujemy poleceniem</p>
    <div className="code-block">
    <code className="code-insert">git commit -m</code>
    </div> 
    <p className="step">Flaga -m wymaga aby dodać opis do commita.</p>
    <p className="step">Wypchnięcie zmian do repozytorium zdalnego w branchu main.</p>
    <div className="code-block">
    <code className="code-insert">git push origin main</code>
    </div>  
</div>
 
</>
    )
}

export default Push;