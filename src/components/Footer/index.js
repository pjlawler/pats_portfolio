import React from "react";

function Footer() {

    // array of the social links to be displayed in the footer
    const socialLinks = [
        {
            name: 'GitHub',
            icon: 'github',
            url: 'https://github.com/pjlawler'
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            url: 'https://www.linkedin.com/in/av8erpat/'
        },
        {
            name: 'Twitter',
            icon: 'twitter',
            url: 'https://twitter.com/patlaw777'
        }
    ]

    // returns the jsx for the footer to include the icons with their respecitve links
    return (
        <div className="footer">
            <div className="icon-group flex-row">
                {socialLinks.map((item, i) => (
                    <a href={`${item.url}`} rel='noreferrer' target="_blank" key={i}>
                        <img 
                            src={require(`../../assets/${item.icon}.png`)}
                            style={{ width: "40px" }} 
                            alt={`link to ${item.name}`}
                            key={i} 
                        />
                    </a>
            ))}
            </div>
        </div>
    );
}



export default Footer;