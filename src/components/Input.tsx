import style from './Input.module.css'

// creating input boxes
export default function Input(
    props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
    className={style.input}
    type="text"
    autoComplete="false"
    {...props}
    />
  )
}
