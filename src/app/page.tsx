"use client"

import { useState } from "react";

export default function Home() {

  const [jogador, setJogador] = useState("X");
  const [jogoDaVelha] = useState(["", "", "", "", "", "", "", "", ""]);
  const [finalizado, setFinalizado] = useState(false);

  function jogar(posicao: number) {
    if (finalizado == false) {
      if (jogoDaVelha[posicao] == "") {
        jogoDaVelha[posicao] = jogador;

        if (jogador == "X") {
          setJogador("O");
        } else {
          setJogador("X");
        }
      } else {
        alert("Casa ocupada, jogue novamente!");
      }

      setTimeout(ganhou, 1);
    }
  }

  function ganhou() {
    if ((jogoDaVelha[0] == jogoDaVelha[1] && jogoDaVelha[0] == jogoDaVelha[2] && jogoDaVelha[0] == "X") ||
      (jogoDaVelha[3] == jogoDaVelha[4] && jogoDaVelha[3] == jogoDaVelha[5] && jogoDaVelha[3] == "X") ||
      (jogoDaVelha[6] == jogoDaVelha[7] && jogoDaVelha[6] == jogoDaVelha[8] && jogoDaVelha[6] == "X") ||
      (jogoDaVelha[0] == jogoDaVelha[3] && jogoDaVelha[0] == jogoDaVelha[6] && jogoDaVelha[0] == "X") ||
      (jogoDaVelha[1] == jogoDaVelha[4] && jogoDaVelha[1] == jogoDaVelha[7] && jogoDaVelha[1] == "X") ||
      (jogoDaVelha[2] == jogoDaVelha[5] && jogoDaVelha[2] == jogoDaVelha[8] && jogoDaVelha[2] == "X") ||
      (jogoDaVelha[0] == jogoDaVelha[4] && jogoDaVelha[0] == jogoDaVelha[8] && jogoDaVelha[0] == "X") ||
      (jogoDaVelha[2] == jogoDaVelha[4] && jogoDaVelha[2] == jogoDaVelha[6] && jogoDaVelha[2] == "X")) {

      setFinalizado(true);

      alert("O jogador X ganhou!")
    } else if ((jogoDaVelha[0] == jogoDaVelha[1] && jogoDaVelha[0] == jogoDaVelha[2] && jogoDaVelha[0] == "O") ||
      (jogoDaVelha[3] == jogoDaVelha[4] && jogoDaVelha[3] == jogoDaVelha[5] && jogoDaVelha[3] == "O") ||
      (jogoDaVelha[6] == jogoDaVelha[7] && jogoDaVelha[6] == jogoDaVelha[8] && jogoDaVelha[6] == "O") ||
      (jogoDaVelha[0] == jogoDaVelha[3] && jogoDaVelha[0] == jogoDaVelha[6] && jogoDaVelha[0] == "O") ||
      (jogoDaVelha[1] == jogoDaVelha[4] && jogoDaVelha[1] == jogoDaVelha[7] && jogoDaVelha[1] == "O") ||
      (jogoDaVelha[2] == jogoDaVelha[5] && jogoDaVelha[2] == jogoDaVelha[8] && jogoDaVelha[2] == "O") ||
      (jogoDaVelha[0] == jogoDaVelha[4] && jogoDaVelha[0] == jogoDaVelha[8] && jogoDaVelha[0] == "O") ||
      (jogoDaVelha[2] == jogoDaVelha[4] && jogoDaVelha[2] == jogoDaVelha[6] && jogoDaVelha[2] == "O")) {

      setFinalizado(true);

      alert("O jogador O ganhou!")
    }
  }

  return (
    <>
      <header>
        <title>Jogo da Velha</title>
      </header>
      <main className='text-center text-6xl font-bold text-white'>
        <h1 className='mt-16 mb-20'>Jogo da Velha</h1>
        <table className='flex justify-center text-center'>
          <tbody>
            <tr>
              <td onClick={() => jogar(0)} className='border-2 border-white w-[100px] h-[100px] hover:bg-white hover:text-black'>{jogoDaVelha[0]}</td>
              <td onClick={() => jogar(1)} className='border-2 border-white w-[100px] h-[100px] hover:bg-white hover:text-black'>{jogoDaVelha[1]}</td>
              <td onClick={() => jogar(2)} className='border-2 border-white w-[100px] h-[100px] hover:bg-white hover:text-black'>{jogoDaVelha[2]}</td>
            </tr>
            <tr>
              <td onClick={() => jogar(3)} className='border-2 border-white w-[100px] h-[100px] hover:bg-white hover:text-black'>{jogoDaVelha[3]}</td>
              <td onClick={() => jogar(4)} className='border-2 border-white w-[100px] h-[100px] hover:bg-white hover:text-black'>{jogoDaVelha[4]}</td>
              <td onClick={() => jogar(5)} className='border-2 border-white w-[100px] h-[100px] hover:bg-white hover:text-black'>{jogoDaVelha[5]}</td>
            </tr>
            <tr>
              <td onClick={() => jogar(6)} className='border-2 border-white w-[100px] h-[100px] hover:bg-white hover:text-black'>{jogoDaVelha[6]}</td>
              <td onClick={() => jogar(7)} className='border-2 border-white w-[100px] h-[100px] hover:bg-white hover:text-black'>{jogoDaVelha[7]}</td>
              <td onClick={() => jogar(8)} className='border-2 border-white w-[100px] h-[100px] hover:bg-white hover:text-black'>{jogoDaVelha[8]}</td>
            </tr>
          </tbody>
        </table>

      </main>
    </>
  )
}