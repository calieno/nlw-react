import { ButtonHTMLAttributes } from 'react'
import '../styles/buttons.scss'

type buttonProps = ButtonHTMLAttributes <HTMLButtonElement>

export function Button(props: buttonProps){
    return (
        <button className="button-generic" {...props}/>
    )
}