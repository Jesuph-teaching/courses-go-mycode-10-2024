import './style.css'

export default function Form() {
  return (
    <form className='bio-form'>
      <input type='text' name='name' placeholder='name' />
      <textarea name='bio' placeholder='Biography'/>
    </form>
  )
}
