import { Link } from "gatsby"
import React from "react"
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <p className="text-xl max-w-screen-lg text-center"> 
        O Espia Só é um lugar que vai te ajudar a passar nas matérias de Ciência da Computação.
        É um espaço onde os próprios alunos colaboram com diversas informações, como: links úteis, resumos,
        materiais de anos anteriores e dicas.
      </p>
      <Link to="/disciplinas">
      <button className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white mt-8">
        Disciplinas
      </button>
      </Link>
    </Layout>
  )
}