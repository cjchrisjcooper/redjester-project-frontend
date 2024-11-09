import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__name">Developed by Chris</div>
      <div className="Footer__date">{new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;
