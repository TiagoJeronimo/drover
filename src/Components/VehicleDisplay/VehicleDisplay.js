import React from 'react';
import './VehicleDisplay.style.scss';

const VehicleDisplay = ({
        vehicle,
        pricingConsumer, 
    }) => (
    <div className="vehicleDisplay-container">
        <div className="vehicleDisplay-headerInfo">
            <div className='vehicleDisplay-pricingText'>
                {`£ ${pricingConsumer}`}
            </div>
            <div className='vehicleDisplay-pricingSubtext'>
                A month
            </div>
        </div>
        <img src={vehicle.stock_image.small_image_url} alt="Vehicle" className="vehicleDisplay-vehicleImage"/>
        <div className="vehicleDisplay-footerInfo">
            <div className='vehicleDisplay-vehicleYear'>
                {`${vehicle.year} ${vehicle.vehicle_make}`}
            </div>
            <div className='vehicleDisplay-vehicleModel'>
                {`${vehicle.vehicle_model} - ${vehicle.engine_size_information}`}
            </div>
        </div>
    </div>
)


export default VehicleDisplay;