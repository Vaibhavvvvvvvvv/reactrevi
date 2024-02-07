import React, { useState, useEffect } from 'react';

const BatteryStatus = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    const updateBatteryStatus = async () => {
      try {
        const battery = await navigator.getBattery();
        setBatteryLevel(battery.level * 100); // Convert to percentage
        // Aap other battery properties bhi access kar sakte hain jaise charging status: battery.charging
      } catch (error) {
        console.error('Error fetching battery status:', error);
      }
    };

    updateBatteryStatus();

    // Event listeners lagayein battery status ke changes ke liye
    navigator.getBattery().then(battery => {
      battery.addEventListener('levelchange', updateBatteryStatus);
      battery.addEventListener('chargingchange', updateBatteryStatus);
    });

    // Component unmount hone par event listeners ko clean up karein
    return () => {
      navigator.getBattery().then(battery => {
        battery.removeEventListener('levelchange', updateBatteryStatus);
        battery.removeEventListener('chargingchange', updateBatteryStatus);
      });
    };
  }, []);

  return (
    <div>
      {batteryLevel !== null && (
        <p>Battery Level: {batteryLevel.toFixed(2)}%</p>
      )}
    </div>
  );
};

export default BatteryStatus;
