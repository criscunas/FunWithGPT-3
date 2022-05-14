import style from './Layout.module.scss';

export const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <div className={style.layout__content}>{children}</div>
    </div>
  );
}

export default Layout;