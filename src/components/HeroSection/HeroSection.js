import style from './HeroSection.module.scss';

export const HeroSection = () => {
  return (
    <div className={style.hero}>
      <h1 className={style.hero__title}> Fun with GPT-3 </h1>
      <p className={style.hero__subhead}>
        Shopify Developer Intern Challenge
      </p>
    </div>
  );
}