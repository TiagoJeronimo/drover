import React from 'react';
import './VehicleDisplay.style.scss';

const VehicleDisplay = ({
        vehicle,
        pricingConsumer, 
    }) => (
    <div className="vehicleDisplayContainer">
        <div className="headerInfo">
            <div className='pricingText'>
                {`£ ${pricingConsumer}`}
            </div>
            <div className='pricingSubtext'>
                A month
            </div>
        </div>
        <img src={vehicle.stock_image.small_image_url} alt="Vehicle" className="vehicleImage"/>
        <div className="footerInfo">
            <div className='vehicleYear'>
                {`${vehicle.year} ${vehicle.vehicle_make}`}
            </div>
            <div className='vehicleModel'>
                {`${vehicle.vehicle_model} - ${vehicle.engine_size_information}`}
            </div>
        </div>
    </div>
)


export default VehicleDisplay;