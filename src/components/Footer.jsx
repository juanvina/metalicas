function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-100 d-flex align-items-center justify-content-center flex-wrap py-3">
      <p className="fs-5 px-3 mb-0">Metálicas C.A. &copy; Todos los derechos reservados {year}</p>
      <div id="iconos">
        <a href="#" aria-label="Facebook">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
