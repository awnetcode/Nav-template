/* eslint-disable react/no-unescaped-entities */

import React from "react";

const About = () =>{

    return (
        <div className="text">
        <p>Robi się taką stronę w REACT w ten sposób, że: </p>
          <ol className="steps">
          <li className="step">Tworzy się komponenty. W tym przypadku Header Navigation i Content.</li>
          <li className="step">Komponent Navigation zawiera trzy przyciski, z atrybutem onClick (event handler)</li>
          <li className="step">const [activeTab, setActiveTab] = useState('not_found'); - W tej linii w komponencie App useState jest Hookiem pozwalającym używać stanu. Przyjmuje domyślnie argument not_found. activeTab - zmienna przechowująca bieżącą wartość stanu. setActiveTab - funkcja, którą możemy wywołać, aby zmienić wartość activeTab.</li>
          <li className="step">funkcja setActiveTab powoduje, że kliknięcie odpowiedniego przycisku zmienia wartość activeTab na 'home' 'about' lub 'contact'</li>
          <li className="step">Instrukcja switch w content.jsx zmienia zawartość tekstu w zależności od wartości activeTab</li>
        </ol>
        <p>Jeszcze raz krok po kroku:</p>
        <ol className="steps">
          <li className="step">Deklaracja stanu: const [activeTab, setActiveTab] = useState('not_found');</li>
          <li className="step">Przekazanie funkcji aktualizującej do komponentu nawigacyjnego: Navigation setActiveTab = activeTab</li>
          <li className="step">Aktualizacja stanu na podstawie kliknięć użytkownika: (komponent Navigation)</li>
          <li className="step">Wykorzystanie stanu do warunkowego renderowania zawartości: (instrukcja switch)</li> 
        </ol> 
      </div>
    )
};

export default About;