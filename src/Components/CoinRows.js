import React from 'react'

function CoinRows({coin, index}) {
    console.log(coin, index)
    return (
        
            <tr >
                <td>{index}</td>
                <td>
                    
                    <img src={coin.image} alt={coin.image}style={{width:'5%'}} className='img-fluid me-4'/>
                    <span>{coin.name}</span></td>
                <td>${coin.current_price}</td>
                <td>%{coin.price_change_percentage_24h}</td>
                <td>{coin.total_volume}</td>
            </tr>
        
    )
}

export default CoinRows
