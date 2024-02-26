import { useState, useEffect, useRef } from "react"

export default function RegisterNew() {
    const [state, setState] = useState({
    "id-razon-social": "",
    "id-contraseña": "123456",
    "id-email": "John@Smith.",
    "id-telefono": "1122334455",
    "id-fundacion": "11/2/2023",
    "id-provincia": "",
    "id-municipio": "",

})
const [showPassword, setShowPassword] = useState(false)
const [checked, setChecked] = useState(false)
const [isOpen, setIsOpen] = useState(false)
const [currentItem, setCurrentItem] = useState(null)
const wrapperRef = useRef(null)


  const handleChange = evt => {
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value,
    })
  }


  const navigationItems = [
    {
      linkName: "Dashboard",
    },
    {
      linkName: "Metrics and analytics",
    },
    {
      linkName: "Multi-Channel Funnels overview",
    },
    {
      linkName: "User settings",
    },
    {
      linkName: "User Profile",
    },
  ]

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [wrapperRef])

  const handleKeyDown = e => {
    if (isOpen) {
      e.preventDefault()

      switch (e.keyCode) {
        // KeyDown
        case 40:
          if (currentItem === navigationItems.length - 1) {
            setCurrentItem(0)
          } else {
            setCurrentItem(currentItem + 1)
          }
          break
        // KeyUp
        case 38:
          if (currentItem === 0) {
            setCurrentItem(navigationItems.length - 1)
          } else {
            setCurrentItem(currentItem - 1)
          }
          break
        // Escape
        case 27:
          setCurrentItem(1)
          setIsOpen(false)
          break
        default:
          break
      }
    }
  }

  return (
    <>
      {/*    <!-- Component: Rounded input with leading icon--> */}
      <div className="relative my-6">
        <input
          id="id-razon-social"
          type="text"
          name="id-razon-social"
          placeholder="Razon Social"
          value={state["id-razon-social"]}
          className="peer relative h-10 w-full rounded border border-slate-200 px-4 pl-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          onChange={handleChange}
        />
        <label
          htmlFor="id-razon-social"
          className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Razon Social
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
          fill="none"
          aria-hidden="true"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-labelledby="title-3 description-3"
          role="graphics-symbol"
        >
          <title id="title-3">Check mark icon</title>
          <desc id="description-3">icon description here</desc>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
          <span>Text field with helper text</span>
          <span className="text-slate-500">1/10</span>
        </small>
      </div>
      {/*    <!-- End Rounded input with leading icon--> */}

      {/*    <!-- Component: Rounded input with trailing icon --> */}
      <div className="relative my-6">
        <input
          id="id-contraseña"
          type={showPassword ? "text" : "password"}
          name="id-contraseña"
          placeholder="Contraseña"
          className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          onChange={handleChange}
          value={state["id-contraseña"]}
        />
        <label
          htmlFor="id-contraseña"
          className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Contraseña
        </label>
        {showPassword ? (
          <svg
            onClick={() => setShowPassword(!showPassword)}
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-labelledby="title-4 description-4"
            role="graphics-symbol"
          >
            <title id="title-4">Check mark icon</title>
            <desc id="description-4">Icon description here</desc>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setShowPassword(!showPassword)}
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-labelledby="title-4d description-4d"
            role="graphics-symbol"
          >
            <title id="title-4d">Check mark icon</title>
            <desc id="description-4d">Icon description here</desc>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
        )}
        <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
          <span>Text field with helper text</span>
          <span className="text-slate-500">1/10</span>
        </small>
      </div>
      {/*    <!-- End Rounded input with trailing icon --> */}

      {/*    <!-- Component: Rounded invalid input --> */}
      <div className="relative my-6">
        <input
          id="id-email"
          type="email"
          name="id-email"
          placeholder="Your email"
          value={state["id-email"]}
          className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          onChange={handleChange}
        />
        <label
          htmlFor="id-email"
          className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Email
        </label>
        <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
          <span>Text field with helper text</span>
          <span className="text-slate-500">1/10</span>
        </small>
      </div>
      {/*    <!-- End Rounded invalid input --> */}
      
      {/*    <!-- Component: Rounded input with leading icon--> */}
        <div className="relative my-6">
        <input
          id="id-telefono"
          type="text"
          name="id-telefono"
          placeholder="Telefono"
          value={state["id-telefono"]}
          className="peer relative h-10 w-full rounded border border-slate-200 px-4 pl-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          onChange={handleChange}
        />
        <label
          htmlFor="id-telefono"
          className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Telefono
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
          fill="none"
          aria-hidden="true"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-labelledby="title-3 description-3"
          role="graphics-symbol"
        >
          <title id="title-3">Check mark icon</title>
          <desc id="description-3">icon description here</desc>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
          <span>Text field with helper text</span>
          <span className="text-slate-500">1/10</span>
        </small>
      </div>
      {/*    <!-- End Rounded input with leading icon--> */}
     
    {/*    <!-- Component: Rounded input with leading icon--> */}
        <div className="relative my-6">
        <input
          id="id-fundacion"
          type="text"
          name="id-fundacion"
          placeholder="Fundacion"
          value={state["id-fundacion"]}
          className="peer relative h-10 w-full rounded border border-slate-200 px-4 pl-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          onChange={handleChange}
        />
        <label
          htmlFor="id-fundacion"
          className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Fundacion
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
          fill="none"
          aria-hidden="true"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-labelledby="title-3 description-3"
          role="graphics-symbol"
        >
          <title id="title-3">Check mark icon</title>
          <desc id="description-3">icon description here</desc>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
          <span>Text field with helper text</span>
          <span className="text-slate-500">1/10</span>
        </small>
      </div>
      {/*    <!-- End Rounded input with leading icon--> */}
    
      {/* <!-- Component: Basic dropdown menu--> */}
      <div className="relative inline-flex " id="dropdown-provincia">
        {/*  <!--  Start Dropdown trigger --> */}
        <button
          className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen ? " true" : "false"}
          ref={wrapperRef}
        >
          <span>Provincia</span>
          <span className="relative only:-mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="t-01 d-01"
              role="graphics-symbol"
            >
              <title id="t-provincia">Button icon</title>
              <desc id="d-provincia">An icon describing the buttons usage</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </button>
        {/*  <!--  End Dropdown trigger --> */}
        {/*  <!-- Start Menu list --> */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-full z-10 mt-1 flex w-72 list-none flex-col rounded bg-white py-2 shadow-md shadow-slate-500/10 `}
        >
          {navigationItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={` ${
                    index === currentItem
                      ? "bg-emerald-50 text-emerald-500"
                      : "bg-none text-slate-500"
                  } flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 focus:outline-none focus-visible:outline-none`}
                  href="#"
                  aria-current={index + 1 === currentItem ? "page" : "false"}
                >
                  <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                    <span className="truncate leading-5">{item.linkName}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
        {/*  <!-- End Menu list --> */}
      </div>
      {/* <!-- End Basic dropdown menu--> */}

      {/* <!-- Component: Basic dropdown menu--> */}
      <div className="relative inline-flex " id="dropdown-municipio">
        {/*  <!--  Start Dropdown trigger --> */}
        <button
          className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen ? " true" : "false"}
          ref={wrapperRef}
        >
          <span>Municipio</span>
          <span className="relative only:-mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="t-01 d-01"
              role="graphics-symbol"
            >
              <title id="t-municipio">Button icon</title>
              <desc id="d-municipio">An icon describing the buttons usage</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </button>
        {/*  <!--  End Dropdown trigger --> */}
        {/*  <!-- Start Menu list --> */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-full z-10 mt-1 flex w-72 list-none flex-col rounded bg-white py-2 shadow-md shadow-slate-500/10 `}
        >
          {navigationItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={` ${
                    index === currentItem
                      ? "bg-emerald-50 text-emerald-500"
                      : "bg-none text-slate-500"
                  } flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 focus:outline-none focus-visible:outline-none`}
                  href="#"
                  aria-current={index + 1 === currentItem ? "page" : "false"}
                >
                  <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                    <span className="truncate leading-5">{item.linkName}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
        {/*  <!-- End Menu list --> */}
      </div>
      {/* <!-- End Basic dropdown menu--> */}


      {/*<!-- Component: Primary basic checkbox --> */}
      <div className="relative flex flex-wrap items-center">
        <input
          className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-500 bg-white transition-colors checked:border-emerald-500 checked:bg-emerald-500 checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          id="id-c01"
        />
        <label
          className="cursor-pointer pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
          htmlFor="id-c01"
        >
          Primary Checkbox
        </label>
        <svg
          className="pointer-events-none absolute left-0 top-1 h-4 w-4 -rotate-90 fill-white stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          aria-labelledby="title-1 description-1"
          role="graphics-symbol"
        >
          <title id="title-1">Check mark icon</title>
          <desc id="description-1">
            Check mark icon to indicate whether the radio input is checked or
            not.
          </desc>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
          />
        </svg>
      </div>
      {/*<!-- End Primary basic checkbox --> */}
    </>
  )
}