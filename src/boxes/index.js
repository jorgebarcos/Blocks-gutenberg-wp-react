const { registerBlockType} = wp.blocks;
const { RichText } = wp.blockEditor;

// Logo para el bloque
import { ReactComponent as Logo} from '../pizzeria-icon.svg';

/**
        7 Pasos para crear un Bloque en Gutenberg
        1.- Importar el componente(s) que utilizarás
        2.- Coloca el componente donde deas utilizarlo.
        3.- Crea una función que lea los contenidos
        4.- Registra un atributo
        5.- Extraer el contenido desde props
        6.- Guarda el contenido con setAttributes
        7.- Lee los contenidos guardados en save()
 */

registerBlockType('lapizzeria/boxes', {
    title: 'Pizzeria Cajas',
    icon: { src: Logo },
    category: 'lapizzeria',
    attributes: {
        headingBox : {
            type: 'string',
            source: 'html',
            selector: 'box h2'
        }
    },
    edit: () => {

    const onChangeHeadingBox = nuevoHeading => {
        console.log(nuevoHeading)
    }
        return(
            <div className="box">
                <h2>
                    <RichText 
                    placeholder="Agrega el Encabezado"
                    onChange={onChangeHeadingBox}
                    />
                </h2>
            </div>
        )
    },
    save: () => {
        return(
            <h1>Se ve en el frontend</h1>
        )
    }
})