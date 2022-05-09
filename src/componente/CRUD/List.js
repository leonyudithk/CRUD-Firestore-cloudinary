import React, { useEffect } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import { listPlantaAsync } from '../../redux/actions/actionPlantas';


const List = () => {

    const dispatch = useDispatch()

    const { plantas } = useSelector(store => store.plantasStore)
    console.log(plantas)

    useEffect(() => {
        dispatch(listPlantaAsync()); //
    }, [dispatch])

    return (
        <div>
            <table className="table">
                <thead>
                </thead>
                <tbody>
                    {
                        plantas.map((p, index) => (
                            <tr key={index}>
                                <td>
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src:p.foto,
                                            width: 300,
                                            height: 400
                                        },
                                        largeImage: {
                                            src: p.foto,
                                            width: 1200,
                                            height: 1800
                                        }
                                    }} />

                                </td>
                                                               <td>{p.nombre}</td>
                                <td>{p.precio}</td>
                                <td><button type="button" className="btn btn-danger"
                                >Borrar</button>
                                    <button type="button" className="btn btn-danger"
                                    >Editar</button>
                                    <button type="button" className="btn btn-danger"
                                    >Detalle</button></td>
                            </tr>
                        ))
                    }



                </tbody>
            </table>
        </div>
    );
};

export default List;