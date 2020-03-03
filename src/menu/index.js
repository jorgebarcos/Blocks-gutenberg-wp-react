const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;
const {RichText, InspectorControls} = wp.editor;
const {PanelBody, RangeControl} = wp.components;


// Logo para el bloque
import { ReactComponent as Logo } from '../pizzeria-icon.svg';

registerBlockType('lapizzeria/menu', {
    title: 'La Pizzeria Menu',
    icon: {src: Logo},
    category: 'lapizzeria',
    attributes: {
        cantidadMostrar: {
            type: 'number',
            default: 4
        }
    },
    edit: withSelect( (select, props)  => {

        // Extraer los valores
        const {attributes: {cantidadMostrar}, setAttributes} = props;

        const onChangeCantidadMostrar = nuevaCantidad => {
            setAttributes({cantidadMostrar : parseInt (nuevaCantidad)})
        }
        return {
            // Enviar una petición a la api
            especialidades: select("core").getEntityRecords('postType', 'especialidades', {
                per_page : cantidadMostrar
            }), 
            onChangeCantidadMostrar,
            props
        };
    })
    
    ( ({ especialidades, onChangeCantidadMostrar, props }) => {
        console.log(especialidades)

        // Extraer los props
        const {attributes: {cantidadMostrar}} = props;

        // Verificar especialidades
        if(!especialidades) {
            return 'Cargando...';
        }

        // Si no hay especialidades
        if(especialidades && especialidades.length === 0) {
            return 'No hay resultados';
        }
        return(
            <>

                <InspectorControls>
                    <PanelBody
                        title={'Cantidad a Mostrar'}
                        initialOpen={true}
                    >
                        <div className="components-base-control">
                            <div className="components-base-control__field">
                            <label className="components-base-control__label">
                            Cantidad a Mostrar   
                            </label> 
                            <RangeControl
                                onChange={onChangeCantidadMostrar}
                                min={2}
                                max={10}
                                value={cantidadMostrar}
                            />
                            </div>    
                        </div>  
                    </PanelBody>
                </InspectorControls>
                <h2 className="titulo-menu">Nuestras Especialidades</h2>
                <ul className="nuestro-menu">
                    {especialidades.map(especialidad => (
                       <li>
                           <img src={especialidad.imagen_destacada} />
                           <div className="platillo">
                               <div className="precio-titulo">
                                   <h3>{especialidad.title.rendered}</h3>
                                   <p>$ {especialidad.precio}</p>
                               </div>
                               <div className="contenido-platillo">
                                   <p>
                                        <RichText.Content value={especialidad.content.rendered} />
                                   </p>
                               </div>
                           </div>
                       </li> 
                    ))}
                </ul>
            </>
        )
    }),
    save: () => {
        return null;
    }
})