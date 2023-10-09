import NavBar from '../components/NavBar.jsx';

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
                <div className='tech-specs-intro-text'></div>
                <div className='ts-intro-img'></div>
            </div>
            <div className="tech-specs-arduino">
                <div className='tech-specs-arduino-text'>
                  <p>The combination of a Raspberry Pi running an Express server, 
                     coupled with an Arduino Uno, forms a powerful and efficient data 
                     gathering system. The Arduino Uno, equipped with various sensors,
                     collects real-time data on environmental conditions such as 
                     temperature, humidity, and light intensity. This data is then 
                     transmitted to the Raspberry Pi through a serial connection.</p>
                </div>
                <div className='arduino-img'></div>
            </div>
            <div className="tech-specs-rp">
                <div className='tech-specs-tp-text'>
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
                <div className='rp-img'></div>
            </div>
            <div className="tech-specs-db">
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
                <div className='ts-db-img'></div>
            </div>
            <div className="tech-specs-sensors">
                <div className='ts-sensor-list'>
                    <ul>
                        <li>pH Sensor: pH level is critical for nutrient absorption in plants. pH sensors measure the acidity or alkalinity of the nutrient solution.</li>
                        <li>EC/TDS Sensor: Electrical Conductivity (EC) or Total Dissolved Solids (TDS) sensors measure the concentration of dissolved salts in the nutrient solution, indicating its strength and suitability for plant growth.</li>
                        <li>Temperature Sensor: Temperature sensors monitor the water or air temperature. Maintaining the correct temperature is vital for plant metabolism and nutrient absorption.</li>
                        <li>Humidity Sensor: Humidity sensors measure the moisture content in the air. Proper humidity levels are essential for preventing diseases and ensuring optimal plant growth.</li>
                        <li>Light Intensity Sensor: Light sensors measure the intensity of light in the grow area. This data helps in adjusting artificial lighting or shading to provide the right amount of light for photosynthesis.</li>
                        <li>CO2 Sensor: Carbon dioxide sensors monitor CO2 levels in the grow room. Plants use CO2 for photosynthesis, so maintaining optimal CO2 levels enhances growth and yields.</li>
                        <li>Water Level Sensor: Water level sensors detect the water level in the hydroponic reservoir, ensuring a consistent water supply for the plants.</li>
                        <li>Dissolved Oxygen Sensor: Dissolved oxygen sensors measure the oxygen levels in the nutrient solution. Sufficient oxygen in the water is vital for root health and nutrient absorption.</li>
                        <li>Water Flow Sensor: Flow sensors monitor the flow rate of water in the hydroponic system, ensuring that each plant receives an adequate amount of water and nutrients.</li>
                    </ul>
                </div>
                <div className='ts-sensors-img'></div>
            </div>
            
        </div>
      </div>
    )
}

export default TechSpecs;