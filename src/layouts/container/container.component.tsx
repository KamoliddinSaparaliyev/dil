import { ContainerType } from '../../types';

//container
import './container.scss';
export const Container = ({ children }: ContainerType) => {
	return <div className="container">{children}</div>;
};