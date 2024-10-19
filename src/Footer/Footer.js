import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div>Developed by Chris Cooper</div>
      <div>{new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;
