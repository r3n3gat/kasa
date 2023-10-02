import "./banner.scss"

export default function Banner({ imageUrl, showText }) {
        return(
            <section className="banner"
            style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageUrl})`,
          }}>
            {showText && (
            <h1 className="banner-text">Chez vous, partout ou ailleurs.</h1>
          )}
            </section>
        )
    }