import {createContext, useEffect, useState} from 'react';
import axios from 'axios';

//Context API
// Uygulamamızda birden çok componentin ihtiyacı olan verileri bu componentlerimizden
// bağımsız olarak merkezi bir hafızada yönetmeye yarar.

// Context yapısı içinde tuttuğumuz değerlere ve bu değerleri değiştiren fonksiyonlara
//projemizin her yerinden anında ulaşabiliyoruz.

// Context yapısı içinde tuttuğumuz componentler statelere direkt olarak erişebildiği için,
// gereksiz yere stateleri prop olarak göndermek (prop drilling) yapmak zorunda kalmayız ve
//  kodumuz daha temiz olur.

//1.Adım -- Context yapısını oluştur.

export const MyContext = createContext();

//* 2. Adım: verileri bileşenlere aktaracak olan sağlayıcı ve onun tuttuğu verileri tanımlarız.

// Provider bütün projemizi kapsayıcı için children yani alt elementler alabilmesi gerekir. Bu sebepten
//prop olarak children'ı alpı return satırında geri döndürüyoruz.

export const MyProvider = ({children}) => {
  const [users, setUsers] = useState([]);

  // Children olarak belirlenen bütün elementler UserContext'te tutulan bütün statelere ve state güncelleyen
  //fonksiyonlara erişebilir.

  //Prodiver'ın value özelliği , alt elementlerin hangi state'lere erişeceğini belirler.

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //apiye istek at
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })

      .catch(err => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <MyContext.Provider value={{users, error, loading}}>
      {children}
    </MyContext.Provider>
  );
};
