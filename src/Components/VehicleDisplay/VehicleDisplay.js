import React from 'react';
import './VehicleDisplay.style.scss';

const VehicleDisplay = ({
        vehicle,
        pricingConsumer, 
    }) => (
    <div className="col-xs-12 col-sm-6 col-lg-4">
        <div className="vehicleDisplay-container ">
            <div className="vehicleDisplay-headerInfo">
                <div className='vehicleDisplay-pricingText'>
                    {`£${pricingConsumer}`}
                </div>
                <div className='vehicleDisplay-pricingSubtext'>
                    A month
                </div>
            </div>
            <img src={vehicle.stock_image.main_image_url} alt="Vehicle" className="vehicleDisplay-vehicleImage"/>
            <div className="vehicleDisplay-footerInfo">
                <div className='vehicleDisplay-vehicleYear'>
                    {`${vehicle.year} ${vehicle.vehicle_make}`}
                </div>
                <div className='vehicleDisplay-vehicleModel'>
                    {`${vehicle.vehicle_model} - ${vehicle.engine_size_information}`}
                </div>
            </div>
        </div>
    </div>
)


export default VehicleDisplay;