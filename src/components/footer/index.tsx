import Styles from './styles.module.scss';

const Footer = () => {
 return (
  <footer class={Styles.footer}>
   {new Date().getFullYear()}
   <a href="https://github.com/victor-auffret">@victor-auffret </a>
   <small class={Styles.byline}>🚀 généré par Astro</small>
  </footer>
 );
}

export default Footer;
