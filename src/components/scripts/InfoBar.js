import { useState } from 'react'



function InfoBar() {

    const [longitude, setLongitude] = useState('?')
    const [latitude, setLatitude] = useState('?')
    const [county, setCounty] = useState('?')
    const [town, setTown] = useState('?')
    return (
        <>
            <div>Longitude:{longitude}</div>
            <div>Latitude:{latitude}</div>
            <div>County:{county}</div>
            <div>Town:{town}</div>



        </>
    )
}

export default InfoBar