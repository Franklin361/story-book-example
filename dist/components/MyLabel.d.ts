/// <reference types="react" />
import './my-label.css';
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
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: PropsLabel) => JSX.Element;
