import { useEffect, useState } from "react";
import devices from "@/utils/enums/devices";

const useDevice = () => {
  const getDevice = (width: number) => {
    return width < 530
      ? devices.DEVICE_SMALL
      : width < 1000
      ? devices.DEVICE_MEDIUM
      : devices.DEVICE_LARGE;
  };

  const [device, setDevice] = useState(getDevice(window.innerWidth));

  useEffect(() => {
    window.addEventListener("resize", () =>
      setDevice(getDevice(window.innerWidth))
    );
  }, [device]);

  return device;
};

export default useDevice;
