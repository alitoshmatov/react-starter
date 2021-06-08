import { useState } from "react";

interface props {
  initialOpen?: boolean;
}

export const useModal = ({ initialOpen = false }: props) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialOpen);
  const open = setIsOpen(true);
  const close = setIsOpen(false);
  const toggle = setIsOpen(!isOpen);

  return { isOpen, open, close, toggle };
};
