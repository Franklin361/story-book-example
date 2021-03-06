import React from 'react'
import './my-label.css'

export interface PropsLabel {
    /**
     *  Mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     *  Tamaños a mostrar
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     *  Tipo de color a mostrar
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     *  Capitalizacion de las letras
     */
    allCaps: boolean;
    /**
     *  Color de la fuente
     */
    fontColor?: string;
    /**
     *  Color de fondo
     */
     backgroundColor?: string;
}

export const MyLabel = ({ 
    label = 'No Label', 
    size = 'normal',
    color = 'primary',
    allCaps = false,
    fontColor,
    backgroundColor
}: PropsLabel) => {

    return (
        <span 
            className={`label ${size} ${color}`}
            style={{color: fontColor, backgroundColor}}
        >
            { (!allCaps) ?  label : label.toUpperCase() }
        </span>
    )
}

export default MyLabel;