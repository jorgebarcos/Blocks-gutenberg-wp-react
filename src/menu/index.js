const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;


// Logo para el bloque
import { ReactComponent as Logo } from '../pizzeria-icon.svg';

registerBlockType('lapizzeria/menu', {
    title: 'La Pizzeria Menu',
    icon: {src: Logo},
    category: 'lapizzeria',
    edit: withSelect( (select)  => {
        return {
            // Enviar una petición a la api
            especialidades: select("core").getEntityRecords('postType', 'especialidades')
        };
    })
    
    ( ({ especialidades }) => {

        return(
            <h1>en el editor</h1>
        )
    }),
    save: () => {
        return null;
    }
})