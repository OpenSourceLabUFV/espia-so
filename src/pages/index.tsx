import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <p className="max-w-screen-lg text-xl text-center"> 
        O Espia Só é um lugar que vai te ajudar a passar nas matérias de Ciência da Computação.
        É um espaço onde os próprios alunos colaboram com diversas informações, como: links úteis, resumos,
        materiais de anos anteriores e dicas.
      </p>
      <Link to="/disciplinas">
      <button className="px-3 py-2 m-1 mt-8 text-white bg-blue-800 border-b-4 border-l-2 border-blue-900 rounded shadow-lg hover:shadow-md">
        Disciplinas
      </button>
      </Link>
    </Layout>
  )
}