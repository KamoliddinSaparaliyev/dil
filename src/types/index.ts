export interface ContainerType {
	children: React.ReactNode
}

export interface SectionType{
    children: React.ReactNode;
    id: string;
    className: string;
}

export interface ButtonType{
    text: string;
} 

export interface MenuType {
    visible: boolean;
    hideMenu: () => void;
}

export interface ServiceCardType {
    text: string;
}

export interface DigitalCardType {
    text: string;
}

export interface FormData {
    name: string;
    email: string;
    message: string;
  }
  