import React from "react";

const Footer = () => {
    return (
        <section className="cid-r3yvICSlmZ mbr-reveal" id="footer7-4">
            <div className="container">
                <div className="media-container-row align-center mbr-white">
                    <div className="row row-copirayt">
                        <p
                            className="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7"
                        >
                            COPYRIGHT © {new Date().getFullYear()}{" "}
                            <a
                                href="http://www.muaz712.com"
                                className="text-white"
                                target="_blank"
                                rel="noreferrer"
                            >
                                MUAZ712.COM
                            </a>
                            - TÜM HAKLARI SAKLIDIR
                        </p>
                    </div>
                    <div className="row row-copirayt">
                        <p
                            className="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7"
                        >
                            <a
                                href="https://github.com/muaz742/cok-guzel-bir-orman"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="assets/images/github.svg"
                                    alt=""
                                    style={styles.style1}
                                />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

const styles = {
    style1: {
        height: "2rem"
    }
}
export default Footer;