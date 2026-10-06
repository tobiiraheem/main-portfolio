import Icon, { type IconName } from "./Icon"

const contacts: { name: string; icon: IconName; cta: string; href: string }[] =
  [
    {
      name: "tobii.raheem@gmail.com",
      icon: "mail",
      cta: "Email me",
      href: "mailto:tobii.raheem@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      cta: "Connect on",
      href: "https://www.linkedin.com/in/tobiiraheem/",
    },
    {
      name: "GitHub",
      icon: "github",
      cta: "View on",
      href: "https://github.com/tobiiraheem",
    },
  ]

const Contact = () => {
  return (
    <div className="grid grid-cols-[1fr] sm:grid-cols-[1.25fr_1.25fr] gap-[clamp(3rem,8vw,8rem)] items-end">
      <div>
        <p className="eyebrow text-[#b6fff8] ">Let's connect</p>
        <h2 className="section-heading max-w-240">
          Have a technical problem worth solving?
        </h2>
        <p className="max-w-152.5 mt-6 text-[#c9f0ef] leading-[1.7]">
          I'm always open to thoughtful conversations about software
          engineering, reliable systems, and meaningful work.
        </p>
      </div>

      <div className="grid gap-3">
        {contacts.map((contact) => (
          <a
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            className="grid grid-cols-[auto_1fr_auto] gap-4 items-center p-4 text-[#efffff] border bg-linear-[rgba(6,27,35,.18)] border-[rgba(255,255,255,0.2)] rounded-xl text-[.85rem] hover:translate-x-1 hover:bg-linear-[rgba(6,27,35,.3)] transition-[translate] duration-200"
          >
            <Icon name={contact.icon} size={23} />
            <span className="overflow-hidden text-ellipsis">
              <small className="block mb-1 text-[#b8e4e2]">{contact.cta}</small>
              {contact.name}
            </span>
            <Icon name={contact.icon === "mail" ? "arrow" : "external"} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Contact
