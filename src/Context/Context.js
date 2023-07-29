import { createContext, useState, useEffect } from "react";
import axios from 'axios'

const TotalContext = createContext({});

function TotalContextProvider({children}){
    const [list, setList] = useState([])
    const [ganho, setGanho] = useState([])
    const [anotacao, setAnotocao] = useState([])
    const [contas, setContas] = useState([])

    async function getAllSaida(){
      try{
        const saidas = await axios.get("http://10.0.2.2:8000/api/saida")
        console.log(saidas.data)
        setList(saidas.data)
      }catch(erro){
        console.log(erro)
      }
    }

    //
    const comidas = list.filter(sai=>{
      if(sai.categoria === 'Contas')
      return sai
    })
    const comidasMap = comidas.map((numb)=> Number(numb.preco))
    const comidaTotal = comidasMap.reduce((acc, cur)=> acc + cur, 0);
    //

      //
      const trasporte = list.filter(sai=>{
        if(sai.categoria === 'Transporte')
        return sai
      })
      const transporteMap = trasporte.map((numb)=> Number(numb.preco))
      const trasporteTotal = transporteMap.reduce((acc, cur)=> acc + cur, 0);
      //
      //
      const mercado = list.filter(sai=>{
        if(sai.categoria === 'Mercado')
        return sai
      })
      const mercadoMap = mercado.map((numb)=> Number(numb.preco))
      const mercadoTotal = mercadoMap.reduce((acc, cur)=> acc + cur, 0);
      //
      //
      const cartao = list.filter(sai=>{
        if(sai.categoria === 'Cartao de credito')
        return sai
      })
      const cartaoMap = cartao.map((numb)=> Number(numb.preco))
      const cartaoTotal = cartaoMap.reduce((acc, cur)=> acc + cur, 0);
      //
        //
        const almocoJanta = list.filter(sai=>{
          if(sai.categoria === 'Almoco/Janta')
          return sai
        })
        const almocoJantaMap = almocoJanta.map((numb)=> Number(numb.preco))
        const almocoJantaTotal = almocoJantaMap.reduce((acc, cur)=> acc + cur, 0);
        //
          //
      const outros = list.filter(sai=>{
        if(sai.categoria === 'Outros')
        return sai
      })
      const outrosMap = outros.map((numb)=> Number(numb.preco))
      const outrosTotal = outrosMap.reduce((acc, cur)=> acc + cur, 0);
      //

    async function getAllGanho(){
      try{
        const ganho = await axios.get("http://10.0.2.2:8000/api/ganho")
        console.log(ganho.data)
        setGanho(ganho.data)
      }catch(erro){
        console.log(erro)
      }
    }


      async function getAllAnotocao(){
        try{
          const anotocao = await axios.get("http://10.0.2.2:8000/api/anotocao")
          console.log(anotocao.data)
          setAnotocao(anotocao.data)
        }catch(erro){
          console.log(erro)
        }
      }
   

      async function getAllContas(){
        try{
          const contas = await axios.get("http://10.0.2.2:8000/api/contas")
          console.log(contas.data)
          setContas(contas.data)
        }catch(erro){
          console.log(erro)
        }
      }

      const dastasFilter = contas.filter((num)=> num.vencimento).map((numb)=>(numb.vencimento))
     
   
      useEffect(()=>{
        getAllSaida()
        getAllGanho()
        getAllContas()
        getAllAnotocao()
      },[])

    const filtro = ganho.filter((num)=> num.preco).map((numb)=> Number(numb.preco))
    const total = filtro.reduce((acc, cur)=> acc + cur, 0).toFixed(2);
    

    const filtroSaida = list.filter((num)=> num.preco).map((numb)=> Number(numb.preco))
    const totalSaida = filtroSaida.reduce((acc, cur)=> acc + cur, 0).toFixed(2);
    

    const soma = Math.abs(totalSaida - total).toFixed(2);



      return(
       <TotalContext.Provider 
        value={{list, ganho, soma, anotacao, contas, total, totalSaida, getAllSaida, getAllGanho,
         comidaTotal, trasporteTotal, mercadoTotal, cartaoTotal, dastasFilter, almocoJantaTotal,
          outrosTotal, getAllContas, getAllAnotocao}}>
                {children}
       </TotalContext.Provider>)}
        export{TotalContextProvider, TotalContext}