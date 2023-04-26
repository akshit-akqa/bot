import Head from 'next/head'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import styles from '../styles/Home.module.css'
import remarkGfm from 'remark-gfm'

  const markdownString = `
  | Plant Cell | Animal Cell |
  | ---------- | ----------- |
  | Cell wall  | No cell wall |
  | Chloroplasts | No chloroplasts |
  | Central vacuole | No central vacuole |
  | Cellulose | No cellulose |
  `;
console.log(typeof(markdownString))

const Home = () => {
  return (
    <div>
      <ReactMarkdown remarkPlugins={remarkGfm}>{markdownString}</ReactMarkdown>
    </div>
  )
}
export default Home