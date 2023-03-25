import custodia from "../public/assets/custodia.svg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";

const SustainButton = styled(Button)({
  background: "#5355AC !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "14px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
});

const Navbar3 = () => {
  return (
    <div>
      <div className="px-5 md:px-32 pt-5 md:pt-5">
        <nav>
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/">
              <img
                src={custodia.src}
                className="mr-3  self-center"
                alt="Priv Logo"
              />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar3;
