import NavbarLinkList from "./navbar-link-list"

interface NavbarPanelProps {
  isOpen: boolean
  closeMenu: () => void
}

export default function NavbarPanel({ isOpen, closeMenu }: NavbarPanelProps) {
  return (
    <div
      id="mobile-menu"
      className={`grid transition-[grid-template-rows] duration-300 ease-in-out md:hidden ${
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden" inert={!isOpen}>
        <NavbarLinkList
          onLinkClick={closeMenu}
          className="flex flex-col gap-1 border-t border-slate-200 px-6 py-4"
          linkClassName="block rounded-md px-2 py-3 text-base"
        />
      </div>
    </div>
  )
}
