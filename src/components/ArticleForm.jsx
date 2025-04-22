import { Input } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useState } from "react"

export default function ArticleForm() {
  const [titre, setTitre] = useState('')
  const [contenu, setContenu] = useState('')

  const handleChange = e => {
    switch (e.target.name) {
      case 'titre':
        setTitre(e.target.value)
        break
      case 'contenu':
        setContenu(e.target.value)
        break
      default:
        break
    }
  }

  return (
    <form>
      <label htmlFor='titre'>Titre</label>
        <Input
          type='text'
          name='titre'
          id='titre'
          placeholder='Votre titre'
          value={titre}
          onChange={handleChange}
        />
        <label htmlFor='setContenu'>Contenu</label>
        <TextArea
          type='textarea'
          name='contenu'
          id='contenu'
          placeholder='Votre contenu'
          value={contenu}
          onChange={handleChange}
        />
        <input type='submit' value='Enregistrer' />
    </form>
  )
}
