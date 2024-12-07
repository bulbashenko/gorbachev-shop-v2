// ./hooks/useDeviceType.js
import { useState, useEffect } from 'react';

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    if (typeof navigator === 'undefined') {
      setDeviceType('desktop');
      return;
    }

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Проверка на iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setDeviceType('ios');
    }
    // Проверка на Android
    else if (/android/i.test(userAgent)) {
      setDeviceType('android');
    }
    // Другие мобильные устройства
    else if (/Mobile|Tablet|iP(ad|od|hone)|Android|BlackBerry|IEMobile|Silk/.test(userAgent)) {
      setDeviceType('mobile');
    }
    else {
      setDeviceType('desktop');
    }
  }, []);


  return deviceType;
};

export default useDeviceType;
