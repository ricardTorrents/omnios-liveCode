const dataEbook = [
    {
      key: '1',
      name: 'El nom del vent',
      author:"Autor 1",
      tags: ['fantasia', 'misteri'],
    },
    {
      key: '2',
      name: 'El temor de un home savi',
      author:"Autor 1",
      tags: ['fantasia', 'misteri'],
    },
    {
      key: '3',
      name: 'Juego de tronos 1',
      author:"Autor 2",
      tags: ['fantasia', 'medieval'],
    },
  ];
  
export const getEbooks=(params)=>{
    if(params) return dataEbook.filter((book)=>book.name===params)
    else return dataEbook
}   


export const loginCall=(values)=>{
    if(values.username!="ricard" || values.password!="1234") throw "eerrror"

    return "Tokdasf"
}