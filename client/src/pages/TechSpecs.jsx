import NavBar from '../components/NavBar.jsx';
import mushroomChar5 from '../images/mushroom-char-5.png';
import mushroomChar6 from '../images/mushroom-char-6.png';
import arduino from '../images/arduino.png';
import raspberryPi from '../images/raspberry-pi.png';
import mongoDB from '../images/mongodb.png';
import { Bounce } from 'react-awesome-reveal';

const TechSpecs = () => {

    return(
      <div className="tech-specs-page">
        <NavBar />
        <div className="page-header">
          <div className="page-header-left"><p>Green</p></div>
          <div className="page-header-right"><p>Capz</p></div>
        </div>
        <div className="tech-specs-divs">
            <div className="tech-specs-intro">
                <div className='ts-intro-title'><h4>Tech Specs</h4></div>
                <Bounce><div className='ts-intro-img'><img src={mushroomChar5}></img></div></Bounce>
                <div className='tech-specs-intro-text'>
                    <p>Green Capz is a powerful web application revolutionizing 
                        hydroponic cultivation. Powered by cutting-edge technology, 
                        it seamlessly integrates Node.js, Express, MongoDB, and 
                        React, creating a robust platform for hydroponic enthusiasts. 
                    </p>
                    <p>Utilizing Raspberry Pi, Arduino Uno, and an array of sensors, 
                        Green Capz provides real-time data and insights crucial for 
                        optimal plant growth. Monitor nutrient levels, environmental 
                        conditions, and more, all in one place.</p>
                </div>
            </div>
            <div className="tech-specs-arduino">
                <div><h4>Arduino Uno</h4></div>
                <div className='arduino-img'><img src={arduino}></img></div>
                <div className='tech-specs-arduino-text'>
                  <p>The combination of a Raspberry Pi running an Express server, 
                     coupled with an Arduino Uno, forms a powerful and efficient data 
                     gathering system. The Arduino Uno, equipped with various sensors,
                     collects real-time data on environmental conditions such as 
                     temperature, humidity, and light intensity. This data is then 
                     transmitted to the Raspberry Pi through a serial connection.</p>
                </div>
            </div>
            <div className="tech-specs-rp">
                <div className='ts-rp-title'><h4>Raspberry Pi 4</h4></div>
                <div className='rp-img'><img src={raspberryPi}></img></div>
                <div className='tech-specs-rp-text'>
                  <p>The Raspberry Pi, hosting an Express server, receives this sensor 
                    data and processes it. Utilizing the Express framework, the Pi 
                    organizes and formats the data before seamlessly transmitting it 
                    to a MongoDB database.</p>
                  <p>This setup allows for seamless and continuous data collection, ensuring 
                    that valuable information about the growing environment is captured 
                    and stored in a structured manner. Whether it's for hydroponic farming, 
                    research, or any data-intensive application, this system provides a 
                    reliable and scalable solution for efficiently monitoring and managing 
                    various parameters crucial for successful cultivation.</p>
                </div>
                
            </div>
            <div className="tech-specs-db">
                <div><h4>MongoDB</h4></div>
                <div className='ts-db-img'><img src={mongoDB}></img></div>
                <div className="ts-db-text">
                    <p>MongoDB is well-suited for sensor data storage due to its flexible 
                        and scalable document-oriented database structure. In traditional 
                        relational databases, data needs to be structured into tables 
                        with predefined schemas. However, sensor data often comes in 
                        varied formats and structures, making it challenging to fit into 
                        a rigid schema.</p>
                    <p>MongoDB, being a NoSQL database, stores data in JSON-like BSON, Binary JSON,
                         documents. This flexibility allows sensor data, which can have 
                         varying fields and structures, to be stored without requiring 
                         a predefined schema. Sensor readings can be stored as documents 
                         with different fields, making it easy to adapt to changing data 
                         formats without disrupting the system.</p>
                </div>
            </div>
            <div className="tech-specs-sensors">
                <div className='ts-sensors-title'><h4>Sensor Types</h4></div>
                <Bounce><div className='ts-sensors-img'><img src={mushroomChar6}></img></div></Bounce>
                <div className='ts-sensor-list'>
                    <ul>
                        <li><b>pH Sensor:</b> pH level is critical for nutrient absorption in plants. pH sensors measure the acidity or alkalinity of the nutrient solution.</li>
                        <li><b>EC/TDS Sensor:</b> Electrical Conductivity (EC) or Total Dissolved Solids (TDS) sensors measure the concentration of dissolved salts in the nutrient solution, indicating its strength and suitability for plant growth.</li>
                        <li><b>Temperature Sensor:</b> Temperature sensors monitor the water or air temperature. Maintaining the correct temperature is vital for plant metabolism and nutrient absorption.</li>
                        <li><b>Humidity Sensor:</b> Humidity sensors measure the moisture content in the air. Proper humidity levels are essential for preventing diseases and ensuring optimal plant growth.</li>
                        <li><b>Light Intensity Sensor:</b> Light sensors measure the intensity of light in the grow area. This data helps in adjusting artificial lighting or shading to provide the right amount of light for photosynthesis.</li>
                        <li><b>CO2 Sensor:</b> Carbon dioxide sensors monitor CO2 levels in the grow room. Plants use CO2 for photosynthesis, so maintaining optimal CO2 levels enhances growth and yields.</li>
                        <li><b>Water Level Sensor:</b> Water level sensors detect the water level in the hydroponic reservoir, ensuring a consistent water supply for the plants.</li>
                        <li><b>Dissolved Oxygen Sensor:</b> Dissolved oxygen sensors measure the oxygen levels in the nutrient solution. Sufficient oxygen in the water is vital for root health and nutrient absorption.</li>
                        <li><b>Water Flow Sensor:</b> Flow sensors monitor the flow rate of water in the hydroponic system, ensuring that each plant receives an adequate amount of water and nutrients.</li>
                    </ul>
                </div>
                
            </div>
            
        </div>
      </div>
    )
}

export default TechSpecs;