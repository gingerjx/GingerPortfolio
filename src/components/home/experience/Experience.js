import React, { useState } from 'react'
import './experience_big.css'
import './experience_small.css'
import Tile from './tile/Tile'
import Texts from '../../../utils/Texts'
import DetailsTile from './detailsTile/DetailsTile'

const Experience = ( { cid }) => {
    const [bachelorActive, setBachelorActive] = useState(true)
    const [samsungActive, setSamsungActive] = useState(false)
    const [iLabActive, setILabActive] = useState(false)
    const [sollersActive, setSollersActive] = useState(false)
    const [pwcActive, setPwcActive] = useState(false)
    const [masterActive, setMasterActive] = useState(false)

    const bachelor = {
        active : bachelorActive,
        setActive : setBachelorActive,
        clickEvent : () => onClick(bachelor),
        ...Texts.home.experience.bachelor
    }
    const samsung = {
        active : samsungActive,
        setActive : setSamsungActive,
        clickEvent : () => onClick(samsung),
        ...Texts.home.experience.samsung
    }
    const iLab = {
        active : iLabActive,
        setActive : setILabActive,
        clickEvent : () => onClick(iLab),
        ...Texts.home.experience.iLab
    }
    const sollers = {
        active : sollersActive,
        setActive : setSollersActive,
        clickEvent : () => onClick(sollers),
        ...Texts.home.experience.sollers
    }
    const pwc = {
        active : pwcActive,
        setActive : setPwcActive,
        clickEvent : () => onClick(pwc),
        ...Texts.home.experience.pwc
    }
    const master = {
        active : masterActive,
        setActive : setMasterActive,
        clickEvent : () => onClick(master),
        ...Texts.home.experience.masters
    }
    const tiles = [bachelor, samsung, iLab, sollers, pwc, master]
    const [activeTile, setActiveTile] = useState(bachelor)

    return (
        <div id={cid} className='home-experience-container'>
            <h1 className='home-experience-title'>Experience</h1>
            <Tile data={bachelor}></Tile>            
            <Tile data={samsung}></Tile>  
            <Tile data={iLab}></Tile>
            <DetailsTile tile={activeTile}></DetailsTile>
            <Tile data={sollers}></Tile>  
            <Tile data={pwc}></Tile>  
            <Tile data={master}></Tile> 
        </div>
    )

    function onClick(tile) {
        for (const t of tiles) {
            t.setActive(false)
        }
        tile.setActive(true)
        setActiveTile(tile)
    }
}

export default Experience
