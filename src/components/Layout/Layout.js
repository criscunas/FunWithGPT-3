import style from './Layout.module.scss';
import { PageHeader } from '../PageHeader/PageHeader';

export const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
    <PageHeader/>
      <div className={style.layout__content}>{children}</div>
    </div>
  );
}

export default Layout;