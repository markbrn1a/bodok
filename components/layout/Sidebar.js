import Link from "next/link";
import { useState } from "react";
import navigationLinks from "../../data/nav.json";

export default function Sidebar(handleToggled) {
  const [activeKeys, setActiveKeys] = useState([]);

  const handleToggle = (key) => {
    if (activeKeys.includes(key)) {
      setActiveKeys(activeKeys.filter((k) => k !== key));
    } else {
      setActiveKeys([...activeKeys, key]);
    }
  };

  const handleLinkClick = () => {
    setActiveKeys([]);
    handleToggled();
  };

  const renderSubLinks = (subLinks, parentKey) => {
    return (
      <ul
        className="sub-menu"
        style={{
          display: `${activeKeys.includes(parentKey) ? "block" : "none"}`,
        }}
      >
        {subLinks.map((subLink, index) => (
          <li key={index} className="menu-item-has-children">
            <Link href={subLink.href || "#"} onClick={handleLinkClick}>
              {subLink.text}
            </Link>
            {subLink.subLinks && (
              <>
                <div
                  className="dropdown-btn"
                  onClick={() => handleToggle(`${parentKey}-${index}`)}
                >
                  <span className="fas fa-angle-down" />
                </div>
                {renderSubLinks(subLink.subLinks, `${parentKey}-${index}`)}
              </>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <ul className="navigation">
        <li className="menu-item-has-children">
          <Link
            href={navigationLinks.navigationLinks.home.href || ""}
            onClick={handleLinkClick}
          >
            {navigationLinks.navigationLinks.home.text}
          </Link>
        </li>
        <li>
          <Link
            href={navigationLinks.navigationLinks.about.href || ""}
            onClick={handleLinkClick}
          >
            {navigationLinks.navigationLinks.about.text}
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link
            href={navigationLinks.navigationLinks.services.href || ""}
            onClick={handleLinkClick}
          >
            {navigationLinks.navigationLinks.services.text}
          </Link>
          <div
            className="dropdown-btn"
            onClick={() => handleToggle("services")}
          >
            <span className="fas fa-angle-down" />
          </div>
          {renderSubLinks(
            navigationLinks.navigationLinks.services.subLinks,
            "services"
          )}
        </li>
        <li>
          <Link
            href={navigationLinks.navigationLinks.projects.href || ""}
            onClick={handleLinkClick}
          >
            {navigationLinks.navigationLinks.projects.text}
          </Link>
        </li>
        <li>
          <Link
            href={navigationLinks.navigationLinks.contact.href || ""}
            onClick={handleLinkClick}
          >
            {navigationLinks.navigationLinks.contact.text}
          </Link>
        </li>
      </ul>
    </>
  );
}
