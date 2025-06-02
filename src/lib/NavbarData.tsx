export interface NavbarProps {
    anker: string;
    styles: string;
    links?: { anker: string }[]
}

export const NavbarData: NavbarProps[] = [
    { anker: "HOME", styles: "border-b-3 border-white" },
    {
        anker: "PAGES",
        styles: "",
        links: [
            { anker: "About us" },
            { anker: "Our Services" },
            { anker: "Our Team" },
            { anker: "FAQs" },
            { anker: "Pricing" },
            { anker: "Get a Quote" },
        ],
    },
    {
        anker: "PORTFOLIO", styles: "", links: [
            { anker: "Horizontal Scroll" },
            { anker: "Accordion Horizontal" },
            { anker: "Waves Centered" },
            { anker: "Squash" },
            { anker: "Single Project" }
        ],
    },
    {
        anker: "BLOG", styles: "", links: [
            { anker: "Standard" },
            { anker: "List" },
            { anker: "Grid" },
            { anker: "Single Post" },
        ],
    },
    {
        anker: "SHOP", styles: "", links: [
            { anker: "Product List" },
            { anker: "Product Single" },
            { anker: "Cart" },
            { anker: "Checkout" },
            { anker: "Wishlist Page" },
        ],
    },
    { anker: "CONTACT US", styles: "" },
];

export interface SecNavProps {
    anker: string;
}

