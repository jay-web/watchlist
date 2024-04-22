import {
    FormEvent,
    cloneElement,
    createContext,
    useContext,
    useEffect,
    useRef,
  } from "react";
  import { createPortal } from "react-dom";
  import { HiXMark } from "react-icons/hi2";
  import { Overlay, StyledButton, StyledMenu } from "./style";
  
  
  
  
  interface ModalProps {
    children: React.ReactNode;
    openName: string;
    setOpenName: React.Dispatch<React.SetStateAction<string>>;
  }
  
  interface ContextType {
    openName: string;
    setOpenName: React.Dispatch<React.SetStateAction<string>>;
  }
  
  interface ButtonProps {
    children: JSX.Element;
    opens: string;
  }
  
  interface WindowProps {
    children: JSX.Element;
    name: string;
    portalKey: string | undefined;
  }
  
  const ModalContext = createContext<ContextType | undefined>(undefined);
  
  const MenuModal = ({ children, openName, setOpenName }: ModalProps) => {
    return (
      <ModalContext.Provider value={{ openName, setOpenName }}>
        <div>{children}</div>
      </ModalContext.Provider>
    );
  };
  
  const Open = ({ children, opens }: ButtonProps) => {
    const context = useContext(ModalContext);
  
    return cloneElement(children, {
      onClick: (e: any) => {
        e.preventDefault();
        context?.setOpenName(opens);
      },
    });
  };
  
  const Window = ({ children, name, portalKey }: WindowProps) => {
    const context = useContext(ModalContext);
    const ref = useRef<HTMLInputElement>(null);
  
    useEffect(() => {
      if (name == "") return;
      let handler = (e: MouseEvent) => {
        if (ref.current && !e.composedPath().includes(ref.current)) {
          context?.setOpenName("");
        } else {
        }
      };
  
      document.addEventListener("click", (e) => handler(e), true);
  
      () => document.removeEventListener("click", (e) => handler(e), true);
    }, [name]);
  
    if (name !== context?.openName) return null;
  
    return createPortal(
      <Overlay onClick={(e) => e.stopPropagation()}>
        <StyledMenu ref={ref}>
          <StyledButton
            onClick={(e: FormEvent) => {
              e.preventDefault();
              context?.setOpenName("");
            }}
          >
            <HiXMark />
          </StyledButton>
          <div>{children}</div>
        </StyledMenu>
      </Overlay>,
      document.body,
      portalKey
    );
  };
  
  MenuModal.Open = Open;
  MenuModal.Window = Window;
  
  export default MenuModal;
  